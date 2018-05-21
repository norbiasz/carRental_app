(function() {
    APP.Collections.ClientsList = Backbone.Collection.extend({
        
        model: APP.Models.Client,

        url: "/clients"
        
    });
})();