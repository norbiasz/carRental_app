(function() {
    APP.Views.BrandEdit = Backbone.View.extend({
        tagName: "div",

        template: JST["brandEditNewView"],

        initialize: function() {
            this.listenToOnce(this.model, "change", this.render);
            this.listenToOnce(this.model,  "destroy", _.bind(APP.Router.redirectToList, this));
            this.listenToOnce(this.model,  "destroy", APP.Messages.showRemoveInfo);
            this.listenToOnce(this.model, "destroy", APP.showStatisticsView);
            this.listenTo(this.model, "invalid", _.bind(APP.Messages.showErrorInfo, this));
            this.listenTo(this.model, "update", APP.Messages.showUpdateInfo);

            this.delegateEvents({
                "submit form": _.bind(APP.CRUD.updateItem, this),
                "click .delete": _.bind(APP.CRUD.deleteItem, this)
            });
        },

        render: function() {
            var html = this.template( this.model.toJSON() );
            this.$el.html(html);
            APP.Regions.appContent.html(this.el);
            this.stickit(); //funkcja ktora ładuje do selektorów model
        }, 

        bindings: {
            "#brand-name": "name"
        },

    })
})();