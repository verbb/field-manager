<?php
namespace verbb\fieldmanager\services;

use verbb\fieldmanager\FieldManager;

use Craft;
use craft\base\FieldInterface;
use craft\db\Query;
use craft\helpers\Json;
use craft\models\FieldGroup;

use yii\base\Component;

class Service extends Component
{
    // Public Methods
    // =========================================================================

    public function isCpSectionEnabled(): bool
    {
        $settings = FieldManager::$plugin->getSettings();

        return isset($settings['cpSectionEnabled']) && $settings['cpSectionEnabled'];
    }

    public function cloneField(FieldInterface $field, FieldInterface $originField): bool
    {
        // If this is a Matrix or Super Table field, we need to do some pre-processing.
        // Because we're essentially editing a current field, we need to remove ID's for blocks and inner fields.
        // Not doing this will move all fields from one Matrix to another - instead of creating new ones.
        if (get_class($field) == 'craft\fields\Matrix') {
            $field->blockTypes = $this->processCloneMatrix($originField);
        }

        if (get_class($field) == 'verbb\supertable\fields\SuperTableField') {
            $field->blockTypes = $this->processCloneSuperTable($originField);
        }

        if (get_class($field) == 'benf\neo\Field') {
            $field->blockTypes = $this->processCloneNeo($originField);
        }

        // Send off to Craft's native fieldSave service for heavy lifting.
        if (!Craft::$app->fields->saveField($field)) {
            FieldManager::error('Could not clone {name} - {errors}.', ['name' => $field->name, 'errors' => print_r($field->getErrors(), true)]);

            return false;
        }

        return true;
    }

    public function cloneGroup(FieldGroup $group, $prefix, FieldGroup $originGroup): bool
    {
        if (!Craft::$app->fields->saveGroup($group)) {
            FieldManager::error('Could not clone {name} group - {errors}.', ['name' => $originGroup->name, 'errors' => print_r($group->getErrors(), true)]);

            return false;
        }

        $errors = [];

        foreach (Craft::$app->fields->getFieldsByGroupId($originGroup->id) as $originField) {
            $field = Craft::$app->fields->createField([
                'type' => \get_class($originField),
                'groupId' => $group->id,
                'name' => $originField->name,
                'handle' => $prefix . $originField->handle,
                'instructions' => $originField->instructions,
                'searchable' => $originField->searchable,
                'translationMethod' => $originField->translationMethod,
                'translationKeyFormat' => $originField->translationKeyFormat,
                'settings' => $originField->settings,
            ]);

            if (get_class($field) == 'craft\fields\Matrix') {
                $field->blockTypes = $this->processCloneMatrix($originField);
            }

            if (get_class($field) == 'verbb\supertable\fields\SuperTableField') {
                $field->blockTypes = $this->processCloneSuperTable($originField);
            }

            if (!FieldManager::$plugin->service->cloneField($field, $originField)) {
                $errors[] = $field;
            }
        }

        if ($errors) {
            foreach ($errors as $error) {
                FieldManager::error('Could not clone {errorName} in {name} group - {errors}.', [
                    'errorName' => $error->name,
                    'name'      => $originGroup->name,
                    'errors'    => print_r($group->getErrors(), true),
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

    public function processCloneMatrix(FieldInterface $originField)
    {
        $blockTypes = [];

        foreach ($originField->blockTypes as $i => $blockType) {
            $fields = [];

            foreach ($blockType->getFields() as $j => $blockField) {
                $fields['new' . ($j + 1)] = [
                    'type' => get_class($blockField),
                    'name' => $blockField['name'],
                    'handle' => $blockField['handle'],
                    'instructions' => $blockField['instructions'],
                    'required' => (bool)$blockField['required'],
                    'searchable' => (bool)$blockField['searchable'],
                    'translationMethod' => $blockField['translationMethod'],
                    'translationKeyFormat' => $blockField['translationKeyFormat'],
                    'typesettings' => $blockField['settings'],
                ];
            }

            $blockTypes['new' . ($i + 1)] = [
                'name' => $blockType->name,
                'handle' => $blockType->handle,
                'sortOrder' => $blockType->sortOrder,
                'fields' => $fields,
            ];
        }

        return $blockTypes;
    }

    public function processCloneNeo(FieldInterface $originField)
    {
        $blockTypes = [];

        foreach ($originField->blockTypes as $i => $blockType) {
            $fieldLayout = [];

            foreach ($blockType->fieldLayout->getTabs() as $tab) {
                foreach ($tab->getFields() as $field) {
                    $fieldLayout[$tab['name']][] = $field->id;
                }
            }

            $blockTypes['new' . $i] = [
                'name' => $blockType->name,
                'handle' => $blockType->handle,
                'sortOrder' => $blockType->sortOrder,
                'maxBlocks' => $blockType->maxBlocks,
                'maxChildBlocks' => $blockType->maxChildBlocks,
                'childBlocks' => is_string($blockType->childBlocks) ? Json::decodeIfJson($blockType->childBlocks) : $blockType->childBlocks,
                'topLevel' => (bool)$blockType->topLevel,
                'fieldLayout' => $fieldLayout,
            ];
        }

        return $blockTypes;
    }

    public function processCloneSuperTable(FieldInterface $originField)
    {
        $blockTypes = [];

        foreach ($originField->blockTypes as $i => $blockType) {
            $fields = [];

            foreach ($blockType->getFields() as $j => $blockField) {
                $fields['new' . $j] = [
                    'type' => get_class($blockField),
                    'name' => $blockField['name'],
                    'handle' => $blockField['handle'],
                    'instructions' => $blockField['instructions'],
                    'required' => (bool)$blockField['required'],
                    'searchable' => (bool)$blockField['searchable'],
                    'translationMethod' => $blockField['translationMethod'],
                    'translationKeyFormat' => $blockField['translationKeyFormat'],
                    'typesettings' => $blockField['settings'],
                ];
            }

            $blockTypes['new' . $i] = [
                'fields' => $fields,
            ];
        }

        return $blockTypes;
    }
}
