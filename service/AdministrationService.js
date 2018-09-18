'use strict';


/**
 * Load Group
 * 
 *
 * code String The group code
 * returns inline_response_200_2
 **/
exports.catalogueGroupsCodeGET = function(code) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "items" : [ {
    "code" : "1",
    "name" : "Heavy machinery"
  } ]
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * List catalogue assemblies for category
 * 
 *
 * category String The category code
 * returns inline_response_200_2
 **/
exports.catalogueProductsGET = function(category) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "items" : [ {
    "equipment" : {
      "article" : {
        "number" : "1234567890",
        "name" : "The Dumper",
        "description" : "Lorem imposum",
        "sraCode" : "211313"
      },
      "offer" : {
        "name" : "\"Hyra\"",
        "amount" : "123.45",
        "price" : "12345 kr / alldager",
        "unit" : "st"
      },
      "services" : {
        "article" : {
          "number" : "1234567890",
          "name" : "The Dumper",
          "description" : "Lorem imposum",
          "sraCode" : "211313"
        },
        "offer" : {
          "name" : "\"Hyra\"",
          "amount" : "123.45",
          "price" : "12345 kr / alldager",
          "unit" : "st"
        }
      }
    },
    "accessories" : [ {
      "article" : {
        "number" : "1234567890",
        "name" : "The Dumper",
        "description" : "Lorem imposum",
        "sraCode" : "211313"
      },
      "offer" : {
        "name" : "\"Hyra\"",
        "amount" : "123.45",
        "price" : "12345 kr / alldager",
        "unit" : "st",
        "preSelected" : true
      },
      "services" : {
        "article" : {
          "number" : "1234567890",
          "name" : "The Dumper",
          "description" : "Lorem imposum",
          "sraCode" : "211313"
        },
        "offer" : {
          "name" : "\"Hyra\"",
          "amount" : "123.45",
          "price" : "12345 kr / alldager",
          "unit" : "st"
        }
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


/**
 * Get catalogue assembly
 * Allow user to browse products data
 *
 * number Integer 
 * returns inline_response_200_3
 **/
exports.catalogueProductsNumberGET = function(number) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "equipment" : {
    "article" : {
      "number" : "1234567890",
      "name" : "The Dumper",
      "description" : "Lorem imposum",
      "sraCode" : "211313"
    },
    "offer" : {
      "name" : "\"Hyra\"",
      "amount" : "123.45",
      "price" : "12345 kr / alldager",
      "unit" : "st"
    },
    "services" : {
      "article" : {
        "number" : "1234567890",
        "name" : "The Dumper",
        "description" : "Lorem imposum",
        "sraCode" : "211313"
      },
      "offer" : {
        "name" : "\"Hyra\"",
        "amount" : "123.45",
        "price" : "12345 kr / alldager",
        "unit" : "st"
      }
    }
  },
  "accessories" : [ {
    "article" : {
      "number" : "1234567890",
      "name" : "The Dumper",
      "description" : "Lorem imposum",
      "sraCode" : "211313"
    },
    "offer" : {
      "name" : "\"Hyra\"",
      "amount" : "123.45",
      "price" : "12345 kr / alldager",
      "unit" : "st",
      "preSelected" : true
    },
    "services" : {
      "article" : {
        "number" : "1234567890",
        "name" : "The Dumper",
        "description" : "Lorem imposum",
        "sraCode" : "211313"
      },
      "offer" : {
        "name" : "\"Hyra\"",
        "amount" : "123.45",
        "price" : "12345 kr / alldager",
        "unit" : "st"
      }
    }
  } ]
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Request single Depo by \"code\" identifier.
 * 
 *
 * code String The code of the desired depot.
 * returns inline_response_200_1
 **/
exports.depotsCodeGET = function(code) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "code" : "SE0001",
  "name" : "Akalla",
  "description" : "I de gamla tryckertilokalerna på Vandagatan hittar ni oss på Depå Akalla.",
  "phones" : [ {
    "number" : "08-477 11 50",
    "type" : "fixed"
  } ],
  "email" : "akalla@hllab.se",
  "openingHours" : [ {
    "name" : "Regular",
    "openingHours" : "09:00-18:00"
  } ],
  "address" : {
    "streetAddress" : "Vandagatan 3",
    "postalCode" : "164 74",
    "city" : "Akalla",
    "country" : "SE",
    "region" : "Stockholm",
    "location" : {
      "latitude" : "57.56236",
      "longitude" : "18.34526"
    }
  },
  "departments" : [ {
    "name" : "UTHYRNING",
    "employees" : [ {
      "location" : "Manager",
      "firstName" : "Niklas",
      "lastName" : "Ekwal",
      "phones" : [ {
        "number" : "08-477 11 50",
        "type" : "fixed"
      } ],
      "email" : "niklas.ekwall@hllab.se",
      "photo" : "http://url./niklas.ekwall.png"
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


/**
 * List all available depots
 * 
 *
 * returns List
 **/
exports.depotsGET = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "code" : "SE0001",
  "name" : "Akalla",
  "description" : "I de gamla tryckertilokalerna på Vandagatan hittar ni oss på Depå Akalla.",
  "phones" : [ {
    "number" : "08-477 11 50",
    "type" : "fixed"
  } ],
  "email" : "akalla@hllab.se",
  "openingHours" : [ {
    "name" : "Regular",
    "openingHours" : "09:00-18:00"
  } ],
  "address" : {
    "streetAddress" : "Vandagatan 3",
    "postalCode" : "164 74",
    "city" : "Akalla",
    "country" : "SE",
    "region" : "Stockholm",
    "location" : {
      "latitude" : "57.56236",
      "longitude" : "18.34526"
    }
  },
  "departments" : [ {
    "name" : "UTHYRNING",
    "employees" : [ {
      "location" : "Manager",
      "firstName" : "Niklas",
      "lastName" : "Ekwal",
      "phones" : [ {
        "number" : "08-477 11 50",
        "type" : "fixed"
      } ],
      "email" : "niklas.ekwall@hllab.se",
      "photo" : "http://url./niklas.ekwall.png"
    } ]
  } ]
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

