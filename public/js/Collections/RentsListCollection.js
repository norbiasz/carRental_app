(function() {
    APP.Collections.RentsList = Backbone.Collection.extend({
    
        model: APP.Models.Rent,
    
        url: "/rents"
    
    });
})();