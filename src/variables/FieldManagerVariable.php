<?php
namespace verbb\fieldmanager\variables;

use verbb\fieldmanager\FieldManager;

use Craft;

class FieldManagerVariable
{
    // Public Methods
    // =========================================================================

    public function createFieldLayoutFromConfig($config)
    {
        return FieldManager::$plugin->getService()->createFieldLayoutFromConfig($config);
    }

}
