(function() {

    APP.Views.LatestRents =  Backbone.View.extend({

    tagName: "ul",
    className: "app-latest-rents",

    template: JST["latestRentsWidgetTemplate"],

    initialize: function() {

        this.listenTo(this.collection, "reset", this.render);

    },

    render: function() {

        this.collection.each(this.addOne, this);

        APP.Regions.appNav.html( this.template() )
            .append(this.el);

        return this;

    },

    addOne: function(model) {

        var view = new APP.Views.LatestRentsListItem({model: model});

        this.$el.append(view.render().el);

    }

});

})();