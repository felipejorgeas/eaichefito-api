module.exports = function (mongoose) {
    var models = {};
    models.Recipe = require(__dirname + '/models/recipe-model.js')(mongoose);
    models.Tester = require(__dirname + '/models/tester-model.js')(mongoose);
    models.Prospect = require(__dirname + '/models/prospect-model.js')(mongoose);
    models.Device = require(__dirname + '/models/device-model.js')(mongoose);
    models.Order = require(__dirname + '/models/order-model.js')(mongoose);
    return models;
};
