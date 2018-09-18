'use strict';

var utils = require('../utils/writer.js');
var Administration = require('../service/AdministrationService');

module.exports.catalogueGroupsCodeGET = function catalogueGroupsCodeGET (req, res, next) {
  var code = req.swagger.params['code'].value;
  Administration.catalogueGroupsCodeGET(code)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.catalogueProductsGET = function catalogueProductsGET (req, res, next) {
  var category = req.swagger.params['category'].value;
  Administration.catalogueProductsGET(category)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.catalogueProductsNumberGET = function catalogueProductsNumberGET (req, res, next) {
  var number = req.swagger.params['number'].value;
  Administration.catalogueProductsNumberGET(number)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

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
