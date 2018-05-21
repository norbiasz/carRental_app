(function() {
    APP.Collections.BrandsList = Backbone.Collection.extend({

        model: APP.Models.Brand,

        url: "/brands"

    });
})();