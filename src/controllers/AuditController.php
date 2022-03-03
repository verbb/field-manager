<?php
namespace verbb\fieldmanager\controllers;

use verbb\fieldmanager\FieldManager;

use Craft;
use craft\db\Query;
use craft\helpers\UrlHelper;
use craft\web\Controller;

use yii\web\Response;

class AuditController extends Controller
{
    // Public Methods
    // =========================================================================

    public function actionIndex(): Response
    {
        $elementInfo = FieldManager::$plugin->getAudit()->getElementInfo();

        return $this->renderTemplate('field-manager/audit', [
            'elementInfo' => $elementInfo,
        ]);
    }

}
