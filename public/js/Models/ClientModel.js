(function() {
    APP.Models.Client = Backbone.Model.extend({

        idAttribute: "_id",

        defaults: {
            first_name: "",
            last_name: "",
            birthdate: "",
            idc_number: "",
            address: "",
            zip_code: "",
            city: ""
        },

        validate: function(attrs, options) {

            if(attrs.first_name === "" || attrs.last_name === "") {
                return "You must provide the correct name and surname.";
            }
    
            if(!attrs.birthdate.match(/^(\d{2}-\d{2}-\d{4})$/)) {
                return "You must provide the correct birth date.";
            }
    
            if(!attrs.idc_number.match(/^([a-z]{3}\d{6})$/i)) {
                return "You must provide the correct idc.";
            }
    
            if(attrs.address === "") {
                return "You must provide the correct adress.";
            }
    
            if(!attrs.zip_code.match(/^(\d{2}-\d{3})$/)) {
                return "You must provide a valid zip code.";
            }
    
            if(attrs.city === "") {
                return "You must provide the correct place.";
            }
    
        },

        url: function(forceIsNew) {

            if(this.isNew() || forceIsNew) {
                return "/clients";
            } else {
                return "/client/" + this.get("_id");
            }
    
        }

    });
})();