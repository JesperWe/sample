'use strict';

var utils = require('../utils/writer.js');
var Default = require('../service/DefaultService');

module.exports.updateGET = function updateGET (req, res, next) {
  Default.updateGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
