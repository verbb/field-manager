<?php
namespace verbb\fieldmanager\services;

use verbb\fieldmanager\FieldManager;

use Craft;
use craft\db\Query;
use craft\helpers\UrlHelper;

use yii\base\Component;

// Supported Elements
use craft\elements\Asset;
use craft\elements\Category;
use craft\elements\Entry;
use craft\elements\GlobalSet;
use craft\elements\Tag;
use craft\elements\User;
use craft\commerce\elements\Order;
use craft\commerce\elements\Product;
use craft\commerce\elements\Variant;

class Audit extends Component
{
    // Public Methods
    // =========================================================================

    public function getElementInfo()
    {
        $fieldLayouts = (new Query())
            ->select(['id', 'type'])
            ->from('{{%fieldlayouts}}')
            ->orderBy('type')
            ->all();

        $fields = Craft::$app->getFields();
        $elements = Craft::$app->getElements();

        $elementInfo = [];

        foreach ($fieldLayouts as $fieldLayout) {
            if (!class_exists($fieldLayout['type'])) {
                continue;
            }

            $elementType = $fieldLayout['type'];
            $elementTypeDisplay = $fieldLayout['type']::displayName();
            $fieldLayout = $fields->getLayoutById($fieldLayout['id']);

            if (!$fieldLayout) {
                continue;
            }

            if ($elementType === Asset::class) {
                $groupName = Craft::t('app', 'Asset Volumes');

                $elementInfo[$groupName][] = $this->getAssetVolumeInfo($fieldLayout);
            }

            if ($elementType === Category::class) {
                $groupName = Craft::t('app', 'Category Groups');

                $elementInfo[$groupName][] = $this->getCategoryGroupInfo($fieldLayout);
            }

            if ($elementType === Entry::class) {
                $groupName = Craft::t('app', 'Entry Types');

                $elementInfo[$groupName][] = $this->getEntryTypeInfo($fieldLayout);
            }

            if ($elementType === GlobalSet::class) {
                $groupName = Craft::t('app', 'Global Sets');

                $elementInfo[$groupName][] = $this->getGlobalSetInfo($fieldLayout);
            }

            if ($elementType === Tag::class) {
                $groupName = Craft::t('app', 'Tag Groups');

                $elementInfo[$groupName][] = $this->getTagGroupInfo($fieldLayout);
            }

            if ($elementType === User::class) {
                $groupName = Craft::t('app', 'Users');

                $elementInfo[$groupName][] = $this->getUserInfo($fieldLayout);
            }

            if ($elementType === Order::class) {
                $groupName = Craft::t('app', 'Orders');

                $elementInfo[$groupName][] = $this->getOrderInfo($fieldLayout);
            }

            if ($elementType === Product::class) {
                $groupName = Craft::t('app', 'Product Types');

                $elementInfo[$groupName][] = $this->getProductTypeInfo($fieldLayout);
            }

            if ($elementType === Variant::class) {
                $groupName = Craft::t('app', 'Variants');

                $elementInfo[$groupName][] = $this->getVariantInfo($fieldLayout);
            }
        }

        ksort($elementInfo);

        return $elementInfo;
    }


    // Private Methods
    // =========================================================================

    private function getAssetVolumeInfo($fieldLayout)
    {
        $group = (new Query())
            ->select(['id', 'name'])
            ->from('{{%volumes}}')
            ->where(['fieldLayoutId' => $fieldLayout->id])
            ->one();

        if (!$group) {
            return [
                'error' => 'Orphaned layout #' . $fieldLayout->id,
            ];
        }

        $url = UrlHelper::cpUrl('settings/assets/volumes/' . $group['id'] . '#assetvolume-fieldlayout');

        return [
            'name' => $group['name'],
            'url' => $url,
            'tabs' => $fieldLayout->getTabs(),
        ];
    }
    
