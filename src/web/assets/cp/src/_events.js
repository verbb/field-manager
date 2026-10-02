$(function() {

    // Allow multiple back-end action hooks depending on button clicked. I'm sure there is a better way though!
    $(document).on('click', 'input[type="submit"]', function(e) {
        e.preventDefault();
        var form = $(this).parents('form');

        if ($(this).attr('data-action')) {
            $(form).find('input[name="action"]').val($(this).attr('data-action'));
        }

        $(form).submit();
    });

    // Clicking on an radio in the Mapping table header will check all other radios in that columns
    $(document).on('change', 'select#importAll', function(e) {
        e.preventDefault();

        $('#fieldmapping .importSelect select').val($(this).val());

        var value = $(this).val() == 'noimport' ? 'noimport' : 'include';

        $('#fieldmapping .importSelectNested select').val(value);
    });

    // Enabling mapping on Matrix/Neo/SuperTable should enable all nested fields/blocks
    $(document).on('change', '.select-type-matrix select, .select-type-neo select, .select-type-super-table select', function(e) {
        e.preventDefault();

        var rowId = $(this).parents('tr').data('row-id');
        var value = $(this).val() == 'noimport' ? 'noimport' : 'include';

        $('tr[data-row-id="' + rowId + '"].row-blocktype .importSelectNested select').val(value);
        $('tr[data-row-id="' + rowId + '"].row-blocktype-field .importSelectNested select').val(value);
    });

    $(document).on('change', '.select-blocktype select', function(e) {
        e.preventDefault();
        
        var rowId = $(this).parents('tr').data('row-id');
        var blockTypeId = $(this).parents('tr').data('blocktype-id');
        var value = $(this).val() == 'noimport' ? 'noimport' : 'include';

        $('tr[data-row-id="' + rowId + '"][data-blocktype-id="' + blockTypeId + '"].row-blocktype-field .importSelectNested select').val(value);
    });

    // Handle top-level checkboxes
    $(document).on('change', 'tr.group .field .checkbox', function(e) {
        e.preventDefault();

        var groupId = $(this).parents('tr.group').data('groupid');
        var $checkboxes = $('tr.field[data-groupid="' + groupId + '"] .field .checkbox');

        if (!$(this).hasClass('hasChecked')) {
            $(this).addClass('hasChecked');
            
            $checkboxes.prop('checked', true);
        } else {
            $(this).removeClass('hasChecked');

            $checkboxes.prop('checked', false);
        }
    });

    // Handle any checkbox
    $(document).on('change', '#fieldmanager .checkbox', function(e) {
        e.preventDefault();

        if ($('#fieldmanager .checkbox:checked').length > 0) {
            $('.export-btn').removeClass('disabled').prop('disabled', false);
        } else {
            $('.export-btn').addClass('disabled').prop('disabled', true);
        }
    });

    $('tr.field .clone-btn').on('click', function(e) {
        new Craft.FieldManager.CloneField($(this), $(this).parents('tr.field'));
    });

    $('tr.field .go a').on('click', function(e) {
        if (e.metaKey) {
            return;
        }

        e.preventDefault();
        new Craft.FieldManager.EditField($(this), $(this).parents('tr.field'));
    });

    $('.new-field-btn').on('click', function(e) {
        if (e.metaKey) {
            return;
        }

        e.preventDefault();
        new Craft.FieldManager.EditField($(this), $(this));
    });

});

