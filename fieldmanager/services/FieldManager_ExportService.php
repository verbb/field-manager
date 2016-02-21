<?php
namespace Craft;

class FieldManager_ExportService extends BaseApplicationComponent
{
    // Public Methods
    // =========================================================================

    public function export(array $fieldIds)
    {
        $fieldDefs = array();

        foreach ($fieldIds as $fieldId) {
            $field = craft()->fields->getFieldById($fieldId);

            if ($field) {
                $fieldDefs[$field->handle] = array(
                    'name'         => $field->name,
                    'context'      => $field->context,
                    'instructions' => $field->instructions,
                    'translatable' => $field->translatable,
                    'type'         => $field->type,
                    'settings'     => $field->settings
                );

                if ($field->type == 'Matrix') {
                    $fieldDefs[$field->handle]['blockTypes'] = $this->handleMatrixExport($field);
                }

                if ($field->type == 'SuperTable') {
                    $fieldDefs[$field->handle]['blockTypes'] = $this->handleSuperTableExport($field);
                }
            }
        }

        return $fieldDefs;
    }

    public function handleMatrixExport($field)
    {
        $blockTypeDefs = array();
        $blockTypes = craft()->matrix->getBlockTypesByFieldId($field->id);

        foreach ($blockTypes as $blockType) {
            $blockTypeFieldDefs = array();

            foreach ($blockType->getFields() as $blockTypeField) {
                $blockTypeFieldDefs[$blockTypeField->handle] = array(
                    'name'         => $blockTypeField->name,
                    'required'     => $blockTypeField->required,
                    'instructions' => $blockTypeField->instructions,
                    'translatable' => $blockTypeField->translatable,
                    'type'         => $blockTypeField->type,
                    'settings'     => $blockTypeField->settings
                );

                if ($blockTypeField->type == 'SuperTable') {
                    $blockTypeFieldDefs[$blockTypeField->handle]['blockTypes'] = $this->handleSuperTableExport($blockTypeField);
                }
            }

            $blockTypeDefs[$blockType->handle] = array(
                'name'   => $blockType->name,
                'fields' => $blockTypeFieldDefs
            );
        }

        return $blockTypeDefs;
    }

    public function handleSuperTableExport($field)
    {
        $blockTypeDefs = array();
        $blockTypes = craft()->superTable->getBlockTypesByFieldId($field->id);

        foreach ($blockTypes as $blockType) {
            $blockTypeFieldDefs = array();

            foreach ($blockType->getFields() as $blockTypeField) {
                $blockTypeFieldDefs[$blockTypeField->handle] = array(
                    'name'         => $blockTypeField->name,
                    'required'     => $blockTypeField->required,
                    'instructions' => $blockTypeField->instructions,
                    'translatable' => $blockTypeField->translatable,
                    'type'         => $blockTypeField->type,
                    'settings'     => $blockTypeField->settings
                );

                if ($blockTypeField->type == 'Matrix') {
                    $blockTypeFieldDefs[$blockTypeField->handle]['blockTypes'] = $this->handleMatrixExport($blockTypeField);
                }
            }

            $blockTypeDefs = array(
                'fields' => $blockTypeFieldDefs
            );
        }

        return $blockTypeDefs;
    }
}