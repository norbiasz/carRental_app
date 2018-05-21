(function() {
    APP.Views.Pagination = Backbone.View.extend({
        
        tagName: "div",
        className: "app-items-pagination",

        template: JST["listPaginationTemplate"],

        initialize: function(options) {

            this.options = options;

            $.ajax({
                url: "/info/" + this.options.collectionName,
                context: this,
                data: {
                    name: this.options.search || undefined  //jeśli undefined to dane nie zostaną wysłane na serwer
                }

            }).done(function(items) { //items liczba zwrócona z serwera (count)
                if(items > 5) {
                    this.render(items);
                } else {
                    this.remove();
                }
            });
        },

        render: function(items) {
            var anchors = Math.ceil(items / 5),
            page = this.options.page,
            active = page ? page : 1;

            this.$el.html( this.template({ anchors: anchors, active: active }) );

            return this;
        },

        events: {
            "click a": "goToPage"
        },
    
        goToPage: function(e) {
    
            e.preventDefault();
    
            var page = $(e.target).data("page"),
                url = this.options.collectionName + "/page/" + page + "/order/" + this.options.order;
    
            if(this.options.search) {
                url += "/search/" + this.options.search;
            }
    
            APP.router.navigate(url, {trigger: true});
    
        }
    });
})();