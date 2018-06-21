
/** brands indexes **/
db.getCollection("brands").ensureIndex({
  "_id": NumberInt(1)
},[
  
]);

/** cars indexes **/
db.getCollection("cars").ensureIndex({
  "_id": NumberInt(1)
},[
  
]);

/** categories indexes **/
db.getCollection("categories").ensureIndex({
  "_id": NumberInt(1)
},[
  
]);

/** clients indexes **/
db.getCollection("clients").ensureIndex({
  "_id": NumberInt(1)
},[
  
]);

/** rents indexes **/
db.getCollection("rents").ensureIndex({
  "_id": NumberInt(1)
},[
  
]);

/** brands records **/
db.getCollection("brands").insert({
  "_id": ObjectId("5b2c00468a725ec897309b3b"),
  "name": "Volkswagen"
});
db.getCollection("brands").insert({
  "_id": ObjectId("5b2c00533f6897d27dbecf8e"),
  "name": "Opel"
});
db.getCollection("brands").insert({
  "_id": ObjectId("5b2c005f7ad146d7f31d4865"),
  "name": "Toyota"
});
db.getCollection("brands").insert({
  "_id": ObjectId("5b2c006b3195c0daa035af18"),
  "name": "Ford"
});
db.getCollection("brands").insert({
  "_id": ObjectId("5b2c0076460616dfb7e25aa1"),
  "name": "Volvo"
});
db.getCollection("brands").insert({
  "_id": ObjectId("5b2c0082f87152e120184720"),
  "name": "BMW"
});
db.getCollection("brands").insert({
  "_id": ObjectId("5b2c00aa683c9fe1e8769ad8"),
  "name": "Mini"
});
db.getCollection("brands").insert({
  "_id": ObjectId("5b2c00b6506463e5792c7a46"),
  "name": "Mercedes"
});

/** cars records **/
db.getCollection("cars").insert({
  "_id": ObjectId("5b2c030e308ca918ac9f9c4b"),
  "name": "Q7",
  "date": "03-02-2015",
  "categories": [
    "SUV"
  ],
  "brands": [
    "BMW"
  ],
  "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centurie.",
  "quantity": "1"
});
db.getCollection("cars").insert({
  "_id": ObjectId("5b2c0377ec7cf230628e0884"),
  "name": "Golf Plus",
  "date": "05-02-2018",
  "categories": [
    "Combi"
  ],
  "brands": [
    "Volkswagen"
  ],
  "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centurie",
  "quantity": "2"
});
db.getCollection("cars").insert({
  "_id": ObjectId("5b2c047e9c2a7d3c9559ec94"),
  "name": "XC 60 II",
  "date": "02-01-2017",
  "categories": [
    "SUV"
  ],
  "brands": [
    "Volvo"
  ],
  "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  "quantity": "1"
});

/** categories records **/
db.getCollection("categories").insert({
  "_id": ObjectId("5b2c0250176e1ce672ceba6d"),
  "name": "Combi"
});
db.getCollection("categories").insert({
  "_id": ObjectId("5b2c025bbd173a13b5fd3b8c"),
  "name": "Minivan"
});
db.getCollection("categories").insert({
  "_id": ObjectId("5b2c02679c45c414a54d9ece"),
  "name": "SUV"
});
db.getCollection("categories").insert({
  "_id": ObjectId("5b2c0271d29d20152d005032"),
  "name": "Sedan"
});
db.getCollection("categories").insert({
  "_id": ObjectId("5b2c027d1f043e15fdd5b266"),
  "name": "Compact"
});
db.getCollection("categories").insert({
  "_id": ObjectId("5b2c028c318f86180a69e92f"),
  "name": "Cabriolet"
});

/** clients records **/
db.getCollection("clients").insert({
  "_id": ObjectId("5b2c04c9d6dc525de54995a0"),
  "first_name": "Norbert",
  "last_name": "Wójcik",
  "birthdate": "01-01-1990",
  "idc_number": "ABC123456",
  "address": "ul. Akacjowa 12",
  "zip_code": "12-123",
  "city": "Warszawa"
});
db.getCollection("clients").insert({
  "_id": ObjectId("5b2c057f02c17e6adc8665f8"),
  "first_name": "Jan ",
  "last_name": "Kowalski",
  "birthdate": "20-06-2007",
  "idc_number": "ZXZ321312",
  "address": "ul. Sosnowa 2",
  "zip_code": "21-231",
  "city": "Łódź"
});

/** rents records **/
db.getCollection("rents").insert({
  "_id": ObjectId("5b2c09e502c17e6adc8665fa"),
  "car_id": "5b2c030e308ca918ac9f9c4b",
  "brand_id": "",
  "client_id": "5b2c04c9d6dc525de54995a0",
  "date": ISODate("2018-06-21T20:26:13.523Z")
});
db.getCollection("rents").insert({
  "_id": ObjectId("5b2c09f002c17e6adc8665fb"),
  "car_id": "5b2c0377ec7cf230628e0884",
  "brand_id": "",
  "client_id": "5b2c057f02c17e6adc8665f8",
  "date": ISODate("2018-06-21T20:26:24.511Z")
});
