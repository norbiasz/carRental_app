this["JST"] = this["JST"] || {};

this["JST"]["brandDetailsTemplate"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<h3 class="app-heading"><i class="fa fa-info"></i>  Details brand</h3>\r\n<div class="app-item-info">\r\n    <p class="app-item-info__content"><span class="app-item-info__title">Brand:</span> ' +
((__t = ( name )) == null ? '' : __t) +
'</p>\r\n    <button type="button" class="btn edit">Edit</button>\r\n</div>';

}
return __p
};

this["JST"]["brandEditNewView"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {

 if( this.model.isNew() ) { ;
__p += '\r\n<h3 class="app-heading"><i class="fa fa-edit"></i> New brand</h3>\r\n';
 } else { ;
__p += ' \r\n<h3 class="app-heading"><i class="fa fa-edit"></i> Edit brand</h3>\r\n';
 } ;
__p += '  \r\n\r\n<div class="app-form">\r\n    <form action="" id="new-brand">\r\n        <div class="app-form-field">\r\n            <label for="brand-name">Brand:</label>\r\n            <input type="text" id="brand-name">\r\n        </div>\r\n\r\n        <div class="app-form-submit">\r\n            <button type="submit" class="btn">Save</button>\r\n            ';
 if( !this.model.isNew() ) { ;
__p += '\r\n            <button type="button" class="btn special delete">Delete</button>\r\n            ';
 } ;
__p += '\r\n        </div>\r\n    </form>\r\n</div>';

}
return __p
};

this["JST"]["brandListItemTemplate"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<span class="name">' +
((__t = ( name )) == null ? '' : __t) +
'</span>\r\n<span class="btn-rounded details">\r\n    <span class="icon-search"></span>\r\n</span>';

}
return __p
};

this["JST"]["breadcrumbsWidgetTemplate"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {

 for(var i = 0; i < pathItems.length; i++) { ;
__p += '\r\n    <span class="app-status__item">' +
((__t = ( pathItems[i] )) == null ? '' : __t) +
'</span>\r\n';
 } ;


}
return __p
};

this["JST"]["carDetailsTemplate"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<h3 class="app-heading"><i class="fa fa-info"></i> Details car</h3>\r\n    \r\n<div class="app-item-info">\r\n    <p class="app-item-info__content"><span class="app-item-info__title">Model:</span> ' +
((__t = ( name )) == null ? '' : __t) +
'</p>\r\n    <p class="app-item-info__content"><span class="app-item-info__title">Brand:</span> ' +
((__t = ( brands )) == null ? '' : __t) +
'</p>\r\n    <p class="app-item-info__content"><span class="app-item-info__title">Category:</span> ' +
((__t = ( categories )) == null ? '' : __t) +
'</p>\r\n    <p class="app-item-info__content"><span class="app-item-info__title">Date production:</span> ' +
((__t = ( date )) == null ? '' : __t) +
'</p>\r\n    <p class="app-item-info__content"><span class="app-item-info__title">Description:</span> <i class="app-item-info__desc">' +
((__t = ( description )) == null ? '' : __t) +
'</i></p>\r\n    <p class="app-item-info__content"><span class="app-item-info__title">Quantity:</span> ' +
((__t = ( quantity )) == null ? '' : __t) +
'</p>\r\n    <p class="app-item-info__content"><span class="app-item-info__title">Quantity rents:</span> ' +
((__t = ( rent_number )) == null ? '' : __t) +
'</p>\r\n    <p class="app-item-info__content"><span class="app-item-info__title">Available:</span> ';
 available ? print("tak") : print("nie") ;
__p += '</p>\r\n\r\n    <button type="button" class="btn edit">Edit</button>\r\n</div>';

}
return __p
};

