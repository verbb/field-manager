<?php
namespace verbb\fieldmanager\services;

use verbb\fieldmanager\FieldManager;
use verbb\fieldmanager\models\Settings;

use Craft;
use craft\base\FieldInterface;
use craft\db\Query;
use craft\helpers\ArrayHelper;
use craft\helpers\Json;
use craft\fields\Matrix;
use craft\models\FieldGroup;
use craft\models\FieldLayout;
use craft\models\FieldLayoutTab;

use yii\base\Component;

use benf\neo\elements\Block;

use verbb\supertable\fields\SuperTableField;

class Service extends Component
{
    // Public Methods
    // =========================================================================

    public function isCpSectionEnabled(): bool
    {
        /* @var Settings $settings */
        $settings = FieldManager::$plugin->getSettings();

        return isset($settings['cpSectionEnabled']) && $settings['cpSectionEnabled'];
    }

    public function cloneField(FieldInterface $field, FieldInterface $originField): bool
    {
        // If this is a Matrix or Super Table field, we need to do some pre-processing.
        // Because we're essentially editing a current field, we need to remove ID's for blocks and inner fields.
        // Not doing this will move all fields from one Matrix to another - instead of creating new ones.
        if ($field instanceof Matrix) {
            $field->blockTypes = $this->processCloneMatrix($originField);
        }

        if ($field instanceof SuperTableField) {
            $field->blockTypes = $this->processCloneSuperTable($originField);
        }

        if (get_class($field) == 'benf\neo\Field') {
            $blockTypes = $this->processCloneNeo($originField);
            $field->blockTypes = $blockTypes;

            // Reset the keys so we can get iterate
            $blockTypes = array_values($blockTypes);

            // Have to re-assign the fieldlayout after the blocktypes have been set - ugh.
            // This is because Neo's `setBlockTypes()` relies on POST data, which we don't have here.
            // So create the blocktype as normal, filling in all other info, then populate the fieldLayout now.
            foreach ($field->blockTypes as $key => $blockType) {
                $fieldLayout = $blockTypes[$key]['fieldLayout'] ?? null;

                if ($fieldLayout) {
                    $field->blockTypes[$key]->setFieldLayout($fieldLayout);
                }
            }
        }

        // Send off to Craft's native fieldSave service for heavy lifting.
        if (!Craft::$app->getFields()->saveField($field)) {
            FieldManager::error('Could not clone {name} - {errors}.', ['name' => $field->name, 'errors' => print_r($field->getErrors(), true)]);

            return false;
        }

        return true;
    }

    public function cloneGroup(FieldGroup $group, $prefix, FieldGroup $originGroup): bool
    {
        if (!Craft::$app->getFields()->saveGroup($group)) {
            FieldManager::error('Could not clone {name} group - {errors}.', ['name' => $originGroup->name, 'errors' => print_r($group->getErrors(), true)]);

            return false;
        }

        $errors = [];

        foreach (Craft::$app->getFields()->getFieldsByGroupId($originGroup->id) as $originField) {
            $field = Craft::$app->getFields()->createField([
                'type' => $originField::class,
                'groupId' => $group->id,
                'name' => $originField->name,
                'handle' => $prefix . $originField->handle,
                'instructions' => $originField->instructions,
                'searchable' => $originField->searchable,
                'translationMethod' => $originField->translationMethod,
                'translationKeyFormat' => $originField->translationKeyFormat,
                'settings' => $originField->settings,
            ]);

            if ($field instanceof Matrix) {
                $field->blockTypes = $this->processCloneMatrix($originField);
            }

            if ($field instanceof SuperTableField) {
                $field->blockTypes = $this->processCloneSuperTable($originField);
            }

            if (!FieldManager::$plugin->getService()->cloneField($field, $originField)) {
                $errors[] = $field;
            }
        }

        if ($errors) {
            foreach ($errors as $error) {
                FieldManager::error('Could not clone {errorName} in {name} group - {errors}.', [
                    'errorName' => $error->name,
                    'name' => $originGroup->name,
                    'errors' => print_r($group->getErrors(), true),
                ]);

                $group->addError($error->name, 'Could not clone group.');
            }

            return false;
        }

        return true;
    }

    public function getUnusedFieldIds(): array
    {
        // All fields
        $allFieldIds = (new Query())
            ->select(['id'])
            ->from(['{{%fields}}'])
            ->column();

        $usedFieldIds = (new Query())
            ->distinct(true)
            ->select(['fieldId'])
            ->from(['{{%fieldlayoutfields}}'])
            ->column();

        // Get only the unused fields
        return array_diff($allFieldIds, $usedFieldIds);
    }

