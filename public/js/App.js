(function() {

    window.APP = {
        Models: {},
        Collections: {},
        Views: {},
        Routers: {},

        Regions: {
            appHeader: $(".app-header"),
            appContent: $(".app-content"),
            appNav: $(".app-content-nav")
        },

        ViewsInstances: {},
        Vent: _.extend({}, Backbone.Events)
    };

    APP.Utils = {

        capitalize: function(text) {
            return text.charAt(0).toUpperCase() + text.slice(1);
        },
    
        formatDate: function(date) {
            var d = new Date(date),
                day = d.getDate(),
                month = d.getMonth() + 1,
                year = d.getFullYear();
    
            month = (month < 10) ? "0" + month : month;
            return day + "." + month + "." + year;
        },
    
        formatDateMoment: function(date) {
            var d = new Date(date);
            return moment(d).locale("pl").calendar();
        }

    };

    APP.showMainView = function(view) {

        if(APP.ViewsInstances.mainView) {
            var childViews = APP.ViewsInstances.mainView.childViews;

            if(childViews) {
                _.each(childViews, function(childView) {
                    childView.remove();
                });
            }
            APP.ViewsInstances.mainView.remove();
        }
        APP.ViewsInstances.mainView = view;
    };

    APP.showStatisticsView = function() {

        if(APP.ViewsInstances.statistics) {
            APP.ViewsInstances.statistics.remove();
        }
    
        APP.ViewsInstances.statistics = new APP.Views.Statistics();
    
    };

    APP.showLatestRentsView = function() {

        if(APP.ViewsInstances.latestRents) {
            APP.ViewsInstances.latestRents.remove();
        }
    
        var latestRents = new APP.Collections.RentsList();
    
        APP.ViewsInstances.latestRents = new APP.Views.LatestRents({collection: latestRents});

        latestRents.fetch({
            reset: true,
            data: {
                limit: 3,
                order: -1
            }
        });
    
    };

    APP.showBreadcrumbsView = function() {

        if(APP.ViewsInstances.breadcrumbs) {
            APP.ViewsInstances.breadcrumbs.remove();
        }
    
        APP.ViewsInstances.breadcrumbs = new APP.Views.Breadcrumbs();

    };

    APP.showItemsList = function(list, page, order, search) {

        var name = list.split("-")[0],
            colname = APP.Utils.capitalize(name) + "List";
    
        var page = page || 1, // zaciagne parametry z routera
            skip = (page - 1) * 5,
            order = order || ((name === "rents") ? -1 : 1), // sortowanie
            search = search || "",
            limit = (name === "categories") ? 0 : 5,
            items = new APP.Collections[colname](),
            view = new APP.Views[colname]({   //przesyłane parametry do widoku
                collection: items,
                page: page,
                order: order,
                search: search
            });
    
        APP.showMainView(view);
    
        items.fetch({ //przesyłane parametry na serwer
            reset: true,
            data: {
                limit: limit,
                skip: skip,
                order: order,
                name: search
            }
        });
    
        APP.Views.Navigation.highlight(name);
    
    };

    APP.showItemDetails = function(item, id) {

        var name = item.split("-")[0],
            modelName = APP.Utils.capitalize(name),
            viewName = APP.Utils.capitalize(name) + "Details";
    
        var item = new APP.Models[modelName]({_id: id}),
            itemView = new APP.Views[viewName]({model: item});
    
        item.fetch({reset: true});
    
        APP.showMainView(itemView);
        APP.Views.Navigation.highlight(name);
    
    };

    APP.showItemEdit = function(item, id) {

        var name = item.split("-")[0],
            modelName = APP.Utils.capitalize(name),
            viewName = APP.Utils.capitalize(name) + "Edit";
    
        var item = new APP.Models[modelName]({_id: id}),
            itemView = new APP.Views[viewName]({model: item});
    
        item.fetch({reset: true});
    
        APP.showMainView(itemView);
        APP.Views.Navigation.highlight(name);
    
    };

    APP.showItemNew = function(item) {

        var name = item.split("-")[0],
            modelName = APP.Utils.capitalize(name),
            viewName = APP.Utils.capitalize(name) + "New";
    
        var item = new APP.Models[modelName](),
            itemView = new APP.Views[viewName]({model: item});
    
        APP.showMainView(itemView);
        APP.Views.Navigation.highlight(name);
    
    };

    APP.CRUD = {

        createItem: function(e) {
            e.preventDefault();
            this.model.save({}, {wait: true}) // zdarzenie nastąpi po pomyślnym zapisaniu danych na serwerze
        },

        updateItem: function(e) {
            e.preventDefault();

            var model = this.model;

            this.model.save({}, {
                wait: true,          // zdarzenie nastąpi po pomyślnym zapisaniu danych na serwerze
                success: function() {
                    model.trigger("update");
                }
            });
        },

        deleteItem: function() {
            var model = this.model;

            APP.Messages.showRemovePrompt(function(){
                model.destroy({wait: true});
            });
        },
    },

    APP.UI = {

        autocomplete: function(view, elem, options) {
    
            var defaults = {
                method: "get",
                allowFreeEntries: false,
                toggleOnClick: true,
                queryParam: "name"
            };
    
            var options = _.extend(defaults, options),
                field = view.$el.find(elem).magicSuggest(options);
    
            $(field).on("selectionchange", function(e, m, items) {
    
                if( (options.oneAllowed || options.oneAllowedRents) && items.length > 1) {
                    this.removeFromSelection(items[0], true); //usunięcie pierwszego wyboru
                }
    
                if(items.length) {
    
                    if(options.oneAllowed) {
                        if(options.oneAllowed) {
                            view.model.set(options.name, _.pluck(items, "name")); // pluck zamieni nam objeckt na tablicę
                        } else {
                            view.model.set(options.name, items[0].name);
                        }
                    }
                    
                    if(options.oneAllowedRents) {
                        if(options.oneAllowedRents) {
                            view.model.set(options.name, items[0]._id);
                        } else {
                            view.model.set(options.name, _.pluck(items, "name")); // pluck zamieni nam objeckt na tablicę
                        }
                    }
    
                    this.container.addClass("selected");
    
                } else {
                    view.model.set(options.name, view.model.defaults[options.name]);
                    this.container.removeClass("selected");
                }
    
            });
    
            if(options.loadData) { //dla edycji, zaczytanie danych do widoku po pobraniu z servera
    
                $(field).on("load", function() {
    
                    var value = view.model.get(options.name);
    
                    if(!_.isArray(value)) {
                        value = [value];
                    }
    
                    field.setValue(value);
                });
            }
        },
    
        datePicker: function(view, prop, elem) {
    
            var beatPicker = new BeatPicker({
                dateInputNode: view.$el.find(elem),
                modules: {
                    footer: false,
                    icon: false,
                    clear: false
                },
                dateFormat: {
                    format: ["DD", "MM", "YYYY"]
                }
            });
    
            beatPicker.on("change", function(o) {
                view.model.set(prop, o.string);
            });
        }
    };

    APP.Messages = {

        displayDialog: function(title, text, type, buttons) {

            return new $.Zebra_Dialog(text, {
                type: type,
                title: title,
                buttons: buttons
            });
    
        },
    
        showErrorInfo: function() {
            APP.Messages.displayDialog("Error occured", this.model.validationError, "error");
        },
    
        showAddedInfo: function() {
            APP.Messages.displayDialog("Saved", "The record has been correctly saved.", "information");
        },
    
        showUpdateInfo: function() {
            APP.Messages.displayDialog("Updated", "The update was successful.", "information");
        },
    
        showRemoveInfo: function() {
            APP.Messages.displayDialog("Deleted", " The record has been deleted", "information");
        },
    
        showRemovePrompt: function(callback) {
            var buttons = [
                {
                    caption: "Yes",
                    callback: callback
                },
                {
                    caption: "Cancel"
                }
            ];
    
            APP.Messages.displayDialog("Confirmation of deletion", "Are you sure you want to delete?", "warning", buttons);
        }
    },

    APP.Router = {

        handleRoute: function(route, params) {
    
            params.unshift(route);
    
            if(route.match(/(.+)-list/)) {
                APP.showItemsList.apply(APP, params);
            } else if(route.match(/(.+)-details/)) {
                APP.showItemDetails.apply(APP, params);
            } else if(route.match(/(.+)-edit/)) {
                APP.showItemEdit.apply(APP, params);
            } else if(route.match(/(.+)-new/)) {
                APP.showItemNew.apply(APP, params);
            }
        },
    
        setupRoutes: function() {
            APP.router = new APP.Routers.Router();
            APP.Vent.listenTo(APP.router, "route", APP.Router.handleRoute);
        },
    
        redirectToList: function() {
            var url = this.model.url(true);
            APP.router.navigate(url, {trigger: true});
            //{trigger: true} zamina adresu url i wywyołanie funkcji showCarDetails 
            //przypisanej do tej ścieżki z Routers.js "car/:id": "showCarDetails",
        },
    
        redirectToDetails: function() {
            var url = this.model.url();
            APP.router.navigate(url, {trigger: true});
        },
    
        redirectToEdit: function() {
            var url = this.model.url();
            APP.router.navigate(url + "/edit", {trigger: true});
        }
    
    };

    APP.init = function() {

        APP.Router.setupRoutes();

        APP.showBreadcrumbsView();
        APP.showStatisticsView();
        APP.showLatestRentsView();

        Backbone.history.start({pushState: true});
        // {pushState: true} zmienia url nie wysyłając żadania do serwera domena/ściezka z Router.js
    };

})();