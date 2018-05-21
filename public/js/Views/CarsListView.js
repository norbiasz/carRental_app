(function() {
    APP.Views.CarsList = Backbone.View.extend({
        
        tagName: "ul",
        className: "app-items-list",

        initialize: function(options) {
            this.options = options; //przekazanie parametru z routera
            this.listenTo(this.collection, "reset", this.render);
        },

        render: function() {
            var paginationView = new APP.Views.Pagination({
                collectionName: "cars",
                page: this.options.page,
                order: this.options.order,
                search: this.options.search
            });
            var actionView = new APP.Views.ListActions({
                collectionName: "cars",
                page: this.options.page,
                order: this.options.order,
                search: this.options.search,
                placeholder: "Search model...."
            });
            this.childViews = [actionView, paginationView];
            this.collection.each(this.addOne, this);
        
            APP.Regions.appContent.append(actionView.render().el);
            APP.Regions.appContent.append(this.el);
            APP.Regions.appContent.append(paginationView.render().el);
        },

        addOne: function(model) {
            var view = new APP.Views.CarListItem({model: model});
            this.$el.append(view.render().el)
        }
    })
})();