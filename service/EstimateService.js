'use strict';


/**
 * Delete accessory from assembly
 * This should be use to remove an accesory from an assembly
 *
 * estimateId String The id of estimate.
 * assemblyId String The id for the equipment
 * articleNumber String The article number of accessory.
 * body Assembly Order Items  (optional)
 * returns inline_response_200_6
 **/
exports.estimatesEstimateIdAssembliesAssemblyIdAccessoriesArticleNumberDELETE = function(estimateId,assemblyId,articleNumber,body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "id" : "AS3423",
  "name" : "Name",
  "color" : "#ff0055",
  "price" : "800 kr",
  "modified" : "2017-01-12T15:46:58Z",
  "period" : {
    "start" : "2017-01-12T15:46:58Z",
    "finish" : "2017-01-12T15:46:58Z"
  },
  "assemblies" : [ {
    "id" : 123,
    "equipment" : {
      "article" : {
        "number" : "1234567890",
        "name" : "The Dumper",
        "description" : "Lorem imposum",
        "sraCode" : "211313"
      },
      "offer" : {
        "name" : "\"Hyra\"",
        "amount" : "123.45",
        "price" : "12345 kr / alldager",
        "unit" : "st"
      },
      "services" : {
        "article" : {
          "number" : "1234567890",
          "name" : "The Dumper",
          "description" : "Lorem imposum",
          "sraCode" : "211313"
        },
        "offer" : {
          "name" : "\"Hyra\"",
          "amount" : "123.45",
          "price" : "12345 kr / alldager",
          "unit" : "st"
        }
      },
      "order" : {
        "amount" : 1234.56,
        "discount" : 123,
        "price" : "1234567.89 kr"
      }
    },
    "accessories" : [ {
      "article" : {
        "number" : "1234567890",
        "name" : "The Dumper",
        "description" : "Lorem imposum",
        "sraCode" : "211313"
      },
      "offer" : {
        "name" : "\"Hyra\"",
        "amount" : "123.45",
        "price" : "12345 kr / alldager",
        "unit" : "st",
        "preSelected" : true
      },
      "services" : {
        "article" : {
          "number" : "1234567890",
          "name" : "The Dumper",
          "description" : "Lorem imposum",
          "sraCode" : "211313"
        },
        "offer" : {
          "name" : "\"Hyra\"",
          "amount" : "123.45",
          "price" : "12345 kr / alldager",
          "unit" : "st"
        }
      },
      "order" : {
        "amount" : 1234.56,
        "discount" : 123,
        "price" : "1234567.89 kr"
      }
    } ]
  } ],
  "discounts" : {
    "classes" : [ {
      "code" : "23",
      "name" : "Some name",
      "value" : 10
    } ],
    "categories" : [ {
      "code" : "23",
      "name" : "Some name",
      "value" : 10
    } ]
  },
  "insurance" : {
    "price" : "150 kr"
  },
  "delivery" : {
    "destination" : {
      "latitude" : "57.56236",
      "longitude" : "18.34526"
    },
    "fare" : {
      "price" : "150 kr"
    },
    "status" : "ESTIMATED",
    "message" : "A description of the status"
  }
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Delete assembly
 * This should be use to remove assembly with accessories
 *
 * estimateId String The id of estimate.
 * assemblyId String The id for the equipment
 * body Assembly Order Items  (optional)
 * returns inline_response_200_6
 **/
exports.estimatesEstimateIdAssembliesAssemblyIdDELETE = function(estimateId,assemblyId,body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "id" : "AS3423",
  "name" : "Name",
  "color" : "#ff0055",
  "price" : "800 kr",
  "modified" : "2017-01-12T15:46:58Z",
  "period" : {
    "start" : "2017-01-12T15:46:58Z",
    "finish" : "2017-01-12T15:46:58Z"
  },
  "assemblies" : [ {
    "id" : 123,
    "equipment" : {
      "article" : {
        "number" : "1234567890",
        "name" : "The Dumper",
        "description" : "Lorem imposum",
        "sraCode" : "211313"
      },
      "offer" : {
        "name" : "\"Hyra\"",
        "amount" : "123.45",
        "price" : "12345 kr / alldager",
        "unit" : "st"
      },
      "services" : {
        "article" : {
          "number" : "1234567890",
          "name" : "The Dumper",
          "description" : "Lorem imposum",
          "sraCode" : "211313"
        },
        "offer" : {
          "name" : "\"Hyra\"",
          "amount" : "123.45",
          "price" : "12345 kr / alldager",
          "unit" : "st"
        }
      },
      "order" : {
        "amount" : 1234.56,
        "discount" : 123,
        "price" : "1234567.89 kr"
      }
    },
    "accessories" : [ {
      "article" : {
        "number" : "1234567890",
        "name" : "The Dumper",
        "description" : "Lorem imposum",
        "sraCode" : "211313"
      },
      "offer" : {
        "name" : "\"Hyra\"",
        "amount" : "123.45",
        "price" : "12345 kr / alldager",
        "unit" : "st",
        "preSelected" : true
      },
      "services" : {
        "article" : {
          "number" : "1234567890",
          "name" : "The Dumper",
          "description" : "Lorem imposum",
          "sraCode" : "211313"
        },
        "offer" : {
          "name" : "\"Hyra\"",
          "amount" : "123.45",
          "price" : "12345 kr / alldager",
          "unit" : "st"
        }
      },
      "order" : {
        "amount" : 1234.56,
        "discount" : 123,
        "price" : "1234567.89 kr"
      }
    } ]
  } ],
  "discounts" : {
    "classes" : [ {
      "code" : "23",
      "name" : "Some name",
      "value" : 10
    } ],
    "categories" : [ {
      "code" : "23",
      "name" : "Some name",
      "value" : 10
    } ]
  },
  "insurance" : {
    "price" : "150 kr"
  },
  "delivery" : {
    "destination" : {
      "latitude" : "57.56236",
      "longitude" : "18.34526"
    },
    "fare" : {
      "price" : "150 kr"
    },
    "status" : "ESTIMATED",
    "message" : "A description of the status"
  }
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get assembly
 * 
 *
 * estimateId String The id of estimate.
 * assemblyId String The id for the equipment
 * returns inline_response_200_8
 **/
exports.estimatesEstimateIdAssembliesAssemblyIdGET = function(estimateId,assemblyId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "id" : 123,
  "equipment" : {
    "article" : {
      "number" : "1234567890",
      "name" : "The Dumper",
      "description" : "Lorem imposum",
      "sraCode" : "211313"
    },
    "offer" : {
      "name" : "\"Hyra\"",
      "amount" : "123.45",
      "price" : "12345 kr / alldager",
      "unit" : "st"
    },
    "services" : {
      "article" : {
        "number" : "1234567890",
        "name" : "The Dumper",
        "description" : "Lorem imposum",
        "sraCode" : "211313"
      },
      "offer" : {
        "name" : "\"Hyra\"",
        "amount" : "123.45",
        "price" : "12345 kr / alldager",
        "unit" : "st"
      }
    },
    "order" : {
      "amount" : 1234.56,
      "discount" : 123,
      "price" : "1234567.89 kr"
    }
  },
  "accessories" : [ {
    "article" : {
      "number" : "1234567890",
      "name" : "The Dumper",
      "description" : "Lorem imposum",
      "sraCode" : "211313"
    },
    "offer" : {
      "name" : "\"Hyra\"",
      "amount" : "123.45",
      "price" : "12345 kr / alldager",
      "unit" : "st",
      "preSelected" : true
    },
    "services" : {
      "article" : {
        "number" : "1234567890",
        "name" : "The Dumper",
        "description" : "Lorem imposum",
        "sraCode" : "211313"
      },
      "offer" : {
        "name" : "\"Hyra\"",
        "amount" : "123.45",
        "price" : "12345 kr / alldager",
        "unit" : "st"
      }
    },
    "order" : {
      "amount" : 1234.56,
      "discount" : 123,
      "price" : "1234567.89 kr"
    }
  } ]
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Change assembly accessories
 * This should be use to remove or add accessories. Also can be used to update amount. It will retain only accessories passed as body.
 *
 * estimateId String The id of estimate.
 * assemblyId String The id for the equipment
 * body Assembly Order  (optional)
 * returns inline_response_200_6
 **/
exports.estimatesEstimateIdAssembliesAssemblyIdPUT = function(estimateId,assemblyId,body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "id" : "AS3423",
  "name" : "Name",
  "color" : "#ff0055",
  "price" : "800 kr",
  "modified" : "2017-01-12T15:46:58Z",
  "period" : {
    "start" : "2017-01-12T15:46:58Z",
    "finish" : "2017-01-12T15:46:58Z"
  },
  "assemblies" : [ {
    "id" : 123,
    "equipment" : {
      "article" : {
        "number" : "1234567890",
        "name" : "The Dumper",
        "description" : "Lorem imposum",
        "sraCode" : "211313"
      },
      "offer" : {
        "name" : "\"Hyra\"",
        "amount" : "123.45",
        "price" : "12345 kr / alldager",
        "unit" : "st"
      },
      "services" : {
        "article" : {
          "number" : "1234567890",
          "name" : "The Dumper",
          "description" : "Lorem imposum",
          "sraCode" : "211313"
        },
        "offer" : {
          "name" : "\"Hyra\"",
          "amount" : "123.45",
          "price" : "12345 kr / alldager",
          "unit" : "st"
        }
      },
      "order" : {
        "amount" : 1234.56,
        "discount" : 123,
        "price" : "1234567.89 kr"
      }
    },
    "accessories" : [ {
      "article" : {
        "number" : "1234567890",
        "name" : "The Dumper",
        "description" : "Lorem imposum",
        "sraCode" : "211313"
      },
      "offer" : {
        "name" : "\"Hyra\"",
        "amount" : "123.45",
        "price" : "12345 kr / alldager",
        "unit" : "st",
        "preSelected" : true
      },
      "services" : {
        "article" : {
          "number" : "1234567890",
          "name" : "The Dumper",
          "description" : "Lorem imposum",
          "sraCode" : "211313"
        },
        "offer" : {
          "name" : "\"Hyra\"",
          "amount" : "123.45",
          "price" : "12345 kr / alldager",
          "unit" : "st"
        }
      },
      "order" : {
        "amount" : 1234.56,
        "discount" : 123,
        "price" : "1234567.89 kr"
      }
    } ]
  } ],
  "discounts" : {
    "classes" : [ {
      "code" : "23",
      "name" : "Some name",
      "value" : 10
    } ],
    "categories" : [ {
      "code" : "23",
      "name" : "Some name",
      "value" : 10
    } ]
  },
  "insurance" : {
    "price" : "150 kr"
  },
  "delivery" : {
    "destination" : {
      "latitude" : "57.56236",
      "longitude" : "18.34526"
    },
    "fare" : {
      "price" : "150 kr"
    },
    "status" : "ESTIMATED",
    "message" : "A description of the status"
  }
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * List assemblies
 * 
 *
 * estimateId String The id of estimate.
 * returns inline_response_200_5
 **/
exports.estimatesEstimateIdAssembliesGET = function(estimateId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "items" : [ {
    "id" : 123,
    "equipment" : {
      "article" : {
        "number" : "1234567890",
        "name" : "The Dumper",
        "description" : "Lorem imposum",
        "sraCode" : "211313"
      },
      "offer" : {
        "name" : "\"Hyra\"",
        "amount" : "123.45",
        "price" : "12345 kr / alldager",
        "unit" : "st"
      },
      "services" : {
        "article" : {
          "number" : "1234567890",
          "name" : "The Dumper",
          "description" : "Lorem imposum",
          "sraCode" : "211313"
        },
        "offer" : {
          "name" : "\"Hyra\"",
          "amount" : "123.45",
          "price" : "12345 kr / alldager",
          "unit" : "st"
        }
      },
      "order" : {
        "amount" : 1234.56,
        "discount" : 123,
        "price" : "1234567.89 kr"
      }
    },
    "accessories" : [ {
      "article" : {
        "number" : "1234567890",
        "name" : "The Dumper",
        "description" : "Lorem imposum",
        "sraCode" : "211313"
      },
      "offer" : {
        "name" : "\"Hyra\"",
        "amount" : "123.45",
        "price" : "12345 kr / alldager",
        "unit" : "st",
        "preSelected" : true
      },
      "services" : {
        "article" : {
          "number" : "1234567890",
          "name" : "The Dumper",
          "description" : "Lorem imposum",
          "sraCode" : "211313"
        },
        "offer" : {
          "name" : "\"Hyra\"",
          "amount" : "123.45",
          "price" : "12345 kr / alldager",
          "unit" : "st"
        }
      },
      "order" : {
        "amount" : 1234.56,
        "discount" : 123,
        "price" : "1234567.89 kr"
      }
    } ]
  } ]
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Create assembly for Catalogue Item
 * Creates assembly for given Product, passing accessories override default selection.
 *
 * estimateId String The id of estimate
 * body Assembly Order  (optional)
 * returns inline_response_200_6
 **/
exports.estimatesEstimateIdAssembliesPOST = function(estimateId,body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "id" : "AS3423",
  "name" : "Name",
  "color" : "#ff0055",
  "price" : "800 kr",
  "modified" : "2017-01-12T15:46:58Z",
  "period" : {
    "start" : "2017-01-12T15:46:58Z",
    "finish" : "2017-01-12T15:46:58Z"
  },
  "assemblies" : [ {
    "id" : 123,
    "equipment" : {
      "article" : {
        "number" : "1234567890",
        "name" : "The Dumper",
        "description" : "Lorem imposum",
        "sraCode" : "211313"
      },
      "offer" : {
        "name" : "\"Hyra\"",
        "amount" : "123.45",
        "price" : "12345 kr / alldager",
        "unit" : "st"
      },
      "services" : {
        "article" : {
          "number" : "1234567890",
          "name" : "The Dumper",
          "description" : "Lorem imposum",
          "sraCode" : "211313"
        },
        "offer" : {
          "name" : "\"Hyra\"",
          "amount" : "123.45",
          "price" : "12345 kr / alldager",
          "unit" : "st"
        }
      },
      "order" : {
        "amount" : 1234.56,
        "discount" : 123,
        "price" : "1234567.89 kr"
      }
    },
    "accessories" : [ {
      "article" : {
        "number" : "1234567890",
        "name" : "The Dumper",
        "description" : "Lorem imposum",
        "sraCode" : "211313"
      },
      "offer" : {
        "name" : "\"Hyra\"",
        "amount" : "123.45",
        "price" : "12345 kr / alldager",
        "unit" : "st",
        "preSelected" : true
      },
      "services" : {
        "article" : {
          "number" : "1234567890",
          "name" : "The Dumper",
          "description" : "Lorem imposum",
          "sraCode" : "211313"
        },
        "offer" : {
          "name" : "\"Hyra\"",
          "amount" : "123.45",
          "price" : "12345 kr / alldager",
          "unit" : "st"
        }
      },
      "order" : {
        "amount" : 1234.56,
        "discount" : 123,
        "price" : "1234567.89 kr"
      }
    } ]
  } ],
  "discounts" : {
    "classes" : [ {
      "code" : "23",
      "name" : "Some name",
      "value" : 10
    } ],
    "categories" : [ {
      "code" : "23",
      "name" : "Some name",
      "value" : 10
    } ]
  },
  "insurance" : {
    "price" : "150 kr"
  },
  "delivery" : {
    "destination" : {
      "latitude" : "57.56236",
      "longitude" : "18.34526"
    },
    "fare" : {
      "price" : "150 kr"
    },
    "status" : "ESTIMATED",
    "message" : "A description of the status"
  }
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Update estimate period
 * 
 *
 * estimateId String The id of estimate.
 * body Period Base  (optional)
 * returns inline_response_200_6
 **/
exports.estimatesEstimateIdPeriodPUT = function(estimateId,body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "id" : "AS3423",
  "name" : "Name",
  "color" : "#ff0055",
  "price" : "800 kr",
  "modified" : "2017-01-12T15:46:58Z",
  "period" : {
    "start" : "2017-01-12T15:46:58Z",
    "finish" : "2017-01-12T15:46:58Z"
  },
  "assemblies" : [ {
    "id" : 123,
    "equipment" : {
      "article" : {
        "number" : "1234567890",
        "name" : "The Dumper",
        "description" : "Lorem imposum",
        "sraCode" : "211313"
      },
      "offer" : {
        "name" : "\"Hyra\"",
        "amount" : "123.45",
        "price" : "12345 kr / alldager",
        "unit" : "st"
      },
      "services" : {
        "article" : {
          "number" : "1234567890",
          "name" : "The Dumper",
          "description" : "Lorem imposum",
          "sraCode" : "211313"
        },
        "offer" : {
          "name" : "\"Hyra\"",
          "amount" : "123.45",
          "price" : "12345 kr / alldager",
          "unit" : "st"
        }
      },
      "order" : {
        "amount" : 1234.56,
        "discount" : 123,
        "price" : "1234567.89 kr"
      }
    },
    "accessories" : [ {
      "article" : {
        "number" : "1234567890",
        "name" : "The Dumper",
        "description" : "Lorem imposum",
        "sraCode" : "211313"
      },
      "offer" : {
        "name" : "\"Hyra\"",
        "amount" : "123.45",
        "price" : "12345 kr / alldager",
        "unit" : "st",
        "preSelected" : true
      },
      "services" : {
        "article" : {
          "number" : "1234567890",
          "name" : "The Dumper",
          "description" : "Lorem imposum",
          "sraCode" : "211313"
        },
        "offer" : {
          "name" : "\"Hyra\"",
          "amount" : "123.45",
          "price" : "12345 kr / alldager",
          "unit" : "st"
        }
      },
      "order" : {
        "amount" : 1234.56,
        "discount" : 123,
        "price" : "1234567.89 kr"
      }
    } ]
  } ],
  "discounts" : {
    "classes" : [ {
      "code" : "23",
      "name" : "Some name",
      "value" : 10
    } ],
    "categories" : [ {
      "code" : "23",
      "name" : "Some name",
      "value" : 10
    } ]
  },
  "insurance" : {
    "price" : "150 kr"
  },
  "delivery" : {
    "destination" : {
      "latitude" : "57.56236",
      "longitude" : "18.34526"
    },
    "fare" : {
      "price" : "150 kr"
    },
    "status" : "ESTIMATED",
    "message" : "A description of the status"
  }
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * List estimates
 * 
 *
 * returns inline_response_200_5
 **/
exports.estimatesGET = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "items" : [ {
    "id" : "AS3423",
    "name" : "Name",
    "color" : "#ff0055",
    "price" : "800 kr",
    "modified" : "2017-01-12T15:46:58Z",
    "period" : {
      "start" : "2017-01-12T15:46:58Z",
      "finish" : "2017-01-12T15:46:58Z"
    },
    "assemblies" : [ {
      "id" : 123,
      "equipment" : {
        "article" : {
          "number" : "1234567890",
          "name" : "The Dumper",
          "description" : "Lorem imposum",
          "sraCode" : "211313"
        },
        "offer" : {
          "name" : "\"Hyra\"",
          "amount" : "123.45",
          "price" : "12345 kr / alldager",
          "unit" : "st"
        },
        "services" : {
          "article" : {
            "number" : "1234567890",
            "name" : "The Dumper",
            "description" : "Lorem imposum",
            "sraCode" : "211313"
          },
          "offer" : {
            "name" : "\"Hyra\"",
            "amount" : "123.45",
            "price" : "12345 kr / alldager",
            "unit" : "st"
          }
        },
        "order" : {
          "amount" : 1234.56,
          "discount" : 123,
          "price" : "1234567.89 kr"
        }
      },
      "accessories" : [ {
        "article" : {
          "number" : "1234567890",
          "name" : "The Dumper",
          "description" : "Lorem imposum",
          "sraCode" : "211313"
        },
        "offer" : {
          "name" : "\"Hyra\"",
          "amount" : "123.45",
          "price" : "12345 kr / alldager",
          "unit" : "st",
          "preSelected" : true
        },
        "services" : {
          "article" : {
            "number" : "1234567890",
            "name" : "The Dumper",
            "description" : "Lorem imposum",
            "sraCode" : "211313"
          },
          "offer" : {
            "name" : "\"Hyra\"",
            "amount" : "123.45",
            "price" : "12345 kr / alldager",
            "unit" : "st"
          }
        },
        "order" : {
          "amount" : 1234.56,
          "discount" : 123,
          "price" : "1234567.89 kr"
        }
      } ]
    } ],
    "discounts" : {
      "classes" : [ {
        "code" : "23",
        "name" : "Some name",
        "value" : 10
      } ],
      "categories" : [ {
        "code" : "23",
        "name" : "Some name",
        "value" : 10
      } ]
    },
    "insurance" : {
      "price" : "150 kr"
    },
    "delivery" : {
      "destination" : {
        "latitude" : "57.56236",
        "longitude" : "18.34526"
      },
      "fare" : {
        "price" : "150 kr"
      },
      "status" : "ESTIMATED",
      "message" : "A description of the status"
    }
  } ]
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Bulk update of assemblies amounts
 * Allows to update group of assemblies amounts with single request.
 *
 * body Estimate Assemblies  (optional)
 * returns inline_response_200_6
 **/
exports.estimatesIdAssembliesPUT = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "id" : "AS3423",
  "name" : "Name",
  "color" : "#ff0055",
  "price" : "800 kr",
  "modified" : "2017-01-12T15:46:58Z",
  "period" : {
    "start" : "2017-01-12T15:46:58Z",
    "finish" : "2017-01-12T15:46:58Z"
  },
  "assemblies" : [ {
    "id" : 123,
    "equipment" : {
      "article" : {
        "number" : "1234567890",
        "name" : "The Dumper",
        "description" : "Lorem imposum",
        "sraCode" : "211313"
      },
      "offer" : {
        "name" : "\"Hyra\"",
        "amount" : "123.45",
        "price" : "12345 kr / alldager",
        "unit" : "st"
      },
      "services" : {
        "article" : {
          "number" : "1234567890",
          "name" : "The Dumper",
          "description" : "Lorem imposum",
          "sraCode" : "211313"
        },
        "offer" : {
          "name" : "\"Hyra\"",
          "amount" : "123.45",
          "price" : "12345 kr / alldager",
          "unit" : "st"
        }
      },
      "order" : {
        "amount" : 1234.56,
        "discount" : 123,
        "price" : "1234567.89 kr"
      }
    },
    "accessories" : [ {
      "article" : {
        "number" : "1234567890",
        "name" : "The Dumper",
        "description" : "Lorem imposum",
        "sraCode" : "211313"
      },
      "offer" : {
        "name" : "\"Hyra\"",
        "amount" : "123.45",
        "price" : "12345 kr / alldager",
        "unit" : "st",
        "preSelected" : true
      },
      "services" : {
        "article" : {
          "number" : "1234567890",
          "name" : "The Dumper",
          "description" : "Lorem imposum",
          "sraCode" : "211313"
        },
        "offer" : {
          "name" : "\"Hyra\"",
          "amount" : "123.45",
          "price" : "12345 kr / alldager",
          "unit" : "st"
        }
      },
      "order" : {
        "amount" : 1234.56,
        "discount" : 123,
        "price" : "1234567.89 kr"
      }
    } ]
  } ],
  "discounts" : {
    "classes" : [ {
      "code" : "23",
      "name" : "Some name",
      "value" : 10
    } ],
    "categories" : [ {
      "code" : "23",
      "name" : "Some name",
      "value" : 10
    } ]
  },
  "insurance" : {
    "price" : "150 kr"
  },
  "delivery" : {
    "destination" : {
      "latitude" : "57.56236",
      "longitude" : "18.34526"
    },
    "fare" : {
      "price" : "150 kr"
    },
    "status" : "ESTIMATED",
    "message" : "A description of the status"
  }
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Update estimate characteristics
 * 
 *
 * body Estimate Characteristic  (optional)
 * returns inline_response_200_7
 **/
exports.estimatesIdCharacteristicsPUT = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "id" : "AS3423",
  "name" : "Name",
  "color" : "#ff0055",
  "price" : "800 kr",
  "modified" : "2017-01-12T15:46:58Z"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Delete estimate
 * 
 *
 * no response value expected for this operation
 **/
exports.estimatesIdDELETE = function() {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Disable delivery
 * Disable delivery and recalculate the estimate.
 *
 * id String The id of estimate.
 * returns inline_response_200_6
 **/
exports.estimatesIdDeliveryDELETE = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "id" : "AS3423",
  "name" : "Name",
  "color" : "#ff0055",
  "price" : "800 kr",
  "modified" : "2017-01-12T15:46:58Z",
  "period" : {
    "start" : "2017-01-12T15:46:58Z",
    "finish" : "2017-01-12T15:46:58Z"
  },
  "assemblies" : [ {
    "id" : 123,
    "equipment" : {
      "article" : {
        "number" : "1234567890",
        "name" : "The Dumper",
        "description" : "Lorem imposum",
        "sraCode" : "211313"
      },
      "offer" : {
        "name" : "\"Hyra\"",
        "amount" : "123.45",
        "price" : "12345 kr / alldager",
        "unit" : "st"
      },
      "services" : {
        "article" : {
          "number" : "1234567890",
          "name" : "The Dumper",
          "description" : "Lorem imposum",
          "sraCode" : "211313"
        },
        "offer" : {
          "name" : "\"Hyra\"",
          "amount" : "123.45",
          "price" : "12345 kr / alldager",
          "unit" : "st"
        }
      },
      "order" : {
        "amount" : 1234.56,
        "discount" : 123,
        "price" : "1234567.89 kr"
      }
    },
    "accessories" : [ {
      "article" : {
        "number" : "1234567890",
        "name" : "The Dumper",
        "description" : "Lorem imposum",
        "sraCode" : "211313"
      },
      "offer" : {
        "name" : "\"Hyra\"",
        "amount" : "123.45",
        "price" : "12345 kr / alldager",
        "unit" : "st",
        "preSelected" : true
      },
      "services" : {
        "article" : {
          "number" : "1234567890",
          "name" : "The Dumper",
          "description" : "Lorem imposum",
          "sraCode" : "211313"
        },
        "offer" : {
          "name" : "\"Hyra\"",
          "amount" : "123.45",
          "price" : "12345 kr / alldager",
          "unit" : "st"
        }
      },
      "order" : {
        "amount" : 1234.56,
        "discount" : 123,
        "price" : "1234567.89 kr"
      }
    } ]
  } ],
  "discounts" : {
    "classes" : [ {
      "code" : "23",
      "name" : "Some name",
      "value" : 10
    } ],
    "categories" : [ {
      "code" : "23",
      "name" : "Some name",
      "value" : 10
    } ]
  },
  "insurance" : {
    "price" : "150 kr"
  },
  "delivery" : {
    "destination" : {
      "latitude" : "57.56236",
      "longitude" : "18.34526"
    },
    "fare" : {
      "price" : "150 kr"
    },
    "status" : "ESTIMATED",
    "message" : "A description of the status"
  }
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Enable delivery
 * Enable delivery and recalculate the estimate.
 *
 * id String The id of estimate.
 * body Location Base  (optional)
 * returns inline_response_200_6
 **/
exports.estimatesIdDeliveryPOST = function(id,body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "id" : "AS3423",
  "name" : "Name",
  "color" : "#ff0055",
  "price" : "800 kr",
  "modified" : "2017-01-12T15:46:58Z",
  "period" : {
    "start" : "2017-01-12T15:46:58Z",
    "finish" : "2017-01-12T15:46:58Z"
  },
  "assemblies" : [ {
    "id" : 123,
    "equipment" : {
      "article" : {
        "number" : "1234567890",
        "name" : "The Dumper",
        "description" : "Lorem imposum",
        "sraCode" : "211313"
      },
      "offer" : {
        "name" : "\"Hyra\"",
        "amount" : "123.45",
        "price" : "12345 kr / alldager",
        "unit" : "st"
      },
      "services" : {
        "article" : {
          "number" : "1234567890",
          "name" : "The Dumper",
          "description" : "Lorem imposum",
          "sraCode" : "211313"
        },
        "offer" : {
          "name" : "\"Hyra\"",
          "amount" : "123.45",
          "price" : "12345 kr / alldager",
          "unit" : "st"
        }
      },
      "order" : {
        "amount" : 1234.56,
        "discount" : 123,
        "price" : "1234567.89 kr"
      }
    },
    "accessories" : [ {
      "article" : {
        "number" : "1234567890",
        "name" : "The Dumper",
        "description" : "Lorem imposum",
        "sraCode" : "211313"
      },
      "offer" : {
        "name" : "\"Hyra\"",
        "amount" : "123.45",
        "price" : "12345 kr / alldager",
        "unit" : "st",
        "preSelected" : true
      },
      "services" : {
        "article" : {
          "number" : "1234567890",
          "name" : "The Dumper",
          "description" : "Lorem imposum",
          "sraCode" : "211313"
        },
        "offer" : {
          "name" : "\"Hyra\"",
          "amount" : "123.45",
          "price" : "12345 kr / alldager",
          "unit" : "st"
        }
      },
      "order" : {
        "amount" : 1234.56,
        "discount" : 123,
        "price" : "1234567.89 kr"
      }
    } ]
  } ],
  "discounts" : {
    "classes" : [ {
      "code" : "23",
      "name" : "Some name",
      "value" : 10
    } ],
    "categories" : [ {
      "code" : "23",
      "name" : "Some name",
      "value" : 10
    } ]
  },
  "insurance" : {
    "price" : "150 kr"
  },
  "delivery" : {
    "destination" : {
      "latitude" : "57.56236",
      "longitude" : "18.34526"
    },
    "fare" : {
      "price" : "150 kr"
    },
    "status" : "ESTIMATED",
    "message" : "A description of the status"
  }
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Set discounts
 * Write the passed object as is into estimate. And update the price.
 *
 * id String The id of estimate.
 * body Discounts Base  (optional)
 * returns inline_response_200_6
 **/
exports.estimatesIdDiscountsPOST = function(id,body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "id" : "AS3423",
  "name" : "Name",
  "color" : "#ff0055",
  "price" : "800 kr",
  "modified" : "2017-01-12T15:46:58Z",
  "period" : {
    "start" : "2017-01-12T15:46:58Z",
    "finish" : "2017-01-12T15:46:58Z"
  },
  "assemblies" : [ {
    "id" : 123,
    "equipment" : {
      "article" : {
        "number" : "1234567890",
        "name" : "The Dumper",
        "description" : "Lorem imposum",
        "sraCode" : "211313"
      },
      "offer" : {
        "name" : "\"Hyra\"",
        "amount" : "123.45",
        "price" : "12345 kr / alldager",
        "unit" : "st"
      },
      "services" : {
        "article" : {
          "number" : "1234567890",
          "name" : "The Dumper",
          "description" : "Lorem imposum",
          "sraCode" : "211313"
        },
        "offer" : {
          "name" : "\"Hyra\"",
          "amount" : "123.45",
          "price" : "12345 kr / alldager",
          "unit" : "st"
        }
      },
      "order" : {
        "amount" : 1234.56,
        "discount" : 123,
        "price" : "1234567.89 kr"
      }
    },
    "accessories" : [ {
      "article" : {
        "number" : "1234567890",
        "name" : "The Dumper",
        "description" : "Lorem imposum",
        "sraCode" : "211313"
      },
      "offer" : {
        "name" : "\"Hyra\"",
        "amount" : "123.45",
        "price" : "12345 kr / alldager",
        "unit" : "st",
        "preSelected" : true
      },
      "services" : {
        "article" : {
          "number" : "1234567890",
          "name" : "The Dumper",
          "description" : "Lorem imposum",
          "sraCode" : "211313"
        },
        "offer" : {
          "name" : "\"Hyra\"",
          "amount" : "123.45",
          "price" : "12345 kr / alldager",
          "unit" : "st"
        }
      },
      "order" : {
        "amount" : 1234.56,
        "discount" : 123,
        "price" : "1234567.89 kr"
      }
    } ]
  } ],
  "discounts" : {
    "classes" : [ {
      "code" : "23",
      "name" : "Some name",
      "value" : 10
    } ],
    "categories" : [ {
      "code" : "23",
      "name" : "Some name",
      "value" : 10
    } ]
  },
  "insurance" : {
    "price" : "150 kr"
  },
  "delivery" : {
    "destination" : {
      "latitude" : "57.56236",
      "longitude" : "18.34526"
    },
    "fare" : {
      "price" : "150 kr"
    },
    "status" : "ESTIMATED",
    "message" : "A description of the status"
  }
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get estimate
 * 
 *
 * returns inline_response_200_6
 **/
exports.estimatesIdGET = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "id" : "AS3423",
  "name" : "Name",
  "color" : "#ff0055",
  "price" : "800 kr",
  "modified" : "2017-01-12T15:46:58Z",
  "period" : {
    "start" : "2017-01-12T15:46:58Z",
    "finish" : "2017-01-12T15:46:58Z"
  },
  "assemblies" : [ {
    "id" : 123,
    "equipment" : {
      "article" : {
        "number" : "1234567890",
        "name" : "The Dumper",
        "description" : "Lorem imposum",
        "sraCode" : "211313"
      },
      "offer" : {
        "name" : "\"Hyra\"",
        "amount" : "123.45",
        "price" : "12345 kr / alldager",
        "unit" : "st"
      },
      "services" : {
        "article" : {
          "number" : "1234567890",
          "name" : "The Dumper",
          "description" : "Lorem imposum",
          "sraCode" : "211313"
        },
        "offer" : {
          "name" : "\"Hyra\"",
          "amount" : "123.45",
          "price" : "12345 kr / alldager",
          "unit" : "st"
        }
      },
      "order" : {
        "amount" : 1234.56,
        "discount" : 123,
        "price" : "1234567.89 kr"
      }
    },
    "accessories" : [ {
      "article" : {
        "number" : "1234567890",
        "name" : "The Dumper",
        "description" : "Lorem imposum",
        "sraCode" : "211313"
      },
      "offer" : {
        "name" : "\"Hyra\"",
        "amount" : "123.45",
        "price" : "12345 kr / alldager",
        "unit" : "st",
        "preSelected" : true
      },
      "services" : {
        "article" : {
          "number" : "1234567890",
          "name" : "The Dumper",
          "description" : "Lorem imposum",
          "sraCode" : "211313"
        },
        "offer" : {
          "name" : "\"Hyra\"",
          "amount" : "123.45",
          "price" : "12345 kr / alldager",
          "unit" : "st"
        }
      },
      "order" : {
        "amount" : 1234.56,
        "discount" : 123,
        "price" : "1234567.89 kr"
      }
    } ]
  } ],
  "discounts" : {
    "classes" : [ {
      "code" : "23",
      "name" : "Some name",
      "value" : 10
    } ],
    "categories" : [ {
      "code" : "23",
      "name" : "Some name",
      "value" : 10
    } ]
  },
  "insurance" : {
    "price" : "150 kr"
  },
  "delivery" : {
    "destination" : {
      "latitude" : "57.56236",
      "longitude" : "18.34526"
    },
    "fare" : {
      "price" : "150 kr"
    },
    "status" : "ESTIMATED",
    "message" : "A description of the status"
  }
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Disable Insurance
 * Disable insurance and recalculate the estimate.
 *
 * id String The id of estimate.
 * returns inline_response_200_6
 **/
exports.estimatesIdInsuranceDELETE = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "id" : "AS3423",
  "name" : "Name",
  "color" : "#ff0055",
  "price" : "800 kr",
  "modified" : "2017-01-12T15:46:58Z",
  "period" : {
    "start" : "2017-01-12T15:46:58Z",
    "finish" : "2017-01-12T15:46:58Z"
  },
  "assemblies" : [ {
    "id" : 123,
    "equipment" : {
      "article" : {
        "number" : "1234567890",
        "name" : "The Dumper",
        "description" : "Lorem imposum",
        "sraCode" : "211313"
      },
      "offer" : {
        "name" : "\"Hyra\"",
        "amount" : "123.45",
        "price" : "12345 kr / alldager",
        "unit" : "st"
      },
      "services" : {
        "article" : {
          "number" : "1234567890",
          "name" : "The Dumper",
          "description" : "Lorem imposum",
          "sraCode" : "211313"
        },
        "offer" : {
          "name" : "\"Hyra\"",
          "amount" : "123.45",
          "price" : "12345 kr / alldager",
          "unit" : "st"
        }
      },
      "order" : {
        "amount" : 1234.56,
        "discount" : 123,
        "price" : "1234567.89 kr"
      }
    },
    "accessories" : [ {
      "article" : {
        "number" : "1234567890",
        "name" : "The Dumper",
        "description" : "Lorem imposum",
        "sraCode" : "211313"
      },
      "offer" : {
        "name" : "\"Hyra\"",
        "amount" : "123.45",
        "price" : "12345 kr / alldager",
        "unit" : "st",
        "preSelected" : true
      },
      "services" : {
        "article" : {
          "number" : "1234567890",
          "name" : "The Dumper",
          "description" : "Lorem imposum",
          "sraCode" : "211313"
        },
        "offer" : {
          "name" : "\"Hyra\"",
          "amount" : "123.45",
          "price" : "12345 kr / alldager",
          "unit" : "st"
        }
      },
      "order" : {
        "amount" : 1234.56,
        "discount" : 123,
        "price" : "1234567.89 kr"
      }
    } ]
  } ],
  "discounts" : {
    "classes" : [ {
      "code" : "23",
      "name" : "Some name",
      "value" : 10
    } ],
    "categories" : [ {
      "code" : "23",
      "name" : "Some name",
      "value" : 10
    } ]
  },
  "insurance" : {
    "price" : "150 kr"
  },
  "delivery" : {
    "destination" : {
      "latitude" : "57.56236",
      "longitude" : "18.34526"
    },
    "fare" : {
      "price" : "150 kr"
    },
    "status" : "ESTIMATED",
    "message" : "A description of the status"
  }
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Enable insurance
 * Enable insurance and recalculate the estimate.
 *
 * id String The id of estimate.
 * returns inline_response_200_6
 **/
exports.estimatesIdInsurancePOST = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "id" : "AS3423",
  "name" : "Name",
  "color" : "#ff0055",
  "price" : "800 kr",
  "modified" : "2017-01-12T15:46:58Z",
  "period" : {
    "start" : "2017-01-12T15:46:58Z",
    "finish" : "2017-01-12T15:46:58Z"
  },
  "assemblies" : [ {
    "id" : 123,
    "equipment" : {
      "article" : {
        "number" : "1234567890",
        "name" : "The Dumper",
        "description" : "Lorem imposum",
        "sraCode" : "211313"
      },
      "offer" : {
        "name" : "\"Hyra\"",
        "amount" : "123.45",
        "price" : "12345 kr / alldager",
        "unit" : "st"
      },
      "services" : {
        "article" : {
          "number" : "1234567890",
          "name" : "The Dumper",
          "description" : "Lorem imposum",
          "sraCode" : "211313"
        },
        "offer" : {
          "name" : "\"Hyra\"",
          "amount" : "123.45",
          "price" : "12345 kr / alldager",
          "unit" : "st"
        }
      },
      "order" : {
        "amount" : 1234.56,
        "discount" : 123,
        "price" : "1234567.89 kr"
      }
    },
    "accessories" : [ {
      "article" : {
        "number" : "1234567890",
        "name" : "The Dumper",
        "description" : "Lorem imposum",
        "sraCode" : "211313"
      },
      "offer" : {
        "name" : "\"Hyra\"",
        "amount" : "123.45",
        "price" : "12345 kr / alldager",
        "unit" : "st",
        "preSelected" : true
      },
      "services" : {
        "article" : {
          "number" : "1234567890",
          "name" : "The Dumper",
          "description" : "Lorem imposum",
          "sraCode" : "211313"
        },
        "offer" : {
          "name" : "\"Hyra\"",
          "amount" : "123.45",
          "price" : "12345 kr / alldager",
          "unit" : "st"
        }
      },
      "order" : {
        "amount" : 1234.56,
        "discount" : 123,
        "price" : "1234567.89 kr"
      }
    } ]
  } ],
  "discounts" : {
    "classes" : [ {
      "code" : "23",
      "name" : "Some name",
      "value" : 10
    } ],
    "categories" : [ {
      "code" : "23",
      "name" : "Some name",
      "value" : 10
    } ]
  },
  "insurance" : {
    "price" : "150 kr"
  },
  "delivery" : {
    "destination" : {
      "latitude" : "57.56236",
      "longitude" : "18.34526"
    },
    "fare" : {
      "price" : "150 kr"
    },
    "status" : "ESTIMATED",
    "message" : "A description of the status"
  }
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get estimate as PDF
 * 
 *
 * no response value expected for this operation
 **/
exports.estimatesIdtypepdfGET = function() {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Create estimate
 * 
 *
 * template String The ID of the template to base the new estimate on (optional)
 * body Body  (optional)
 * returns inline_response_200_6
 **/
exports.estimatesPOST = function(template,body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "id" : "AS3423",
  "name" : "Name",
  "color" : "#ff0055",
  "price" : "800 kr",
  "modified" : "2017-01-12T15:46:58Z",
  "period" : {
    "start" : "2017-01-12T15:46:58Z",
    "finish" : "2017-01-12T15:46:58Z"
  },
  "assemblies" : [ {
    "id" : 123,
    "equipment" : {
      "article" : {
        "number" : "1234567890",
        "name" : "The Dumper",
        "description" : "Lorem imposum",
        "sraCode" : "211313"
      },
      "offer" : {
        "name" : "\"Hyra\"",
        "amount" : "123.45",
        "price" : "12345 kr / alldager",
        "unit" : "st"
      },
      "services" : {
        "article" : {
          "number" : "1234567890",
          "name" : "The Dumper",
          "description" : "Lorem imposum",
          "sraCode" : "211313"
        },
        "offer" : {
          "name" : "\"Hyra\"",
          "amount" : "123.45",
          "price" : "12345 kr / alldager",
          "unit" : "st"
        }
      },
      "order" : {
        "amount" : 1234.56,
        "discount" : 123,
        "price" : "1234567.89 kr"
      }
    },
    "accessories" : [ {
      "article" : {
        "number" : "1234567890",
        "name" : "The Dumper",
        "description" : "Lorem imposum",
        "sraCode" : "211313"
      },
      "offer" : {
        "name" : "\"Hyra\"",
        "amount" : "123.45",
        "price" : "12345 kr / alldager",
        "unit" : "st",
        "preSelected" : true
      },
      "services" : {
        "article" : {
          "number" : "1234567890",
          "name" : "The Dumper",
          "description" : "Lorem imposum",
          "sraCode" : "211313"
        },
        "offer" : {
          "name" : "\"Hyra\"",
          "amount" : "123.45",
          "price" : "12345 kr / alldager",
          "unit" : "st"
        }
      },
      "order" : {
        "amount" : 1234.56,
        "discount" : 123,
        "price" : "1234567.89 kr"
      }
    } ]
  } ],
  "discounts" : {
    "classes" : [ {
      "code" : "23",
      "name" : "Some name",
      "value" : 10
    } ],
    "categories" : [ {
      "code" : "23",
      "name" : "Some name",
      "value" : 10
    } ]
  },
  "insurance" : {
    "price" : "150 kr"
  },
  "delivery" : {
    "destination" : {
      "latitude" : "57.56236",
      "longitude" : "18.34526"
    },
    "fare" : {
      "price" : "150 kr"
    },
    "status" : "ESTIMATED",
    "message" : "A description of the status"
  }
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

