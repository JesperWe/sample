'use strict';


/**
 * Search
 * 
 *
 * query String The query
 * type String The type of domain to where search should be perform. (optional)
 * limit String The limit for search results. (optional)
 * offset String The offset for search results. (optional)
 * returns inline_response_200_9
 **/
exports.searchGET = function(query,type,limit,offset) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "items" : [ {
    "type" : "equipment",
    "displayName" : "Machine",
    "nextOffset" : 100,
    "results" : [ {
      "reference" : "21234",
      "displayText" : "DepotTruck"
    } ]
  }, {
    "reference" : "93212345",
    "displayText" : "DepotTruck",
    "sraCode" : "93212345"
  } ]
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

