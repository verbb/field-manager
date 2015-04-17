<?php
namespace Craft;

class FieldManager_PortService extends BaseApplicationComponent
{
    public function import($group, $fieldDefs) {

        $fields     = craft()->fields->getAllFields('handle');
        $fieldTypes = craft()->fields->getAllFieldTypes();

        foreach ($fieldDefs as $fieldHandle => $fieldDef) {
            if (array_key_exists($fieldDef['type'], $fieldTypes)) {
                //$field = array_key_exists($fieldHandle, $fields) ? $fields[$fieldHandle] : new FieldModel();
                $field = new FieldModel();

                $field->setAttributes(array(
                    'handle'       => $fieldHandle,
                    'groupId'      => $group,
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
            }
        }

        return $fieldDefs;
    }
}