<?php
namespace verbb\fieldmanager;

use verbb\fieldmanager\base\PluginTrait;
use verbb\fieldmanager\models\Settings;

use Craft;
use craft\base\Plugin;
use craft\events\RegisterUrlRulesEvent;
use craft\web\UrlManager;

use yii\base\Event;

class FieldManager extends Plugin
{
    // Traits
    // =========================================================================

    use PluginTrait;


    // Public Properties
    // =========================================================================

    public $hasCpSection = true;


    // Public Methods
    // =========================================================================

    public function init()
    {
        parent::init();

        self::$plugin = $this;

        $this->_setPluginComponents();
        $this->_setLogging();
        $this->_registerCpRoutes();

        $this->hasCpSection = $this->getService()->isCpSectionEnabled();
    }


    // Protected Methods
    // =========================================================================

    protected function createSettingsModel(): Settings
    {
        return new Settings();
    }

    protected function settingsHtml(): string
    {
        return Craft::$app->getView()->renderTemplate('field-manager/settings', [
            'settings' => $this->getSettings(),
        ]);
    }


    // Private Methods
    // =========================================================================

    private function _registerCpRoutes()
    {
        Event::on(UrlManager::class, UrlManager::EVENT_REGISTER_CP_URL_RULES, function(RegisterUrlRulesEvent $event) {
            $event->rules = array_merge($event->rules, [
                'field-manager' => 'field-manager/base/index',
            ]);
        });
    }
}
