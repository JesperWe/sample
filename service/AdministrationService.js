'use strict';

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

