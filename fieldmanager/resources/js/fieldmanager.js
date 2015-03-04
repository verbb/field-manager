$(function() {

	$('.sidebar-nav a').on('click', function(e) {
		e.preventDefault();
		var groupId = $(this).attr('data-groupid');

		$('.sidebar-nav li').removeClass('active');
		$(this).parent().addClass('active');

		$('#fieldmanager tbody tr').hide();

		if (groupId == 'all') {
			$('#fieldmanager tbody tr[data-groupid]').show();
		} else {
			$('#fieldmanager tbody tr[data-groupid="'+groupId+'"]').show();
		}
	});

	$('tr.group .clone-btn').on('click', function(e) {
    	new Craft.FieldManagerCloneGroupField($(this), $(this).parents('tr.group'));
    });

	$('tr.field .clone-btn').on('click', function(e) {
    	new Craft.FieldManagerCloneSingleField($(this), $(this).parents('tr.field'));
    });


	// Handle deleting field group seperately
	$('.delete-group').on('click', function(e) {
		$selectedGroup = $(this).parents('tr.group');

		if (confirm(Craft.t('Are you sure you want to delete this group and all its fields?'))) {
			var data = {
				id: $selectedGroup.data('groupid')
			};

			Craft.postActionRequest('fields/deleteGroup', data, $.proxy(function(response, textStatus) {
				if (textStatus == 'success') {
					if (response.success) {
						location.href = Craft.getUrl('fieldmanager');
					} else {
						Craft.cp.displayError();
					}
				}
			}, this));
		}
	});




	// Provide HUD functionality for cloning a group of fields
	Craft.FieldManagerCloneGroupField = Garnish.Base.extend({
	    $element: null,
	    groupId: null,

	    $form: null,
	    $spinner: null,

	    hud: null,

	    init: function($element, $data) {
	        this.$element = $element;
	        this.groupId = $data.data('groupid');

	        this.$element.addClass('loading');

	        var data = {
	            groupId: this.groupId,
	        };

	        Craft.postActionRequest('fieldManager/getGroupFieldHtml', data, $.proxy(this, 'showHud'));
	    },

	    showHud: function(response, textStatus) {
	        this.$element.removeClass('loading');

	        if (textStatus == 'success') {
	            var $hudContents = $();

	            this.$form = $('<form/>');
	            $('<input type="hidden" name="groupId" value="'+this.groupId+'">').appendTo(this.$form);
	            $fieldsContainer = $('<div class="fields"/>').appendTo(this.$form);

	            $fieldsContainer.html(response.html)
	            Craft.initUiElements($fieldsContainer);

	            var $buttonsOuterContainer = $('<div class="footer"/>').appendTo(this.$form);

	            this.$spinner = $('<div class="spinner hidden"/>').appendTo($buttonsOuterContainer);

	            var $buttonsContainer = $('<div class="buttons right"/>').appendTo($buttonsOuterContainer);
	            $cancelBtn = $('<div class="btn">'+Craft.t('Cancel')+'</div>').appendTo($buttonsContainer);
	            $saveBtn = $('<input class="btn submit" type="submit" value="'+Craft.t('Save')+'"/>').appendTo($buttonsContainer);

	            $hudContents = $hudContents.add(this.$form);

	            this.hud = new Garnish.HUD(this.$element, $hudContents, {
	                bodyClass: 'body elementeditor',
	                closeOtherHUDs: false
	            });

	            this.hud.on('hide', $.proxy(function() {
	                delete this.hud;
	            }, this));

	            this.addListener(this.$form, 'submit', 'saveGroupField');
	            this.addListener($cancelBtn, 'click', function() {
	                this.hud.hide()
	            });
	        }
	    },

	    saveGroupField: function(ev) {
	        ev.preventDefault();

	        this.$spinner.removeClass('hidden');

	        var data = this.$form.serialize()

	        Craft.postActionRequest('fieldManager/saveGroupField', data, $.proxy(function(response, textStatus) {
	            this.$spinner.addClass('hidden');

                if (textStatus == 'success' && response.success) {
                    location.href = Craft.getUrl('fieldmanager');

                    this.closeHud();
                } else {
                    Garnish.shake(this.hud.$hud);
                }
	        }, this));
	    },

	    closeHud: function() {
	        this.hud.hide();
	        delete this.hud;
	    }
	});





	// Provide HUD functionality for cloning a single field
	Craft.FieldManagerCloneSingleField = Garnish.Base.extend({
	    $element: null,
	    fieldId: null,
	    groupId: null,

	    $form: null,
	    $spinner: null,

	    hud: null,

	    init: function($element, $data) {
	        this.$element = $element;
	        this.fieldId = $data.data('id');
	        this.groupId = $data.data('groupid');

	        this.$element.addClass('loading');

	        var data = {
	            fieldId: this.fieldId,
	            groupId: this.groupId,
	        };

	        Craft.postActionRequest('fieldManager/getSingleFieldHtml', data, $.proxy(this, 'showHud'));
	    },

	    showHud: function(response, textStatus) {
	        this.$element.removeClass('loading');

	        if (textStatus == 'success') {
	            var $hudContents = $();

	            this.$form = $('<form/>');
	            $('<input type="hidden" name="fieldId" value="'+this.fieldId+'">').appendTo(this.$form);
	            $fieldsContainer = $('<div class="fields"/>').appendTo(this.$form);

	            $fieldsContainer.html(response.html)
	            Craft.initUiElements($fieldsContainer);

	            var $buttonsOuterContainer = $('<div class="footer"/>').appendTo(this.$form);

	            this.$spinner = $('<div class="spinner hidden"/>').appendTo($buttonsOuterContainer);

	            var $buttonsContainer = $('<div class="buttons right"/>').appendTo($buttonsOuterContainer);
	            $cancelBtn = $('<div class="btn">'+Craft.t('Cancel')+'</div>').appendTo($buttonsContainer);
	            $saveBtn = $('<input class="btn submit" type="submit" value="'+Craft.t('Save')+'"/>').appendTo($buttonsContainer);

	            $hudContents = $hudContents.add(this.$form);

	            this.hud = new Garnish.HUD(this.$element, $hudContents, {
	                bodyClass: 'body elementeditor',
	                closeOtherHUDs: false
	            });

	            this.hud.on('hide', $.proxy(function() {
	                delete this.hud;
	            }, this));

	            this.addListener(this.$form, 'submit', 'saveSingleField');
	            this.addListener($cancelBtn, 'click', function() {
	                this.hud.hide()
	            });

	            new Craft.HandleGenerator('#name', '#handle');
	        }
	    },

	    saveSingleField: function(ev) {
	        ev.preventDefault();

	        this.$spinner.removeClass('hidden');

	        var data = this.$form.serialize()

	        Craft.postActionRequest('fieldManager/saveSingleField', data, $.proxy(function(response, textStatus) {
	            this.$spinner.addClass('hidden');

                if (textStatus == 'success' && response.success) {
                    location.href = Craft.getUrl('fieldmanager');

                    this.closeHud();
                } else {
                    Garnish.shake(this.hud.$hud);
                }
	        }, this));
	    },

	    closeHud: function() {
	        this.hud.hide();
	        delete this.hud;
	    }
	});

});