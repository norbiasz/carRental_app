(function() {
    APP.Views.CategoryNew = Backbone.View.extend({
        tagName: "div",

        template: JST["categoryEditNewView"],

        initialize: function() {
            this.listenToOnce(this.model, "sync", _.bind(APP.Router.redirectToEdit, this));// sync jesli nastapi synchronizacja z serverem wywołuje metodę redirectToEdit
            this.listenToOnce(this.model, "sync", APP.Messages.showAddedInfo);
            this.listenToOnce(this.model, "sync", APP.showStatisticsView);
            this.listenTo(this.model, "invalid",  _.bind(APP.Messages.showErrorInfo, this));
            this.delegateEvents({
                "submit form": _.bind(APP.CRUD.createItem, this),
            });
            this.render();
        },

        render: function() {
            var html = this.template( this.model.toJSON() );
            this.$el.html(html);
            APP.Regions.appContent.html(this.el);
            this.stickit(); //funkcja ktora ładuje do selektorów model
        },

        bindings: {
            "#category-name": "name"
        },

    })
})();