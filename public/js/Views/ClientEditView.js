(function() {
    APP.Views.ClientEdit = Backbone.View.extend({
        tagName: "div",

        template: JST["clientEditNewView"],

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
            this.stickit();

            APP.UI.datePicker(this, "birthdate", "#client-birth-date");
                             //kontekst widoku, model.set, selektor

            return this;
        },

        bindings: {
            "#client-first-name": "first_name",
            "#client-last-name": "last_name",
            "#client-birth-date": "birthdate",
            "#client-id-number": "idc_number",
            "#client-address": "address",
            "#client-zip-code": "zip_code",
            "#client-city": "city"
        },

    })
})();