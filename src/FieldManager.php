<?php
namespace verbb\fieldmanager;

use verbb\fieldmanager\base\PluginTrait;
use verbb\fieldmanager\models\Settings;
use verbb\fieldmanager\twigextensions\Extension;

use Craft;
use craft\base\Plugin;
use craft\events\RegisterUrlRulesEvent;
use craft\helpers\UrlHelper;
use craft\web\UrlManager;

use yii\base\Event;

class FieldManager extends Plugin
{
    // Public Properties
    // =========================================================================

    public $schemaVersion = '1.0.0';
    public $hasCpSettings = true;
    public $hasCpSection = true;


    // Traits
    // =========================================================================

    use PluginTrait;


    // Public Methods
    // =========================================================================

    public function init()
    {
        parent::init();

        self::$plugin = $this;

        $this->_setPluginComponents();
        $this->_setLogging();
        $this->_registerCpRoutes();
        $this->_registerTwigExtensions();

        $this->hasCpSection = $this->getService()->isCpSectionEnabled();

        // Enforce if `allowAdminChanges` is set
        if (!Craft::$app->getConfig()->getGeneral()->allowAdminChanges) {
            $this->hasCpSection = false;
        }
    }

    public function getSettingsResponse()
    {
        Craft::$app->getResponse()->redirect(UrlHelper::cpUrl('field-manager/settings'));
    }


    // Protected Methods
    // =========================================================================

    protected function createSettingsModel(): Settings
    {
        return new Settings();
    }


    // Private Methods
    // =========================================================================

    private function _registerTwigExtensions()
    {
        Craft::$app->view->registerTwigExtension(new Extension);
    }

    private function _registerCpRoutes()
    {
        Event::on(UrlManager::class, UrlManager::EVENT_REGISTER_CP_URL_RULES, function(RegisterUrlRulesEvent $event) {
            $event->rules = array_merge($event->rules, [
                'field-manager' => 'field-manager/base/index',
                'field-manager/audit' => 'field-manager/audit/index',
                'field-manager/settings' => 'field-manager/base/settings',
            ]);
        });
    }
}
