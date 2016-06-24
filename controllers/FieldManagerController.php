<?php
namespace Craft;

class FieldManagerController extends BaseController
{
    // Public Methods
    // =========================================================================

    public function actionGetGroupFieldHtml()
    {
        $this->requirePostRequest();
        $this->requireAjaxRequest();

        $groupId = craft()->request->getRequiredPost('groupId');
        $template = craft()->request->getRequiredPost('template');
        $group = craft()->fields->getGroupById($groupId);

        $variables = array(
            'group' => $group,
            'prefix' => StringHelper::toCamelCase($group->name) . '_',
        );

        $returnData['html'] = $this->renderTemplate('fieldmanager/_group/' . $template, $variables, true);

        $this->returnJson($returnData);
    }

    public function actionMapFields()
    {
        $this->requirePostRequest();

        $json = craft()->request->getParam('data', '{}');
        $data = craft()->fieldManager_import->getData($json);

        if ($data) {
            $this->renderTemplate('fieldmanager/import/map', array(
                'fields' => $data,
                'errors' => array(),
            ));
        } else {
            craft()->userSession->setError(Craft::t('Could not parse JSON data.'));
        }
    }

    public function actionGetModalBody()
    {
        $this->requirePostRequest();
        $this->requireAjaxRequest();

        $fieldId = craft()->request->getPost('fieldId');
        $groupId = craft()->request->getPost('groupId');
        $template = craft()->request->getPost('template');

        $field = craft()->fields->getFieldById($fieldId);

        $variables = array();

        if ($fieldId) {
            $variables['field'] = craft()->fields->getFieldById($fieldId);
        }

        if ($groupId) {
            $variables['group'] = craft()->fields->getGroupById($groupId);
        }

        // Don't process the output yet - issues with JS in template...
        $returnData = $this->renderTemplate('fieldmanager/_single/'.$template, $variables, false, false);

        $this->returnJson($returnData);
    }

    public function actionCloneField()
    {
        $this->requirePostRequest();
        $this->requireAjaxRequest();

        $fieldId = craft()->request->getRequiredPost('fieldId');

        $field = new FieldModel();
        $field->groupId = craft()->request->getRequiredPost('group');
        $field->name = craft()->request->getPost('name');
        $field->handle = craft()->request->getPost('handle');
        $field->instructions = craft()->request->getPost('instructions');
        $field->translatable = (bool)craft()->request->getPost('translatable');
        $field->type = craft()->request->getRequiredPost('type');

        $typeSettings = craft()->request->getPost('types');
        if (isset($typeSettings[$field->type])) {
            $field->settings = $typeSettings[$field->type];
        }

        $originField = craft()->fields->getFieldById($fieldId);

        if (craft()->fieldManager->saveField($field, $originField)) {
            $this->returnJson(array('success' => true, 'fieldId' => $field->id));
        } else {
            $this->returnJson(array('success' => false, 'error' => $field->getErrors()));
        }
    }

    public function actionCloneGroup()
    {
        $this->requirePostRequest();
        $this->requireAjaxRequest();

        $groupId = craft()->request->getRequiredPost('groupId');
        $prefix = craft()->request->getRequiredPost('prefix');

        $group = new FieldGroupModel();
        $group->name = craft()->request->getRequiredPost('name');

        $originGroup = craft()->fields->getGroupById($groupId);

        if (craft()->fieldManager->saveGroup($group, $prefix, $originGroup)) {
            $this->returnJson(array('success' => true, 'groupId' => $group->id));
        } else {
            $this->returnJson(array('success' => false, 'error' => $group->getErrors()));
        }
    }

    public function actionExport()
    {
        $this->requirePostRequest();

        $fields = craft()->request->getParam('selectedFields');
        $fieldsObj = craft()->fieldManager_export->export($fields);

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

        $fields = craft()->request->getParam('fields', '');
        $json = craft()->request->getParam('data', '{}');
        $data = craft()->fieldManager_import->getData($json);

        // First - remove any field we're not importing
        $fieldsToImport = array();
        foreach ($fields as $key => $field) {
            if (isset($field['groupId'])) {
                if ($field['groupId'] != 'noimport') {

                    // Get the field data from our imported JSON data
                    $fieldsToImport[$key] = $data[$key];

                    $fieldsToImport[$key]['name'] = $field['name'];
                    $fieldsToImport[$key]['handle'] = $field['handle'];
                    $fieldsToImport[$key]['groupId'] = $field['groupId'];
                }
            }
        }

        if (count($fieldsToImport) > 0) {
            $importErrors = craft()->fieldManager_import->import($fieldsToImport);

            if (!$importErrors) {
                craft()->userSession->setNotice('Imported successfully.');
            } else {
                craft()->userSession->setError('Error importing fields.');

                $this->renderTemplate('fieldmanager/import/map', array(
                    'fields' => $fieldsToImport,
                    'errors' => $importErrors,
                ));
            }
        } else {
            craft()->userSession->setNotice('No fields imported.');
        }
    }

    // From Craft's native saveField, which doesn't really support Ajax...
    public function actionSaveField()
    {
        $this->requirePostRequest();

        $field = new FieldModel();

        $field->id           = craft()->request->getPost('fieldId');
        $field->groupId      = craft()->request->getRequiredPost('group');
        $field->name         = craft()->request->getPost('name');
        $field->handle       = craft()->request->getPost('handle');
        $field->instructions = craft()->request->getPost('instructions');
        $field->translatable = (bool) craft()->request->getPost('translatable');

        $field->type = craft()->request->getRequiredPost('type');

        $typeSettings = craft()->request->getPost('types');
        if (isset($typeSettings[$field->type])) {
            $field->settings = $typeSettings[$field->type];
        }

        if (craft()->fields->saveField($field)) {
            $this->returnJson(array('success' => true));
        } else {
            $this->returnJson(array('success' => false, 'error' => $field->getErrors()));
        }
    }

}