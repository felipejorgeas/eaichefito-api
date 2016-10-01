module.exports = function (models) {
    var controllers = {};
    controllers.Recipe = require(__dirname + '/controllers/recipe-controller.js')(models);
    return controllers;
};