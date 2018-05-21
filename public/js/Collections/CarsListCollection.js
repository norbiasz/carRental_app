(function() {
    APP.Collections.CarsList = Backbone.Collection.extend({
    
        model: APP.Models.Car,
    
        url: "/cars"
    
    });
})();