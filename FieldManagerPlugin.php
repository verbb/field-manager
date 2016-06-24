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
        return '1.5.0';
    }

    public function getSchemaVersion()
    {
        return '1.0.0';
    }

    public function getDeveloper()
    {
        return 'S. Group';
    }

    public function getDeveloperUrl()
    {
        return 'http://sgroup.com.au';
    }

    public function getPluginUrl()
    {
        return 'https://github.com/engram-design/FieldManager';
    }

    public function getDocumentationUrl()
    {
        return $this->getPluginUrl() . '/blob/master/README.md';
    }

    public function getReleaseFeedUrl()
    {
        return 'https://raw.githubusercontent.com/engram-design/FieldManager/master/changelog.json';
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
