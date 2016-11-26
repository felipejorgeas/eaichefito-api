module.exports = function (app, apiName, controllers) {
    app.post(apiName + '/order',  controllers.Order.save);
};
