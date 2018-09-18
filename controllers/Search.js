'use strict';

var utils = require('../utils/writer.js');
var Search = require('../service/SearchService');

module.exports.searchGET = function searchGET (req, res, next) {
  var query = req.swagger.params['query'].value;
  var type = req.swagger.params['type'].value;
  var limit = req.swagger.params['limit'].value;
  var offset = req.swagger.params['offset'].value;
  Search.searchGET(query,type,limit,offset)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
