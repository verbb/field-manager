<?php
namespace verbb\fieldmanager\base;

use verbb\fieldmanager\FieldManager;
use verbb\fieldmanager\services\Audit;
use verbb\fieldmanager\services\Service;
use verbb\fieldmanager\services\Import;
use verbb\fieldmanager\services\Export;

use Craft;

use yii\log\Logger;

use verbb\base\BaseHelper;

trait PluginTrait
{
    // Properties
    // =========================================================================

    public static FieldManager $plugin;


    // Public Methods
    // =========================================================================

    public function getAudit(): Audit
    {
        return $this->get('audit');
    }

    public function getImport(): Import
    {
        return $this->get('import');
    }

    public function getService(): Service
    {
        return $this->get('service');
    }

    public function getExport(): Export
    {
        return $this->get('export');
    }

    public static function log($message): void
    {
        Craft::getLogger()->log($message, Logger::LEVEL_INFO, 'field-manager');
    }

    public static function error($message): void
    {
        Craft::getLogger()->log($message, Logger::LEVEL_ERROR, 'field-manager');
    }


    // Private Methods
    // =========================================================================

    private function _setPluginComponents(): void
    {
        $this->setComponents([
            'audit' => Audit::class,
            'service' => Service::class,
            'import' => Import::class,
            'export' => Export::class,
        ]);

        BaseHelper::registerModule();
    }

    private function _setLogging(): void
    {
        BaseHelper::setFileLogging('field-manager');
    }

}