(function() {
    APP.Views.CarNew = Backbone.View.extend({
        tagName: "div",

        template: JST["carEditNewView"],

        initialize: function() {
            this.listenToOnce(this.model, "sync", _.bind(APP.Router.redirectToEdit, this)); // sync jesli nastapi synchronizacja z serverem wywołuje metodę redirectToEdit
            this.listenToOnce(this.model, "sync", APP.Messages.showAddedInfo);
            this.listenToOnce(this.model, "sync", APP.showStatisticsView);
            this.listenTo(this.model, "invalid",  _.bind(APP.Messages.showErrorInfo, this));
            this.delegateEvents({
                "submit form": _.bind(APP.CRUD.createItem, this),
            });
            this.render();
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
                oneAllowed: true
            });
    
            APP.UI.autocomplete(this, "#ms-car-brands", {
                name: "brands",
                data: "/brands",
                valueField: "name",
                displayField: "name",
                placeholder: "Choose a brand",
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