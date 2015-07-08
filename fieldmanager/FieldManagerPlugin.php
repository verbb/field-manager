<?php
namespace Craft;

class FieldManagerPlugin extends BasePlugin
{
    /* --------------------------------------------------------------
    * PLUGIN INFO
    * ------------------------------------------------------------ */

    public function getName()
    {
        return Craft::t('Field Manager');
    }

    public function getVersion()
    {
        return '1.3.4';
    }

    public function getDeveloper()
    {
        return 'S. Group';
    }

    public function getDeveloperUrl()
    {
        return 'http://sgroup.com.au';
    }

    public function hasCpSection()
    {
        return craft()->fieldManager->isCpSectionEnabled() ? true : false;
    }

    public function getSettingsHtml()
    {
        return craft()->templates->render( 'fieldmanager/settings', array(
            'settings' => $this->getSettings(),
        ) );
    }

    protected function defineSettings()
    {
        return array(
            'cpSectionEnabled' => array( AttributeType::Bool, 'default' => true ),
        );
    }



    /* --------------------------------------------------------------
    * HOOKS
    * ------------------------------------------------------------ */
 
}
