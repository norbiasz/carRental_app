(function() {
    APP.Views.CategoryListItem = Backbone.View.extend({

        tagName: "li",

        template: JST["categoryListItemTemplate"],

        initialize: function() {

            this.delegateEvents({
                "click": _.bind(APP.Router.redirectToDetails, this),
            });
        },

        render: function() {
    
            var html = this.template( this.model.toJSON() );
            this.$el.html(html);

            return this;
        },

    });
})();