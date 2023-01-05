<?php
namespace verbb\fieldmanager\services;

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

use Throwable;

class Audit extends Component
{
    // Public Methods
    // =========================================================================

    public function getElementInfo(): array
    {
        $elementInfo = [];

        $fieldLayouts = (new Query())
            ->select(['id', 'type'])
            ->from('{{%fieldlayouts}}')
            ->orderBy('type')
            ->all();

        $fields = Craft::$app->getFields();
        $elements = Craft::$app->getElements();

        foreach ($fieldLayouts as $fieldLayout) {
            try {
                if (!class_exists($fieldLayout['type'])) {
                    continue;
                }

                $elementType = $fieldLayout['type'];
                $elementTypeDisplay = $fieldLayout['type']::displayName();
                $fieldLayout = $fields->getLayoutById($fieldLayout['id']);

                if (!$fieldLayout || !$fieldLayout->getCustomFields()) {
                    continue;
                }

                if ($elementType === Asset::class) {
                    $groupName = Craft::t('app', 'Asset Volumes');

                    if ($items = $this->getAssetVolumeInfo($fieldLayout)) {
                        $elementInfo[$groupName][] = $items;
                    }
                }

                if ($elementType === Category::class) {
                    $groupName = Craft::t('app', 'Category Groups');

                    if ($items = $this->getCategoryGroupInfo($fieldLayout)) {
                        $elementInfo[$groupName][] = $items;
                    }
                }

                if ($elementType === Entry::class) {
                    $groupName = Craft::t('app', 'Entry Types');

                    if ($items = $this->getEntryTypeInfo($fieldLayout)) {
                        $elementInfo[$groupName][] = $items;
                    }
                }

                if ($elementType === GlobalSet::class) {
                    $groupName = Craft::t('app', 'Global Sets');

                    if ($items = $this->getGlobalSetInfo($fieldLayout)) {
                        $elementInfo[$groupName][] = $items;
                    }
                }

                if ($elementType === Tag::class) {
                    $groupName = Craft::t('app', 'Tag Groups');

                    if ($items = $this->getTagGroupInfo($fieldLayout)) {
                        $elementInfo[$groupName][] = $items;
                    }
                }

                if ($elementType === User::class) {
                    $groupName = Craft::t('app', 'Users');

                    if ($items = $this->getUserInfo($fieldLayout)) {
                        $elementInfo[$groupName][] = $items;
                    }
                }

                if ($elementType === Order::class) {
                    $groupName = Craft::t('app', 'Orders');

                    if ($items = $this->getOrderInfo($fieldLayout)) {
                        $elementInfo[$groupName][] = $items;
                    }
                }

                if ($elementType === Product::class) {
                    $groupName = Craft::t('app', 'Product Types');

                    if ($items = $this->getProductTypeInfo($fieldLayout)) {
                        $elementInfo[$groupName][] = $items;
                    }
                }

                if ($elementType === Variant::class) {
                    $groupName = Craft::t('app', 'Variants');

                    if ($items = $this->getVariantInfo($fieldLayout)) {
                        $elementInfo[$groupName][] = $items;
                    }
                }
            } catch (Throwable $e) {
                // When an element is registered, but the plugin disabled, a fatal error will be thrown, so ignore.
            }
        }

        ksort($elementInfo);

        return $elementInfo;
    }


    // Private Methods
    // =========================================================================

    private function getAssetVolumeInfo($fieldLayout): array
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

    private function getCategoryGroupInfo($fieldLayout): array
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

    private function getEntryTypeInfo($fieldLayout): array
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

    private function getGlobalSetInfo($fieldLayout): array
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

    private function getOrderInfo($fieldLayout): array
    {
        $url = UrlHelper::cpUrl('commerce/settings/ordersettings');

        return [
            'name' => 'Order',
            'url' => $url,
            'tabs' => $fieldLayout->getTabs(),
        ];
    }

    private function getProductTypeInfo($fieldLayout): array
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

    private function getTagGroupInfo($fieldLayout): array
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

    private function getUserInfo($fieldLayout): array
    {
        $url = UrlHelper::cpUrl('settings/users/fields');

        return [
            'name' => 'User',
            'url' => $url,
            'tabs' => $fieldLayout->getTabs(),
        ];
    }

    private function getVariantInfo($fieldLayout): array
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
