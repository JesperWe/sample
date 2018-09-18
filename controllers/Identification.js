'use strict';

var utils = require('../utils/writer.js');
var Identification = require('../service/IdentificationService');

module.exports.identityDELETE = function identityDELETE (req, res, next) {
  var token = req.swagger.params['token'].value;
  Identification.identityDELETE(token)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.identityGET = function identityGET (req, res, next) {
  Identification.identityGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.identityPOST = function identityPOST (req, res, next) {
  var token = req.swagger.params['token'].value;
  Identification.identityPOST(token)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.templatesGET = function templatesGET (req, res, next) {
  Identification.templatesGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
