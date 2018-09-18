'use strict';


/**
 * Endpoint
 * 
 *
 * returns List
 **/
exports.hyrseCompaniesGET = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "id" : 1,
  "name" : "Beppes Bygg AB",
  "accessCode" : "123456"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Company Grant Access
 * 
 *
 * body Overview Company Access Code  (optional)
 * returns inline_response_201
 **/
exports.overviewActionsGrantCompanyAccessPUT = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "id" : 12345,
  "name" : "Beppes Bygg AB"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Summary
 * 
 *
 * returns inline_response_200_5
 **/
exports.overviewGET = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "items" : [ {
    "id" : 12345,
    "name" : "Beppes Bygg AB",
    "projects" : [ {
      "id" : 12345,
      "name" : "Dalarö brygga",
      "createdAt" : "2017-12-10T09:57:25.722Z",
      "totalCost" : 544322,
      "color" : "#7b977c",
      "rentals" : {
        "equipments" : [ {
          "uuid" : "1234567",
          "article" : {
            "number" : "1234567890",
            "name" : "The Dumper",
            "description" : "Lorem imposum",
            "sraCode" : "211313"
          },
          "cost" : {
            "price" : "12345 kr / byggdag",
            "additional" : true
          },
          "rentedAt" : "2017-12-21T09:57:25.722Z"
        }, {
          "uuid" : "1234567",
          "article" : {
            "number" : "1234567890",
            "name" : "The Dumper",
            "description" : "Lorem imposum",
            "sraCode" : "211313"
          },
          "cost" : {
            "price" : "12345 kr / byggdag",
            "additional" : true
          },
          "rentedAt" : "2017-12-21T09:57:25.722Z"
        }, {
          "uuid" : "1234567",
          "article" : {
            "number" : "1234567890",
            "name" : "The Dumper",
            "description" : "Lorem imposum",
            "sraCode" : "211313"
          },
          "cost" : {
            "price" : "12345 kr / byggdag",
            "additional" : true
          },
          "rentedAt" : "2017-12-21T09:57:25.722Z"
        }, {
          "uuid" : "1234567",
          "article" : {
            "number" : "1234567890",
            "name" : "The Dumper",
            "description" : "Lorem imposum",
            "sraCode" : "211313"
          },
          "cost" : {
            "price" : "12345 kr / byggdag",
            "additional" : true
          },
          "rentedAt" : "2017-12-21T09:57:25.722Z"
        } ],
        "accessories" : [ {
          "uuid" : "1234567",
          "article" : {
            "number" : "1234567890",
            "name" : "The Dumper",
            "description" : "Lorem imposum",
            "sraCode" : "211313"
          },
          "cost" : {
            "price" : "12345 kr / byggdag",
            "additional" : true
          },
          "rentedAt" : "2017-12-21T09:57:25.722Z"
        }, {
          "uuid" : "1234567",
          "article" : {
            "number" : "1234567890",
            "name" : "The Dumper",
            "description" : "Lorem imposum",
            "sraCode" : "211313"
          },
          "cost" : {
            "price" : "12345 kr / byggdag",
            "additional" : true
          },
          "rentedAt" : "2017-12-21T09:57:25.722Z"
        }, {
          "uuid" : "1234567",
          "article" : {
            "number" : "1234567890",
            "name" : "The Dumper",
            "description" : "Lorem imposum",
            "sraCode" : "211313"
          },
          "cost" : {
            "price" : "12345 kr / byggdag",
            "additional" : true
          },
          "rentedAt" : "2017-12-21T09:57:25.722Z"
        }, {
          "uuid" : "1234567",
          "article" : {
            "number" : "1234567890",
            "name" : "The Dumper",
            "description" : "Lorem imposum",
            "sraCode" : "211313"
          },
          "cost" : {
            "price" : "12345 kr / byggdag",
            "additional" : true
          },
          "rentedAt" : "2017-12-21T09:57:25.722Z"
        } ]
      },
      "returns" : {
        "equipments" : [ {
          "uuid" : "1234567",
          "article" : {
            "number" : "1234567890",
            "name" : "The Dumper",
            "description" : "Lorem imposum",
            "sraCode" : "211313"
          },
          "cost" : {
            "price" : "12345 kr / byggdag",
            "additional" : true
          },
          "rentedAt" : "2017-12-21T09:57:25.722Z",
          "returnedAt" : "2017-12-22T09:57:25.722Z"
        }, {
          "uuid" : "1234567",
          "article" : {
            "number" : "1234567890",
            "name" : "The Dumper",
            "description" : "Lorem imposum",
            "sraCode" : "211313"
          },
          "cost" : {
            "price" : "12345 kr / byggdag",
            "additional" : true
          },
          "rentedAt" : "2017-12-21T09:57:25.722Z",
          "returnedAt" : "2017-12-22T09:57:25.722Z"
        }, {
          "uuid" : "1234567",
          "article" : {
            "number" : "1234567890",
            "name" : "The Dumper",
            "description" : "Lorem imposum",
            "sraCode" : "211313"
          },
          "cost" : {
            "price" : "12345 kr / byggdag",
            "additional" : true
          },
          "rentedAt" : "2017-12-21T09:57:25.722Z",
          "returnedAt" : "2017-12-22T09:57:25.722Z"
        }, {
          "uuid" : "1234567",
          "article" : {
            "number" : "1234567890",
            "name" : "The Dumper",
            "description" : "Lorem imposum",
            "sraCode" : "211313"
          },
          "cost" : {
            "price" : "12345 kr / byggdag",
            "additional" : true
          },
          "rentedAt" : "2017-12-21T09:57:25.722Z",
          "returnedAt" : "2017-12-22T09:57:25.722Z"
        } ],
        "accessories" : [ {
          "uuid" : "1234567",
          "article" : {
            "number" : "1234567890",
            "name" : "The Dumper",
            "description" : "Lorem imposum",
            "sraCode" : "211313"
          },
          "cost" : {
            "price" : "12345 kr / byggdag",
            "additional" : true
          },
          "rentedAt" : "2017-12-21T09:57:25.722Z",
          "returnedAt" : "2017-12-22T09:57:25.722Z"
        }, {
          "uuid" : "1234567",
          "article" : {
            "number" : "1234567890",
            "name" : "The Dumper",
            "description" : "Lorem imposum",
            "sraCode" : "211313"
          },
          "cost" : {
            "price" : "12345 kr / byggdag",
            "additional" : true
          },
          "rentedAt" : "2017-12-21T09:57:25.722Z",
          "returnedAt" : "2017-12-22T09:57:25.722Z"
        }, {
          "uuid" : "1234567",
          "article" : {
            "number" : "1234567890",
            "name" : "The Dumper",
            "description" : "Lorem imposum",
            "sraCode" : "211313"
          },
          "cost" : {
            "price" : "12345 kr / byggdag",
            "additional" : true
          },
          "rentedAt" : "2017-12-21T09:57:25.722Z",
          "returnedAt" : "2017-12-22T09:57:25.722Z"
        }, {
          "uuid" : "1234567",
          "article" : {
            "number" : "1234567890",
            "name" : "The Dumper",
            "description" : "Lorem imposum",
            "sraCode" : "211313"
          },
          "cost" : {
            "price" : "12345 kr / byggdag",
            "additional" : true
          },
          "rentedAt" : "2017-12-21T09:57:25.722Z",
          "returnedAt" : "2017-12-22T09:57:25.722Z"
        } ]
      }
    }, {
      "id" : 12345,
      "name" : "Dalarö brygga",
      "createdAt" : "2017-12-10T09:57:25.722Z",
      "totalCost" : 544322,
      "color" : "#7b977c",
      "rentals" : {
        "equipments" : [ {
          "uuid" : "1234567",
          "article" : {
            "number" : "1234567890",
            "name" : "The Dumper",
            "description" : "Lorem imposum",
            "sraCode" : "211313"
          },
          "cost" : {
            "price" : "12345 kr / byggdag",
            "additional" : true
          },
          "rentedAt" : "2017-12-21T09:57:25.722Z"
        }, {
          "uuid" : "1234567",
          "article" : {
            "number" : "1234567890",
            "name" : "The Dumper",
            "description" : "Lorem imposum",
            "sraCode" : "211313"
          },
          "cost" : {
            "price" : "12345 kr / byggdag",
            "additional" : true
          },
          "rentedAt" : "2017-12-21T09:57:25.722Z"
        }, {
          "uuid" : "1234567",
          "article" : {
            "number" : "1234567890",
            "name" : "The Dumper",
            "description" : "Lorem imposum",
            "sraCode" : "211313"
          },
          "cost" : {
            "price" : "12345 kr / byggdag",
            "additional" : true
          },
          "rentedAt" : "2017-12-21T09:57:25.722Z"
        }, {
          "uuid" : "1234567",
          "article" : {
            "number" : "1234567890",
            "name" : "The Dumper",
            "description" : "Lorem imposum",
            "sraCode" : "211313"
          },
          "cost" : {
            "price" : "12345 kr / byggdag",
            "additional" : true
          },
          "rentedAt" : "2017-12-21T09:57:25.722Z"
        } ],
        "accessories" : [ {
          "uuid" : "1234567",
          "article" : {
            "number" : "1234567890",
            "name" : "The Dumper",
            "description" : "Lorem imposum",
            "sraCode" : "211313"
          },
          "cost" : {
            "price" : "12345 kr / byggdag",
            "additional" : true
          },
          "rentedAt" : "2017-12-21T09:57:25.722Z"
        }, {
          "uuid" : "1234567",
          "article" : {
            "number" : "1234567890",
            "name" : "The Dumper",
            "description" : "Lorem imposum",
            "sraCode" : "211313"
          },
          "cost" : {
            "price" : "12345 kr / byggdag",
            "additional" : true
          },
          "rentedAt" : "2017-12-21T09:57:25.722Z"
        }, {
          "uuid" : "1234567",
          "article" : {
            "number" : "1234567890",
            "name" : "The Dumper",
            "description" : "Lorem imposum",
            "sraCode" : "211313"
          },
          "cost" : {
            "price" : "12345 kr / byggdag",
            "additional" : true
          },
          "rentedAt" : "2017-12-21T09:57:25.722Z"
        }, {
          "uuid" : "1234567",
          "article" : {
            "number" : "1234567890",
            "name" : "The Dumper",
            "description" : "Lorem imposum",
            "sraCode" : "211313"
          },
          "cost" : {
            "price" : "12345 kr / byggdag",
            "additional" : true
          },
          "rentedAt" : "2017-12-21T09:57:25.722Z"
        } ]
      },
      "returns" : {
        "equipments" : [ {
          "uuid" : "1234567",
          "article" : {
            "number" : "1234567890",
            "name" : "The Dumper",
            "description" : "Lorem imposum",
            "sraCode" : "211313"
          },
          "cost" : {
            "price" : "12345 kr / byggdag",
            "additional" : true
          },
          "rentedAt" : "2017-12-21T09:57:25.722Z",
          "returnedAt" : "2017-12-22T09:57:25.722Z"
        }, {
          "uuid" : "1234567",
          "article" : {
            "number" : "1234567890",
            "name" : "The Dumper",
            "description" : "Lorem imposum",
            "sraCode" : "211313"
          },
          "cost" : {
            "price" : "12345 kr / byggdag",
            "additional" : true
          },
          "rentedAt" : "2017-12-21T09:57:25.722Z",
          "returnedAt" : "2017-12-22T09:57:25.722Z"
        }, {
          "uuid" : "1234567",
          "article" : {
            "number" : "1234567890",
            "name" : "The Dumper",
            "description" : "Lorem imposum",
            "sraCode" : "211313"
          },
          "cost" : {
            "price" : "12345 kr / byggdag",
            "additional" : true
          },
          "rentedAt" : "2017-12-21T09:57:25.722Z",
          "returnedAt" : "2017-12-22T09:57:25.722Z"
        }, {
          "uuid" : "1234567",
          "article" : {
            "number" : "1234567890",
            "name" : "The Dumper",
            "description" : "Lorem imposum",
            "sraCode" : "211313"
          },
          "cost" : {
            "price" : "12345 kr / byggdag",
            "additional" : true
          },
          "rentedAt" : "2017-12-21T09:57:25.722Z",
          "returnedAt" : "2017-12-22T09:57:25.722Z"
        } ],
        "accessories" : [ {
          "uuid" : "1234567",
          "article" : {
            "number" : "1234567890",
            "name" : "The Dumper",
            "description" : "Lorem imposum",
            "sraCode" : "211313"
          },
          "cost" : {
            "price" : "12345 kr / byggdag",
            "additional" : true
          },
          "rentedAt" : "2017-12-21T09:57:25.722Z",
          "returnedAt" : "2017-12-22T09:57:25.722Z"
        }, {
          "uuid" : "1234567",
          "article" : {
            "number" : "1234567890",
            "name" : "The Dumper",
            "description" : "Lorem imposum",
            "sraCode" : "211313"
          },
          "cost" : {
            "price" : "12345 kr / byggdag",
            "additional" : true
          },
          "rentedAt" : "2017-12-21T09:57:25.722Z",
          "returnedAt" : "2017-12-22T09:57:25.722Z"
        }, {
          "uuid" : "1234567",
          "article" : {
            "number" : "1234567890",
            "name" : "The Dumper",
            "description" : "Lorem imposum",
            "sraCode" : "211313"
          },
          "cost" : {
            "price" : "12345 kr / byggdag",
            "additional" : true
          },
          "rentedAt" : "2017-12-21T09:57:25.722Z",
          "returnedAt" : "2017-12-22T09:57:25.722Z"
        }, {
          "uuid" : "1234567",
          "article" : {
            "number" : "1234567890",
            "name" : "The Dumper",
            "description" : "Lorem imposum",
            "sraCode" : "211313"
          },
          "cost" : {
            "price" : "12345 kr / byggdag",
            "additional" : true
          },
          "rentedAt" : "2017-12-21T09:57:25.722Z",
          "returnedAt" : "2017-12-22T09:57:25.722Z"
        } ]
      }
    }, {
      "id" : 12345,
      "name" : "Dalarö brygga",
      "createdAt" : "2017-12-10T09:57:25.722Z",
      "totalCost" : 544322,
      "color" : "#7b977c",
      "rentals" : {
        "equipments" : [ {
          "uuid" : "1234567",
          "article" : {
            "number" : "1234567890",
            "name" : "The Dumper",
            "description" : "Lorem imposum",
            "sraCode" : "211313"
          },
          "cost" : {
            "price" : "12345 kr / byggdag",
            "additional" : true
          },
          "rentedAt" : "2017-12-21T09:57:25.722Z"
        }, {
          "uuid" : "1234567",
          "article" : {
            "number" : "1234567890",
            "name" : "The Dumper",
            "description" : "Lorem imposum",
            "sraCode" : "211313"
          },
          "cost" : {
            "price" : "12345 kr / byggdag",
            "additional" : true
          },
          "rentedAt" : "2017-12-21T09:57:25.722Z"
        }, {
          "uuid" : "1234567",
          "article" : {
            "number" : "1234567890",
            "name" : "The Dumper",
            "description" : "Lorem imposum",
            "sraCode" : "211313"
          },
          "cost" : {
            "price" : "12345 kr / byggdag",
            "additional" : true
          },
          "rentedAt" : "2017-12-21T09:57:25.722Z"
        }, {
          "uuid" : "1234567",
          "article" : {
            "number" : "1234567890",
            "name" : "The Dumper",
            "description" : "Lorem imposum",
            "sraCode" : "211313"
          },
          "cost" : {
            "price" : "12345 kr / byggdag",
            "additional" : true
          },
          "rentedAt" : "2017-12-21T09:57:25.722Z"
        } ],
        "accessories" : [ {
          "uuid" : "1234567",
          "article" : {
            "number" : "1234567890",
            "name" : "The Dumper",
            "description" : "Lorem imposum",
            "sraCode" : "211313"
          },
          "cost" : {
            "price" : "12345 kr / byggdag",
            "additional" : true
          },
          "rentedAt" : "2017-12-21T09:57:25.722Z"
        }, {
          "uuid" : "1234567",
          "article" : {
            "number" : "1234567890",
            "name" : "The Dumper",
            "description" : "Lorem imposum",
            "sraCode" : "211313"
          },
          "cost" : {
            "price" : "12345 kr / byggdag",
            "additional" : true
          },
          "rentedAt" : "2017-12-21T09:57:25.722Z"
        }, {
          "uuid" : "1234567",
          "article" : {
            "number" : "1234567890",
            "name" : "The Dumper",
            "description" : "Lorem imposum",
            "sraCode" : "211313"
          },
          "cost" : {
            "price" : "12345 kr / byggdag",
            "additional" : true
          },
          "rentedAt" : "2017-12-21T09:57:25.722Z"
        }, {
          "uuid" : "1234567",
          "article" : {
            "number" : "1234567890",
            "name" : "The Dumper",
            "description" : "Lorem imposum",
            "sraCode" : "211313"
          },
          "cost" : {
            "price" : "12345 kr / byggdag",
            "additional" : true
          },
          "rentedAt" : "2017-12-21T09:57:25.722Z"
        } ]
      },
      "returns" : {
        "equipments" : [ {
          "uuid" : "1234567",
          "article" : {
            "number" : "1234567890",
            "name" : "The Dumper",
            "description" : "Lorem imposum",
            "sraCode" : "211313"
          },
          "cost" : {
            "price" : "12345 kr / byggdag",
            "additional" : true
          },
          "rentedAt" : "2017-12-21T09:57:25.722Z",
          "returnedAt" : "2017-12-22T09:57:25.722Z"
        }, {
          "uuid" : "1234567",
          "article" : {
            "number" : "1234567890",
            "name" : "The Dumper",
            "description" : "Lorem imposum",
            "sraCode" : "211313"
          },
          "cost" : {
            "price" : "12345 kr / byggdag",
            "additional" : true
          },
          "rentedAt" : "2017-12-21T09:57:25.722Z",
          "returnedAt" : "2017-12-22T09:57:25.722Z"
        }, {
          "uuid" : "1234567",
          "article" : {
            "number" : "1234567890",
            "name" : "The Dumper",
            "description" : "Lorem imposum",
            "sraCode" : "211313"
          },
          "cost" : {
            "price" : "12345 kr / byggdag",
            "additional" : true
          },
          "rentedAt" : "2017-12-21T09:57:25.722Z",
          "returnedAt" : "2017-12-22T09:57:25.722Z"
        }, {
          "uuid" : "1234567",
          "article" : {
            "number" : "1234567890",
            "name" : "The Dumper",
            "description" : "Lorem imposum",
            "sraCode" : "211313"
          },
          "cost" : {
            "price" : "12345 kr / byggdag",
            "additional" : true
          },
          "rentedAt" : "2017-12-21T09:57:25.722Z",
          "returnedAt" : "2017-12-22T09:57:25.722Z"
        } ],
        "accessories" : [ {
          "uuid" : "1234567",
          "article" : {
            "number" : "1234567890",
            "name" : "The Dumper",
            "description" : "Lorem imposum",
            "sraCode" : "211313"
          },
          "cost" : {
            "price" : "12345 kr / byggdag",
            "additional" : true
          },
          "rentedAt" : "2017-12-21T09:57:25.722Z",
          "returnedAt" : "2017-12-22T09:57:25.722Z"
        }, {
          "uuid" : "1234567",
          "article" : {
            "number" : "1234567890",
            "name" : "The Dumper",
            "description" : "Lorem imposum",
            "sraCode" : "211313"
          },
          "cost" : {
            "price" : "12345 kr / byggdag",
            "additional" : true
          },
          "rentedAt" : "2017-12-21T09:57:25.722Z",
          "returnedAt" : "2017-12-22T09:57:25.722Z"
        }, {
          "uuid" : "1234567",
          "article" : {
            "number" : "1234567890",
            "name" : "The Dumper",
            "description" : "Lorem imposum",
            "sraCode" : "211313"
          },
          "cost" : {
            "price" : "12345 kr / byggdag",
            "additional" : true
          },
          "rentedAt" : "2017-12-21T09:57:25.722Z",
          "returnedAt" : "2017-12-22T09:57:25.722Z"
        }, {
          "uuid" : "1234567",
          "article" : {
            "number" : "1234567890",
            "name" : "The Dumper",
            "description" : "Lorem imposum",
            "sraCode" : "211313"
          },
          "cost" : {
            "price" : "12345 kr / byggdag",
            "additional" : true
          },
          "rentedAt" : "2017-12-21T09:57:25.722Z",
          "returnedAt" : "2017-12-22T09:57:25.722Z"
        } ]
      }
    }, {
      "id" : 12345,
      "name" : "Dalarö brygga",
      "createdAt" : "2017-12-10T09:57:25.722Z",
      "totalCost" : 544322,
      "color" : "#7b977c",
      "rentals" : {
        "equipments" : [ {
          "uuid" : "1234567",
          "article" : {
            "number" : "1234567890",
            "name" : "The Dumper",
            "description" : "Lorem imposum",
            "sraCode" : "211313"
          },
          "cost" : {
            "price" : "12345 kr / byggdag",
            "additional" : true
          },
          "rentedAt" : "2017-12-21T09:57:25.722Z"
        }, {
          "uuid" : "1234567",
          "article" : {
            "number" : "1234567890",
            "name" : "The Dumper",
            "description" : "Lorem imposum",
            "sraCode" : "211313"
          },
          "cost" : {
            "price" : "12345 kr / byggdag",
            "additional" : true
          },
          "rentedAt" : "2017-12-21T09:57:25.722Z"
        }, {
          "uuid" : "1234567",
          "article" : {
            "number" : "1234567890",
            "name" : "The Dumper",
            "description" : "Lorem imposum",
            "sraCode" : "211313"
          },
          "cost" : {
            "price" : "12345 kr / byggdag",
            "additional" : true
          },
          "rentedAt" : "2017-12-21T09:57:25.722Z"
        }, {
          "uuid" : "1234567",
          "article" : {
            "number" : "1234567890",
            "name" : "The Dumper",
            "description" : "Lorem imposum",
            "sraCode" : "211313"
          },
          "cost" : {
            "price" : "12345 kr / byggdag",
            "additional" : true
          },
          "rentedAt" : "2017-12-21T09:57:25.722Z"
        } ],
        "accessories" : [ {
          "uuid" : "1234567",
          "article" : {
            "number" : "1234567890",
            "name" : "The Dumper",
            "description" : "Lorem imposum",
            "sraCode" : "211313"
          },
          "cost" : {
            "price" : "12345 kr / byggdag",
            "additional" : true
          },
          "rentedAt" : "2017-12-21T09:57:25.722Z"
        }, {
          "uuid" : "1234567",
          "article" : {
            "number" : "1234567890",
            "name" : "The Dumper",
            "description" : "Lorem imposum",
            "sraCode" : "211313"
          },
          "cost" : {
            "price" : "12345 kr / byggdag",
            "additional" : true
          },
          "rentedAt" : "2017-12-21T09:57:25.722Z"
        }, {
          "uuid" : "1234567",
          "article" : {
            "number" : "1234567890",
            "name" : "The Dumper",
            "description" : "Lorem imposum",
            "sraCode" : "211313"
          },
          "cost" : {
            "price" : "12345 kr / byggdag",
            "additional" : true
          },
          "rentedAt" : "2017-12-21T09:57:25.722Z"
        }, {
          "uuid" : "1234567",
          "article" : {
            "number" : "1234567890",
            "name" : "The Dumper",
            "description" : "Lorem imposum",
            "sraCode" : "211313"
          },
          "cost" : {
            "price" : "12345 kr / byggdag",
            "additional" : true
          },
          "rentedAt" : "2017-12-21T09:57:25.722Z"
        } ]
      },
      "returns" : {
        "equipments" : [ {
          "uuid" : "1234567",
          "article" : {
            "number" : "1234567890",
            "name" : "The Dumper",
            "description" : "Lorem imposum",
            "sraCode" : "211313"
          },
          "cost" : {
            "price" : "12345 kr / byggdag",
            "additional" : true
          },
          "rentedAt" : "2017-12-21T09:57:25.722Z",
          "returnedAt" : "2017-12-22T09:57:25.722Z"
        }, {
          "uuid" : "1234567",
          "article" : {
            "number" : "1234567890",
            "name" : "The Dumper",
            "description" : "Lorem imposum",
            "sraCode" : "211313"
          },
          "cost" : {
            "price" : "12345 kr / byggdag",
            "additional" : true
          },
          "rentedAt" : "2017-12-21T09:57:25.722Z",
          "returnedAt" : "2017-12-22T09:57:25.722Z"
        }, {
          "uuid" : "1234567",
          "article" : {
            "number" : "1234567890",
            "name" : "The Dumper",
            "description" : "Lorem imposum",
            "sraCode" : "211313"
          },
          "cost" : {
            "price" : "12345 kr / byggdag",
            "additional" : true
          },
          "rentedAt" : "2017-12-21T09:57:25.722Z",
          "returnedAt" : "2017-12-22T09:57:25.722Z"
        }, {
          "uuid" : "1234567",
          "article" : {
            "number" : "1234567890",
            "name" : "The Dumper",
            "description" : "Lorem imposum",
            "sraCode" : "211313"
          },
          "cost" : {
            "price" : "12345 kr / byggdag",
            "additional" : true
          },
          "rentedAt" : "2017-12-21T09:57:25.722Z",
          "returnedAt" : "2017-12-22T09:57:25.722Z"
        } ],
        "accessories" : [ {
          "uuid" : "1234567",
          "article" : {
            "number" : "1234567890",
            "name" : "The Dumper",
            "description" : "Lorem imposum",
            "sraCode" : "211313"
          },
          "cost" : {
            "price" : "12345 kr / byggdag",
            "additional" : true
          },
          "rentedAt" : "2017-12-21T09:57:25.722Z",
          "returnedAt" : "2017-12-22T09:57:25.722Z"
        }, {
          "uuid" : "1234567",
          "article" : {
            "number" : "1234567890",
            "name" : "The Dumper",
            "description" : "Lorem imposum",
            "sraCode" : "211313"
          },
          "cost" : {
            "price" : "12345 kr / byggdag",
            "additional" : true
          },
          "rentedAt" : "2017-12-21T09:57:25.722Z",
          "returnedAt" : "2017-12-22T09:57:25.722Z"
        }, {
          "uuid" : "1234567",
          "article" : {
            "number" : "1234567890",
            "name" : "The Dumper",
            "description" : "Lorem imposum",
            "sraCode" : "211313"
          },
          "cost" : {
            "price" : "12345 kr / byggdag",
            "additional" : true
          },
          "rentedAt" : "2017-12-21T09:57:25.722Z",
          "returnedAt" : "2017-12-22T09:57:25.722Z"
        }, {
          "uuid" : "1234567",
          "article" : {
            "number" : "1234567890",
            "name" : "The Dumper",
            "description" : "Lorem imposum",
            "sraCode" : "211313"
          },
          "cost" : {
            "price" : "12345 kr / byggdag",
            "additional" : true
          },
          "rentedAt" : "2017-12-21T09:57:25.722Z",
          "returnedAt" : "2017-12-22T09:57:25.722Z"
        } ]
      }
    }, {
      "id" : 12345,
      "name" : "Dalarö brygga",
      "createdAt" : "2017-12-10T09:57:25.722Z",
      "totalCost" : 544322,
      "color" : "#7b977c",
      "rentals" : {
        "equipments" : [ {
          "uuid" : "1234567",
          "article" : {
            "number" : "1234567890",
            "name" : "The Dumper",
            "description" : "Lorem imposum",
            "sraCode" : "211313"
          },
          "cost" : {
            "price" : "12345 kr / byggdag",
            "additional" : true
          },
          "rentedAt" : "2017-12-21T09:57:25.722Z"
        }, {
          "uuid" : "1234567",
          "article" : {
            "number" : "1234567890",
            "name" : "The Dumper",
            "description" : "Lorem imposum",
            "sraCode" : "211313"
          },
          "cost" : {
            "price" : "12345 kr / byggdag",
            "additional" : true
          },
          "rentedAt" : "2017-12-21T09:57:25.722Z"
        }, {
          "uuid" : "1234567",
          "article" : {
            "number" : "1234567890",
            "name" : "The Dumper",
            "description" : "Lorem imposum",
            "sraCode" : "211313"
          },
          "cost" : {
            "price" : "12345 kr / byggdag",
            "additional" : true
          },
          "rentedAt" : "2017-12-21T09:57:25.722Z"
        }, {
          "uuid" : "1234567",
          "article" : {
            "number" : "1234567890",
            "name" : "The Dumper",
            "description" : "Lorem imposum",
            "sraCode" : "211313"
          },
          "cost" : {
            "price" : "12345 kr / byggdag",
            "additional" : true
          },
          "rentedAt" : "2017-12-21T09:57:25.722Z"
        } ],
        "accessories" : [ {
          "uuid" : "1234567",
          "article" : {
            "number" : "1234567890",
            "name" : "The Dumper",
            "description" : "Lorem imposum",
            "sraCode" : "211313"
          },
          "cost" : {
            "price" : "12345 kr / byggdag",
            "additional" : true
          },
          "rentedAt" : "2017-12-21T09:57:25.722Z"
        }, {
          "uuid" : "1234567",
          "article" : {
            "number" : "1234567890",
            "name" : "The Dumper",
            "description" : "Lorem imposum",
            "sraCode" : "211313"
          },
          "cost" : {
            "price" : "12345 kr / byggdag",
            "additional" : true
          },
          "rentedAt" : "2017-12-21T09:57:25.722Z"
        }, {
          "uuid" : "1234567",
          "article" : {
            "number" : "1234567890",
            "name" : "The Dumper",
            "description" : "Lorem imposum",
            "sraCode" : "211313"
          },
          "cost" : {
            "price" : "12345 kr / byggdag",
            "additional" : true
          },
          "rentedAt" : "2017-12-21T09:57:25.722Z"
        }, {
          "uuid" : "1234567",
          "article" : {
            "number" : "1234567890",
            "name" : "The Dumper",
            "description" : "Lorem imposum",
            "sraCode" : "211313"
          },
          "cost" : {
            "price" : "12345 kr / byggdag",
            "additional" : true
          },
          "rentedAt" : "2017-12-21T09:57:25.722Z"
        } ]
      },
      "returns" : {
        "equipments" : [ {
          "uuid" : "1234567",
          "article" : {
            "number" : "1234567890",
            "name" : "The Dumper",
            "description" : "Lorem imposum",
            "sraCode" : "211313"
          },
          "cost" : {
            "price" : "12345 kr / byggdag",
            "additional" : true
          },
          "rentedAt" : "2017-12-21T09:57:25.722Z",
          "returnedAt" : "2017-12-22T09:57:25.722Z"
        }, {
          "uuid" : "1234567",
          "article" : {
            "number" : "1234567890",
            "name" : "The Dumper",
            "description" : "Lorem imposum",
            "sraCode" : "211313"
          },
          "cost" : {
            "price" : "12345 kr / byggdag",
            "additional" : true
          },
          "rentedAt" : "2017-12-21T09:57:25.722Z",
          "returnedAt" : "2017-12-22T09:57:25.722Z"
        }, {
          "uuid" : "1234567",
          "article" : {
            "number" : "1234567890",
            "name" : "The Dumper",
            "description" : "Lorem imposum",
            "sraCode" : "211313"
          },
          "cost" : {
            "price" : "12345 kr / byggdag",
            "additional" : true
          },
          "rentedAt" : "2017-12-21T09:57:25.722Z",
          "returnedAt" : "2017-12-22T09:57:25.722Z"
        }, {
          "uuid" : "1234567",
          "article" : {
            "number" : "1234567890",
            "name" : "The Dumper",
            "description" : "Lorem imposum",
            "sraCode" : "211313"
          },
          "cost" : {
            "price" : "12345 kr / byggdag",
            "additional" : true
          },
          "rentedAt" : "2017-12-21T09:57:25.722Z",
          "returnedAt" : "2017-12-22T09:57:25.722Z"
        } ],
        "accessories" : [ {
          "uuid" : "1234567",
          "article" : {
            "number" : "1234567890",
            "name" : "The Dumper",
            "description" : "Lorem imposum",
            "sraCode" : "211313"
          },
          "cost" : {
            "price" : "12345 kr / byggdag",
            "additional" : true
          },
          "rentedAt" : "2017-12-21T09:57:25.722Z",
          "returnedAt" : "2017-12-22T09:57:25.722Z"
        }, {
          "uuid" : "1234567",
          "article" : {
            "number" : "1234567890",
            "name" : "The Dumper",
            "description" : "Lorem imposum",
            "sraCode" : "211313"
          },
          "cost" : {
            "price" : "12345 kr / byggdag",
            "additional" : true
          },
          "rentedAt" : "2017-12-21T09:57:25.722Z",
          "returnedAt" : "2017-12-22T09:57:25.722Z"
        }, {
          "uuid" : "1234567",
          "article" : {
            "number" : "1234567890",
            "name" : "The Dumper",
            "description" : "Lorem imposum",
            "sraCode" : "211313"
          },
          "cost" : {
            "price" : "12345 kr / byggdag",
            "additional" : true
          },
          "rentedAt" : "2017-12-21T09:57:25.722Z",
          "returnedAt" : "2017-12-22T09:57:25.722Z"
        }, {
          "uuid" : "1234567",
          "article" : {
            "number" : "1234567890",
            "name" : "The Dumper",
            "description" : "Lorem imposum",
            "sraCode" : "211313"
          },
          "cost" : {
            "price" : "12345 kr / byggdag",
            "additional" : true
          },
          "rentedAt" : "2017-12-21T09:57:25.722Z",
          "returnedAt" : "2017-12-22T09:57:25.722Z"
        } ]
      }
    }, {
      "id" : 12345,
      "name" : "Dalarö brygga",
      "createdAt" : "2017-12-10T09:57:25.722Z",
      "totalCost" : 544322,
      "color" : "#7b977c",
      "rentals" : {
        "equipments" : [ {
          "uuid" : "1234567",
          "article" : {
            "number" : "1234567890",
            "name" : "The Dumper",
            "description" : "Lorem imposum",
            "sraCode" : "211313"
          },
          "cost" : {
            "price" : "12345 kr / byggdag",
            "additional" : true
          },
          "rentedAt" : "2017-12-21T09:57:25.722Z"
        }, {
          "uuid" : "1234567",
          "article" : {
            "number" : "1234567890",
            "name" : "The Dumper",
            "description" : "Lorem imposum",
            "sraCode" : "211313"
          },
          "cost" : {
            "price" : "12345 kr / byggdag",
            "additional" : true
          },
          "rentedAt" : "2017-12-21T09:57:25.722Z"
        }, {
          "uuid" : "1234567",
          "article" : {
            "number" : "1234567890",
            "name" : "The Dumper",
            "description" : "Lorem imposum",
            "sraCode" : "211313"
          },
          "cost" : {
            "price" : "12345 kr / byggdag",
            "additional" : true
          },
          "rentedAt" : "2017-12-21T09:57:25.722Z"
        }, {
          "uuid" : "1234567",
          "article" : {
            "number" : "1234567890",
            "name" : "The Dumper",
            "description" : "Lorem imposum",
            "sraCode" : "211313"
          },
          "cost" : {
            "price" : "12345 kr / byggdag",
            "additional" : true
          },
          "rentedAt" : "2017-12-21T09:57:25.722Z"
        } ],
        "accessories" : [ {
          "uuid" : "1234567",
          "article" : {
            "number" : "1234567890",
            "name" : "The Dumper",
            "description" : "Lorem imposum",
            "sraCode" : "211313"
          },
          "cost" : {
            "price" : "12345 kr / byggdag",
            "additional" : true
          },
          "rentedAt" : "2017-12-21T09:57:25.722Z"
        }, {
          "uuid" : "1234567",
          "article" : {
            "number" : "1234567890",
            "name" : "The Dumper",
            "description" : "Lorem imposum",
            "sraCode" : "211313"
          },
          "cost" : {
            "price" : "12345 kr / byggdag",
            "additional" : true
          },
          "rentedAt" : "2017-12-21T09:57:25.722Z"
        }, {
          "uuid" : "1234567",
          "article" : {
            "number" : "1234567890",
            "name" : "The Dumper",
            "description" : "Lorem imposum",
            "sraCode" : "211313"
          },
          "cost" : {
            "price" : "12345 kr / byggdag",
            "additional" : true
          },
          "rentedAt" : "2017-12-21T09:57:25.722Z"
        }, {
          "uuid" : "1234567",
          "article" : {
            "number" : "1234567890",
            "name" : "The Dumper",
            "description" : "Lorem imposum",
            "sraCode" : "211313"
          },
          "cost" : {
            "price" : "12345 kr / byggdag",
            "additional" : true
          },
          "rentedAt" : "2017-12-21T09:57:25.722Z"
        } ]
      },
      "returns" : {
        "equipments" : [ {
          "uuid" : "1234567",
          "article" : {
            "number" : "1234567890",
            "name" : "The Dumper",
            "description" : "Lorem imposum",
            "sraCode" : "211313"
          },
          "cost" : {
            "price" : "12345 kr / byggdag",
            "additional" : true
          },
          "rentedAt" : "2017-12-21T09:57:25.722Z",
          "returnedAt" : "2017-12-22T09:57:25.722Z"
        }, {
          "uuid" : "1234567",
          "article" : {
            "number" : "1234567890",
            "name" : "The Dumper",
            "description" : "Lorem imposum",
            "sraCode" : "211313"
          },
          "cost" : {
            "price" : "12345 kr / byggdag",
            "additional" : true
          },
          "rentedAt" : "2017-12-21T09:57:25.722Z",
          "returnedAt" : "2017-12-22T09:57:25.722Z"
        }, {
          "uuid" : "1234567",
          "article" : {
            "number" : "1234567890",
            "name" : "The Dumper",
            "description" : "Lorem imposum",
            "sraCode" : "211313"
          },
          "cost" : {
            "price" : "12345 kr / byggdag",
            "additional" : true
          },
          "rentedAt" : "2017-12-21T09:57:25.722Z",
          "returnedAt" : "2017-12-22T09:57:25.722Z"
        }, {
          "uuid" : "1234567",
          "article" : {
            "number" : "1234567890",
            "name" : "The Dumper",
            "description" : "Lorem imposum",
            "sraCode" : "211313"
          },
          "cost" : {
            "price" : "12345 kr / byggdag",
            "additional" : true
          },
          "rentedAt" : "2017-12-21T09:57:25.722Z",
          "returnedAt" : "2017-12-22T09:57:25.722Z"
        } ],
        "accessories" : [ {
          "uuid" : "1234567",
          "article" : {
            "number" : "1234567890",
            "name" : "The Dumper",
            "description" : "Lorem imposum",
            "sraCode" : "211313"
          },
          "cost" : {
            "price" : "12345 kr / byggdag",
            "additional" : true
          },
          "rentedAt" : "2017-12-21T09:57:25.722Z",
          "returnedAt" : "2017-12-22T09:57:25.722Z"
        }, {
          "uuid" : "1234567",
          "article" : {
            "number" : "1234567890",
            "name" : "The Dumper",
            "description" : "Lorem imposum",
            "sraCode" : "211313"
          },
          "cost" : {
            "price" : "12345 kr / byggdag",
            "additional" : true
          },
          "rentedAt" : "2017-12-21T09:57:25.722Z",
          "returnedAt" : "2017-12-22T09:57:25.722Z"
        }, {
          "uuid" : "1234567",
          "article" : {
            "number" : "1234567890",
            "name" : "The Dumper",
            "description" : "Lorem imposum",
            "sraCode" : "211313"
          },
          "cost" : {
            "price" : "12345 kr / byggdag",
            "additional" : true
          },
          "rentedAt" : "2017-12-21T09:57:25.722Z",
          "returnedAt" : "2017-12-22T09:57:25.722Z"
        }, {
          "uuid" : "1234567",
          "article" : {
            "number" : "1234567890",
            "name" : "The Dumper",
            "description" : "Lorem imposum",
            "sraCode" : "211313"
          },
          "cost" : {
            "price" : "12345 kr / byggdag",
            "additional" : true
          },
          "rentedAt" : "2017-12-21T09:57:25.722Z",
          "returnedAt" : "2017-12-22T09:57:25.722Z"
        } ]
      }
    } ]
  } ]
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

