module.exports = function (app, apiName, controllers) {
    app.post(apiName + '/tester', controllers.Tester.save);
};