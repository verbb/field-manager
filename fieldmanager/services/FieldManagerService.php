<?php
namespace Craft;

class FieldManagerService extends BaseApplicationComponent
{
    // Public Methods
    // =========================================================================

    public function isCpSectionEnabled()
    {
        $settings = craft()->plugins->getPlugin('fieldManager')->getSettings();
        return isset( $settings[ 'cpSectionEnabled' ] ) && $settings[ 'cpSectionEnabled' ];
    }

    public function saveField($settings, $useOriginalSettings = true)
    {
        $newField = new FieldModel();

        // We're provided a new name, handle and group...
        $newField->groupId      = $settings['group'];
        $newField->name         = $settings['name'];
        $newField->handle       = $settings['handle'];

        // But we also need to fetch all other field settings from the original field
        $originField = craft()->fields->getFieldById($settings['fieldId']);
        $newField->type = $originField->type;

        if ($useOriginalSettings) {
            // Only used when cloning group - cannot feasibly custom-set any per-field settngs
            $newField->instructions = $originField->instructions;
            $newField->translatable = $originField->translatable;
            $newField->settings     = $originField->settings;
        } else {
            $newField->instructions = $settings['instructions'];
            $newField->translatable = $settings['translatable'];

            // TODO: fix this
            if ($newField->type == 'Matrix') {
                $newField->settings = $originField->settings;
            } else if ($newField->type == 'SuperTable') {
                $newField->settings = $originField->settings;
            } else {
                if (isset($settings['types'][$newField->type])) {
                    $newField->settings = $settings['types'][$newField->type];
                }
            }
        }

        // PositionSelect? Who knew?
        /*if ($newField->type == 'PositionSelect') {
            // for some reason, the PositionSelect options are keyed numerically, so they end up being saved wrong
            // They get saved as - {"options":[0,1,2,3]}
            // But should be - {"options":["left","center","right","full"]}
            $options = array();
            foreach ($originField->settings['options'] as $key => $value) { $options[$value] = 1; }
            $newField->settings = array('options' => $options);
        }*/

        // Save the field
        if (craft()->fields->saveField($newField)) {

            // Matrix, you sly dog!
            if ($newField->type == 'Matrix') {
                $this->processMatrix($originField, $newField);
            }

            // SuperTable, you sly dog!
            if ($newField->type == 'SuperTable') {
                $this->processSuperTable($originField, $newField);
            }

            Craft::log($originField->name . ' field cloned successfully.');
            return array('success' => true, 'fieldId' => $newField->id);
        } else {
            Craft::log('Could not clone the '.$originField->name.' field.', LogLevel::Error);
            return array('success' => false, 'error' => $newField->getErrors());
        }
    }


    public function saveGroup($settings)
    {
        $newGroup = new FieldGroupModel();
        $newGroup->name = $settings['name'];

        $prefix = $settings['prefix'];

        $originGroup = craft()->fields->getGroupById($settings['groupId']);

        if (craft()->fields->saveGroup($newGroup)) {
            Craft::log($originGroup->name . ' field group cloned successfully.');

            // Now we've got our new field group, clone all the field in the old field into the new one
            $originFields = craft()->fields->getFieldsByGroupId($originGroup->id);

            // Create our own settings for these new fields for name/handle.
            // Will look something like GroupName_FieldName
            foreach ($originFields as $originField) {
                $handle = $prefix . $originField->handle;

                $settings = array(
                    'fieldId'   => $originField->id,
                    'group'     => $newGroup->id,
                    'name'      => $originField->name,
                    'handle'    => $handle,
                );

                $this->saveField($settings);
            }
        } else {
            Craft::log('Could not save the '.$originGroup->name.' field group.', LogLevel::Error);
        }
    }

    public function generateHandle($string) {
        $str = str_replace(' ', '', ucwords(str_replace(' ', ' ', $string)));
        $str = lcfirst($str);
        return $str;
    }


