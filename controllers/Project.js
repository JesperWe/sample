'use strict';

var utils = require('../utils/writer.js');
var Project = require('../service/ProjectService');

module.exports.projectsProjectIdActionsBookReturnPOST = function projectsProjectIdActionsBookReturnPOST (req, res, next) {
  var body = req.swagger.params['body'].value;
  Project.projectsProjectIdActionsBookReturnPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
