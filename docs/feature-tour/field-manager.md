# Field Manager

## Cloning

Ever needed to clone a field - or even a whole field group? You can easily use Field Manager to do both!

Cloning an individual field gives you the opportunity to set its Group, Name, Handle and all other settings related to that field type. Settings available to edit are identical to settings available when using the regular field edit screen.

For cloning a field group, you'll be able to set the Name for this new group. All fields within this group will be duplicated.

One thing to note for field group cloning, is that fields are required to have unique handles. Therefore, Field Manager prefixes each field's handle with the group name you provide. For example, if your new group is called `New Group`, and it contains a field called `Body Content`, the field handle will be `newGroup_bodyContent`.

You may also set this yourself if you choose to, using the `Prefix` field when cloning a field group. Please note that it needs to be a valid handle (no spaces, no hyphens, underscores only).

## Export

You can export multiple fields, including their groups by simply using the checkboxes against each field or field group. The fields will be combined into a JSON document and downloaded through your browser. You can store this for later, or use the contents for your import.

## Import

Using the Import tab, you paste in your JSON file contents that you created through Field Managers export process. Once done so, you can configure the which fields to import, which group to add them to, and their name/handle.

![](/docs/screenshots/import.png)
