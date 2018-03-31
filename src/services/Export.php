<?php
namespace verbb\fieldmanager\services;

use verbb\supertable\SuperTable;

use Craft;

use yii\base\Component;

class Export extends Component
{
    // Public Methods
    // =========================================================================

    public function export(array $fieldIds)
    {
        $fields = array();

        foreach ($fieldIds as $fieldId) {
            $field = Craft::$app->fields->getFieldById($fieldId);

            if ($field) {
                $newField = array(
                    'name' => $field->name,
                    'handle' => $field->handle,
                    'instructions' => $field->instructions,
                    'required' => $field->required,
                    'translationMethod' => $field->translationMethod,
                    'translationKeyFormat' => $field->translationKeyFormat,
                    'type' => \get_class($field),
                    'settings' => $field->settings,
                );

                if (get_class($field) == 'craft\fields\Matrix') {
                    $newField['settings'] = $this->processMatrix($field);
                }

                if (get_class($field) == 'verbb\supertable\fields\SuperTableField') {
                    $newField['settings'] = $this->processSuperTable($field);
                }

                $fields[] = $newField;
            }
        }

        return $fields;
    }

    public function processMatrix($field)
    {
        $fieldSettings = $field->settings;

        $blockTypes = Craft::$app->matrix->getBlockTypesByFieldId($field->id);

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
                if (get_class($blockField) == 'verbb\supertable\fields\SuperTableField') {
                    $settings = $this->processSuperTable($blockField);
                } else {
                    $settings = $blockField->settings;
                }

                $fieldSettings['blockTypes']['new' . $blockCount]['fields']['new' . $fieldCount] = array(
                    'name' => $blockField->name,
                    'handle' => $blockField->handle,
                    'required' => $blockField->required,
                    'instructions' => $blockField->instructions,
                    'translationMethod' => $field->translationMethod,
                    'translationKeyFormat' => $field->translationKeyFormat,
                    'type' => \get_class($blockField),
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

        $blockTypes = SuperTable::$plugin->service->getBlockTypesByFieldId($field->id);

        $blockCount = 1;
        foreach ($blockTypes as $blockType) {
            $fieldSettings['blockTypes']['new' . $blockCount] = array(
                'fields' => array(),
            );

            $fieldCount = 1;
            foreach ($blockType->fields as $blockField) {
                // Case for nested Matrix
                if (get_class($blockField) == 'craft\fields\Matrix') {
                    $settings = $this->processMatrix($blockField);
                } else {
                    $settings = $blockField->settings;
                }

                $fieldSettings['blockTypes']['new' . $blockCount]['fields']['new' . $fieldCount] = array(
                    'name' => $blockField->name,
                    'handle' => $blockField->handle,
                    'required' => $blockField->required,
                    'instructions' => $blockField->instructions,
                    'translationMethod' => $field->translationMethod,
                    'translationKeyFormat' => $field->translationKeyFormat,
                    'type' => \get_class($blockField),
                    'typesettings' => $settings,
                );

                $fieldCount++;
            }

            $blockCount++;
        }

        return $fieldSettings;
    }
}
