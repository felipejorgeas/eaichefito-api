module.exports = function (utils, models) {
    var controllers = {};
    controllers.Recipe = require(__dirname + '/controllers/recipe-controller.js')(utils, models);
    controllers.Tester = require(__dirname + '/controllers/tester-controller.js')(utils, models);
    controllers.Prospect = require(__dirname + '/controllers/prospect-controller.js')(utils, models);
    return controllers;
};