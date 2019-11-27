// ==========================================================================

// Field Manager Plugin for Craft CMS
// Author: Verbb - https://verbb.io/

// ==========================================================================

// @codekit-prepend "_cookie.js"    
// @codekit-prepend "_events.js"    
// @codekit-prepend "_utils.js"    

if (typeof Craft.FieldManager === typeof undefined) {
    Craft.FieldManager = {};
}

$(function() {

	// Provide HUD functionality for cloning a group of fields
	Craft.FieldManager.CloneGroup = Garnish.Base.extend({
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
				clone: true,
			};

			Craft.postActionRequest('field-manager/base/get-group-modal-body', data, $.proxy(this, 'showHud'));
		},

		showHud: function(response, textStatus) {
			this.$element.removeClass('loading');

			if (response.success) {
				var $hudContents = $();

				this.$form = $('<div/>');
				$('<input type="hidden" name="groupId" value="' + this.groupId + '">').appendTo(this.$form);
				$fieldsContainer = $('<div class="fields"/>').appendTo(this.$form);

				$fieldsContainer.html(response.html);
				Craft.initUiElements($fieldsContainer);

                var $footer = $('<div class="hud-footer"/>').appendTo(this.$form),
                    $buttonsContainer = $('<div class="buttons right"/>').appendTo($footer);

                this.$cancelBtn = $('<div class="btn">' + Craft.t('field-manager', 'Cancel') + '</div>').appendTo($buttonsContainer);
                this.$saveBtn = $('<input class="btn submit" type="submit" value="' + Craft.t('field-manager', 'Clone') + '"/>').appendTo($buttonsContainer);
                this.$spinner = $('<div class="spinner hidden"/>').appendTo($buttonsContainer);

                $hudContents = $hudContents.add(this.$form);

				this.hud = new Garnish.HUD(this.$element, $hudContents, {
					bodyClass: 'body',
					closeOtherHUDs: false
				});

				this.hud.on('hide', $.proxy(function() {
					delete this.hud;
				}, this));

				this.addListener(this.$saveBtn, 'activate', 'saveGroupField');
				this.addListener(this.$cancelBtn, 'activate', 'closeHud');

				new Craft.FieldManager.HandleGeneratorWithSuffix('#name', '#prefix');
			}
		},

		saveGroupField: function(ev) {
			ev.preventDefault();

			this.$spinner.removeClass('hidden');

            var data = this.hud.$body.serialize();

			Craft.postActionRequest('field-manager/base/clone-group', data, $.proxy(function(response, textStatus) {
				this.$spinner.addClass('hidden');

				if (response.error) {
					Garnish.shake(this.hud.$hud);

					$.each(response.error, function(index, value) {
						Craft.cp.displayError(value);
					});
				} else if (response.success) {
					Craft.cp.displayNotice(Craft.t('field-manager', 'Group cloned.'));
					location.href = Craft.getUrl('field-manager');

					this.onFadeOut();
				} else {
					Craft.cp.displayError(Craft.t('field-manager', 'Could not clone group'));
				}
			}, this));
		},

		closeHud: function() {
			this.hud.hide();
			delete this.hud;
		}
	});




	Craft.FieldManager.EditGroup = Garnish.Base.extend({
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

			Craft.postActionRequest('field-manager/base/get-group-modal-body', data, $.proxy(this, 'showHud'));
		},

		showHud: function(response, textStatus) {
			this.$element.removeClass('loading');

			if (response.success) {
				var $hudContents = $();

				this.$form = $('<div/>');
				$('<input type="hidden" name="groupId" value="' + this.groupId + '">').appendTo(this.$form);
				$fieldsContainer = $('<div class="fields"/>').appendTo(this.$form);

				$fieldsContainer.html(response.html);
				Craft.initUiElements($fieldsContainer);

				var $footer = $('<div class="hud-footer"/>').appendTo(this.$form),
                    $buttonsContainer = $('<div class="buttons right"/>').appendTo($footer);

                this.$cancelBtn = $('<div class="btn">' + Craft.t('field-manager', 'Cancel') + '</div>').appendTo($buttonsContainer);
                this.$saveBtn = $('<input class="btn submit" type="submit" value="' + Craft.t('field-manager', 'Save') + '"/>').appendTo($buttonsContainer);
                this.$spinner = $('<div class="spinner hidden"/>').appendTo($buttonsContainer);

                $hudContents = $hudContents.add(this.$form);

				this.hud = new Garnish.HUD(this.$element, $hudContents, {
					bodyClass: 'body',
					closeOtherHUDs: false
				});

				this.hud.on('hide', $.proxy(function() {
					delete this.hud;
				}, this));

				this.addListener(this.$saveBtn, 'activate', 'saveGroupField');
				this.addListener(this.$cancelBtn, 'activate', 'closeHud');
			}
		},

		saveGroupField: function(ev) {
			ev.preventDefault();

			this.$spinner.removeClass('hidden');

			var data = this.hud.$body.serialize();

			Craft.postActionRequest('fields/save-group', data, $.proxy(function(response, textStatus) {
				this.$spinner.addClass('hidden');

				if (textStatus == 'success' && response.success) {
					location.href = Craft.getUrl('field-manager');

					Craft.cp.displayNotice(Craft.t('field-manager', 'Field group updated.'));

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



	Craft.FieldManager.CloneField = Garnish.Modal.extend({
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
			this.$cancelBtn = $('<div class="btn">'+Craft.t('field-manager', 'Cancel')+'</div>').appendTo(this.$buttons);

			if (!this.fieldId) {
				this.$saveBtn = $('<div class="btn submit">'+Craft.t('field-manager', 'Add field')+'</div>').appendTo(this.$buttons);
			} else {
				this.$saveBtn = $('<div class="btn submit">'+Craft.t('field-manager', 'Clone')+'</div>').appendTo(this.$buttons);
			}

			this.$body = $body;

			this.addListener(this.$cancelBtn, 'activate', 'onFadeOut');
			this.addListener(this.$saveBtn, 'activate', 'saveSettings');
		},

		onFadeIn: function() {
			var data = {
				fieldId: this.fieldId,
				groupId: this.groupId,
			};

			Craft.postActionRequest('field-manager/base/get-field-modal-body', data, $.proxy(function(response, textStatus) {
				if (response.success) {
					this.$body.html(response.html);

                    Craft.appendHeadHtml(response.headHtml);
                    Craft.appendFootHtml(response.footHtml);

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

			Craft.postActionRequest('field-manager/base/clone-field', params, $.proxy(function(response, textStatus) {
				this.$footerSpinner.addClass('hidden');

				if (response.error) {
					$.each(response.error, function(index, value) {
						Craft.cp.displayError(value);
					});
				} else if (response.success) {
					Craft.cp.displayNotice(Craft.t('field-manager', 'Field cloned.'));
					location.href = Craft.getUrl('field-manager');

					this.onFadeOut();
				} else {
					Craft.cp.displayError(Craft.t('field-manager', 'Could not clone field'));
				}

			}, this));

			this.removeListener(this.$saveBtn, 'click');
			this.removeListener(this.$cancelBtn, 'click');
		},

		show: function() {
			this.base();
		}
	});



	Craft.FieldManager.EditField = Garnish.Modal.extend({
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

            if ($data) {
    			this.fieldId = $data.data('id');
    			this.groupId = $data.data('groupid');
            }

			// Build the modal
			var $container = $('<div class="modal fieldsettingsmodal"></div>').appendTo(Garnish.$bod),
				$body = $('<div class="body"><div class="spinner big"></div></div>').appendTo($container),
				$footer = $('<div class="footer"/>').appendTo($container);

			this.base($container, this.settings);

			this.$footerSpinner = $('<div class="spinner hidden"/>').appendTo($footer);
			this.$buttons = $('<div class="buttons rightalign first"/>').appendTo($footer);
			this.$cancelBtn = $('<div class="btn">' + Craft.t('field-manager', 'Cancel') + '</div>').appendTo(this.$buttons);
			this.$saveBtn = $('<div class="btn submit">' + Craft.t('field-manager', 'Save') + '</div>').appendTo(this.$buttons);

			this.$body = $body;

			this.addListener(this.$cancelBtn, 'activate', 'onFadeOut');
			this.addListener(this.$saveBtn, 'activate', 'saveSettings');
		},

		onFadeIn: function() {
			var data = {
				fieldId: this.fieldId,
				groupId: this.groupId,
			};

			Craft.postActionRequest('field-manager/base/get-field-modal-body', data, $.proxy(function(response, textStatus) {
                if (response.success) {
					this.$body.html(response.html);

                    Craft.appendHeadHtml(response.headHtml);
                    Craft.appendFootHtml(response.footHtml);

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

			Craft.postActionRequest('field-manager/base/save-field', params, $.proxy(function(response, textStatus) {
				this.$footerSpinner.addClass('hidden');

				if (response.error) {
					Garnish.shake(this.$container);

					$.each(response.error, function(index, value) {
						Craft.cp.displayError(value);
					});
				} else if (response.success) {
					Craft.cp.displayNotice(Craft.t('field-manager', 'Field updated.'));
					location.href = Craft.getUrl('field-manager');

					this.onFadeOut();
				} else {
					Garnish.shake(this.$container);
					Craft.cp.displayError(Craft.t('field-manager', 'Could not update field'));
				}

			}, this));

			this.removeListener(this.$saveBtn, 'click');
			this.removeListener(this.$cancelBtn, 'click');
		},

		show: function() {
			this.base();
		}
	});
});