this["JST"]["carEditNewView"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {

 if( this.model.isNew() ) { ;
__p += '\r\n<h3 class="app-heading"><i class="fa fa-edit"></i></span> New car</h3>\r\n';
 } else { ;
__p += '   \r\n<h3 class="app-heading"><i class="fa fa-edit"></i> Edit car</h3>\r\n';
 } ;
__p += '   \r\n\r\n<div class="app-form">\r\n    <form action="" id="new-car">\r\n        <div class="app-form-field">\r\n            <label for="car-name">Model</label>\r\n            <input type="text" id="car-name">\r\n        </div>\r\n\r\n        <div class="app-form-field">\r\n            <label for="ms-car-brands">Brand</label>\r\n            <input type="text" class="medium" id="ms-car-brands" placeholder="Choose a brand">\r\n        </div>\r\n\r\n        <div class="app-form-field">\r\n            <label for="ms-car-categories">Category</label>\r\n            <input type="text" class="medium" id="ms-car-categories" placeholder="Choose a category">\r\n        </div>\r\n\r\n        <div class="app-form-field">\r\n            <label for="car-date">Date production</label>\r\n            <input type="text" id="car-date" class="short" placeholder="dd-mm-rrrr">\r\n        </div>\r\n\r\n        <div class="app-form-field">\r\n            <label for="car-description">Description</label>\r\n            <textarea id="car-description">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.</textarea>\r\n        </div>\r\n\r\n        <div class="app-form-field">\r\n            <label for="car-quantity">Quantity</label>\r\n            <input type="text" id="car-quantity" class="short" placeholder="20">\r\n        </div>\r\n\r\n        <div class="app-form-submit">\r\n            <button type="submit" class="btn">Save</button>\r\n            ';
 if( !this.model.isNew() ) { ;
__p += '\r\n            <button type="button" class="btn special delete">Delete</button>\r\n            ';
 } ;
__p += '\r\n        </div>\r\n    </form>\r\n</div>';

}
return __p
};

this["JST"]["carListItemTemplate"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<span class="name">' +
((__t = ( name )) == null ? '' : __t) +
'</span>\r\n    <span> - </span>\r\n    <span class="brand">' +
((__t = ( brands )) == null ? '' : __t) +
'</span>\r\n    <span class="btn-rounded details">\r\n    <span class="icon-search"></span>\r\n</span>';

}
return __p
};

this["JST"]["categoryDetailsTemplate"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<h3 class="app-heading"><i class="fa fa-info"></i> Details category</h3>\r\n    \r\n<div class="app-item-info">\r\n    <p class="app-item-info__content" ><span class="app-item-info__title">Name category:</span> ' +
((__t = ( name )) == null ? '' : __t) +
'</p>\r\n\r\n    <button type="button" class="btn edit">Edit</button>\r\n</div>';

}
return __p
};

this["JST"]["categoryEditNewView"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {

 if( this.model.isNew() ) { ;
__p += '\r\n<h3 class="app-heading"><i class="fa fa-edit"></i> New category</h3>\r\n';
 } else { ;
__p += '   \r\n<h3 class="app-heading"><i class="fa fa-edit"></i> Edit category</h3>\r\n';
 } ;
__p += '  \r\n\r\n<div class="app-form">\r\n    <form action="" id="new-category">\r\n        <div class="app-form-field">\r\n            <label for="category-name">Category:</label>\r\n            <input type="text" id="category-name">\r\n        </div>\r\n\r\n        <div class="app-form-submit">\r\n            <button type="submit" class="btn">Save</button>\r\n            ';
 if( !this.model.isNew() ) { ;
__p += '\r\n            <button type="button" class="btn special delete">Delete</button>\r\n            ';
 } ;
__p += '\r\n        </div>\r\n    </form>\r\n</div>';

}
return __p
};

this["JST"]["categoryListItemTemplate"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<span class="name">' +
((__t = ( name )) == null ? '' : __t) +
'</span>\r\n<span class="btn-rounded details">\r\n    <span class="icon-search"></span>\r\n</span>';

}
return __p
};

