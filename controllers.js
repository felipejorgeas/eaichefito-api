module.exports = function (utils, models, gcm) {
    var controllers = {};
    controllers.Recipe = require(__dirname + '/controllers/recipe-controller.js')(utils, models);
    controllers.Tester = require(__dirname + '/controllers/tester-controller.js')(utils, models);
    controllers.Prospect = require(__dirname + '/controllers/prospect-controller.js')(utils, models);
    controllers.Device = require(__dirname + '/controllers/device-controller.js')(utils, models);
    controllers.Order = require(__dirname + '/controllers/order-controller.js')(utils, models, gcm);
    return controllers;
};
