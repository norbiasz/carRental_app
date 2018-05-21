(function() {
    APP.Views.CarEdit = Backbone.View.extend({
        tagName: "div",

        template: JST["carEditNewView"],

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
            var html = this.template( this.model.toJSON() ),
                model = this.model;
            this.$el.html(html);
            APP.Regions.appContent.html(this.el);
            this.stickit(); //funkcja ktora ładuje do selektorów model

            APP.UI.autocomplete(this, "#ms-car-categories", {
                name: "categories",
                data: "/categories",
                valueField: "name",
                displayField: "name",
                placeholder: "Choose a category",
                loadData: true,
                oneAllowed: true
            });
    
            APP.UI.autocomplete(this, "#ms-car-brands", {
                name: "brands",
                data: "/brands",
                valueField: "name",
                displayField: "name",
                placeholder: "Choose a brand",
                loadData: true,
                oneAllowed: true
            });

            APP.UI.datePicker(this, "date", "#car-date"); 
                            //kontekst widoku, model.set, selektor

            return this;
        },

        bindings: {
            "#car-name": "name",
            "#car-date": "date",
            "#car-description": "description",
            "#car-quantity": "quantity"
        },

    })
})();