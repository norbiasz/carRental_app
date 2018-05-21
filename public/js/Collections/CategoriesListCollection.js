(function() {
    APP.Collections.CategoriesList = Backbone.Collection.extend({

        model: APP.Models.Category,

        url: "/categories"

    });
})();