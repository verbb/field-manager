if (typeof Craft.FieldManager === typeof undefined) {
    Craft.FieldManager = {};
}

$(function() {

    Craft.FieldManager.HandleGeneratorWithSuffix = Craft.BaseInputGenerator.extend({
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
            var words = Craft.filterArray(handle.split(/[^a-z0-9]+/));

            handle = '';

            // Make it camelCase
            for (var i = 0; i < words.length; i++) {
                if (i === 0) {
                    handle += words[i];
                } else {
                    handle += words[i].charAt(0).toUpperCase()+words[i].substr(1);
                }
            }

            return handle + '_';
        }
    });

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

});