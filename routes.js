module.exports = function (app, apiName, controllers) {
    require(__dirname + '/routes/recipe-route.js')(app, apiName, controllers);
};