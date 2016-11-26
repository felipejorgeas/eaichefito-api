module.exports = function (app, apiName, controllers) {
    app.post(apiName + '/device', controllers.Device.save);
};
