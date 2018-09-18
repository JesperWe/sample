'use strict';


/**
 * Delete device token
 * 
 *
 * token String 
 * returns inline_response_200_4
 **/
exports.identityDELETE = function(token) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "token" : "94b81440-5b36-4aa8-ac70-ea562be8332a"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Create device token
 * 
 *
 * returns inline_response_200_4
 **/
exports.identityGET = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "token" : "94b81440-5b36-4aa8-ac70-ea562be8332a"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Register device token
 * 
 *
 * token String 
 * returns inline_response_200_4
 **/
exports.identityPOST = function(token) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "token" : "94b81440-5b36-4aa8-ac70-ea562be8332a"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * List templates
 * 
 *
 * returns inline_response_200_5
 **/
exports.templatesGET = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "items" : [ {
    "id" : "AS3423",
    "name" : "Renovera badrum",
    "imageUrl" : "https://syd.hyreslandslaget.se/static/files/1001/top_hll_miljo_006.jpg"
  }, {
    "id" : "AS3423",
    "name" : "Renovera badrum",
    "imageUrl" : "https://syd.hyreslandslaget.se/static/files/1001/top_hll_miljo_006.jpg"
  }, {
    "id" : "AS3423",
    "name" : "Renovera badrum",
    "imageUrl" : "https://syd.hyreslandslaget.se/static/files/1001/top_hll_miljo_006.jpg"
  }, {
    "id" : "AS3423",
    "name" : "Renovera badrum",
    "imageUrl" : "https://syd.hyreslandslaget.se/static/files/1001/top_hll_miljo_006.jpg"
  }, {
    "id" : "AS3423",
    "name" : "Renovera badrum",
    "imageUrl" : "https://syd.hyreslandslaget.se/static/files/1001/top_hll_miljo_006.jpg"
  }, {
    "id" : "AS3423",
    "name" : "Renovera badrum",
    "imageUrl" : "https://syd.hyreslandslaget.se/static/files/1001/top_hll_miljo_006.jpg"
  }, {
    "id" : "AS3423",
    "name" : "Renovera badrum",
    "imageUrl" : "https://syd.hyreslandslaget.se/static/files/1001/top_hll_miljo_006.jpg"
  }, {
    "id" : "AS3423",
    "name" : "Renovera badrum",
    "imageUrl" : "https://syd.hyreslandslaget.se/static/files/1001/top_hll_miljo_006.jpg"
  }, {
    "id" : "AS3423",
    "name" : "Renovera badrum",
    "imageUrl" : "https://syd.hyreslandslaget.se/static/files/1001/top_hll_miljo_006.jpg"
  } ]
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

