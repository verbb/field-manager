<?php

namespace verbb\fieldmanager\services;

use verbb\fieldmanager\FieldManager;

use Craft;
use craft\helpers\Json;

use yii\base\Component;

class Import extends Component
{
    // Public Methods
    // =========================================================================

    /**
     * @param array $fields
     *
     * @return array
     */
    public function import(array $fields): array
    {
        $fieldTypes = Craft::$app->fields->getAllFieldTypes();
        $errors = [];

        foreach ($fields as $fieldInfo) {
            // Check for older (pre Craft 2) imports, where fields weren't namespaced
            if (!strstr($fieldInfo['type'], '\\')) {
                // There's lots we need to do here!
                $this->_processCraft2Fields($fieldInfo);
            }

            if (\in_array($fieldInfo['type'], $fieldTypes, false)) {
                $field = Craft::$app->fields->createField([
                    'groupId'              => $fieldInfo['groupId'],
                    'name'                 => $fieldInfo['name'],
                    'handle'               => $fieldInfo['handle'],
                    'instructions'         => $fieldInfo['instructions'],
                    'translationMethod'    => $fieldInfo['translationMethod'] ?? '',
                    'translationKeyFormat' => $fieldInfo['translationKeyFormat'] ?? '',
                    'required'             => $fieldInfo['required'],
                    'type'                 => $fieldInfo['type'],
                    'settings'             => $fieldInfo['settings'],
                ]);
                
                // Send off to Craft's native fieldSave service for heavy lifting.
                if (!Craft::$app->fields->saveField($field)) {
                    $fieldErrors = $field->getErrors();

                    // Handle Matrix/Super Table errors
                    if ($fieldInfo['type'] == 'craft\fields\Matrix' || $fieldInfo['type'] == 'verbb\supertable\fields\SuperTableField') {
                        foreach ($field->getBlockTypes() as $blockType) {
                            foreach ($blockType->getFields() as $blockTypeField) {
                                if ($blockTypeField->hasErrors()) {
                                    $errors[$fieldInfo['handle']][$blockTypeField->handle] = $blockTypeField->getErrors();
                                }
                            }
                        } 
                    } else {
                        $errors[$fieldInfo['handle']] = $field;
                    }

                    FieldManager::error('Could not import {name} - {errors}.', [
                        'name' => $fieldInfo['name'],
                        'errors' => print_r($fieldErrors, true),
                    ]);
                }
            } else {
                FieldManager::error('Unsupported field "{field}".', [
                    'field' => $fieldInfo['type'],
                ]);
            }
        }

        return $errors;
    }

    /**
     * @param json $json
     *
     * @return false|array
     */
    public function getData($json)
    {
        $data = json_decode($json, true);

        if ($data === null) {
            FieldManager::error('Could not parse JSON data - {error}.', ['error' => json_last_error_msg()]);

            return false;
        }

        return $data;
    }

    private function _processCraft2Fields(&$fieldInfo)
    {
        // There are (likely) a bunch of cases to deal with for Craft 2 - Craft 3 fields. Add them here...
        if ($fieldInfo['type'] == 'Categories') {
            // This field setting will mess things up!
            unset($fieldInfo['settings']['targetLocale']);
            unset($fieldInfo['typesettings']['targetLocale']);
        }

        if ($fieldInfo['type'] == 'PlainText') {
            // This field setting will mess things up!
            unset($fieldInfo['settings']['maxLength']);
            unset($fieldInfo['typesettings']['maxLength']);
        }

        // Matrix needs to loop through each blocktype's field to update the type
        // Do some tricky recursive goodness to deal with all the fields in each block
        if ($fieldInfo['type'] == 'Matrix') {
            foreach ($fieldInfo['settings']['blockTypes'] as $blockHandle => $blockType) {
                foreach ($blockType['fields'] as $key => $field) {
                    $fieldInfo['settings']['blockTypes'][$blockHandle]['fields'][$key] = $this->_processCraft2Fields($field);
                }
            }
        }

        // Use the namespaced format for the type, which is Craft 3
        $fieldInfo['type'] = 'craft\\fields\\' . $fieldInfo['type'];

        return $fieldInfo;
    }
}