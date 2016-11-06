module.exports = function (app, apiName, controllers) {
    app.get(apiName + '/recipe', controllers.Recipe.find);
    
    app.get(apiName + '/recipe/:id', controllers.Recipe.findById);
    
    app.post(apiName + '/recipe', controllers.Recipe.save);
};