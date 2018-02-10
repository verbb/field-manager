<?php
namespace verbb\fieldmanager\assetbundles;

use Craft;
use craft\web\AssetBundle;
use craft\web\assets\cp\CpAsset;

class FieldManagerAsset extends AssetBundle
{
    // Public Methods
    // =========================================================================

    public function init()
    {
        $this->sourcePath = "@verbb/fieldmanager/resources/dist";

        $this->depends = [
            CpAsset::class,
        ];

        $this->js = [
            'js/field-manager.js',
        ];

        $this->css = [
            'css/field-manager.css',
        ];

        parent::init();
    }
}
