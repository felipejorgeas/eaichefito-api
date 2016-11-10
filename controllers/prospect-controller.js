module.exports = function (utils, models) {
    var Prospect = {
        save: function (req, res) {
            utils.startTimeResponse();
            try {
                var email = req.body;
                if (email.length) {
                    models.Prospect.update({ email: email }, {email: email}, { upsert: true }, function (err, result) {
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
    return Prospect;
};
