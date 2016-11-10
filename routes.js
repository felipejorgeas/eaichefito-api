module.exports = function (app, apiName, controllers) {
    require(__dirname + '/routes/recipe-route.js')(app, apiName, controllers);
    require(__dirname + '/routes/tester-route.js')(app, apiName, controllers);
    require(__dirname + '/routes/prospect-route.js')(app, apiName, controllers);
};