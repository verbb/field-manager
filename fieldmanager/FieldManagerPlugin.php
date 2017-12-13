<?php
namespace Craft;

class FieldManagerPlugin extends BasePlugin
{
    // =========================================================================
    // PLUGIN INFO
    // =========================================================================

    public function getName()
    {
        return Craft::t('Field Manager');
    }

    public function getVersion()
    {
        return '1.5.5';
    }

    public function getSchemaVersion()
    {
        return '1.0.0';
    }

    public function getDeveloper()
    {
        return 'Verbb';
    }

    public function getDeveloperUrl()
    {
        return 'https://verbb.io';
    }

    public function getPluginUrl()
    {
        return 'https://github.com/verbb/field-manager';
    }

    public function getDocumentationUrl()
    {
        return 'https://verbb.io/craft-plugins/field-manager/docs';
    }

    public function getReleaseFeedUrl()
    {
        return 'https://raw.githubusercontent.com/verbb/field-manager/craft-2/changelog.json';
    }

    public function hasCpSection()
    {
        return craft()->fieldManager->isCpSectionEnabled() ? true : false;
    }

    public function getSettingsHtml()
    {
        return craft()->templates->render('fieldmanager/settings', array(
            'settings' => $this->getSettings(),
        ));
    }

    protected function defineSettings()
    {
        return array(
            'cpSectionEnabled' => array( AttributeType::Bool, 'default' => true ),
        );
    }
}
