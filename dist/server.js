var express = require("express"),
    bodyParser = require("body-parser"), //gdy przychodzi żadanie dane są zamieniane na JSON
    async = require("async"), 
    mongo = require("mongodb"),
    MongoClient = mongo.MongoClient,
    app = express(),
    ObjectId = require('mongoose').Types.ObjectId,
    dbUrl = "mongodb://localhost:27017/carRental";

    app.use(express.static(__dirname + "/public"));
    app.use(bodyParser.json());

    var routes = {

        "/cars": "cars",
        "/brands": "brands",
        "/categories": "categories",
        "/rents": "rents",
        "/clients": "clients",
    
        "/car/:id": "cars",
        "/brand/:id": "brands",
        "/category/:id": "categories",
        "/rent/:id": "rents",
        "/client/:id": "clients"

    };

    function handleError(res) {
        res.status(500);
        res.json({error: true});
    }

    function isValidId(id) {
        return mongo.ObjectID.isValid(id);
    }
    
    function createObjectId(id) {
        return new mongo.ObjectID(id);
    }

    function dbConnect(req, res, callback) {

        MongoClient.connect(dbUrl, function(err, db) {
            if(err) return handleError(res);
            callback(req, res, db);
        });

    }

    function createItem(req, res) {

        var colname = routes[req.route.path];
    
        if(colname === "rents") {
            req.body.date = new Date();
        }
    
        dbConnect(req, res, function(req, res, db) {
    
            db.collection(colname).insert(req.body, function(err, doc) {
            // insert(req.body - wstawiamy wszystko costanie przesłane przez backbone w req.body (a parsuje body parser)
    
                if(err) return handleError(res);

                res.json(doc["ops"][0]);
                db.close();
    
            });
        });
    }

    function updateItem(req, res) {

        var id = req.params.id,
            isValid = isValidId(id),
            colname = routes[req.route.path];
    
        if(!isValid) return handleError(res);
    
        dbConnect(req, res, function(req, res, db) {
    
            delete req.body._id;
    
            db.collection(colname).findAndModify({_id: createObjectId(id)}, {}, {$set: req.body}, {new: true}, function(err, doc) {
                                                // {} nie użwywamy sortowania bo tylko mamy jeden element
                                                // $set: {req.body} wskazujemy że dane mają zostać podmienione
                                                // {new: true} przesłany zostaje nowy zmodyfikowany model
                
                if(err) return handleError(res);
    
                res.json(doc);
    
                db.close();
    
            });
       });
    }

    function removeItem(req, res) {

        var id = req.params.id,
            isValid = isValidId(id),
            colname = routes[req.route.path];
    
        if(!isValid) return handleError(res);
    
        dbConnect(req, res, function(req, res, db) {
    
            db.collection(colname).findAndRemove({_id: createObjectId(id)}, function(err, doc) {
    
                if(err) return handleError(res);
    
                res.json({deleted: true});
    
                db.close();
    
            });
        });
    }

    function getItem(req, res) {

        var id = req.params.id,
            isValid = isValidId(id),
            colname = routes[req.route.path];
    
        if(!isValid) return handleError(res);
    
        dbConnect(req, res, function(req, res, db) {
    
            db.collection(colname).find({_id: createObjectId(id)}).toArray(function(err, docs) {
    
                if(err) return handleError(res);
    
                res.json(docs[0]);
    
                db.close();
    
            });
        });
    }

    app.all("*", function(req, res, next) { // Obsługa wszytskich typów zdarzeń

        res.format({
    
            json: function() {
                next();
            },
    
            html: function() {
                res.redirect("/"); // poodświerzeniu strony nie zwraca JSON tylko główna strona
            }
    
        });
    
    });

    app.get("/", function(req, res) {

        res.sendfile("index.html");
    
    });

    ////////// cars //////////

    app.get("/cars", function(req, res) {

        var limit = parseInt(req.query.limit),
            skip = parseInt(req.query.skip),
            order = parseInt(req.query.order),
            name = req.query.name,
            regex = new RegExp(name, "ig");

        dbConnect(req, res, function(req, res, db) {
            //db.collection("cars").find({}, {limit: 5}).toArray(function(err, docs) {
            db.collection("cars").find({name: regex}, {limit: limit, skip: skip, sort: {name: order || 1}}).toArray(function(err, docs) {

                if(err) return handleError(res);
    
                res.json(docs);
                db.close();
    
            });
        });
    });

    ////////// brands //////////

    app.get("/brands", function(req, res) {

        var skip = parseInt(req.query.skip),
            limit = parseInt(req.query.limit),
            order = parseInt(req.query.order),
            name = req.query.name,
            regex = new RegExp(name, "ig"); // i - wielkość liter nie ma znaczenia, g - szukanie globalne
    
        dbConnect(req, res, function(req, res, db) {
            
            db.collection("brands").find({name: regex}, {limit: limit, skip: skip, sort: {name: order || 1}}).toArray(function(err, docs) {

                if(err) return handleError(res);
    
                res.json(docs);
                db.close();
    
            });
        });
    });

    ////////// categories //////////

    app.get("/categories", function(req, res) {
    
        var name = req.query.name,
            order = parseInt(req.query.order),
            regex = new RegExp(name, "ig"); // i - wielkość liter nie ma znaczenia, g - szukanie globalne
        
        dbConnect(req, res, function(req, res, db) {

            db.collection("categories").find({name: regex}, {sort: {name: order || 1}}).toArray(function(err, docs) {
                                            // query: name = regex

            if(err) return handleError(res);

            res.json(docs);
            db.close();

            });
        });
    });

    ////////// clients //////////

    app.get("/clients", function(req, res) {

        var skip = parseInt(req.query.skip),
            limit = parseInt(req.query.limit),
            order = parseInt(req.query.order),
            name = req.query.name,
            regex = new RegExp(name, "ig");

        dbConnect(req, res, function(req, res, db) {

            db.collection("clients").find({$or :[{first_name: regex}, {last_name: regex}]}, {limit: limit, skip: skip, sort: {first_name: order || 1}}).toArray(function(err, docs) {
                                                // wyszukanie po imieniu i nazwisku

            if(err) return handleError(res);

            docs.forEach(function(doc) {
                doc.name = doc.first_name + " " + doc.last_name;

                delete doc.first_name;
                delete doc.last_name;
            })

            res.json(docs);
            db.close();

            });
        });
    });

    ////////// rents //////////

    app.get("/rents", function(req, res) {

        var skip = parseInt(req.query.skip),
            order = parseInt(req.query.order),
            limit = parseInt(req.query.limit),
            name = req.query.name,
            regex = new RegExp(name, "ig");

        dbConnect(req, res, function(req, res, db) {
            
            db.collection("rents").find({}, {limit: limit, skip: skip, sort: {date: order || 1} }).toArray(function(err, docs) {
    
                if(err) return handleError(res);

                async.each(docs, function(doc, eachCallback){ 
                    // na kazdym dokumencie (doc) wywołujemy jakąś procedurę po której wywoływany jest eachCallback
                    // async.each wie ile doc mamy w tablicy i tyle razy funkcja eachCallback się wykona
                    
                    async.parallel([ // umożliwia wykonanie kilku funkcji równocześnie

                        function(callback) {
                            db.collection("cars").findOne({_id: new mongo.ObjectID(doc.car_id)}, {fields: {name: 1}}, function(err, car) {

                                if(err) return handleError(res);
                                
                                delete doc.car_id;
                                doc.car_name = car.name;
        
                                callback();
                            });
                        },

                        function(callback) {
                            db.collection("clients").findOne({_id: new mongo.ObjectID(doc.client_id)}, {fields: {first_name: 1, last_name:1}}, function(err, client) {

                                if(err) return handleError(res);
                                
                                delete doc.client_id;
                                doc.client_name = client.first_name + " " + client.last_name;

                                callback();
                            });
                        }
                    ], function(err) { 
                       
                        if(err) {
                            eachCallback(err)
                            return;
                        }
                        
                        eachCallback();
                    }) 
                }, function(err) {

                    if(err) return handleError(res);

                    var filteredDocs = docs.filter(function(doc) {
                        return doc.car_name.match(regex);
                    });

                    res.json(filteredDocs);
                    db.close();
                });
            });
        });
    });

    ////////// car/:id //////////

    app.get("/car/:id", function(req, res) {

        var id = req.params.id,
            isValid = isValidId(id);
    
        if(!isValid) return handleError(res);

        dbConnect(req, res, function(req, res, db) {

            db.collection("cars").find({_id: createObjectId(id)}).toArray(function(err, docs) {

                if(err) return handleError(res);

                var car = docs[0];

                db.collection("rents").count({car_id: id}, function(err, count) {

                    if(err) return handleError(res);

                    car.rent_number = count;
                    car.available = count < car.quantity;

                    res.json(car);
                    db.close();
                });
            });
        });
    });

    ///////////////////////////////

    app.get("/brand/:id", getItem);
    app.get("/category/:id", getItem);
    app.get("/client/:id", getItem);

    ////////// rent/:id //////////
    
    app.get("/rent/:id", function(req, res) {
        var id = req.params.id,
            isValid = isValidId(id);

        if(!isValid) return handleError(res);

        dbConnect(req, res, function(req, res, db) {

            db.collection("rents").findOne({_id: createObjectId(id)}, function(err, doc) {

                if(err) return handleError(res);

                async.parallel([ // umożliwia wykonanie kilku funkcji równocześnie

                    function(callback) {
                        db.collection("cars").findOne({_id: new mongo.ObjectID(doc.car_id)}, {fields: {name: 1}}, function(err, car) {

                            if(err) return handleError(res);
                    
                            doc.car_name = car.name;
    
                            callback();
                        });
                    },

                    function(callback) {
                        db.collection("clients").findOne({_id: new mongo.ObjectID(doc.client_id)}, {fields: {first_name: 1, last_name: 1}}, function(err, client) {

                            if(err) return handleError(res);
                            
                            doc.client_name = client.first_name + " " + client.last_name;

                            callback();
                        });
                    }
                ], function(err) { 
                   
                    if(err) return handleError(res);
    
                    res.json(doc);
                    db.close();

                });
            });
        });
    }); 

    ////////// edit //////////

    app.put("/car/:id", updateItem);
    app.put("/brand/:id", updateItem);
    app.put("/category/:id", updateItem);
    app.put("/client/:id", updateItem);
    app.put("/rent/:id", updateItem);

    ////////// add //////////

    app.post("/cars", createItem);
    app.post("/brands", createItem);
    app.post("/categories", createItem);
    app.post("/clients", createItem);
    app.post("/rents", createItem);

    ////////// delete //////////

    app.delete("/car/:id", removeItem);
    app.delete("/brand/:id", removeItem);
    app.delete("/category/:id", removeItem);
    app.delete("/client/:id", removeItem);
    app.delete("/rent/:id", removeItem);

    ////////// paging //////////

    app.get("/info/:colname", function(req, res) {

        var availableNames = ["cars", "brands", "categories", "rents", "clients"],
            colname = req.params.colname,
            name = req.query.name,
            regex = new RegExp(name, "ig"),
            fields = [
                {first_name: regex},
                {last_name: regex},
                //{title: regex},
                {name: regex}
            ];
    
        if(availableNames.indexOf(colname) === -1) return handleError(res);
    
        MongoClient.connect(dbUrl, function(err, db) {
    
            if(err) return handleError(res);
    
            if(colname === "rents") {
    
                db.collection("rents").find({}).toArray(function(err, docs) {
    
                    var count = 0;
    
                    async.each(docs, function(doc, callback) {
    
                        var rent = doc;
    
                        db.collection("cars").findOne({_id: new mongo.ObjectID(rent.car_id)}, {fields: {name: 1}}, function(err, doc) {
    
                            if(err) {
                                callback(err);
    
                                return;
                            }
    
                            if(doc.name.match(regex)) {
                                count++;
                            }
    
                            callback();
    
                            return;
    
                        });
    
                    },
                    function(err) {
    
                        if(err) return handleError(res);
    
                        res.status(200);
                        res.set("Content-Type", "text/plain");
                        res.send(String(count));
    
                        db.close();
    
                    });
    
                });
    
            } else {
    
                db.collection(colname).count({$or: fields}, function(err, count) {
    
                    if(err) return handleError(res);
    
                    res.status(200);
                    res.set("Content-Type", "text/plain");
                    res.send(String(count));
    
                    db.close();
    
                });
    
            }
    
        });
    
    });
    
    
    app.listen("8000", function(){
        console.log("serwer wystartował");
    });