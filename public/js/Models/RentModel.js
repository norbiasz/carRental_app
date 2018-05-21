(function() {
    APP.Models.Rent = Backbone.Model.extend({

        idAttribute:  "_id",

        defaults: {
            car_id: "",
            brand_id: "",
            client_id: "",
            date: ""
        },
    
        validate: function(attrs, options) {
    
            if(attrs.car_id === "") {
                return "Musisz wybrać auto.";
            }
    
            if(attrs.client_id === "") {
                return "Musisz wybrać klienta";
            }
    
        },
    

        url: function(forceIsNew) {

            if(this.isNew() || forceIsNew) {
                return "/rents";
            } else {
                return "/rent/" + this.get("_id");
            }
    
        }
        
    });
})();