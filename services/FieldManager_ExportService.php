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
                    $newField['settings'] = craft()->fieldManager->processMatrix($field);
                }

                if ($field->type == 'SuperTable') {
                    $newField['settings'] = craft()->fieldManager->processSuperTable($field);
                }

                $fields[] = $newField;
            }
        }

        return $fields;
    }
}