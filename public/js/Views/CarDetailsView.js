(function() {
    APP.Views.CarDetails = Backbone.View.extend({

        tagName: "div",

        template: JST["carDetailsTemplate"],

        initialize: function() {
            this.listenTo(this.model, "change", this.render);
            this.delegateEvents({
                "click .edit": _.bind(APP.Router.redirectToEdit, this)
            })
        },

        render: function() {
            var html = this.template( this.model.toJSON() );
            this.$el.html(html);
            APP.Regions.appContent.html(this.el);
        },

    });
})();