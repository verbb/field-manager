<?php
namespace verbb\fieldmanager\base;

use verbb\fieldmanager\FieldManager;
use verbb\fieldmanager\services\Service;
use verbb\fieldmanager\services\Import;
use verbb\fieldmanager\services\Export;

use Craft;
use craft\log\FileTarget;

use yii\log\Logger;

trait PluginTrait
{
    // Static Properties
    // =========================================================================

    public static $plugin;


    // Public Methods
    // =========================================================================

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

    private function _setPluginComponents()
    {
        $this->setComponents([
            'service' => Service::class,
            'import' => Import::class,
            'export' => Export::class,
        ]);
    }

    private function _setLogging()
    {
        Craft::getLogger()->dispatcher->targets[] = new FileTarget([
            'logFile' => Craft::getAlias('@storage/logs/field-manager.log'),
            'categories' => ['field-manager'],
        ]);
    }

    public static function log($message)
    {
        Craft::getLogger()->log($message, Logger::LEVEL_INFO, 'field-manager');
    }

    public static function error($message)
    {
        Craft::getLogger()->log($message, Logger::LEVEL_ERROR, 'field-manager');
    }

}