    public function processMatrix($originField, $field) {
        $settings = new MatrixSettingsModel($field);

        // Get the original Matrix Blocks
        $blockTypes = craft()->matrix->getBlockTypesByFieldId($originField->id);

        $newBlockTypes = array();
        $extraFields = array();
        foreach ($blockTypes as $originBlockType) {
            $newBlockType = new MatrixBlockTypeModel();

            // New Matrix Block
            $newBlockType->fieldId = $field->id;
            $newBlockType->name = $originBlockType->name;
            $newBlockType->handle = $originBlockType->handle;

            $newBlockFields = array();
            foreach ($originBlockType->fields as $originField) {
                $newBlockField = new FieldModel();

                // New Matrix Block field
                $newBlockField->name         = $originField->name;
                $newBlockField->handle       = $originField->handle;
                $newBlockField->required     = $originField->required;
                $newBlockField->instructions = $originField->instructions;
                $newBlockField->translatable = $originField->translatable;
                $newBlockField->type         = $originField->type;
                $newBlockField->settings     = $originField->settings;

                $newBlockFields[] = $newBlockField;

                if ($newBlockField->type == 'SuperTable') {
                    $extraFields[] = array($originField, $newBlockField);
                }
            }

            $newBlockType->setFields($newBlockFields);

            craft()->matrix->saveBlockType($newBlockType);
            $newBlockTypes[] = $newBlockType;
        }

        //$settings->setBlockTypes($newBlockTypes);
        //craft()->matrix->saveSettings($settings);

        if ($extraFields) {
            foreach ($extraFields as $options) {
                $this->processSuperTable($options[0], $options[1]);
            }
        }
    }

    public function processSuperTable($originField, $field) {
        $settings = new SuperTable_SettingsModel($field);

        // Get the original SuperTable Blocks
        $blockTypes = craft()->superTable->getBlockTypesByFieldId($originField->id);

        $newBlockTypes = array();
        $extraFields = array();
        foreach ($blockTypes as $originBlockType) {
            $newBlockType = new SuperTable_BlockTypeModel();

            // New SuperTable Block
            $newBlockType->fieldId = $field->id;

            $newBlockFields = array();
            foreach ($originBlockType->fields as $originField) {
                $newBlockField = new FieldModel();

                // New SuperTable Block field
                $newBlockField->name         = $originField->name;
                $newBlockField->handle       = $originField->handle;
                $newBlockField->required     = $originField->required;
                $newBlockField->instructions = $originField->instructions;
                $newBlockField->translatable = $originField->translatable;
                $newBlockField->type         = $originField->type;
                $newBlockField->settings     = $originField->settings;

                $newBlockFields[] = $newBlockField;

                if ($newBlockField->type == 'Matrix') {
                    $extraFields[] = array($originField, $newBlockField);
                }
            }

            $newBlockType->setFields($newBlockFields);

            craft()->superTable->saveBlockType($newBlockType);
            $newBlockTypes[] = $newBlockType;
        }

        //$settings->setBlockTypes($newBlockTypes);
        //craft()->superTable->saveSettings($settings);

        if ($extraFields) {
            foreach ($extraFields as $options) {
                $this->processMatrix($options[0], $options[1]);
            }
        }
    }

    public function getUnusedFieldIds() 
    {
        // All fields
        $query = craft()->db->createCommand();
        $allFieldIds = $query
            ->select(craft()->db->tablePrefix . 'fields.id')
            ->from('fields')
            ->order(craft()->db->tablePrefix . 'fields.id')
            ->queryColumn();
        
        // Fields in-use
        $query = craft()->db->createCommand();
        $query->distinct = true;
        $usedFieldIds = $query
            ->select(craft()->db->tablePrefix . 'fieldlayoutfields.fieldId')
            ->from('fieldlayoutfields')
            ->order(craft()->db->tablePrefix . 'fieldlayoutfields.fieldId')
            ->queryColumn();

        // Get only the unused fields
        return array_diff($allFieldIds, $usedFieldIds);
    }


}