    public function processCloneMatrix(FieldInterface $originField): array
    {
        $blockTypes = [];

        foreach ($originField->blockTypes as $i => $blockType) {
            $fields = [];
            $blockKey = 'new' . ($i + 1);

            foreach ($blockType->getCustomFields() as $j => $blockField) {
                $fieldKey = 'new' . ($j + 1);
                $width = 100;

                $fieldLayout = $blockType->getFieldLayout();
                $fieldLayoutElements = $fieldLayout->getTabs()[0]->elements ?? [];

                if ($fieldLayoutElements) {
                    $fieldLayoutElement = ArrayHelper::firstWhere($fieldLayoutElements, 'field.uid', $blockField->uid);
                    $width = (int)($fieldLayoutElement->width ?? 0) ?: 100;
                }

                if ($blockField::class == 'verbb\supertable\fields\SuperTableField') {
                    $blockField->contentTable = $blockField->contentTable ?? '';
                }

                $fields[$fieldKey] = [
                    'type' => $blockField::class,
                    'name' => $blockField['name'],
                    'handle' => $blockField['handle'],
                    'instructions' => $blockField['instructions'],
                    'required' => (bool)$blockField['required'],
                    'searchable' => (bool)$blockField['searchable'],
                    'translationMethod' => $blockField['translationMethod'],
                    'translationKeyFormat' => $blockField['translationKeyFormat'],
                    'typesettings' => $blockField['settings'],
                    'width' => $width,
                ];

                if ($blockField::class == 'verbb\supertable\fields\SuperTableField') {
                    $fields['new' . ($j + 1)]['typesettings']['blockTypes'] = $this->processCloneSuperTable($blockField);
                }
            }

            $blockTypes[$blockKey] = [
                'name' => $blockType->name,
                'handle' => $blockType->handle,
                'sortOrder' => $blockType->sortOrder,
                'fields' => $fields,
            ];
        }

        return $blockTypes;
    }

    public function processCloneNeo(FieldInterface $originField): array
    {
        $blockTypes = [];

        foreach ($originField->blockTypes as $i => $blockType) {
            $layout = new FieldLayout();
            $layout->type = Block::class;

            $tabs = [];

            foreach ($blockType->fieldLayout->getTabs() as $oldTab) {
                $tab = new FieldLayoutTab();
                $tab->layout = $layout;
                $tab->name = $oldTab->name;
                $tab->sortOrder = $oldTab->sortOrder;
                $tab->elements = $oldTab->elements;

                $tabs[] = $tab;
            }

            $layout->setTabs($tabs);

            $blockTypes['new' . $i] = [
                'name' => $blockType->name,
                'handle' => $blockType->handle,
                'description' => $blockType->description,
                'enabled' => $blockType->enabled,
                'minBlocks' => $blockType->minBlocks,
                'maxBlocks' => $blockType->maxBlocks,
                'minSiblingBlocks' => $blockType->minSiblingBlocks,
                'maxSiblingBlocks' => $blockType->maxSiblingBlocks,
                'minChildBlocks' => $blockType->minChildBlocks,
                'maxChildBlocks' => $blockType->maxChildBlocks,
                'childBlocks' => is_string($blockType->childBlocks) ? Json::decodeIfJson($blockType->childBlocks) : $blockType->childBlocks,
                'topLevel' => (bool)$blockType->topLevel,
                'fieldLayout' => $layout,
                'conditions' => $blockType->conditions,
                'sortOrder' => $blockType->sortOrder,
            ];
        }

        return $blockTypes;
    }

    public function processCloneSuperTable(FieldInterface $originField): array
    {
        $blockTypes = [];

        foreach ($originField->blockTypes as $i => $blockType) {
            $fields = [];

            foreach ($blockType->getCustomFields() as $j => $blockField) {
                if ($blockField::class == Matrix::class) {
                    $blockField->contentTable = $blockField->contentTable ?? '';
                }

                $fields['new' . $j] = [
                    'type' => $blockField::class,
                    'name' => $blockField['name'],
                    'handle' => $blockField['handle'],
                    'instructions' => $blockField['instructions'],
                    'required' => (bool)$blockField['required'],
                    'searchable' => (bool)$blockField['searchable'],
                    'translationMethod' => $blockField['translationMethod'],
                    'translationKeyFormat' => $blockField['translationKeyFormat'],
                    'typesettings' => $blockField['settings'],
                ];

                if ($blockField::class == Matrix::class) {
                    $fields['new' . $j]['typesettings']['blockTypes'] = $this->processCloneMatrix($blockField);
                }
            }

            $blockTypes['new' . $i] = [
                'fields' => $fields,
            ];
        }

        return $blockTypes;
    }

    public function createFieldLayoutFromConfig(array $config): FieldLayout
    {
        $layout = FieldLayout::createFromConfig($config);
        $layout->type = Block::class;

        return $layout;
    }
}
