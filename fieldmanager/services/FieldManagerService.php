<?php
namespace Craft;

class FieldManagerService extends BaseApplicationComponent
{
    public function isCpSectionDisabled()
    {
        $settings = craft()->plugins->getPlugin('fieldManager')->getSettings();
        return isset( $settings[ 'cpSectionDisabled' ] ) && $settings[ 'cpSectionDisabled' ];
    }

    public function saveField($settings)
    {
        $newField = new FieldModel();

        // We're provided a new name, handle and group...
        $newField->groupId      = $settings['group'];
        $newField->name         = $settings['name'];
        $newField->handle       = $settings['handle'];

        // But we also need to fetch all other field settings from the original field
        $originField = craft()->fields->getFieldById($settings['fieldId']);
        $newField->instructions = $originField->instructions;
        $newField->translatable = $originField->translatable;
        $newField->type         = $originField->type;
        $newField->settings     = $originField->settings;

        // PositionSelect? Who knew?
        if ($newField->type == 'PositionSelect') {
            // for some reason, the PositionSelect options are keyed numerically, so they end up being saved wrong
            // They get saved as - {"options":[0,1,2,3]}
            // But should be - {"options":["left","center","right","full"]}
            $options = array();
            foreach ($originField->settings['options'] as $key => $value) { $options[$value] = 1; }
            $newField->settings = array('options' => $options);
        }

        // Save the field
        if (craft()->fields->saveField($newField)) {

            // Matrix, you sly dog!
            if ($newField->type == 'Matrix') {
                $this->processMatrix($originField, $newField);
            }

            Craft::log($originField->name . ' field cloned successfully.');
            return true;
        } else {
            Craft::log('Could not clone the '.$originField->name.' field.', LogLevel::Error);
            return false;
        }
    }


    public function saveGroup($settings)
    {
        $newGroup = new FieldGroupModel();
        $newGroup->name = $settings['name'];

        $originGroup = craft()->fields->getGroupById($settings['groupId']);

        if (craft()->fields->saveGroup($newGroup)) {
            Craft::log($originGroup->name . ' field group cloned successfully.');

            // Now we've got our new field group, clone all the field in the old field into the new one
            $originFields = craft()->fields->getFieldsByGroupId($originGroup->id);

            // Create our own settings for these new fields for name/handle.
            // Will look something like GroupName_FieldName
            foreach ($originFields as $originField) {
                $handle = $settings['prefix'] . $originField->handle;

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
                $newBlockField->translatable = $originField->translatable;
                $newBlockField->type         = $originField->type;
                $newBlockField->settings     = $originField->settings;

                $newBlockFields[] = $newBlockField;
            }

            $newBlockType->setFields($newBlockFields);

            craft()->matrix->saveBlockType($newBlockType);
            $newBlockTypes[] = $newBlockType;
        }

        $settings->setBlockTypes($newBlockTypes);
        craft()->matrix->saveSettings($settings);
    }


}