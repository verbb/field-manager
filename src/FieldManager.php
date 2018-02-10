<?php
namespace verbb\fieldmanager;

use verbb\fieldmanager\base\PluginTrait;
use verbb\fieldmanager\models\Settings;
use verbb\fieldmanager\services\Service;
use verbb\fieldmanager\services\Import;
use verbb\fieldmanager\services\Export;

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

        // Register Components (Services)
        $this->setComponents([
            'service' => Service::class,
            'import'  => Import::class,
            'export'  => Export::class,
        ]);

        // Register CP routes
        Event::on(UrlManager::class, UrlManager::EVENT_REGISTER_CP_URL_RULES, [$this, 'registerCpUrlRules']);

        // Handle cp panel icon
        $this->hasCpSection = $this->service->isCpSectionEnabled();
    }

    /**
     * @param RegisterUrlRulesEvent $event
     */
    public function registerCpUrlRules(RegisterUrlRulesEvent $event)
    {
        $rules = [
            'field-manager' => 'field-manager/base/index',
        ];

        $event->rules = array_merge($event->rules, $rules);
    }


    // Protected Methods
    // =========================================================================

    /**
     * @return Settings
     */
    protected function createSettingsModel(): Settings
    {
        return new Settings();
    }

    /**
     * @return string
     */
    protected function settingsHtml(): string
    {
        return Craft::$app->getView()->renderTemplate('field-manager/settings', [
            'settings' => $this->getSettings(),
        ]);
    }
}
