<?php
namespace verbb\fieldmanager\services;

use verbb\fieldmanager\FieldManager;

use Craft;
use craft\helpers\ArrayHelper;
use craft\helpers\Json;

use yii\base\Component;

class Import extends Component
{
    // Public Methods
    // =========================================================================

    public function prepFieldsForImport($fields, $data)
    {
        $fieldsToImport = [];
        
        foreach ($fields as $key => $field) {
            if (isset($field['groupId'])) {
                if ($field['groupId'] != 'noimport') {

                    // Get the field data from our imported JSON data
                    $fieldsToImport[$key] = $data[$key];

                    // Handle overrides
                    $fieldsToImport[$key]['name'] = $field['name'];
                    $fieldsToImport[$key]['handle'] = $field['handle'];
                    $fieldsToImport[$key]['groupId'] = $field['groupId'];

                    // Handle Matrix
                    if ($data[$key]['type'] === 'craft\fields\Matrix') {
                        $blockTypes = $field['settings']['blockTypes'] ?? [];

                        foreach ($blockTypes as $blockTypeKey => $blockType) {
                            $blockTypeImport = ArrayHelper::remove($blockType, 'groupId');

                            // Remove the whole block if not importing
                            if ($blockTypeImport === 'noimport') {
                                unset($fieldsToImport[$key]['settings']['blockTypes'][$blockTypeKey]);

                                continue;
                            }

                            // Update name and handles for blocktype
                            $fieldsToImport[$key]['settings']['blockTypes'][$blockTypeKey]['name'] = $blockType['name'];
                            $fieldsToImport[$key]['settings']['blockTypes'][$blockTypeKey]['handle'] = $blockType['handle'];

                            $blockTypeFields = $blockType['fields'] ?? [];

                            foreach ($blockTypeFields as $blockTypeFieldKey => $blockTypeField) {
                                $blockTypeFieldImport = ArrayHelper::remove($blockTypeField, 'groupId');

                                // Remove the whole field if not importing
                                if ($blockTypeFieldImport === 'noimport') {
                                    unset($fieldsToImport[$key]['settings']['blockTypes'][$blockTypeKey]['fields'][$blockTypeFieldKey]);

                                    continue;
                                }

                                // Update name and handles for blocktype
                                $fieldsToImport[$key]['settings']['blockTypes'][$blockTypeKey]['fields'][$blockTypeFieldKey]['name'] = $blockTypeField['name'];
                                $fieldsToImport[$key]['settings']['blockTypes'][$blockTypeKey]['fields'][$blockTypeFieldKey]['handle'] = $blockTypeField['handle'];
                            }
                        }
                    }

                    // Handle Super Table
                    if ($data[$key]['type'] === 'verbb\supertable\fields\SuperTableField') {
                        $blockTypes = $field['settings']['blockTypes'] ?? [];

                        foreach ($blockTypes as $blockTypeKey => $blockType) {
                            $blockTypeFields = $blockType['fields'] ?? [];

                            foreach ($blockTypeFields as $blockTypeFieldKey => $blockTypeField) {
                                $blockTypeFieldImport = ArrayHelper::remove($blockTypeField, 'groupId');

                                // Remove the whole field if not importing
                                if ($blockTypeFieldImport === 'noimport') {
                                    unset($fieldsToImport[$key]['settings']['blockTypes'][$blockTypeKey]['fields'][$blockTypeFieldKey]);

                                    continue;
                                }

                                // Update name and handles for blocktype
                                $fieldsToImport[$key]['settings']['blockTypes'][$blockTypeKey]['fields'][$blockTypeFieldKey]['name'] = $blockTypeField['name'];
                                $fieldsToImport[$key]['settings']['blockTypes'][$blockTypeKey]['fields'][$blockTypeFieldKey]['handle'] = $blockTypeField['handle'];
                            }
                        }
                    }

                    // Handle Neo
                    if ($data[$key]['type'] === 'benf\neo\Field') {
                        $blockTypes = $field['settings']['blockTypes'] ?? [];

                        foreach ($blockTypes as $blockTypeKey => $blockType) {
                            $blockTypeImport = ArrayHelper::remove($blockType, 'groupId');

                            // Remove the whole block if not importing
                            if ($blockTypeImport === 'noimport') {
                                unset($fieldsToImport[$key]['settings']['blockTypes'][$blockTypeKey]);

                                continue;
                            }

                            // Update name and handles for blocktype
                            $fieldsToImport[$key]['settings']['blockTypes'][$blockTypeKey]['name'] = $blockType['name'];
                            $fieldsToImport[$key]['settings']['blockTypes'][$blockTypeKey]['handle'] = $blockType['handle'];

                            $blockTypeTabs = $blockType['fieldLayout'] ?? [];

                            foreach ($blockTypeTabs as $blockTypeTabKey => $blockTypeTab) {
                                foreach ($blockTypeTab as $blockTypeFieldKey => $blockTypeField) {
                                    $blockTypeFieldImport = ArrayHelper::remove($blockTypeField, 'groupId');

                                    // Remove the whole field if not importing
                                    if ($blockTypeFieldImport === 'noimport') {
                                        unset($fieldsToImport[$key]['settings']['blockTypes'][$blockTypeKey]['fieldLayout'][$blockTypeTabKey][$blockTypeFieldKey]);

                                        continue;
                                    }
                                }
                            }
                        }
                    }

                }
            }
        }

        return $fieldsToImport;
    }

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
                if ($fieldInfo['type'] == 'craft\fields\Matrix') {
                    $fieldInfo['settings'] = $this->processMatrix($fieldInfo);
                }

