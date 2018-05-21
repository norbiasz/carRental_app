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
                return "Musisz podać imię i nazwisko klienta.";
            }
    
            if(!attrs.birthdate.match(/^(\d{2}-\d{2}-\d{4})$/)) {
                return "Musisz podać poprawną datę urodzenia.";
            }
    
            if(!attrs.idc_number.match(/^([a-z]{3}\d{6})$/i)) {
                return "Musisz podać poprawny numer dowodu osobistego.";
            }
    
            if(attrs.address === "") {
                return "Musisz podać poprawny adres.";
            }
    
            if(!attrs.zip_code.match(/^(\d{2}-\d{3})$/)) {
                return "Musisz podać poprawny kod pocztowy.";
            }
    
            if(attrs.city === "") {
                return "Musisz podać poprawną nazwę miejscowości.";
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