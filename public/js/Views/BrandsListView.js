(function() {
    APP.Views.BrandsList = Backbone.View.extend({
        
        tagName: "ul",
        className: "app-items-list",

        initialize: function(options) {
            this.options = options;
            this.listenTo(this.collection, "reset", this.render);
        },

        render: function() {
            var paginationView = new APP.Views.Pagination({
                collectionName: "brands",
                page: this.options.page,
                order: this.options.order,
                search: this.options.search
            });
            var actionView = new APP.Views.ListActions({
                collectionName: "brands",
                page: this.options.page,
                order: this.options.order,
                search: this.options.search,
                placeholder: "Search brand...."
            });
            this.childViews = [actionView, paginationView];
            this.collection.each(this.addOne, this);

            APP.Regions.appContent.append(actionView.render().el);
            APP.Regions.appContent.append(this.el);
            APP.Regions.appContent.append(paginationView.render().el);
        },

        addOne: function(model) {
            var view = new APP.Views.BrandListItem({model: model});
            this.$el.append(view.render().el);
        }
    });
})();