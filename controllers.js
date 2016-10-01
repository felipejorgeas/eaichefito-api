module.exports = function (utils, models) {
    var controllers = {};
    controllers.Recipe = require(__dirname + '/controllers/recipe-controller.js')(utils, models);
    return controllers;
};