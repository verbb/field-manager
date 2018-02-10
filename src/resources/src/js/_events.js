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
    $(document).on('change', 'select#groupAll', function(e) {
        e.preventDefault();

        $('#fieldmapping .groupSelect select').val($(this).val());
    });

    $(document).on('click', '#newgroupbtn', function(e) {
        var name = prompt(Craft.t('field-manager', 'What do you want to name your group?'), '');

        if (name) {
            var data = {
                name: name
            };

            Craft.postActionRequest('fields/save-group', data, $.proxy(function(response, textStatus) {
                if (textStatus == 'success') {
                    if (response.success) {
                        $('#fieldmapping select#groupAll')
                            .append($('<option value="'+response.group.id + '">' + response.group.name + '</option>'))
                            .val(response.group.id);
                        $('#fieldmapping .groupSelect select')
                            .append($('<option value="'+response.group.id + '">' + response.group.name + '</option>'))
                            .val(response.group.id);
                    } else if (response.errors) {
                        var errors = [];
                        for (var attribute in response.errors) {
                            errors = errors.concat(response.errors[attribute]);
                        }
                        alert(Craft.t('field-manager', 'Could not create the group:')+"\n\n"+errors.join("\n"));
                    } else {
                        Craft.cp.displayError();
                    }
                }

            }, this));
        }
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

    $('.sidebar-nav a').on('click', function(e) {
        e.preventDefault();
        var groupId = $(this).attr('data-groupid');

        $('.sidebar-nav li').removeClass('active');
        $(this).parent().addClass('active');

        $('#fieldmanager tbody tr').hide();

        if (groupId == 'all') {
            $('#fieldmanager tbody tr[data-groupid]').show();
        } else {
            $('#fieldmanager tbody tr[data-groupid="' + groupId + '"]').show();
        }
    });

    $('tr.group .clone-btn').on('click', function(e) {
        new Craft.FieldManager.CloneGroup($(this), $(this).parents('tr.group'));
    });

    $('tr.field .clone-btn').on('click', function(e) {
        new Craft.FieldManager.CloneField($(this), $(this).parents('tr.field'));
    });

    $('tr.group .go a').on('click', function(e) {
        if (e.metaKey) {
            return;
        }

        e.preventDefault();
        new Craft.FieldManager.EditGroup($(this), $(this).parents('tr.group'));
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
        new Craft.FieldManager.EditField($(this));
    });


    // Handle deleting field group seperately
    $('.delete-group').on('click', function(e) {
        $selectedGroup = $(this).parents('tr.group');

        if (confirm(Craft.t('field-manager', 'Are you sure you want to delete this group and all its fields?'))) {
            var data = {
                id: $selectedGroup.data('groupid')
            };

            Craft.postActionRequest('fields/delete-group', data, $.proxy(function(response, textStatus) {
                if (textStatus == 'success') {
                    if (response.success) {
                        location.href = Craft.getUrl('field-manager');
                    } else {
                        Craft.cp.displayError();
                    }
                }
            }, this));
        }
    });

});