                if ($fieldInfo['type'] == 'verbb\supertable\fields\SuperTableField') {
                    $fieldInfo['settings'] = $this->processSuperTable($fieldInfo);
                }

                if ($fieldInfo['type'] == 'benf\neo\Field') {
                    $fieldInfo['settings'] = $this->processNeo($fieldInfo);
                }

                if ($fieldInfo['type'] == 'rias\positionfieldtype\fields\Position') {
                    $fieldInfo['settings'] = $this->processPosition($fieldInfo);
                }

                $field = Craft::$app->fields->createField([
                    'groupId' => $fieldInfo['groupId'],
                    'name' => $fieldInfo['name'],
                    'handle' => $fieldInfo['handle'],
                    'instructions' => $fieldInfo['instructions'],
                    'searchable' => $fieldInfo['searchable'],
                    'translationMethod' => $fieldInfo['translationMethod'] ?? '',
                    'translationKeyFormat' => $fieldInfo['translationKeyFormat'] ?? '',
                    'required' => $fieldInfo['required'],
                    'type' => $fieldInfo['type'],
                    'settings' => $fieldInfo['settings'],
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

    public function processMatrix($fieldInfo)
    {
        $settings = $fieldInfo['settings'];

        if (isset($settings['blockTypes'])) {
            foreach ($settings['blockTypes'] as $i => $blockType) {
                foreach ($blockType['fields'] as $j => $blockTypeField) {
                    $preppedSettings['settings'] = $blockTypeField['typesettings'];

                    if ($blockTypeField['type'] == 'rias\positionfieldtype\fields\Position') {
                        $settings['blockTypes'][$i]['fields'][$j]['typesettings'] = $this->processPosition($preppedSettings);
                    }
                }
            }
        }

        return $settings;
    }

    public function processSuperTable($fieldInfo)
    {
        $settings = $fieldInfo['settings'];

        if (isset($settings['blockTypes'])) {
            foreach ($settings['blockTypes'] as $i => $blockType) {
                foreach ($blockType['fields'] as $j => $blockTypeField) {
                    $preppedSettings['settings'] = $blockTypeField['typesettings'];

                    if ($blockTypeField['type'] == 'rias\positionfieldtype\fields\Position') {
                        $settings['blockTypes'][$i]['fields'][$j]['typesettings'] = $this->processPosition($preppedSettings);
                    }
                }
            }
        }

        return $settings;
    }

    public function processNeo($fieldInfo)
    {
        $settings = $fieldInfo['settings'];
        $fieldsService = Craft::$app->fields;

        if (isset($settings['blockTypes'])) {
            foreach ($settings['blockTypes'] as $i => $blockType) {
                foreach ($blockType['fieldLayout'] as $j => $blockTypeTab) {
                    foreach ($blockTypeTab as $k => $blockTypeFieldHandle) {
                        $blockTypeField = $fieldsService->getFieldByHandle($blockTypeFieldHandle);

                        if ($blockTypeField) {
                            $settings['blockTypes'][$i]['fieldLayout'][$j][$k] = $blockTypeField->id;
                        }
                    }
                }

                foreach ($blockType['requiredFields'] as $j => $fieldHandle) {
                    $requiredField = $fieldsService->getFieldByHandle($fieldHandle);

                    if ($requiredField) {
                        $settings['blockTypes'][$i]['requiredFields'][$j] = $requiredField->id;
                    }
                }
            }
        }

        return $settings;
    }

    public function processPosition($fieldInfo)
    {
        $settings = $fieldInfo['settings'];

        // Position field can't handle numbers for the toggle switches (this is probably incorrect in the plugin)
        // but lets be nice and fix it here. This is also the format in the export.
        if (isset($settings['options'])) {
            foreach ($settings['options'] as $key => $value) {
                $settings['options'][$key] = (string)$value;
            }
        }

        return $settings;
    }

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
        // If we don't convert them to the new counterparts, we'll get critical CP errors

        if (isset($fieldInfo['settings']['targetLocale'])) {
            unset($fieldInfo['settings']['targetLocale']);
        }

        if (isset($fieldInfo['typesettings']['targetLocale'])) {
            unset($fieldInfo['typesettings']['targetLocale']);
        }


        if (isset($fieldInfo['settings']['maxLength'])) {
            $fieldInfo['settings']['charLimit'] = $fieldInfo['settings']['maxLength'];
            unset($fieldInfo['settings']['maxLength']);
        }

        if (isset($fieldInfo['typesettings']['maxLength'])) {
            $fieldInfo['typesettings']['charLimit'] = $fieldInfo['typesettings']['maxLength'];
            unset($fieldInfo['typesettings']['maxLength']);
        }


        if ($fieldInfo['type'] == 'Categories') {
            if (isset($fieldInfo['settings']['limit'])) {
                $fieldInfo['settings']['branchLimit'] = $fieldInfo['settings']['limit'];
                unset($fieldInfo['settings']['limit']);
            }

            if (isset($fieldInfo['typesettings']['limit'])) {
                $fieldInfo['typesettings']['branchLimit'] = $fieldInfo['typesettings']['limit'];
                unset($fieldInfo['typesettings']['limit']);
            }
        }

        // Matrix needs to loop through each blocktype's field to update the type
        // Do some tricky recursive goodness to deal with all the fields in each block
        if ($fieldInfo['type'] == 'Matrix') {
            foreach ($fieldInfo['settings']['blockTypes'] as $blockHandle => $blockType) {
                foreach ($blockType['fields'] as $key => $field) {
                    $fieldInfo['settings']['blockTypes'][$blockHandle]['fields'][$key] = $this->_processCraft2Fields($field);
                }
            }

            if (isset($fieldInfo['translatable']) && $fieldInfo['translatable']) {
                $fieldInfo['settings']['localizeBlocks'] = 1;
                unset($fieldInfo['translatable']);
            }
        }

        // Use the namespaced format for the type, which is Craft 3
        $fieldInfo['type'] = 'craft\\fields\\' . $fieldInfo['type'];

        // If the field is translatable, we set the Translation Method to each language
        if (isset($fieldInfo['translatable']) && $fieldInfo['translatable']) {
            $fieldInfo['translationMethod'] = 'language';
            unset($fieldInfo['translatable']);
        }

        return $fieldInfo;
    }
}