this["JST"]["clientDetailsTemplate"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<h3 class="app-heading"><i class="fa fa-info"></i> Details client</h3>\r\n<div class="app-item-info">\r\n    <p class="app-item-info__content"><span class="app-item-info__title">Name:</span> ' +
((__t = ( first_name )) == null ? '' : __t) +
' ' +
((__t = ( last_name )) == null ? '' : __t) +
'</p>\r\n    <p class="app-item-info__content"><span class="app-item-info__title">Birthdate:</span> ' +
((__t = ( birthdate )) == null ? '' : __t) +
'</p>\r\n    <p class="app-item-info__content"><span class="app-item-info__title">ID number:</span> ' +
((__t = ( idc_number )) == null ? '' : __t) +
'</p>\r\n    <p class="app-item-info__content"><span class="app-item-info__title">Address:</span> ' +
((__t = ( address )) == null ? '' : __t) +
'</p>\r\n    <p class="app-item-info__content"><span class="app-item-info__title">Zip code:</span> ' +
((__t = ( zip_code )) == null ? '' : __t) +
'</p>\r\n    <p class="app-item-info__content"><span class="app-item-info__title">City: </span> ' +
((__t = ( city )) == null ? '' : __t) +
'</p>\r\n\r\n    <button type="button" class="btn edit">Edit</button>\r\n</div>';

}
return __p
};

this["JST"]["clientEditNewView"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {

 if( this.model.isNew() ) { ;
__p += '\r\n<h3 class="app-heading"><i class="fa fa-edit"></i> New client</h3>\r\n';
 } else { ;
__p += ' \r\n<h3 class="app-heading"><i class="fa fa-edit"></i> Edit client</h3>\r\n';
 } ;
__p += '   \r\n\r\n<div class="app-form">\r\n    <form action="" id="new-client">\r\n        <div class="app-form-field">\r\n            <label for="client-first-name">First name</label>\r\n            <input type="text" id="client-first-name" class="medium">\r\n        </div>\r\n\r\n        <div class="app-form-field">\r\n            <label for="client-last-name">Last name</label>\r\n            <input type="text" id="client-last-name" class="medium">\r\n        </div>\r\n\r\n        <div class="app-form-field">\r\n            <label for="client-birth-date">Birth date</label>\r\n            <input type="text" id="client-birth-date" class="short" placeholder="dd-mm-rrrr">\r\n        </div>\r\n\r\n        <div class="app-form-field">\r\n            <label for="client-id-number">ID number</label>\r\n            <input type="text" class="medium" id="client-id-number" placeholder="XXX000000">\r\n        </div>\r\n\r\n        <div class="app-form-field">\r\n            <label for="client-address">Address</label>\r\n            <input type="text" id="client-address" placeholder="ul. Leśna 23">\r\n        </div>\r\n\r\n        <div class="app-form-field">\r\n            <label for="client-zip-code">Zip-code</label>\r\n            <input type="text" id="client-zip-code" class="short" placeholder="xx-xxx">\r\n        </div>\r\n\r\n        <div class="app-form-field">\r\n            <label for="client-city">City</label>\r\n            <input type="text" id="client-city" class="medium" placeholder="Nieistniejowice">\r\n        </div>\r\n\r\n        <div class="app-form-submit">\r\n            <button type="submit" class="btn">Save</button>\r\n            ';
 if( !this.model.isNew() ) { ;
__p += '\r\n            <button type="button" class="btn special delete">Delete</button>\r\n            ';
 } ;
__p += '\r\n        </div>\r\n    </form>\r\n</div>';

}
return __p
};

this["JST"]["clientListItemTemplate"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<span class="name">' +
((__t = ( name )) == null ? '' : __t) +
'</span>\r\n<span class="btn-rounded details">\r\n    <span class="icon-search"></span>\r\n</span>';

}
return __p
};

this["JST"]["latestRentsWidgetListItemTemplate"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<span class="client">' +
((__t = ( client_name )) == null ? '' : __t) +
'</span>\r\n<span class="car">' +
((__t = ( car_name )) == null ? '' : __t) +
'</span>\r\n<span class="date">' +
((__t = ( APP.Utils.formatDateMoment(date) )) == null ? '' : __t) +
'</span>';

}
return __p
};

this["JST"]["latestRentsWidgetTemplate"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<h3>\r\n    <span class="app-status__item-ico icon-checkmark"></span>\r\n    Last rentals\r\n</h3>';

}
return __p
};

