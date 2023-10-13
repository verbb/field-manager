<?php
namespace verbb\fieldmanager;

use verbb\fieldmanager\base\PluginTrait;
use verbb\fieldmanager\models\Settings;
use verbb\fieldmanager\twigextensions\Extension;
use verbb\fieldmanager\variables\FieldManagerVariable;

use Craft;
use craft\base\Model;
use craft\base\Plugin;
use craft\events\RegisterUrlRulesEvent;
use craft\helpers\UrlHelper;
use craft\web\UrlManager;
use craft\web\twig\variables\CraftVariable;

use yii\base\Event;

class FieldManager extends Plugin
{
    // Properties
    // =========================================================================

    public bool $hasCpSection = true;
    public bool $hasCpSettings = true;
    public string $schemaVersion = '1.0.0';


    // Traits
    // =========================================================================

    use PluginTrait;


    // Public Methods
    // =========================================================================

    public function init(): void
    {
        parent::init();

        self::$plugin = $this;

        $this->_registerTwigExtensions();
        $this->_registerVariables();

        if (Craft::$app->getRequest()->getIsCpRequest()) {
            $this->_registerCpRoutes();
        }

        $this->hasCpSection = $this->getService()->isCpSectionEnabled();

        // Enforce if `allowAdminChanges` is set
        if (!Craft::$app->getConfig()->getGeneral()->allowAdminChanges) {
            $this->hasCpSection = false;
        }
    }

    public function getSettingsResponse(): mixed
    {
        return Craft::$app->getResponse()->redirect(UrlHelper::cpUrl('field-manager/settings'));
    }


    // Protected Methods
    // =========================================================================

    protected function createSettingsModel(): Settings
    {
        return new Settings();
    }


    // Private Methods
    // =========================================================================

    private function _registerTwigExtensions(): void
    {
        Craft::$app->getView()->registerTwigExtension(new Extension);
    }

    private function _registerCpRoutes(): void
    {
        Event::on(UrlManager::class, UrlManager::EVENT_REGISTER_CP_URL_RULES, function(RegisterUrlRulesEvent $event) {
            $event->rules = array_merge($event->rules, [
                'field-manager' => 'field-manager/base/index',
                'field-manager/audit' => 'field-manager/audit/index',
                'field-manager/settings' => 'field-manager/base/settings',
            ]);
        });
    }

    private function _registerVariables(): void
    {
        Event::on(CraftVariable::class, CraftVariable::EVENT_INIT, function(Event $event) {
            $event->sender->set('fieldManager', FieldManagerVariable::class);
        });
    }
}
