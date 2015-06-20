<?php
namespace Craft;

class FieldManager_PortService extends BaseApplicationComponent
{
    public function import($fieldDefs) {

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

                if (!craft()->fields->saveField($field)) {
                    return $field->getAllErrors();
                }

                if ($field->type == 'Matrix') {
                    $blockTypes = craft()->matrix->getBlockTypesByFieldId($field->id, 'handle');

                    if (!array_key_exists('blockTypes', $fieldDef)) {
                        return $result->error('`fields[handle].blockTypes` must exist');
                    }

                    foreach ($fieldDef['blockTypes'] as $blockTypeHandle => $blockTypeDef) {
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
                        foreach ($blockTypeDef['fields'] as $blockTypeFieldHandle => $blockTypeFieldDef) {
                            $blockTypeField = array_key_exists($blockTypeFieldHandle, $blockTypeFields) ? $blockTypeFields[$blockTypeFieldHandle] : new FieldModel();
                            $blockTypeField->name           = $blockTypeFieldDef['name'];
                            $blockTypeField->handle         = $blockTypeFieldHandle;
                            $blockTypeField->required       = $blockTypeFieldDef['required'];
                            $blockTypeField->translatable   = $blockTypeFieldDef['translatable'];
                            $blockTypeField->type           = $blockTypeFieldDef['type'];
                            $blockTypeField->settings       = $blockTypeFieldDef['settings'];

                            $newBlockTypeFields[] = $blockTypeField;
                        }

                        $blockType->setFields($newBlockTypeFields);
                        
                        if (!craft()->matrix->saveBlockType($blockType)) {
                            return $result->error($blockType->getAllErrors());
                        }
                    }
                }

                if ($field->type == 'SuperTable') {
                    $blockTypes = craft()->superTable->getBlockTypesByFieldId($field->id, 'id');

                    foreach ($fieldDef['blockTypes'] as $blockTypeFields) {
                        $blockType = new SuperTable_BlockTypeModel();
                        $blockType->fieldId = $field->id;

                        $newBlockTypeFields = array();
                        foreach ($blockTypeFields as $blockTypeFieldHandle => $blockTypeFieldDef) {
                            $blockTypeField = new FieldModel();
                            $blockTypeField->name           = $blockTypeFieldDef['name'];
                            $blockTypeField->handle         = $blockTypeFieldHandle;
                            $blockTypeField->required       = $blockTypeFieldDef['required'];
                            $blockTypeField->translatable   = $blockTypeFieldDef['translatable'];
                            $blockTypeField->type           = $blockTypeFieldDef['type'];
                            $blockTypeField->settings       = $blockTypeFieldDef['settings'];

                            $newBlockTypeFields[] = $blockTypeField;
                        }

                        $blockType->setFields($newBlockTypeFields);
                        
                        if (!craft()->superTable->saveBlockType($blockType)) {
                            return $result->error($blockType->getAllErrors());
                        }
                    }
                }

            }
        }

        return true;
    }

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
                    $blockTypeDefs = array();
                    $blockTypes = craft()->matrix->getBlockTypesByFieldId($field->id);

                    foreach ($blockTypes as $blockType) {
                        $blockTypeFieldDefs = array();

                        foreach ($blockType->getFields() as $blockTypeField) {
                            $blockTypeFieldDefs[$blockTypeField->handle] = array(
                                'name'         => $blockTypeField->name,
                                'required'     => $blockTypeField->required,
                                'translatable' => $blockTypeField->translatable,
                                'type'         => $blockTypeField->type,
                                'settings'     => $blockTypeField->settings
                            );
                        }

                        $blockTypeDefs[$blockType->handle] = array(
                            'name'   => $blockType->name,
                            'fields' => $blockTypeFieldDefs
                        );
                    }

                    $fieldDefs[$field->handle]['blockTypes'] = $blockTypeDefs;
                }

                if ($field->type == 'SuperTable') {
                    $blockTypeDefs = array();
                    $blockTypes = craft()->superTable->getBlockTypesByFieldId($field->id);

                    foreach ($blockTypes as $blockType) {
                        $blockTypeFieldDefs = array();

                        foreach ($blockType->getFields() as $blockTypeField) {
                            $blockTypeFieldDefs[$blockTypeField->handle] = array(
                                'name'         => $blockTypeField->name,
                                'required'     => $blockTypeField->required,
                                'translatable' => $blockTypeField->translatable,
                                'type'         => $blockTypeField->type,
                                'settings'     => $blockTypeField->settings
                            );
                        }

                        $blockTypeDefs = array(
                            'fields' => $blockTypeFieldDefs
                        );
                    }

                    $fieldDefs[$field->handle]['blockTypes'] = $blockTypeDefs;
                }
            }
        }

        return $fieldDefs;
    }
}