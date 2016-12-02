module.exports = function (utils, models, gcm) {
    var Order = {
        find: function (req, res) {
            utils.startTimeResponse();
            models.Order.find({}).sort('-date').exec(function (err, result) {
                if (err) {
                    return res.status(500).send(utils.setResponseError(err));
                }
                return res.send(utils.setResponseSuccess(result));
            });
        },
        save: function (req, res) {
            utils.startTimeResponse();
            try {
                var order = req.body;
                if (order.info.length || order.psid.length) {
                    order.date = new Date();
                    models.Order.update({info: order.info}, order, {upsert: true}, function (err, result) {
                        if (err) {
                            return res.status(500).send(utils.setResponseError(err));
                        }
                        models.Device.find({}).exec(function (err, regTokens) {
                            if (err) {
                                //return res.status(500).send(utils.setResponseError(err));
                            }
                            if(regTokens.length){
                                regTokens = regTokens.map(function(device){
                                    return device.token;
                                });
                                var message = new gcm.Message({
                                    delayWhileIdle: true,
                                    timeToLive: 10
                                });

                                message.addData('title', 'E aí, Chefito?');
                                message.addData('message', 'Novo pedido! ' + order.info);
                                message.addData('ledColor', [255, 255, 255, 255]);
                                message.addData('style', 'inbox');
                                message.addData('summaryText', '%n% pedidos');

                                var sender = new gcm.Sender('AIzaSyBvD0V37_zIM-BAvrgoiZvt9SNnU8tlWgw');

                                console.log(message, regTokens);

                                sender.send(message, { registrationTokens: regTokens }, function (err, response) {
                                    if(err) {
                                        console.error(err);
                                    }else{
                                        console.log(response);
                                    }
                                    return res.send(utils.setResponseSuccess(result));
                                });
                            }else {
                                return res.send(utils.setResponseSuccess(result));
                            }
                        });
                    });
                } else {
                    return res.status(400).send(utils.setResponseError({error: 'Requisição com dados inválidos'}));
                }
            } catch (ex) {
                return res.status(400).send(utils.setResponseError({error: 'Requisição com dados inválidos'}));
            }
        }
    };
    return Order;
};
