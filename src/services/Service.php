<?php

namespace verbb\fieldmanager\services;

use verbb\fieldmanager\FieldManager;

use Craft;
use craft\base\FieldInterface;
use craft\db\Query;
use craft\models\FieldGroup;

use yii\base\Component;

class Service extends Component
{
    // Public Methods
    // =========================================================================

    /**
     * @return bool
     */
    public function isCpSectionEnabled(): bool
    {
        $settings = FieldManager::$plugin->getSettings();

        return isset($settings['cpSectionEnabled']) && $settings['cpSectionEnabled'];
    }

    /**
     * @param FieldInterface $field
     * @param FieldInterface $originField
     *
     * @return bool
     */
    public function saveField(FieldInterface $field, FieldInterface $originField): bool
    {
        // If this is a Matrix or Super Table field, we need to do some pre-processing.
        // Because we're essentially editing a current field, we need to remove ID's for blocks and inner fields.
        // Not doing this will move all fields from one Matrix to another - instead of creating new ones.
        if (get_class($field) == 'craft\fields\Matrix') {
            $field->blockTypes = $this->processMatrix($field);
        }

        if (get_class($field) == 'verbb\supertable\fields\SuperTableField') {
            $field->blockTypes = $this->processSuperTable($field);
        }

        // Most fields are supported, but Neo is an exception
        if (get_class($field) == 'benf\neo\Field') {
            FieldManager::error('Neo fields are currently unsupported.');

            return false;
        }

        // Send off to Craft's native fieldSave service for heavy lifting.
        if (!Craft::$app->fields->saveField($field)) {
            FieldManager::error('Could not clone {name} - {errors}.', ['name' => $field->name, 'errors' => print_r($field->getErrors(), true)]);

            return false;
        }

        return true;
    }

    /**
     * @param FieldGroup $group
     * @param string     $prefix
     * @param FieldGroup $originGroup
     *
     * @return bool
     */
    public function saveGroup(FieldGroup $group, $prefix, FieldGroup $originGroup): bool
    {
        if (!Craft::$app->fields->saveGroup($group)) {
            FieldManager::error('Could not clone {name} group - {errors}.', ['name' => $originGroup->name, 'errors' => print_r($group->getErrors(), true)]);

            return false;
        }

        $errors = [];

        foreach (Craft::$app->fields->getFieldsByGroupId($originGroup->id) as $originField) {
            $field = Craft::$app->fields->createField([
                'type'                 => \get_class($originField),
                'groupId'              => $group->id,
                'name'                 => $originField->name,
                'handle'               => $prefix . $originField->handle,
                'instructions'         => $originField->instructions,
                'translationMethod'    => $originField->translationMethod,
                'translationKeyFormat' => $originField->translationKeyFormat,
                'settings'             => $originField->settings,
            ]);

            if (get_class($field) == 'craft\fields\Matrix') {
                $field->blockTypes = $this->processCloneMatrix($originField);
            }

            if (get_class($field) == 'verbb\supertable\fields\SuperTableField') {
                $field->blockTypes = $this->processCloneSuperTable($originField);
            }

            if (!FieldManager::$plugin->service->saveField($field, $originField)) {
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

    /**
     * @return array
     */
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

    /**
     * @param FieldInterface $field
     *
     * @return mixed
     */
    public function processMatrix(FieldInterface $field)
    {
        $blockTypes = $field->blockTypes;

        // Strip out all the IDs from the origin field
        foreach ($blockTypes as $blockType) {
            $blockType->id = null;
            $blockType->fieldLayoutId = null;

            foreach ($blockType->fields as $blockField) {
                $blockField->id = null;

                // Case for nested Super Table
                if (get_class($blockField) == 'verbb\supertable\fields\SuperTableField') {
                    // Ensure FieldTypes have a chance to prepare their settings properly
                    // $blockField->settings = $blockField->fieldType->prepSettings($blockField->settings);

                    $blockField->blockTypes = $this->processSuperTable($blockField);
                }
            }
        }

        return $blockTypes;
    }

    public function processCloneMatrix(FieldInterface $originField)
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
                    'translationMethod' => $blockField['translationMethod'],
                    'translationKeyFormat' => $blockField['translationKeyFormat'],
                    'typesettings' => $blockField['settings'],
                ];
            }

            $blockTypes['new' . $i] = [
                'name' => $blockType->name,
                'handle' => $blockType->handle,
                'sortOrder' => $blockType->sortOrder,
                'fields' => $fields,
            ];
        }

        return $blockTypes;
    }

    public function processSuperTable(FieldInterface $field)
    {
        $blockTypes = $field->blockTypes;

        // Strip out all the IDs from the origin field
        foreach ($blockTypes as $blockType) {
            $blockType->id = null;
            $blockType->fieldLayoutId = null;

            foreach ($blockType->fields as $blockField) {
                $blockField->id = null;

                // Case for nested Matrix
                if (get_class($blockField) == 'craft\fields\Matrix') {
                    // Ensure FieldTypes have a chance to prepare their settings properly
                    // $blockField->settings = $blockField->fieldType->prepSettings($blockField->settings);

                    $blockField->blockTypes = $this->processMatrix($blockField);
                }
            }
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
