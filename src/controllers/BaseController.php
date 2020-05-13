<?php
namespace verbb\fieldmanager\controllers;

use verbb\fieldmanager\FieldManager;

use Craft;
use craft\base\Field;
use craft\fields\PlainText;
use craft\helpers\ArrayHelper;
use craft\helpers\StringHelper;
use craft\models\FieldGroup;
use craft\web\Controller;

use yii\web\NotFoundHttpException;

class BaseController extends Controller
{
    // Public Methods
    // =========================================================================

    public function actionIndex()
    {
        $variables['unusedFieldIds'] = FieldManager::$plugin->service->getUnusedFieldIds();

        return $this->renderTemplate('field-manager/index', $variables);
    }

    public function actionSettings()
    {
        $settings = FieldManager::$plugin->getSettings();

        return $this->renderTemplate('field-manager/settings', [
            'settings' => $settings,
        ]);
    }

    public function actionGetGroupModalBody()
    {
        $this->requirePostRequest();
        $this->requireAcceptsJson();

        $fieldsService = Craft::$app->getFields();
        $request = Craft::$app->getRequest();

        $groupId = $request->getBodyParam('groupId');

        $group = null;
        $prefix = null;

        if ($groupId) {
            $group = $fieldsService->getGroupById($groupId);
            $prefix = StringHelper::toCamelCase($group->name) . '_';
        }

        $variables = [
            'group'  => $group,
            'prefix' => $prefix,
            'clone'  => $request->getBodyParam('clone'),
        ];

        $html = $this->getView()->renderTemplate('field-manager/_group/group_edit', $variables);

        return $this->asJson([
            'success'   => true,
            'html' => $html,
        ]);
    }

    public function actionGetFieldModalBody()
    {
        $this->requirePostRequest();
        $this->requireAcceptsJson();

        $view = $this->getView();

        $fieldsService = Craft::$app->getFields();
        $request = Craft::$app->getRequest();

        $fieldId = (int)$request->getBodyParam('fieldId');
        $groupId = (int)$request->getBodyParam('groupId');

        // The field
        // ---------------------------------------------------------------------

        $field = null;
        $missingFieldPlaceholder = null;

        if ($field === null && $fieldId !== null) {
            $field = $fieldsService->getFieldById($fieldId);

            if ($field instanceof MissingField) {
                $missingFieldPlaceholder = $field->getPlaceholderHtml();
                $field = $field->createFallback(PlainText::class);
            }
        }

        if ($field === null) {
            $field = $fieldsService->createField(PlainText::class);
        }

        // Supported translation methods
        // ---------------------------------------------------------------------

        $supportedTranslationMethods = [];
        /** @var string[]|FieldInterface[] $allFieldTypes */
        $allFieldTypes = $fieldsService->getAllFieldTypes();

        foreach ($allFieldTypes as $class) {
            if ($class === get_class($field) || $class::isSelectable()) {
                $supportedTranslationMethods[$class] = $class::supportedTranslationMethods();
            }
        }

        // Allowed field types
        // ---------------------------------------------------------------------

        if (!$field->id) {
            $compatibleFieldTypes = $allFieldTypes;
        } else {
            $compatibleFieldTypes = $fieldsService->getCompatibleFieldTypes($field, true);
        }

        /** @var string[]|FieldInterface[] $compatibleFieldTypes */
        $fieldTypeOptions = [];

        foreach ($allFieldTypes as $class) {
            if ($class === get_class($field) || $class::isSelectable()) {
                $compatible = in_array($class, $compatibleFieldTypes, true);
                $fieldTypeOptions[] = [
                    'value' => $class,
                    'label' => $class::displayName() . ($compatible ? '' : ' ⚠️'),
                ];
            }
        }

        // Sort them by name
        ArrayHelper::multisort($fieldTypeOptions, 'label');

        // Groups
        // ---------------------------------------------------------------------

        $allGroups = $fieldsService->getAllGroups();

        if (empty($allGroups)) {
            throw new ServerErrorHttpException('No field groups exist');
        }

        if ($groupId === null) {
            $groupId = ($field !== null && $field->groupId !== null) ? $field->groupId : $allGroups[0]->id;
        }

        $fieldGroup = $fieldsService->getGroupById($groupId);

        $groupOptions = [];

        foreach ($allGroups as $group) {
            $groupOptions[] = [
                'value' => $group->id,
                'label' => $group->name
            ];
        }

        $variables = [
            'fieldId' => $fieldId,
            'field' => $field,
            'allFieldTypes' => $allFieldTypes,
            'fieldTypeOptions' => $fieldTypeOptions,
            'missingFieldPlaceholder' => $missingFieldPlaceholder,
            'supportedTranslationMethods' => $supportedTranslationMethods,
            'compatibleFieldTypes' => $compatibleFieldTypes,
            'groupId' => $groupId,
            'groupOptions' => $groupOptions,
        ];

        $html = $view->renderTemplate('field-manager/_single/field_edit', $variables);

        $headHtml = $view->getHeadHtml();
        $footHtml = $view->getBodyHtml();

        return $this->asJson([
            'success'   => true,
            'html' => $html,
            'headHtml' => $headHtml,
            'footHtml' => $footHtml,
        ]);
    }

