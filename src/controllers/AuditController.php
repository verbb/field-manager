<?php
namespace verbb\fieldmanager\controllers;

use verbb\fieldmanager\FieldManager;

use craft\web\Controller;

use yii\web\Response;

class AuditController extends Controller
{
    // Public Methods
    // =========================================================================

    public function beforeAction($action): bool
    {
        if (!parent::beforeAction($action)) {
            return false;
        }

        $this->requireCpRequest();
        $this->requireAdmin();

        return true;
    }

    public function actionIndex(): Response
    {
        $elementInfo = FieldManager::$plugin->getAudit()->getElementInfo();

        return $this->renderTemplate('field-manager/audit', [
            'elementInfo' => $elementInfo,
        ]);
    }

}
