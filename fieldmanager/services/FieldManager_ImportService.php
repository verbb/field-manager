<?php
namespace Craft;

class FieldManager_ImportService extends BaseApplicationComponent
{
    // Public Methods
    // =========================================================================

    public function import($fieldDefs)
    {
        $fields     = craft()->fields->getAllFields('handle');
        $fieldTypes = craft()->fields->getAllFieldTypes();

        foreach ($fieldDefs as $fieldHandle => $fieldDef) {
            if (array_key_exists($fieldDef['type'], $fieldTypes)) {
                $field = new FieldModel();

                $field->setAttributes(array(
                    'handle'       => $fieldHandle,
                    'groupId'      => $fieldDef['groupId'],
                    'name'         => $fieldDef['name'],
                    'context'      => $fieldDef['context'],
                    'instructions' => $fieldDef['instructions'],
                    'translatable' => $fieldDef['translatable'],
                    'type'         => $fieldDef['type'],
                    'settings'     => $fieldDef['settings']
                ));

                if ($field->type == 'PositionSelect') {
                    $this->handlePositionSelect($fieldDef, $field);
                }

                if (!craft()->fields->saveField($field)) {
                    return $field->getAllErrors();
                }

                if ($field->type == 'Matrix') {
                    $this->handleMatrixImport($fieldDef, $field);
                }

                if ($field->type == 'SuperTable') {
                    $this->handleSuperTableImport($fieldDef, $field);
                }
            }
        }

        return true;
    }

    public function handleMatrixImport($fieldDef, $field)
    {
        $blockTypes = craft()->matrix->getBlockTypesByFieldId($field->id, 'handle');

        if (!array_key_exists('blockTypes', $fieldDef)) {
            return $result->error('`fields[handle].blockTypes` must exist');
        }

        foreach ($fieldDef['blockTypes'] as $blockTypeHandle => $blockTypeDef) {
            $settings = new MatrixSettingsModel($field);

            $blockType = array_key_exists($blockTypeHandle, $blockTypes) ? $blockTypes[$blockTypeHandle] : new MatrixBlockTypeModel();
            $blockType->fieldId = $field->id;
            $blockType->name    = $blockTypeDef['name'];
            $blockType->handle  = $blockTypeHandle;

            if (!array_key_exists('fields', $blockTypeDef)) {
                return $result->error('`fields[handle].blockTypes[handle].fields` must exist');
            }

            $blockTypeFields = array();

            foreach ($blockType->getFields() as $blockTypeField) {
                $blockTypeFields[$blockTypeField->handle] = $blockTypeField;
            }

            $newBlockTypeFields = array();
            $extraFields = array();
            foreach ($blockTypeDef['fields'] as $blockTypeFieldHandle => $blockTypeFieldDef) {
                $blockTypeField = array_key_exists($blockTypeFieldHandle, $blockTypeFields) ? $blockTypeFields[$blockTypeFieldHandle] : new FieldModel();
                $blockTypeField->name           = $blockTypeFieldDef['name'];
                $blockTypeField->handle         = $blockTypeFieldHandle;
                $blockTypeField->required       = $blockTypeFieldDef['required'];
                $blockTypeField->instructions   = isset($blockTypeFieldDef['instructions']) ? $blockTypeFieldDef['instructions'] : '';
                $blockTypeField->translatable   = $blockTypeFieldDef['translatable'];
                $blockTypeField->type           = $blockTypeFieldDef['type'];
                $blockTypeField->settings       = $blockTypeFieldDef['settings'];

                $newBlockTypeFields[] = $blockTypeField;

                if ($blockTypeField->type == 'SuperTable') {
                    $extraFields[] = array($blockTypeFieldDef, $blockTypeField);
                }

                if ($blockTypeField->type == 'PositionSelect') {
                    $this->handlePositionSelect($blockTypeFieldDef, $blockTypeField);
                }
            }

            $blockType->setFields($newBlockTypeFields);

            craft()->matrix->saveBlockType($blockType);

            if ($extraFields) {
                //$settings->setBlockTypes(array($blockType));
                //$success = craft()->matrix->saveSettings($settings);

                foreach ($extraFields as $options) {
                    $this->handleSuperTableImport($options[0], $options[1]);
                }
            }
        }
    }

    public function handleSuperTableImport($fieldDef, $field)
    {
        $blockTypes = craft()->superTable->getBlockTypesByFieldId($field->id, 'id');

        foreach ($fieldDef['blockTypes'] as $blockTypeFields) {
            $settings = new SuperTable_SettingsModel($field);

            $blockType = new SuperTable_BlockTypeModel();
            $blockType->fieldId = $field->id;

            $newBlockTypeFields = array();
            $extraFields = array();
            foreach ($blockTypeFields as $blockTypeFieldHandle => $blockTypeFieldDef) {
                $blockTypeField = new FieldModel();
                $blockTypeField->name           = $blockTypeFieldDef['name'];
                $blockTypeField->handle         = $blockTypeFieldHandle;
                $blockTypeField->required       = $blockTypeFieldDef['required'];
                $blockTypeField->instructions   = isset($blockTypeFieldDef['instructions']) ? $blockTypeFieldDef['instructions'] : '';
                $blockTypeField->translatable   = $blockTypeFieldDef['translatable'];
                $blockTypeField->type           = $blockTypeFieldDef['type'];
                $blockTypeField->settings       = $blockTypeFieldDef['settings'];

                $newBlockTypeFields[] = $blockTypeField;

                if ($blockTypeField->type == 'Matrix') {
                    $extraFields[] = array($blockTypeFieldDef, $blockTypeField);
                }

                if ($blockTypeField->type == 'PositionSelect') {
                    $this->handlePositionSelect($blockTypeFieldDef, $blockTypeField);
                }
            }

            $blockType->setFields($newBlockTypeFields);

            craft()->superTable->saveBlockType($blockType);

            if ($extraFields) {
                //$settings->setBlockTypes(array($blockType));
                //$success = craft()->superTable->saveSettings($settings);

                foreach ($extraFields as $options) {
                    $this->handleMatrixImport($options[0], $options[1]);
                }
            }
        }
    }

    public function handlePositionSelect($fieldDef, &$field)
    {
        // This is a little bit strange...
        // Imports as { settings: { options: { 0: left, 1: right } } } but should be
        // { settings: { options: { left: 1, right: 1 } } }

        $settings = $fieldDef['settings'];
        $settings['options'] = array_fill_keys($settings['options'], '1');

        $field->settings = $settings;
    }


}