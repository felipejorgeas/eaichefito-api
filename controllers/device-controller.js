module.exports = function (utils, models) {
    var Device = {
        save: function (req, res) {
            utils.startTimeResponse();
            try {
                var device = req.body;
                if (device.token.length) {
                    models.Device.update({token: device.token}, device, {upsert: true}, function (err, result) {
                        if (err) {
                            return res.status(500).send(utils.setResponseError(err));
                        }
                        return res.send(utils.setResponseSuccess(result));
                    });
                } else {
                    return res.status(400).send(utils.setResponseError({error: 'Requisição com dados inválidos'}));
                }
            } catch (ex) {
                return res.status(400).send(utils.setResponseError({error: 'Requisição com dados inválidos'}));
            }
        }
    };
    return Device;
};
