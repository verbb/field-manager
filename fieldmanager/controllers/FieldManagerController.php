<?php
namespace Craft;

class FieldManagerController extends BaseController
{
    public function actionGetGroupFieldHtml()
    {
        $this->requirePostRequest();
        $this->requireAjaxRequest();

        $groupId = craft()->request->getRequiredPost('groupId');
        $group = craft()->fields->getGroupById($groupId);

        $variables = array(
            'group' => $group,
            'prefix' => craft()->fieldManager->generateHandle($group->name) . '_',
        );

        $returnData['html'] = $this->renderTemplate('fieldmanager/_fields/group', $variables, true);

        $this->returnJson($returnData);
    }

    public function actionGetSingleFieldHtml()
    {
        $this->requirePostRequest();
        $this->requireAjaxRequest();

        $fieldId = craft()->request->getRequiredPost('fieldId');
        $groupId = craft()->request->getRequiredPost('groupId');

        $variables = array(
            'field' => craft()->fields->getFieldById($fieldId),
            'group' => craft()->fields->getGroupById($groupId),
        );

        $returnData['html'] = $this->renderTemplate('fieldmanager/_fields/single', $variables, true);

        $this->returnJson($returnData);
    }






    public function actionSaveSingleField()
    {
        $this->requirePostRequest();
        $this->requireAjaxRequest();

        $settings = array(
            'fieldId' => craft()->request->getRequiredPost('fieldId'),
            'group' => craft()->request->getRequiredPost('group'),
            'name' => craft()->request->getRequiredPost('name'),
            'handle' => craft()->request->getRequiredPost('handle'),
        );

        $originField = craft()->fields->getFieldById($settings['fieldId']);

        if ((craft()->fieldManager->saveField($settings)) !== false) {
            $returnData = array('success' => true);

            craft()->userSession->setNotice(Craft::t($originField->name . ' field cloned successfully.'));
        } else {
            $returnData = array('success' => false);

            //craft()->userSession->setError(Craft::t('Could not clone the '.$originField->name.' field.'));
        }

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

}