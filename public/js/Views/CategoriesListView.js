(function() {
    APP.Views.CategoriesList = Backbone.View.extend({
        
        tagName: "ul",
        className: "app-items-list",

        initialize: function(options) {
            this.options = options;
            this.listenTo(this.collection, "reset", this.render);
        },

        render: function() {
            var actionView = new APP.Views.ListActions({
                collectionName: "categories",
                page: this.options.page,
                order: this.options.order,
                search: this.options.search,
                placeholder: "Search category...."
            });
            this.childViews = [actionView];

            this.collection.each(this.addOne, this);

            APP.Regions.appContent.append(actionView.render().el);
            APP.Regions.appContent.append(this.el);
        },

        addOne: function(model) {
            var view = new APP.Views.CategoryListItem({model: model})
            this.$el.append(view.render().el)
        },
        events: {
            "click .details": "redirectToDetails"
        },

        redirectToDetails: function() {
            APP.router.navigate("/category/" + this.model.get("_id"), {trigger: true});
        }
    });
})();