this["JST"]["listActionsTemplate"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<div class="app-search">\r\n    <input type="text" placeholder="' +
((__t = ( placeholder )) == null ? '' : __t) +
'">\r\n</div>\r\n\r\n\r\n<ul class="app-sort">\r\n    ';
 if(order == "1") { ;
__p += '\r\n    <li class="app-sort__item" data-order="1">Ascending</li>\r\n    <li class="app-sort__item" data-order="-1">Descending</li>\r\n    ';
 } else { ;
__p += '\r\n    <li class="app-sort__item" data-order="-1">Descending</li>\r\n    <li class="app-sort__item" data-order="1">Ascending</li>\r\n    ';
 } ;
__p += '\r\n</ul>\r\n\r\n<span class="app-add btn-rounded active add">\r\n    <span class="icon-plus"></span>\r\n</span>';

}
return __p
};

this["JST"]["listPaginationTemplate"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {

 for(var i = 1; i <= anchors; i++) { ;
__p += '\r\n    <a href="#" class="';
 i == active ? print("active") : "" ;
__p += '" data-page="' +
((__t = ( i )) == null ? '' : __t) +
'">' +
((__t = ( i )) == null ? '' : __t) +
'</a>\r\n';
 } ;


}
return __p
};

this["JST"]["rentDetailsTemplate"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<h3 class="app-heading"><i class="fa fa-info"></i> Details rent</h3>\r\n<div class="app-item-info">\r\n    <p class="app-item-info__content"><span class="app-item-info__title">Model:</span> ' +
((__t = ( car_name )) == null ? '' : __t) +
'</p>\r\n    <p class="app-item-info__content"><span class="app-item-info__title">Klient:</span> ' +
((__t = ( client_name )) == null ? '' : __t) +
'</p>\r\n    <p class="app-item-info__content"><span class="app-item-info__title">Data:</span> ' +
((__t = ( APP.Utils.formatDateMoment(date) )) == null ? '' : __t) +
'</p>\r\n    <button type="button" class="btn edit">Edit</button>\r\n</div>';

}
return __p
};

this["JST"]["rentEditNewView"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {

 if( this.model.isNew() ) { ;
__p += '\r\n<h3 class="app-heading"><i class="fa fa-edit"></i> New rent</h3>\r\n';
 } else { ;
__p += ' \r\n<h3 class="app-heading"><i class="fa fa-edit"></i> Edit rent</h3>\r\n';
 } ;
__p += '   \r\n\r\n<div class="app-form">\r\n    <form action="" id="new-rent">\r\n        <div class="app-form-field">\r\n            <label for="ms-car-id">Car model</label>\r\n            <input type="text" class="medium" id="ms-car-id" placeholder="Choose a car model">\r\n        </div>\r\n\r\n        <div class="app-form-field">\r\n            <label for="ms-client-id">Client</label>\r\n            <input type="text" class="medium" id="ms-client-id" placeholder="Choose a client">\r\n        </div>\r\n\r\n        <div class="app-form-submit">\r\n            <button type="submit" class="btn">Save</button>\r\n            ';
 if( !this.model.isNew() ) { ;
__p += '\r\n            <button type="button" class="btn special delete">Return</button>\r\n            ';
 } ;
__p += '\r\n        </div>\r\n    </form>\r\n</div>';

}
return __p
};

this["JST"]["rentListItemTemplate"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<span class="name">' +
((__t = ( car_name )) == null ? '' : __t) +
'</span>\r\n<span class="client">\r\n    <i class="fa fa-user"></i> \r\n    ' +
((__t = ( client_name )) == null ? '' : __t) +
'\r\n</span>\r\n<span class="date">\r\n    <i class="fa fa-calendar"></i> \r\n    ' +
((__t = ( APP.Utils.formatDate(date) )) == null ? '' : __t) +
'\r\n</span>\r\n\r\n<span class="btn-rounded details">\r\n    <span class="icon-search"></span>\r\n</span>';

}
return __p
};

this["JST"]["statisticsWidgetTemplate"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<span class="app-status__item"><span class="app-status__item-ico icon-road"></span> Cars <strong>' +
((__t = ( cars )) == null ? '' : __t) +
'</strong></span>\r\n<span class="app-status__item"><span class="app-status__item-ico icon-checkmark"></span> Rents <strong>' +
((__t = ( rents )) == null ? '' : __t) +
'</strong></span>\r\n<span class="app-status__item"><span class="app-status__item-ico icon-people"></span> Clients <strong>' +
((__t = ( clients )) == null ? '' : __t) +
'</strong></span>';

}
return __p
};