<?php
namespace verbb\fieldmanager\web\assets\cp;

use craft\web\AssetBundle;

class PluginKitAsset extends AssetBundle
{
    // Public Methods
    // =========================================================================

    public function init(): void
    {
        $this->sourcePath = '@verbb/fieldmanager/web/assets/cp/dist';

        $this->depends = [
            FieldManagerAsset::class,
        ];

        // Plugin Kit's state panel is a separate bundle, so only the pages showing an empty state load it.
        $this->js = [
            'plugin-kit.js',
        ];

        parent::init();
    }
}
