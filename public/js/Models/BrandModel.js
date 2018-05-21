(function(){
    APP.Models.Brand = Backbone.Model.extend({

        idAttribute:  "_id",

        defaults: {
            name: ""
        },
    
        validate: function(attrs, options) {

            if(attrs.name === "") {
                return "Musisz podać markę pojazdu.";
            }
            
        },

        url: function(forceIsNew) {

            if(this.isNew() || forceIsNew) {
                return "/brands";
            } else {
                return "/brand/" + this.get("_id");
            }
        }
        
    });
})();