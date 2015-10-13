# Field Manager

Field Manager is a Craft CMS plugin to help make it easy to manage your fields and field groups. 

At this stage, functionality revolves around cloning fields and field groups, but [more features are planned](https://github.com/engram-design/FieldManager#roadmap)!

<img src="https://raw.githubusercontent.com/engram-design/FieldManager/master/screenshots/main.png" />

## Install

- Add the `fieldmanager` directory into your `craft/plugins` directory.
- Navigate to Settings -> Plugins and click the "Install" button.

### Installation via Composer

- Install [composer](http://getcomposer.org) if you haven't yet
- Add dependency to `composer.json`:
  ```
  {
    "require": {
      "engram-design/fieldmanager": "~1.3",
    }
  }
  ```
- Run `composer update`

**Plugin options**

- Change the plugin name as it appear in the CP navigation.
- Toggle the visibility of the plugin on the CP navgiation. Handy if you only need to use it from time to time.

## Cloning

Ever needed to clone a field - or even a whole field group? You can easily use Field Manager to do both!

Cloning an individual field gives you the opportunity to set its Group, Name, Handle and all other settings related to that field type. Settings available to edit are identical to settings available when using the regular field edit screen.

For cloning a field group, you'll be able to set the Name for this new group. All fields within this group will be duplicated.

One thing to note for field group cloning, is that fields are required to have unique handles. Therefore, Field Manager prefixes each field's handle with the group name you provide. For example, if your new group is called `New Group`, and it contains a field called `Body Content`, the field handle will be `newGroup_bodyContent`.

You may also set this yourself if you choose to, using the `Prefix` field when cloning a field group. Please note that it needs to be a valid handle (no spaces, no hyphens, underscores only).

## Supported FieldTypes

**Craft**

* Assets
* Categories
* Checkboxes
* Color
* Date/Time
* Dropdown
* Entries
* Lightswitch
* Matrix
* Multi-select
* Number
* Plain Text
* Position Select
* Radio Buttons
* Rich Text
* Table
* Tags
* Users

**[ButtonBox](https://github.com/supercool/Button-Box)**

* Buttons
* Colours
* Text Size
* Stars
* Width

**[SuperTable](https://github.com/engram-design/SuperTable)**

...and many more. Field Manager can handle just about any FieldType, the above are simply those that have been tested.


## Bugs, feature requests, support

Found a bug? Have a suggestion? [Submit an issue](https://github.com/engram-design/FieldManager/issues)


## Changelog

#### 1.3.6

- Adds support for installation via [composer](http://getcomposer.org)

#### 1.3.5

- Fixed import/export issue with Position Select field - [#9](https://github.com/engram-design/FieldManager/issues/9).

#### 1.3.4

- Refactor import/export services.
- Fully support import/export Matrix-in-SuperTable and SuperTable-in-Matrix.

#### 1.3.3

- Added support for [SuperTable](https://github.com/engram-design/SuperTable).
- Fix for 'Show in CP Nav' setting - [#5](https://github.com/engram-design/FieldManager/issues/5).
- Fix when exporting Matrix fields, field settings weren't getting exported - [#6](https://github.com/engram-design/FieldManager/issues/6).
- Minor cosmetic fixes.

#### 1.3.2

- Added support for exporting Matrix fields.

#### 1.3.1

- Added full-featured import mapping. Allows changing of field name, handle and group assignment for each field for import.

#### 1.3

- Added import/exporting of fields.

#### 1.2

- Edit fields or field groups directly from the FieldManager screen. Just click the blue links on the left-hand side of the table.
- Better error-handling for `saveField()`
- Swapped HUD for Modal when cloning single field. Allows editing of all field settings/properties, not just group, name and handle.

#### 1.1

- Added an option to provide a `prefix` to be used for all fields handle value when cloning group. This is because field handles need to be unique!

#### 1.0

- Initial release.
