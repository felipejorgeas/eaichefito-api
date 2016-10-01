module.exports = function (app, apiName, controllers) {
    app.get(apiName + '/recipe', controllers.Recipe.find);
    app.post(apiName + '/recipe', controllers.Recipe.save);
};