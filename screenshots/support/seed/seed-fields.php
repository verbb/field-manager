/** Seed representative native Craft fields for Field Manager screenshots. */

use craft\fields\Assets;
use craft\fields\Checkboxes;
use craft\fields\Color;
use craft\fields\Date;
use craft\fields\Dropdown;
use craft\fields\Entries;
use craft\fields\Lightswitch;
use craft\fields\Number;
use craft\fields\PlainText;
use craft\fields\Table;
use craft\fields\Users;
use craft\helpers\Json;

$definitions = [
    ['Assets', 'docsAssets', Assets::class, []],
    ['Categories', 'docsCategories', craft\fields\Categories::class, []],
    ['Checkboxes', 'docsCheckboxes', Checkboxes::class, ['options' => [['label' => 'Featured', 'value' => 'featured', 'default' => true]]]],
    ['Colour', 'docsColour', Color::class, ['allowCustomColors' => true]],
    ['Publish date', 'docsPublishDate', Date::class, []],
    ['Content type', 'docsContentType', Dropdown::class, ['options' => [['label' => 'Article', 'value' => 'article', 'default' => true]]]],
    ['Related entries', 'docsRelatedEntries', Entries::class, []],
    ['Featured', 'docsFeatured', Lightswitch::class, ['default' => true]],
    ['Reading time', 'docsReadingTime', Number::class, ['min' => 0]],
    ['Summary', 'docsSummary', PlainText::class, ['multiline' => true]],
    ['Specifications', 'docsSpecifications', Table::class, ['columns' => ['col1' => ['heading' => 'Label', 'handle' => 'label', 'type' => 'singleline'], 'col2' => ['heading' => 'Value', 'handle' => 'value', 'type' => 'singleline']]]],
    ['Authors', 'docsAuthors', Users::class, []],
];

$fields = Craft::$app->getFields();
foreach ($definitions as [$name, $handle, $class, $settings]) {
    if ($fields->getFieldByHandle($handle)) continue;
    $field = new $class(['name' => $name, 'handle' => $handle]);
    foreach ($settings as $key => $value) $field->$key = $value;
    if (!$fields->saveField($field)) throw new RuntimeException('Unable to save field ' . $handle . ': ' . Json::encode($field->getErrors()));
}

echo Json::encode(['ok' => true], JSON_THROW_ON_ERROR);
