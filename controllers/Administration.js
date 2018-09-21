'use strict';

var utils = require('../utils/writer.js');
var Administration = require('../service/AdministrationService');

module.exports.depotsCodeGET = function depotsCodeGET (req, res, next) {
  var code = req.swagger.params['code'].value;
  Administration.depotsCodeGET(code)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.depotsGET = function depotsGET (req, res, next) {
  Administration.depotsGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
