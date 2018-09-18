'use strict';

var utils = require('../utils/writer.js');
var Overview = require('../service/OverviewService');

module.exports.hyrseCompaniesGET = function hyrseCompaniesGET (req, res, next) {
  Overview.hyrseCompaniesGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.overviewActionsGrantCompanyAccessPUT = function overviewActionsGrantCompanyAccessPUT (req, res, next) {
  var body = req.swagger.params['body'].value;
  Overview.overviewActionsGrantCompanyAccessPUT(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.overviewGET = function overviewGET (req, res, next) {
  Overview.overviewGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
