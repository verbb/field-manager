<?php
namespace verbb\fieldmanager\base;

use verbb\fieldmanager\FieldManager;
use verbb\fieldmanager\services\Audit;
use verbb\fieldmanager\services\Service;
use verbb\fieldmanager\services\Import;
use verbb\fieldmanager\services\Export;

use verbb\base\LogTrait;
use verbb\base\helpers\Plugin;

trait PluginTrait
{
    // Properties
    // =========================================================================

    public static ?FieldManager $plugin = null;


    // Traits
    // =========================================================================

    use LogTrait;
    

    // Static Methods
    // =========================================================================

    public static function config(): array
    {
        Plugin::bootstrapPlugin('field-manager');

        return [
            'components' => [
                'audit' => Audit::class,
                'service' => Service::class,
                'import' => Import::class,
                'export' => Export::class,
            ],
        ];
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

}