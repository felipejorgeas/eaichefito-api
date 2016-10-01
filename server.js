'use strict';

var express = require('express'),
        bodyParser = require('body-parser'),
        mongoose = require('mongoose'),
        request = require('request'),
        compression = require('compression'),
        bunyan = require('bunyan'),
        appData = require(__dirname + '/package.json'),
        utils = require(__dirname + '/lib/utils.js')(appData);

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://45.55.234.250/eaichefitodb');

var apiName = '/eaichefito/api';

var app = express();
var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function () {
    app.use(bodyParser.urlencoded({limit: '50mb', extended: false}));
    app.use(bodyParser.json({limit: '50mb'}));
    app.use(compression());
    app.use(express.static('public'));

    app.use(function (req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
        next();
    });

    var models = require(__dirname + '/models.js')(mongoose);
    var controllers = require(__dirname + '/controllers.js')(utils, models);
    require(__dirname + '/routes.js')(app, apiName, controllers);

    app.listen(2000, function () {
        var startMessage = utils.sprintf('E aí Chefito API v%s escutando na porta %s - %s', appData.version, 2000, (new Date()));
        console.log(startMessage);
    });
});