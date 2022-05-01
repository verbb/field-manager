<?php
namespace verbb\fieldmanager\base;

use verbb\fieldmanager\FieldManager;
use verbb\fieldmanager\services\Audit;
use verbb\fieldmanager\services\Service;
use verbb\fieldmanager\services\Import;
use verbb\fieldmanager\services\Export;
use verbb\base\BaseHelper;

use Craft;

use yii\log\Logger;

trait PluginTrait
{
    // Properties
    // =========================================================================

    public static FieldManager $plugin;


    // Static Methods
    // =========================================================================

    public static function log(string $message, array $params = []): void
    {
        $message = Craft::t('field-manager', $message, $params);

        Craft::getLogger()->log($message, Logger::LEVEL_INFO, 'field-manager');
    }

    public static function error(string $message, array $params = []): void
    {
        $message = Craft::t('field-manager', $message, $params);

        Craft::getLogger()->log($message, Logger::LEVEL_ERROR, 'field-manager');
    }


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


    // Private Methods
    // =========================================================================

    private function _registerComponents(): void
    {
        $this->setComponents([
            'audit' => Audit::class,
            'service' => Service::class,
            'import' => Import::class,
            'export' => Export::class,
        ]);

        BaseHelper::registerModule();
    }

    private function _registerLogTarget(): void
    {
        BaseHelper::setFileLogging('field-manager');
    }

}