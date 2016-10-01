module.exports = function (mongoose) {
    var models = {};
    models.Recipe = require(__dirname + '/models/recipe-model.js')(mongoose);
    return models;
};