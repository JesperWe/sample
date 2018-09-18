'use strict';


/**
 * Get the update information
 * 
 *
 * returns inline_response_200
 **/
exports.updateGET = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "android" : {
    "minVersion" : 20000000,
    "latestVersion" : 20000003,
    "storeUrl" : "https://play.google.com/store/apps/details?id=se.hyreslandslaget.app"
  },
  "ios" : {
    "minVersion" : "1.0.0",
    "latestVersion" : "1.0.0",
    "storeUrl" : "https://itunes.apple.com/us/app/hll/id1205522032"
  }
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

