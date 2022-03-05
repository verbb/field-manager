<?php
namespace verbb\fieldmanager\variables;

use verbb\fieldmanager\FieldManager;

use craft\models\FieldLayout;

class FieldManagerVariable
{
    // Public Methods
    // =========================================================================

    public function createFieldLayoutFromConfig($config): FieldLayout
    {
        return FieldManager::$plugin->getService()->createFieldLayoutFromConfig($config);
    }

}
