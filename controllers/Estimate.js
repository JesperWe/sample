'use strict';

var utils = require('../utils/writer.js');
var Estimate = require('../service/EstimateService');

module.exports.estimatesEstimateIdAssembliesAssemblyIdAccessoriesArticleNumberDELETE = function estimatesEstimateIdAssembliesAssemblyIdAccessoriesArticleNumberDELETE (req, res, next) {
  var estimateId = req.swagger.params['estimateId'].value;
  var assemblyId = req.swagger.params['assemblyId'].value;
  var articleNumber = req.swagger.params['articleNumber'].value;
  var body = req.swagger.params['body'].value;
  Estimate.estimatesEstimateIdAssembliesAssemblyIdAccessoriesArticleNumberDELETE(estimateId,assemblyId,articleNumber,body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.estimatesEstimateIdAssembliesAssemblyIdDELETE = function estimatesEstimateIdAssembliesAssemblyIdDELETE (req, res, next) {
  var estimateId = req.swagger.params['estimateId'].value;
  var assemblyId = req.swagger.params['assemblyId'].value;
  var body = req.swagger.params['body'].value;
  Estimate.estimatesEstimateIdAssembliesAssemblyIdDELETE(estimateId,assemblyId,body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.estimatesEstimateIdAssembliesAssemblyIdGET = function estimatesEstimateIdAssembliesAssemblyIdGET (req, res, next) {
  var estimateId = req.swagger.params['estimateId'].value;
  var assemblyId = req.swagger.params['assemblyId'].value;
  Estimate.estimatesEstimateIdAssembliesAssemblyIdGET(estimateId,assemblyId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.estimatesEstimateIdAssembliesAssemblyIdPUT = function estimatesEstimateIdAssembliesAssemblyIdPUT (req, res, next) {
  var estimateId = req.swagger.params['estimateId'].value;
  var assemblyId = req.swagger.params['assemblyId'].value;
  var body = req.swagger.params['body'].value;
  Estimate.estimatesEstimateIdAssembliesAssemblyIdPUT(estimateId,assemblyId,body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.estimatesEstimateIdAssembliesGET = function estimatesEstimateIdAssembliesGET (req, res, next) {
  var estimateId = req.swagger.params['estimateId'].value;
  Estimate.estimatesEstimateIdAssembliesGET(estimateId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.estimatesEstimateIdAssembliesPOST = function estimatesEstimateIdAssembliesPOST (req, res, next) {
  var estimateId = req.swagger.params['estimateId'].value;
  var body = req.swagger.params['body'].value;
  Estimate.estimatesEstimateIdAssembliesPOST(estimateId,body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.estimatesEstimateIdPeriodPUT = function estimatesEstimateIdPeriodPUT (req, res, next) {
  var estimateId = req.swagger.params['estimateId'].value;
  var body = req.swagger.params['body'].value;
  Estimate.estimatesEstimateIdPeriodPUT(estimateId,body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.estimatesGET = function estimatesGET (req, res, next) {
  Estimate.estimatesGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.estimatesIdAssembliesPUT = function estimatesIdAssembliesPUT (req, res, next) {
  var body = req.swagger.params['body'].value;
  Estimate.estimatesIdAssembliesPUT(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.estimatesIdCharacteristicsPUT = function estimatesIdCharacteristicsPUT (req, res, next) {
  var body = req.swagger.params['body'].value;
  Estimate.estimatesIdCharacteristicsPUT(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.estimatesIdDELETE = function estimatesIdDELETE (req, res, next) {
  Estimate.estimatesIdDELETE()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.estimatesIdDeliveryDELETE = function estimatesIdDeliveryDELETE (req, res, next) {
  var id = req.swagger.params['id'].value;
  Estimate.estimatesIdDeliveryDELETE(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.estimatesIdDeliveryPOST = function estimatesIdDeliveryPOST (req, res, next) {
  var id = req.swagger.params['id'].value;
  var body = req.swagger.params['body'].value;
  Estimate.estimatesIdDeliveryPOST(id,body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.estimatesIdDiscountsPOST = function estimatesIdDiscountsPOST (req, res, next) {
  var id = req.swagger.params['id'].value;
  var body = req.swagger.params['body'].value;
  Estimate.estimatesIdDiscountsPOST(id,body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.estimatesIdGET = function estimatesIdGET (req, res, next) {
  Estimate.estimatesIdGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.estimatesIdInsuranceDELETE = function estimatesIdInsuranceDELETE (req, res, next) {
  var id = req.swagger.params['id'].value;
  Estimate.estimatesIdInsuranceDELETE(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.estimatesIdInsurancePOST = function estimatesIdInsurancePOST (req, res, next) {
  var id = req.swagger.params['id'].value;
  Estimate.estimatesIdInsurancePOST(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.estimatesIdtypepdfGET = function estimatesIdtypepdfGET (req, res, next) {
  Estimate.estimatesIdtypepdfGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.estimatesPOST = function estimatesPOST (req, res, next) {
  var template = req.swagger.params['template'].value;
  var body = req.swagger.params['body'].value;
  Estimate.estimatesPOST(template,body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
