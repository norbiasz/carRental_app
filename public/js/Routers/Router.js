(function() {
    APP.Routers.Router = Backbone.Router.extend({
    
        initialize: function() {

            this.route("", "cars-list");
            this.route("cars(/page/:page)(/order/:order)(/search/:search)", "cars-list"); // params/route 
            this.route("brands(/page/:page)(/order/:order)(/search/:search)", "brands-list");
            this.route("categories(/page/:page)(/order/:order)(/search/:search)", "categories-list");
            this.route("rents(/page/:page)(/order/:order)(/search/:search)", "rents-list");
            this.route("clients(/page/:page)(/order/:order)(/search/:search)", "clients-list");
    
            this.route("car/:id", "car-details");
            this.route("brand/:id", "brand-details");
            this.route("category/:id", "category-details");
            this.route("rent/:id", "rent-details");
            this.route("client/:id", "client-details");
    
            this.route("car/:id/edit", "car-edit");
            this.route("brand/:id/edit", "brand-edit");
            this.route("category/:id/edit", "category-edit");
            this.route("rent/:id/edit", "rent-edit");
            this.route("client/:id/edit", "client-edit");
    
            this.route("cars/new", "car-new");
            this.route("brands/new", "brand-new");
            this.route("categories/new", "category-new");
            this.route("rents/new", "rent-new");
            this.route("clients/new", "client-new");
    
        },
        
    });
})();