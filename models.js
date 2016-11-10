module.exports = function (mongoose) {
    var models = {};
    models.Recipe = require(__dirname + '/models/recipe-model.js')(mongoose);
    models.Tester = require(__dirname + '/models/tester-model.js')(mongoose);
    return models;
};