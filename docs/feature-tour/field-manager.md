# Field Manager

## Cloning
Field Manager copies field configuration so you can reuse a setup without entering every option again.

Cloning an individual field gives you the opportunity to set its Group, Name, Handle and all other settings related to that field type. Settings available to edit are identical to settings available when using the regular field edit screen.

For cloning a field group, you'll be able to set the Name for this new group. All fields within this group will be duplicated.

One thing to note for field group cloning, is that fields are required to have unique handles. Therefore, Field Manager prefixes each field's handle with the group name you provide. For example, if your new group is called `New Group`, and it contains a field called `Body Content`, the field handle will be `newGroup_bodyContent`.

You may also set this yourself if you choose to, using the `Prefix` field when cloning a field group. Please note that it needs to be a valid handle (no spaces, no hyphens, underscores only).

## Export
You can export multiple fields, including their groups by using the checkboxes against each field or field group. The fields will be combined into a JSON document and downloaded through your browser. You can store this for later, or use the contents for your import.

## Import
Using the Import tab, you paste in your JSON file contents that you created through Field Managers export process. Once done so, you can choose which fields to import, which group to add them to, and their name/handle.

## Check a Copied Field

For example, clone a Plain Text field called Intro with the handle `intro`. Name the copy Card Summary and give it the distinct handle `cardSummary`. Review its field settings, save it and add it to the destination entry type's field layout. Open an entry and enter a value in the new field to verify the result.

The copied field is a separate configuration object. Copying its settings does not copy existing entries' values into it or place it into every layout using the original. Check the destination layout and content separately.

To reuse configuration on another installation, export the selected field and import that JSON on the destination. Review its proposed name, handle and settings before completing the import, then add it to a layout and test it with an entry. Resolve a handle conflict during that review rather than assuming the imported field will replace an existing one.