    public function actionCloneField()
    {
        $this->requirePostRequest();
        $this->requireAcceptsJson();

        $fieldId = Craft::$app->request->getRequiredBodyParam('fieldId');

        $fieldsService = Craft::$app->getFields();
        $request = Craft::$app->getRequest();
        $type = $request->getRequiredBodyParam('type');

        $field = $fieldsService->createField([
            'type' => $type,
            'groupId' => $request->getRequiredBodyParam('group'),
            'name' => $request->getBodyParam('name'),
            'handle' => $request->getBodyParam('handle'),
            'instructions' => $request->getBodyParam('instructions'),
            'searchable' => (bool)$request->getBodyParam('searchable', true),
            'translationMethod' => $request->getBodyParam('translationMethod', Field::TRANSLATION_METHOD_NONE),
            'translationKeyFormat' => $request->getBodyParam('translationKeyFormat'),
            'settings' => $request->getBodyParam('types.' . $type),
        ]);

        $originField = $fieldsService->getFieldById($fieldId);

        if (!FieldManager::$plugin->service->cloneField($field, $originField)) {
            return $this->asJson(['success' => false, 'error' => $field->getErrors()]);
        }

        return $this->asJson(['success' => true, 'fieldId' => $field->id]);
    }

    public function actionCloneGroup()
    {
        $this->requirePostRequest();
        $this->requireAcceptsJson();

        $groupId = Craft::$app->request->getRequiredBodyParam('groupId');
        $prefix = Craft::$app->request->getRequiredBodyParam('prefix');

        $group = new FieldGroup();
        $group->name = Craft::$app->request->getRequiredBodyParam('name');

        $originGroup = Craft::$app->fields->getGroupById($groupId);

        if (!FieldManager::$plugin->service->cloneGroup($group, $prefix, $originGroup)) {
            return $this->asJson(['success' => false, 'error' => $group->getErrors()]);
        }

        return $this->asJson(['success' => true, 'groupId' => $group->id]);
    }

    // From Craft's native saveField, which doesn't really support Ajax...
    public function actionSaveField()
    {
        $this->requirePostRequest();

        $fieldsService = Craft::$app->getFields();
        $request = Craft::$app->getRequest();
        $type = $request->getRequiredBodyParam('type');

        $field = $fieldsService->createField([
            'type' => $type,
            'id' => $request->getBodyParam('fieldId'),
            'groupId' => $request->getRequiredBodyParam('group'),
            'name' => $request->getBodyParam('name'),
            'handle' => $request->getBodyParam('handle'),
            'instructions' => $request->getBodyParam('instructions'),
            'searchable' => (bool)$request->getBodyParam('searchable', true),
            'translationMethod' => $request->getBodyParam('translationMethod', Field::TRANSLATION_METHOD_NONE),
            'translationKeyFormat' => $request->getBodyParam('translationKeyFormat'),
            'settings' => $request->getBodyParam('types.' . $type),
        ]);

        if (!$fieldsService->saveField($field)) {
            return $this->asJson(['success' => false, 'error' => $field->getErrors()]);
        }

        return $this->asJson(['success' => true]);
    }

    public function actionExport()
    {
        $this->requirePostRequest();

        $request = Craft::$app->getRequest();

        $fields = $request->getParam('selectedFields');
        $download = $request->getParam('download');

        if (\count($fields) > 0) {
            $fieldsObj = FieldManager::$plugin->export->export($fields);

            // Support PHP <5.4, JSON_PRETTY_PRINT = 128, JSON_NUMERIC_CHECK = 32
            $json = json_encode($fieldsObj, 128 | 32);

            if ($download) {
                Craft::$app->getResponse()->sendContentAsFile($json, 'export.json');
                Craft::$app->end();
            } else {
                return $this->renderTemplate('field-manager/export', [
                    'json' => $json,
                ]);
            }
        }

        Craft::$app->session->setError(Craft::t('field-manager', 'Could not export data.'));
    }

    public function actionMapFields()
    {
        $this->requirePostRequest();

        $json = Craft::$app->request->getParam('data', '{}');
        $data = FieldManager::$plugin->import->getData($json);

        if ($data) {
            return $this->renderTemplate('field-manager/import/map', [
                'fields' => $data,
                'errors' => [],
            ]);
        }

        Craft::$app->session->setError(Craft::t('field-manager', 'Could not parse JSON data.'));
    }

    public function actionImport()
    {
        $this->requirePostRequest();

        /** @var array $fields */
        $fields = Craft::$app->request->getBodyParam('fields', '');
        $json = Craft::$app->request->getBodyParam('data', '{}');
        $data = FieldManager::$plugin->import->getData($json);

        $fieldsToImport = FieldManager::$plugin->import->prepFieldsForImport($fields, $data);

        if ($fieldsToImport) {
            $importErrors = FieldManager::$plugin->import->import($fieldsToImport);

            if (!$importErrors) {
                Craft::$app->session->setNotice(Craft::t('field-manager', 'Imported successfully.'));
            } else {
                Craft::$app->session->setError(Craft::t('field-manager', 'Error importing fields.'));

                return $this->renderTemplate('field-manager/import/map', [
                    'fields' => $fieldsToImport,
                    'errors' => $importErrors,
                ]);
            }
        } else {
            Craft::$app->session->setNotice(Craft::t('field-manager', 'No fields imported.'));
        }
    }
}