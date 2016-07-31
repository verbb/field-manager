<?php
namespace Craft;

class FieldManager_ExportService extends BaseApplicationComponent
{
    // Public Methods
    // =========================================================================

    public function export(array $fieldIds)
    {
        $fields = array();

        foreach ($fieldIds as $fieldId) {
            $field = craft()->fields->getFieldById($fieldId);

            if ($field) {
                $newField = array(
                    'name' => $field->name,
                    'handle' => $field->handle,
                    'instructions' => $field->instructions,
                    'required' => $field->required,
                    'translatable' => $field->translatable,
                    'type' => $field->type,
                    'settings' => $field->settings,
                );

                if ($field->type == 'Matrix') {
                    $newField['settings'] = $this->processMatrix($field);
                }

                if ($field->type == 'SuperTable') {
                    $newField['settings'] = $this->processSuperTable($field);
                }

                // Position Select - you sly dog!
                if ($field->type == 'PositionSelect') {
                    $newField['settings'] = $this->processPositionSelect($field);
                }

                $fields[] = $newField;
            }
        }

        return $fields;
    }

    public function processMatrix($field)
    {
        $fieldSettings = $field->settings;

        $blockTypes = craft()->matrix->getBlockTypesByFieldId($field->id);

        $blockCount = 1;
        foreach ($blockTypes as $blockType) {
            $fieldSettings['blockTypes']['new' . $blockCount] = array(
                'name' => $blockType->name,
                'handle' => $blockType->handle,
                'fields' => array(),
            );

            $fieldCount = 1;
            foreach ($blockType->fields as $blockField) {
                // Case for nested Super Table
                if ($blockField->type == 'SuperTable') {
                    $settings = $this->processSuperTable($blockField);
                } else if ($blockField->type == 'PositionSelect') {
                    $settings = $this->processPositionSelect($blockField);
                } else {
                    $settings = $blockField->settings;
                }

                $fieldSettings['blockTypes']['new' . $blockCount]['fields']['new' . $fieldCount] = array(
                    'name' => $blockField->name,
                    'handle' => $blockField->handle,
                    'required' => $blockField->required,
                    'instructions' => $blockField->instructions,
                    'translatable' => $blockField->translatable,
                    'type' => $blockField->type,
                    'typesettings' => $settings,
                );

                $fieldCount++;
            }

            $blockCount++;
        }

        return $fieldSettings;
    }

    public function processSuperTable($field)
    {
        $fieldSettings = $field->settings;

        $blockTypes = craft()->superTable->getBlockTypesByFieldId($field->id);

        $blockCount = 1;
        foreach ($blockTypes as $blockType) {
            $fieldSettings['blockTypes']['new' . $blockCount] = array(
                'fields' => array(),
            );

            $fieldCount = 1;
            foreach ($blockType->fields as $blockField) {
                // Case for nested Matrix
                if ($blockField->type == 'Matrix') {
                    $settings = $this->processMatrix($blockField);
                } else if ($blockField->type == 'PositionSelect') {
                    $settings = $this->processPositionSelect($blockField);
                } else {
                    $settings = $blockField->settings;
                }

                $fieldSettings['blockTypes']['new' . $blockCount]['fields']['new' . $fieldCount] = array(
                    'name' => $blockField->name,
                    'handle' => $blockField->handle,
                    'required' => $blockField->required,
                    'instructions' => $blockField->instructions,
                    'translatable' => $blockField->translatable,
                    'type' => $blockField->type,
                    'typesettings' => $settings,
                );

                $fieldCount++;
            }

            $blockCount++;
        }

        return $fieldSettings;
    }

    public function processPositionSelect($field)
    {
        $fieldSettings = $field->settings;
        $options = array();
        
        foreach ($fieldSettings['options'] as $value) {
            $options[$value] = true;
        }

        $fieldSettings['options'] = $options;

        return $fieldSettings;
    }
}
