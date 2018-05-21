(function() {
    APP.Models.Car = Backbone.Model.extend({

        idAttribute:  "_id",

        defaults: {
            name: "",
            date: "",
            categories: [],
            brands: [],
            description: "",
            quantity: 0
        },
        
        validate: function(attrs, options) {

            if(attrs.name === "") {
                return "Required car category.";
            }
    
            if(!attrs.date.match(/^(\d{2}-\d{2}-\d{4})$/)) {
                return "Required car production date.";
            }
    
            if(!attrs.categories.length) {
                return "Required car category.";
            }
    
            if(!attrs.brands.length) {
                return "Required car brand.";
            }
    
            if(attrs.description === "") {
                return "Required car description.";
            }
    
            if(parseInt(attrs.quantity) < 0) {
                return "Required cars quantity.";
            }
    
        },

        url: function(forceIsNew) {

            if(this.isNew() || forceIsNew) {
                return "/cars";
            } else {
                return "/car/" + this.get("_id");
            }
    
        }
        
    });
})();