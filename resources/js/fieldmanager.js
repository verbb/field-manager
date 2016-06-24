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
		var name = prompt(Craft.t('What do you want to name your group?'), '');

		if (name) {
			var data = {
				name: name
			};

			Craft.postActionRequest('fields/saveGroup', data, $.proxy(function(response, textStatus) {
				if (textStatus == 'success') {
					if (response.success) {
						var newGroupOption = $('<option value="'+response.group.id+'">'+response.group.name+'</option>');

						$('#fieldmapping .groupSelect select').append(newGroupOption);
						$('#fieldmapping select#groupAll').append(newGroupOption);
					} else if (response.errors) {
						var errors = this.flattenErrors(response.errors);
						alert(Craft.t('Could not create the group:')+"\n\n"+errors.join("\n"));
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
		var $checkboxes = $('tr.field[data-groupid="'+groupId+'"] .field .checkbox');

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
			$('#fieldmanager tbody tr[data-groupid="'+groupId+'"]').show();
		}
	});

	$('tr.group .clone-btn').on('click', function(e) {
		new Craft.FieldManagerCloneGroupField($(this), $(this).parents('tr.group'));
	});

	$('tr.field .clone-btn').on('click', function(e) {
		new Craft.SingleFieldSettingsModal($(this), $(this).parents('tr.field'));
	});

	$('tr.group .go a').on('click', function(e) {
		if (e.metaKey) {
			return;
		}

		e.preventDefault();
		new Craft.FieldManagerEditGroupField($(this), $(this).parents('tr.group'));
	});

	$('tr.field .go a').on('click', function(e) {
		if (e.metaKey) {
			return;
		}

		e.preventDefault();
		new Craft.SingleFieldEditModal($(this), $(this).parents('tr.field'));
	});

	$('.new-field-btn').on('click', function(e) {
		if (e.metaKey) {
			return;
		}

		e.preventDefault();
		new Craft.SingleFieldAddModal($(this));
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
				template: 'group'
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
				$saveBtn = $('<input class="btn submit" type="submit" value="'+Craft.t('Clone')+'"/>').appendTo($buttonsContainer);

				$hudContents = $hudContents.add(this.$form);

				this.hud = new Garnish.HUD(this.$element, $hudContents, {
					bodyClass: 'body',
					closeOtherHUDs: false
				});

				this.hud.on('hide', $.proxy(function() {
					delete this.hud;
				}, this));

				this.addListener($saveBtn, 'activate', 'saveGroupField');
				this.addListener($cancelBtn, 'activate', 'closeHud');

				new Craft.HandleGeneratorWithSuffix('#name', '#prefix');
			}
		},

		saveGroupField: function(ev) {
			ev.preventDefault();

			this.$spinner.removeClass('hidden');

			var data = this.$form.serialize()

			Craft.postActionRequest('fieldManager/cloneGroup', data, $.proxy(function(response, textStatus) {
				this.$spinner.addClass('hidden');

				if (response.error) {
					Garnish.shake(this.hud.$hud);

					$.each(response.error, function(index, value) {
						Craft.cp.displayError(value);
					});
				} else if (response.success) {
					Craft.cp.displayNotice(Craft.t('Group cloned.'));
					location.href = Craft.getUrl('fieldmanager');

					this.onFadeOut();
				} else {
					Craft.cp.displayError(Craft.t('Could not clone group'));
				}
			}, this));
		},

		closeHud: function() {
			this.hud.hide();
			delete this.hud;
		}
	});




	Craft.FieldManagerEditGroupField = Garnish.Base.extend({
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
				template: 'group_edit'
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
					bodyClass: 'body',
					closeOtherHUDs: false
				});

				this.hud.on('hide', $.proxy(function() {
					delete this.hud;
				}, this));

				this.addListener($saveBtn, 'activate', 'saveGroupField');
				this.addListener($cancelBtn, 'activate', 'closeHud');

				new Craft.HandleGeneratorWithSuffix('#name', '#prefix');
			}
		},

		saveGroupField: function(ev) {
			ev.preventDefault();

			this.$spinner.removeClass('hidden');

			var data = this.$form.serialize();

			Craft.postActionRequest('fields/saveGroup', data, $.proxy(function(response, textStatus) {
				this.$spinner.addClass('hidden');

				if (textStatus == 'success' && response.success) {
					location.href = Craft.getUrl('fieldmanager');

					Craft.cp.displayNotice(Craft.t('Field group updated.'));

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



/*
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
	});*/


	Craft.HandleGeneratorWithSuffix = Craft.BaseInputGenerator.extend({
		generateTargetValue: function(sourceVal)
		{
			// Remove HTML tags
			var handle = sourceVal.replace("/<(.*?)>/g", '');

			// Remove inner-word punctuation
			handle = handle.replace(/['"‘’“”\[\]\(\)\{\}:]/g, '');

			// Make it lowercase
			handle = handle.toLowerCase();

			// Convert extended ASCII characters to basic ASCII
			handle = Craft.asciiString(handle);

			// Handle must start with a letter
			handle = handle.replace(/^[^a-z]+/, '');

			// Get the "words"
			var words = Craft.filterArray(handle.split(/[^a-z0-9]+/)),
				handle = '';

			// Make it camelCase
			for (var i = 0; i < words.length; i++)
			{
				if (i == 0)
				{
					handle += words[i];
				}
				else
				{
					handle += words[i].charAt(0).toUpperCase()+words[i].substr(1);
				}
			}

			return handle + '_';
		}
	})



	Craft.SingleFieldSettingsModal = Garnish.Modal.extend({
		fieldId: null,
		groupId: null,

		$body: null,
		$element: null,
		$buttons: null,
		$cancelBtn: null,
		$saveBtn: null,
		$footerSpinner: null,

		init: function($element, $data) {
			this.$element = $element;
			this.fieldId = $data.data('id');
			this.groupId = $data.data('groupid');

			// Build the modal
			var $container = $('<div class="modal fieldsettingsmodal"></div>').appendTo(Garnish.$bod),
				$body = $('<div class="body"><div class="spinner big"></div></div>').appendTo($container),
				$footer = $('<div class="footer"/>').appendTo($container);

			this.base($container, this.settings);

			this.$footerSpinner = $('<div class="spinner hidden"/>').appendTo($footer);
			this.$buttons = $('<div class="buttons rightalign first"/>').appendTo($footer);
			this.$cancelBtn = $('<div class="btn">'+Craft.t('Cancel')+'</div>').appendTo(this.$buttons);

			if (!this.fieldId) {
				this.$saveBtn = $('<div class="btn submit">'+Craft.t('Add field')+'</div>').appendTo(this.$buttons);
			} else {
				this.$saveBtn = $('<div class="btn submit">'+Craft.t('Clone')+'</div>').appendTo(this.$buttons);
			}

			this.$body = $body;

			this.addListener(this.$cancelBtn, 'activate', 'onFadeOut');
			this.addListener(this.$saveBtn, 'activate', 'saveSettings');
		},

		onFadeIn: function() {
			var data = {
				fieldId: this.fieldId,
				groupId: this.groupId,
				template: 'modal',
			};

			Craft.postActionRequest('fieldManager/getModalBody', data, $.proxy(function(response, textStatus) {
				if (textStatus == 'success') {
					this.$body.html(response);

					Craft.initUiElements(this.$body);

					new Craft.HandleGenerator('#name', '#handle');
				}
			}, this));

			this.base();
		},

		onFadeOut: function() {
			this.hide();
			this.destroy();
			this.$shade.remove();
			this.$container.remove();

			this.removeListener(this.$saveBtn, 'click');
			this.removeListener(this.$cancelBtn, 'click');
		},

		saveSettings: function() {
			var params = this.$body.find('form').serializeObject();
			params.fieldId = this.fieldId;

			this.$footerSpinner.removeClass('hidden');

			Craft.postActionRequest('fieldManager/cloneField', params, $.proxy(function(response, textStatus) {
				this.$footerSpinner.addClass('hidden');

				if (response.error) {
					$.each(response.error, function(index, value) {
						Craft.cp.displayError(value);
					});
				} else if (response.success) {
					Craft.cp.displayNotice(Craft.t('Field cloned.'));
					location.href = Craft.getUrl('fieldmanager');

					this.onFadeOut();
				} else {
					Craft.cp.displayError(Craft.t('Could not clone field'));
				}

			}, this));

			this.removeListener(this.$saveBtn, 'click');
			this.removeListener(this.$cancelBtn, 'click');
		},

		show: function() {
			this.base();
		},
	});










	Craft.SingleFieldEditModal = Garnish.Modal.extend({
		fieldId: null,
		groupId: null,

		$body: null,
		$element: null,
		$buttons: null,
		$cancelBtn: null,
		$saveBtn: null,
		$footerSpinner: null,

		init: function($element, $data) {
			this.$element = $element;
			this.fieldId = $data.data('id');
			this.groupId = $data.data('groupid');

			// Build the modal
			var $container = $('<div class="modal fieldsettingsmodal"></div>').appendTo(Garnish.$bod),
				$body = $('<div class="body"><div class="spinner big"></div></div>').appendTo($container),
				$footer = $('<div class="footer"/>').appendTo($container);

			this.base($container, this.settings);

			this.$footerSpinner = $('<div class="spinner hidden"/>').appendTo($footer);
			this.$buttons = $('<div class="buttons rightalign first"/>').appendTo($footer);
			this.$cancelBtn = $('<div class="btn">'+Craft.t('Cancel')+'</div>').appendTo(this.$buttons);
			this.$saveBtn = $('<div class="btn submit">'+Craft.t('Save')+'</div>').appendTo(this.$buttons);

			this.$body = $body;

			this.addListener(this.$cancelBtn, 'activate', 'onFadeOut');
			this.addListener(this.$saveBtn, 'activate', 'saveSettings');
		},

		onFadeIn: function() {
			var data = {
				fieldId: this.fieldId,
				groupId: this.groupId,
				template: 'modal_edit',
			};

			Craft.postActionRequest('fieldManager/getModalBody', data, $.proxy(function(response, textStatus) {
				if (textStatus == 'success') {
					this.$body.html(response);

					Craft.initUiElements(this.$body);

					new Craft.HandleGenerator('#name', '#handle');
				}
			}, this));

			this.base();
		},

		onFadeOut: function() {
			this.hide();
			this.destroy();
			this.$shade.remove();
			this.$container.remove();

			this.removeListener(this.$saveBtn, 'click');
			this.removeListener(this.$cancelBtn, 'click');
		},

		saveSettings: function() {
			var params = this.$body.find('form').serialize();

			this.$footerSpinner.removeClass('hidden');

			Craft.postActionRequest('fieldManager/saveField', params, $.proxy(function(response, textStatus) {
				this.$footerSpinner.addClass('hidden');

				if (response.error) {
					Garnish.shake(this.$container);

					$.each(response.error, function(index, value) {
						Craft.cp.displayError(value);
					});
				} else if (response.success) {
					Craft.cp.displayNotice(Craft.t('Field updated.'));
					location.href = Craft.getUrl('fieldmanager');

					this.onFadeOut();
				} else {
					Garnish.shake(this.$container);
					Craft.cp.displayError(Craft.t('Could not update field'));
				}

			}, this));

			this.removeListener(this.$saveBtn, 'click');
			this.removeListener(this.$cancelBtn, 'click');
		},

		show: function() {
			this.base();
		},
	});





	Craft.SingleFieldAddModal = Garnish.Modal.extend({
		fieldId: null,
		groupId: null,

		$body: null,
		$element: null,
		$buttons: null,
		$cancelBtn: null,
		$saveBtn: null,
		$footerSpinner: null,

		init: function($element, $data) {
			this.$element = $element;

			// Build the modal
			var $container = $('<div class="modal fieldsettingsmodal"></div>').appendTo(Garnish.$bod),
				$body = $('<div class="body"><div class="spinner big"></div></div>').appendTo($container),
				$footer = $('<div class="footer"/>').appendTo($container);

			this.base($container, this.settings);

			this.$footerSpinner = $('<div class="spinner hidden"/>').appendTo($footer);
			this.$buttons = $('<div class="buttons rightalign first"/>').appendTo($footer);
			this.$cancelBtn = $('<div class="btn">'+Craft.t('Cancel')+'</div>').appendTo(this.$buttons);
			this.$saveBtn = $('<div class="btn submit">'+Craft.t('Save')+'</div>').appendTo(this.$buttons);

			this.$body = $body;

			this.addListener(this.$cancelBtn, 'activate', 'onFadeOut');
			this.addListener(this.$saveBtn, 'activate', 'saveSettings');
		},

		onFadeIn: function() {
			var data = {
				template: 'modal_edit',
			};

			Craft.postActionRequest('fieldManager/getModalBody', data, $.proxy(function(response, textStatus) {
				if (textStatus == 'success') {
					this.$body.html(response);

					Craft.initUiElements(this.$body);

					new Craft.HandleGenerator('#name', '#handle');
				}
			}, this));

			this.base();
		},

		onFadeOut: function() {
			this.hide();
			this.destroy();
			this.$shade.remove();
			this.$container.remove();

			this.removeListener(this.$saveBtn, 'click');
			this.removeListener(this.$cancelBtn, 'click');
		},

		saveSettings: function() {
			var params = this.$body.find('form').serialize();

			this.$footerSpinner.removeClass('hidden');

			Craft.postActionRequest('fieldManager/saveField', params, $.proxy(function(response, textStatus) {
				this.$footerSpinner.addClass('hidden');

				if (response.error) {
					Garnish.shake(this.$container);

					$.each(response.error, function(index, value) {
						Craft.cp.displayError(value);
					});
				} else if (response.success) {
					Craft.cp.displayNotice(Craft.t('Field added.'));
					location.href = Craft.getUrl('fieldmanager');

					this.onFadeOut();
				} else {
					Garnish.shake(this.$container);
					Craft.cp.displayError(Craft.t('Could not add field'));
				}

			}, this));

			this.removeListener(this.$saveBtn, 'click');
			this.removeListener(this.$cancelBtn, 'click');
		},

		show: function() {
			this.base();
		},
	});






});





(function($) {
	var methods = {
		setValue: function(path, value, obj) {
			if(path.length) {
				var attr = path.shift();
				if(attr) {
					obj[attr] = methods.setValue(path, value, obj[attr] || {});
					return obj;
				} else {
					if(obj.push) {
						obj.push(value);
						return obj;
					} else {
						return [value];
					}
				}
			} else {
				return value;
			}
		}
	};
	
	$.fn.serializeObject = function() {
		var obj     = {},
			params  = this.serializeArray(),
			path    = null;
			
		$.each(params, function() {
			path = this.name.replace(/\]/g, "").split(/\[/);
			methods.setValue(path, this.value, obj);
		});
		
		return obj;
	};
})(jQuery);
