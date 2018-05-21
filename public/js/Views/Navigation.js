(function() {

    APP.Views.Navigation = {
    
        menu: $(".app-top a"),
        tabs: $(".app-main__tab"),
        tabItems: $(".app-main__tab a"),
    
        highlight: function(route) {

            var names = {
                "car": "cars",
                "cars": "cars",
                "brand": "brands",
                "brands": "brands",
                "category": "categories",
                "categories": "categories",
                "rent": "rents",
                "rents": "rents",
                "client": "clients",
                "clients": "clients"
            };
    
            var tabItem = this.tabItems.filter("[href='/" + names[route] +"']"),
                tab = tabItem.parent(),
                tabsId = tab.attr("id"),
                menuItem = this.menu.filter("[data-tabs='" + tabsId + "']");
    
            this.menu.removeClass("active");
            this.tabs.removeClass("active");
            this.tabItems.removeClass("active");
            
            tabItem.addClass("active");
            tab.addClass("active");
            menuItem.addClass("active");
    
        }
    };
})();