module.exports = function (app, apiName, controllers) {
    app.post(apiName + '/prospect', controllers.Prospect.save);
};