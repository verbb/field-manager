# Field Manager

Field Manager is a Craft CMS plugin to help make it easy to manage your fields and field groups. 

At this stage, functionality revolves around cloning fields and field groups, but [more features are planned](https://github.com/engram-design/FieldManager#roadmap)!

![Map](https://raw.githubusercontent.com/engram-design/FieldManager/master/screenshots/main.png)

## Install

- Add the `fieldmanager` directory into your `craft/plugins` directory.
- Navigate to Settings -> Plugins and click the "Install" button.

**Plugin options**

- Change the plugin name as it appear in the CP navigation.
- Toggle the visibility of the plugin on the CP navgiation. Handy if you only need to use it from time to time.

## Cloning

Ever needed to clone a field - or even a whole field group? You can easily use Field Manager to do both!

Cloning an individual field gives you the opportunity to set its Group, Name and Handle. All other settings are carried across to your new field.

For cloning a field group, you'll be able to set the Name for this new group. All fields within this group will be duplicated.

One thing to note for field group cloning, is that fields are required to have unique handles. Therefore, Field Manager prefixes the field handle with the group name you provide. For example, if your new group is called `New Group`, and it contains a field called `Body Content`, the field handle will be `newGroup_bodyContent`. We will look at introducing a method for customising this soon.

### Supported FieldTypes

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

**ButtonBox by [Supercool](https://github.com/supercool/Button-Box)**

* Buttons
* Colours
* Text Size
* Stars
* Width

...and many more. Field Manager can handle just about any FieldType, the above are simply those that have been tested.

## Roadmap

* Provide Import/Export functionality for fields and field groups
* Possibly change HUD to full Modal window, allowing editing of all field properties (rather than just Name/Handle) before you clone it. Only for single-field cloning
* Bulk-editing and general editing, rather than redirecting to fields settings screen
* Ajax-ify adding to table when cloning, rather than page reload
* Beg Pixel & Tonic to incorporate this into Craft natively

## Bugs, feature requests, support

Found a bug? Have a suggestion? [Submit an issue](https://github.com/engram-design/FieldManager/issues)

### Changelog

#### 1.0

Initial release.