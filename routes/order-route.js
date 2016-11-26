module.exports = function (app, apiName, controllers) {
    app.get(apiName + '/order',  controllers.Order.find);
    app.post(apiName + '/order',  controllers.Order.save);
};
