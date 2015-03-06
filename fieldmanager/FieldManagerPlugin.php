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
        return '1.1';
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
        return craft()->fieldManager->isCpSectionDisabled() ? false : true;
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
            'cpSectionDisabled' => array( AttributeType::Bool, 'default' => false ),
        );
    }



    /* --------------------------------------------------------------
    * HOOKS
    * ------------------------------------------------------------ */
 
}
