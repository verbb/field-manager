<?php
namespace Craft;

class FieldManager_ImportService extends BaseApplicationComponent
{
    // Public Methods
    // =========================================================================

    public function import($fields)
    {
        $fieldTypes = craft()->fields->getAllFieldTypes();
        $errors = array();

        foreach ($fields as $fieldInfo) {
            if (array_key_exists($fieldInfo['type'], $fieldTypes)) {
                $field = new FieldModel();

                $field->setAttributes(array(
                    'groupId' => $fieldInfo['groupId'],
                    'name' => $fieldInfo['name'],
                    'handle' => $fieldInfo['handle'],
                    'instructions' => $fieldInfo['instructions'],
                    'translatable' => $fieldInfo['translatable'],
                    'required' => $fieldInfo['required'],
                    'type' => $fieldInfo['type'],
                    'settings' => $fieldInfo['settings']
                ));

                // Send off to Craft's native fieldSave service for heavy lifting.
                if (craft()->fields->saveField($field)) {
                    FieldManagerPlugin::log($field->name . ' imported successfully.');
                } else {
                    $errors[$fieldInfo['handle']] = $field;
                    FieldManagerPlugin::log('Could not import ' . $field->name . ' - ' . print_r($field->getErrors(), true), LogLevel::Error);
                }
            }
        }

        return $errors;
    }

    public function getData($json)
    {
        $data = json_decode($json, true);

        if ($data !== null) {
            // Check for pre v1.5 export format - fix it up and log deprecation.
            $keys = array_keys($data);

            if (is_string($keys[0])) {
                $data = $this->_importFromPre15($data);
            }

            return $data;
        } else {
            FieldManagerPlugin::log('Could not parse JSON data - ' . $this->_getJsonError(), LogLevel::Error);
        }
    }



    // Private Methods
    // =========================================================================

    private function _getJsonError()
    {
        if (!function_exists('json_last_error_msg')) {
            $errors = array(
                JSON_ERROR_NONE             => null,
                JSON_ERROR_DEPTH            => 'Maximum stack depth exceeded',
                JSON_ERROR_STATE_MISMATCH   => 'Underflow or the modes mismatch',
                JSON_ERROR_CTRL_CHAR        => 'Unexpected control character found',
                JSON_ERROR_SYNTAX           => 'Syntax error, malformed JSON',
                JSON_ERROR_UTF8             => 'Malformed UTF-8 characters, possibly incorrectly encoded'
            );

            $error = json_last_error();
            return array_key_exists($error, $errors) ? $errors[$error] : "Unknown error ({$error})";
        } else {
            return json_last_error_msg();
        }
    }

    private function _importFromPre15($data)
    {
        craft()->deprecator->log('FieldManager JSON', 'The provided JSON structure has been deprecated. Re-export your fields to stay up to date.');
        
        $newData = array();

        foreach ($data as $handle => $field) {
            $field['handle'] = $handle;
            $field['required'] = false;

            // Matrix/Super Table had the most changes
            if ($field['type'] == 'Matrix') {
                $fieldSettings = array();
                $blockTypes = $field['blockTypes'];

                $blockCount = 1;
                foreach ($blockTypes as $blockHandle => $blockType) {
                    $fieldSettings['new' . $blockCount] = array(
                        'name' => $blockType['name'],
                        'handle' => $blockHandle,
                        'fields' => array(),
                    );

                    $fieldCount = 1;
                    foreach ($blockType['fields'] as $blockFieldHandle => $blockField) {
                        $fieldSettings['new' . $blockCount]['fields']['new' . $fieldCount] = array(
                            'name' => $blockField['name'],
                            'handle' => $blockFieldHandle,
                            'required' => $blockField['required'],
                            'instructions' => $blockField['instructions'],
                            'translatable' => $blockField['translatable'],
                            'type' => $blockField['type'],
                            'typesettings' => $blockField['settings'],
                        );

                        $fieldCount++;
                    }

                    $blockCount++;
                }

                $field['settings']['blockTypes'] = $fieldSettings;
                unset($field['blockTypes']);
            }

            if ($field['type'] == 'SuperTable') {
                $fieldSettings = array();
                $blockTypes = $field['blockTypes'];

                $blockCount = 1;
                foreach ($blockTypes as $blockHandle => $blockType) {
                    $fieldSettings['new' . $blockCount] = array(
                        'fields' => array(),
                    );

                    $fieldCount = 1;
                    foreach ($blockType['fields'] as $blockFieldHandle => $blockField) {
                        $fieldSettings['new' . $blockCount]['fields']['new' . $fieldCount] = array(
                            'name' => $blockField['name'],
                            'handle' => $blockFieldHandle,
                            'required' => $blockField['required'],
                            'instructions' => $blockField['instructions'],
                            'translatable' => $blockField['translatable'],
                            'type' => $blockField['type'],
                            'typesettings' => $blockField['settings'],
                        );

                        $fieldCount++;
                    }

                    $blockCount++;
                }

                $field['settings']['blockTypes'] = $fieldSettings;
                unset($field['blockTypes']);
            }

            $newData[] = $field;
        }

        return $newData;
    }
}