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

            Craft.sendActionRequest('POST', 'field-manager/base/get-group-modal-body', { data })
                .then((response) => {
                    this.showHud(response);
                });
		},

		showHud: function(response) {
			this.$element.removeClass('loading');

			var $hudContents = $();

			this.$form = $('<div/>');
			$('<input type="hidden" name="groupId" value="' + this.groupId + '">').appendTo(this.$form);
			$fieldsContainer = $('<div class="fields"/>').appendTo(this.$form);

			$fieldsContainer.html(response.data.html);
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
		},

		saveGroupField: function(ev) {
			ev.preventDefault();

			this.$spinner.removeClass('hidden');

            var data = this.hud.$body.serialize();

            Craft.sendActionRequest('POST', 'field-manager/base/clone-group', { data })
                .then((response) => {
                    Craft.cp.displayNotice(Craft.t('field-manager', 'Group cloned.'));
                    location.href = Craft.getUrl('field-manager');

                    this.onFadeOut();
                })
                .catch(({response}) => {
                    Garnish.shake(this.hud.$hud);

                    if (response && response.data && response.data.message) {
                        Craft.cp.displayError(response.data.message);
                    } else {
                        Craft.cp.displayError();
                    }
                })
                .finally(() => {
                    this.$spinner.addClass('hidden');;
                });
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

            Craft.sendActionRequest('POST', 'field-manager/base/get-group-modal-body', { data })
                .then((response) => {
                    this.showHud(response);
                });
		},

		showHud: function(response) {
			this.$element.removeClass('loading');

			var $hudContents = $();

			this.$form = $('<div/>');
			$('<input type="hidden" name="groupId" value="' + this.groupId + '">').appendTo(this.$form);
			$fieldsContainer = $('<div class="fields"/>').appendTo(this.$form);

			$fieldsContainer.html(response.data.html);
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
		},

		saveGroupField: function(ev) {
			ev.preventDefault();

			this.$spinner.removeClass('hidden');

			var data = this.hud.$body.serialize();

            Craft.sendActionRequest('POST', 'fields/save-group', { data })
            .then((response) => {
                location.href = Craft.getUrl('field-manager');

                Craft.cp.displayNotice(Craft.t('field-manager', 'Field group updated.'));

                this.closeHud();
            })
            .catch(({response}) => {
                Garnish.shake(this.hud.$hud);

                if (response && response.data && response.data.message) {
                    Craft.cp.displayError(response.data.message);
                } else {
                    Craft.cp.displayError();
                }
            })
            .finally(() => {
                this.$spinner.addClass('hidden');
            });
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

            Craft.sendActionRequest('POST', 'field-manager/base/get-field-modal-body', { data })
                .then((response) => {
                    this.$body.html(response.data.html);

                    Craft.appendHeadHtml(response.data.headHtml);
                    Craft.appendBodyHtml(response.data.footHtml);

                    Craft.initUiElements(this.$body);

                    new Craft.HandleGenerator('#name', '#handle');
                });

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
			var data = this.$body.find('form').serializeObject();
			data.fieldId = this.fieldId;

			this.$footerSpinner.removeClass('hidden');

            Craft.sendActionRequest('POST', 'field-manager/base/clone-field', { data })
                .then((response) => {
                    Craft.cp.displayNotice(Craft.t('field-manager', 'Field cloned.'));
                    location.href = Craft.getUrl('field-manager');

                    this.onFadeOut();
                })
                .catch(({response}) => {
                    if (response && response.data && response.data.message) {
                        Craft.cp.displayError(response.data.message);
                    } else {
                        Craft.cp.displayError();
                    }
                })
                .finally(() => {
                    this.$footerSpinner.addClass('hidden');
                });

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
        $form: null,
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

        onFormSubmit: function(e) {
            e.preventDefault();
        },

		onFadeIn: function() {
			var data = {
				fieldId: this.fieldId,
				groupId: this.groupId,
			};

            Craft.sendActionRequest('POST', 'field-manager/base/get-field-modal-body', { data })
                .then((response) => {
                    this.$body.html(response.data.html);

                    Craft.appendHeadHtml(response.data.headHtml);
                    Craft.appendBodyHtml(response.data.footHtml);

                    Craft.initUiElements(this.$body);

                    this.$form = this.$body.find('form');

                    // Bind an empty event to the submit handler. This is needed for Table fields which rely on this event
                    this.addListener(this.$form, 'submit', 'onFormSubmit');
                });

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
            // Trigger the form submit. Table fields need this if there's a dropdown option. Other fields might also require this..
            this.$form.trigger('submit');

			this.$footerSpinner.removeClass('hidden');
            
            var data = this.$form.serialize();

            Craft.sendActionRequest('POST', 'field-manager/base/save-field', { data })
                .then((response) => {
                    Craft.cp.displayNotice(Craft.t('field-manager', 'Field updated.'));
                    location.href = Craft.getUrl('field-manager');

                    this.onFadeOut();
                })
                .catch(({response}) => {
                    Garnish.shake(this.$container);

                    if (response && response.data && response.data.message) {
                        Craft.cp.displayError(response.data.message);
                    } else {
                        Craft.cp.displayError();
                    }
                });

			this.removeListener(this.$saveBtn, 'click');
			this.removeListener(this.$cancelBtn, 'click');
		},

		show: function() {
			this.base();
		}
	});
});

