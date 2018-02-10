<?php
namespace verbb\fieldmanager\base;

use verbb\fieldmanager\FieldManager;

use Craft;

trait PluginTrait
{
    // Static Properties
    // =========================================================================

    /**
     * @var FieldManager
     */
    public static $plugin;


    // Static Methods
    // =========================================================================

    public static function error($message, array $params = [])
    {
        Craft::error(Craft::t('field-manager', $message, $params), __METHOD__);
    }

    public static function info($message, array $params = [])
    {
        Craft::info(Craft::t('field-manager', $message, $params), __METHOD__);
    }


    // Public Methods
    // =========================================================================

    public function getService()
    {
        return $this->get('service');
    }
}