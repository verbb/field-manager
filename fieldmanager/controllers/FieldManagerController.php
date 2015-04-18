<?php
namespace Craft;

class FieldManagerController extends BaseController
{
    public function actionGetGroupFieldHtml()
    {
        $this->requirePostRequest();
        $this->requireAjaxRequest();

        $groupId = craft()->request->getRequiredPost('groupId');
        $template = craft()->request->getRequiredPost('template');
        $group = craft()->fields->getGroupById($groupId);

        $variables = array(
            'group' => $group,
            'prefix' => craft()->fieldManager->generateHandle($group->name) . '_',
        );

        $returnData['html'] = $this->renderTemplate('fieldmanager/_group/' . $template, $variables, true);

        $this->returnJson($returnData);
    }

    /*public function actionGetSingleFieldHtml()
    {
        $this->requirePostRequest();
        $this->requireAjaxRequest();

        $fieldId = craft()->request->getRequiredPost('fieldId');
        $groupId = craft()->request->getRequiredPost('groupId');

        $variables = array(
            'field' => craft()->fields->getFieldById($fieldId),
            'group' => craft()->fields->getGroupById($groupId),
        );

        $returnData['html'] = $this->renderTemplate('fieldmanager/_single/single', $variables, true);

        $this->returnJson($returnData);
    }*/

    public function actionGetModalBody()
    {
        $this->requirePostRequest();
        $this->requireAjaxRequest();

        $fieldId = craft()->request->getRequiredPost('fieldId');
        $groupId = craft()->request->getRequiredPost('groupId');
        $template = craft()->request->getRequiredPost('template');

        $field = craft()->fields->getFieldById($fieldId);

        $variables = array(
            'field' => craft()->fields->getFieldById($fieldId),
            'group' => craft()->fields->getGroupById($groupId),
        );

        // Don't process the output yet - issues with JS in template...
        $returnData = $this->renderTemplate('fieldmanager/_single/'.$template, $variables, false, false);

        $this->returnJson($returnData);
    }


    public function actionSaveSingleField()
    {
        $this->requirePostRequest();
        $this->requireAjaxRequest();

        $settings = array(
            'fieldId' => craft()->request->getPost('fieldId'),
            'group' => craft()->request->getRequiredPost('group'),
            'name' => craft()->request->getPost('name'),
            'handle' => craft()->request->getPost('handle'),
            'instructions' => craft()->request->getPost('instructions'),
            'translatable' => (bool)craft()->request->getPost('translatable'),
            'type' => craft()->request->getRequiredPost('type'),
            'types' => craft()->request->getPost('types'),
        );

        $originField = craft()->fields->getFieldById($settings['fieldId']);

        $returnData = craft()->fieldManager->saveField($settings, false);

        $this->returnJson($returnData);
    }

    public function actionSaveGroupField()
    {
        $this->requirePostRequest();
        $this->requireAjaxRequest();

        $settings = array(
            'groupId' => craft()->request->getRequiredPost('groupId'),
            'name' => craft()->request->getRequiredPost('name'),
            'prefix' => craft()->request->getRequiredPost('prefix'),
        );

        $originGroup = craft()->fields->getGroupById($settings['groupId']);

        if ((craft()->fieldManager->saveGroup($settings)) !== false) {
            $returnData = array('success' => true);

            craft()->userSession->setNotice(Craft::t($originGroup->name . ' field group cloned successfully.'));
        } else {
            $returnData = array('success' => false);

            //craft()->userSession->setError(Craft::t('Could not clone the '.$originGroup->name.' field group.'));
        }

        $this->returnJson($returnData);
    }

    public function actionExport()
    {
        $this->requirePostRequest();

        $fields = craft()->request->getParam('selectedFields');
        $fieldsObj = craft()->fieldManager_port->export($fields);

        // Support PHP <5.4, JSON_PRETTY_PRINT = 128, JSON_NUMERIC_CHECK = 32
        $json = json_encode($fieldsObj, 128 | 32);

        HeaderHelper::setDownload('export.json', strlen($json));

        JsonHelper::sendJsonHeaders();
        echo $json;
        craft()->end();
    }

    public function actionImport()
    {
        $this->requirePostRequest();

        $group = craft()->request->getParam('group', '');
        $json = craft()->request->getParam('data', '{}');
        $data = json_decode($json, true);

        if (!$group) {
            return craft()->userSession->setError('Specify a group to import into.');
        }

        if ($data !== null) {
            $fieldImportResult = craft()->fieldManager_port->import($group, $data);

            if ($fieldImportResult === true) {
                craft()->userSession->setNotice('Imported successfully.');
            } else {
                craft()->userSession->setError(implode(', ', $fieldImportResult));
            }
        }
    }

}