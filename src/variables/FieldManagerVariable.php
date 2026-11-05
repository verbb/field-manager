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
        // After a failed import, Matrix entry types have already been saved, so hold their layout rather than a config.
        if ($config instanceof FieldLayout) {
            return $config;
        }

        return FieldManager::$plugin->getService()->createFieldLayoutFromConfig($config);
    }

}