    private function getCategoryGroupInfo($fieldLayout)
    {
        $group = (new Query())
            ->select(['id', 'name'])
            ->from('{{%categorygroups}}')
            ->where(['fieldLayoutId' => $fieldLayout->id])
            ->one();

        if (!$group) {
            return [
                'error' => 'Orphaned layout #' . $fieldLayout->id,
            ];
        }

        $url = UrlHelper::cpUrl('settings/categories/' . $group['id'] . '#categorygroup-fieldlayout');

        return [
            'name' => $group['name'],
            'url' => $url,
            'tabs' => $fieldLayout->getTabs(),
        ];
    }

    private function getEntryTypeInfo($fieldLayout)
    {
        $group = (new Query())
            ->select(['id', 'name', 'sectionId'])
            ->from('{{%entrytypes}}')
            ->where(['fieldLayoutId' => $fieldLayout->id])
            ->one();

        if (!$group) {
            return [
                'error' => 'Orphaned layout #' . $fieldLayout->id,
            ];
        }
        
        $url = UrlHelper::cpUrl('settings/sections/' . $group['sectionId'] . '/entrytypes/' . $group['id']);

        return [
            'name' => $group['name'],
            'url' => $url,
            'tabs' => $fieldLayout->getTabs(),
        ];
    }

    private function getGlobalSetInfo($fieldLayout)
    {
        $group = (new Query())
            ->select(['id', 'name'])
            ->from('{{%globalsets}}')
            ->where(['fieldLayoutId' => $fieldLayout->id])
            ->one();

        if (!$group) {
            return [
                'error' => 'Orphaned layout #' . $fieldLayout->id,
            ];
        }

        $url = UrlHelper::cpUrl('settings/globals/' . $group['id'] . '#set-fieldlayout');

        return [
            'name' => $group['name'],
            'url' => $url,
            'tabs' => $fieldLayout->getTabs(),
        ];
    }

    private function getOrderInfo($fieldLayout)
    {
        $url = UrlHelper::cpUrl('commerce/settings/ordersettings');

        return [
            'name' => 'Order',
            'url' => $url,
            'tabs' => $fieldLayout->getTabs(),
        ];
    }

    private function getProductTypeInfo($fieldLayout)
    {
        $group = (new Query())
            ->select(['id', 'name'])
            ->from('{{%commerce_producttypes}}')
            ->where(['fieldLayoutId' => $fieldLayout->id])
            ->one();

        if (!$group) {
            return [
                'error' => 'Orphaned layout #' . $fieldLayout->id,
            ];
        }

        $url = UrlHelper::cpUrl('commerce/settings/producttypes/' . $group['id'] . '#product-fields');

        return [
            'name' => $group['name'],
            'url' => $url,
            'tabs' => $fieldLayout->getTabs(),
        ];
    }

    private function getTagGroupInfo($fieldLayout)
    {
        $group = (new Query())
            ->select(['id', 'name'])
            ->from('{{%taggroups}}')
            ->where(['fieldLayoutId' => $fieldLayout->id])
            ->one();

        if (!$group) {
            return [
                'error' => 'Orphaned layout #' . $fieldLayout->id,
            ];
        }

        $url = UrlHelper::cpUrl('settings/tags/' . $group['id'] . '#taggroup-fieldlayout');

        return [
            'name' => $group['name'],
            'url' => $url,
            'tabs' => $fieldLayout->getTabs(),
        ];
    }

    private function getUserInfo($fieldLayout)
    {
        $url = UrlHelper::cpUrl('settings/users/fields');

        return [
            'name' => 'User',
            'url' => $url,
            'tabs' => $fieldLayout->getTabs(),
        ];
    }

    private function getVariantInfo($fieldLayout)
    {
        $group = (new Query())
            ->select(['id', 'name'])
            ->from('{{%commerce_producttypes}}')
            ->where(['variantFieldLayoutId' => $fieldLayout->id])
            ->one();

        if (!$group) {
            return [
                'error' => 'Orphaned layout #' . $fieldLayout->id,
            ];
        }

        $url = UrlHelper::cpUrl('commerce/settings/producttypes/' . $group['id'] . '#variant-fields');

        return [
            'name' => $group['name'],
            'url' => $url,
            'tabs' => $fieldLayout->getTabs(),
        ];
    }
}
