(function() {
    APP.Views.RentEdit = Backbone.View.extend({
        tagName: "div",

        template: JST["rentEditNewView"],

        initialize: function() {
            this.listenToOnce(this.model, "change", this.render);
            this.listenToOnce(this.model,  "destroy", _.bind(APP.Router.redirectToList, this));
            this.listenToOnce(this.model,  "destroy", APP.Messages.showRemoveInfo);
            this.listenTo(this.model, "destroy", APP.showLatestRentsView);
            this.listenToOnce(this.model, "destroy", APP.showStatisticsView);
            this.listenTo(this.model, "invalid", _.bind(APP.Messages.showErrorInfo, this));
            this.listenTo(this.model, "update", APP.Messages.showUpdateInfo);
            this.listenTo(this.model, "update", APP.showLatestRentsView);

            this.delegateEvents({
                "submit form": _.bind(APP.CRUD.updateItem, this),
                "click .delete": _.bind(APP.CRUD.deleteItem, this)
            });
        },

        render: function() {
            var html = this.template( this.model.toJSON() ),
                model = this.model;
            this.$el.html(html);

            APP.Regions.appContent.html(this.el);

            APP.UI.autocomplete(this, "#ms-car-id", {
                name: "car_id",
                data: "/cars",
                valueField: "_id",
                displayField: "name",
                placeholder: "Wybierz auto",
                loadData: true,
                oneAllowedRents: true
            });
    
            APP.UI.autocomplete(this, "#ms-client-id", {
                name: "client_id",
                data: "/clients",
                valueField: "_id",
                displayField: "name",
                placeholder: "Wybierz klienta",
                loadData: true,
                oneAllowedRents: true
            });
            
            return this;
        },

    })
})();