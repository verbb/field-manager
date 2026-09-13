# Configuration

You can customise Field Manager’s settings using a PHP configuration file. This is optional: each setting has a default, so you only need to include the values you want to change.

To override a setting, create `field-manager.php` in your Craft project’s `/config` directory and return an array of setting names and values. For example, the following will hide the control-panel section:

```php
<?php

return [
    'cpSectionEnabled' => false,
];
```

All other settings keep their defaults. Add any further settings you want to change to the same array. The options below explain the available settings and their defaults.

## Configuration Options

::: reference
### `cpSectionEnabled`

**Type:** `bool` · **Default:** `true`

Whether the plugin's page should be shown in the main sidebar navigation.
:::


## Control Panel
You can also manage configuration settings through the Control Panel by visiting Settings → Field Manager.
