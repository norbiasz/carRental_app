(function() {

    APP.Views.Breadcrumbs = Backbone.View.extend({
    
        tagName: "div",
        className: "app-breadcrumbs",
    
        template: JST["breadcrumbsWidgetTemplate"],
    
        initialize: function() {
    
            this.listenTo(APP.router, "route", this.render);
    
        },
    
        render: function() {
    
            var html = this.template( {pathItems: this.getPathItems()} );
    
            this.$el.html(html);
    
            APP.Regions.appHeader.prepend(this.el);
    
        },
    
        getPathItems: function() {
    
            var regex = /cars|car|brands|brand|categories|category|rents|rent|clients|client/ig,
                test = regex.exec(window.location.pathname);
    
            var texts = {
    
                "cars": "Cars",
                "brands": "Brands",
                "categories": "Categories",
                "rents": "Rents",
                "clients": "Clients",
    
                "car": "Details car",
                "brand": "Details brand",
                "category": "Details category",
                "rent": "Details rent",
                "client": "Details client",
    
                "car:edit": "Edit car",
                "cars:new": "New car",
                "brand:edit": "Edit brand",
                "brands:new": "New brand",
                "category:edit": "Edit category",
                "categories:new": "New category",
                "rent:edit": "Edit rent",
                "rents:new": "New rent",
                "client:edit": "Edit client",
                "clients:new": "New client"
    
            };
    
            var pathItems = ["Home"];
    
            if(test !== null) {
    
                var page = test[0],
                    isEditOrNew = test.input.match(/\/(edit|new)$/);
    
                var suffix = isEditOrNew ? ":" + isEditOrNew[1] : "";
    
                pathItems.push(texts[page + suffix]);
    
            }
    
            return pathItems;
    
        }
    
    });
    
})();