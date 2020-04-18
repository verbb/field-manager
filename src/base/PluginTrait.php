<?php
namespace verbb\fieldmanager\base;

use verbb\fieldmanager\FieldManager;
use verbb\fieldmanager\services\Audit;
use verbb\fieldmanager\services\Service;
use verbb\fieldmanager\services\Import;
use verbb\fieldmanager\services\Export;

use Craft;
use craft\log\FileTarget;

use yii\log\Logger;

use verbb\base\BaseHelper;

trait PluginTrait
{
    // Static Properties
    // =========================================================================

    public static $plugin;


    // Public Methods
    // =========================================================================

    public function getAudit()
    {
        return $this->get('audit');
    }

    public function getImport()
    {
        return $this->get('import');
    }

    public function getService()
    {
        return $this->get('service');
    }

    public function getExport()
    {
        return $this->get('export');
    }

    public static function log($message)
    {
        Craft::getLogger()->log($message, Logger::LEVEL_INFO, 'field-manager');
    }

    public static function error($message)
    {
        Craft::getLogger()->log($message, Logger::LEVEL_ERROR, 'field-manager');
    }


    // Private Methods
    // =========================================================================

    private function _setPluginComponents()
    {
        $this->setComponents([
            'audit' => Audit::class,
            'service' => Service::class,
            'import' => Import::class,
            'export' => Export::class,
        ]);

        BaseHelper::registerModule();
    }

    private function _setLogging()
    {
        BaseHelper::setFileLogging('field-manager');
    }

}