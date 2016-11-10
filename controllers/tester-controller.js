module.exports = function (utils, models) {
    var Tester = {
        save: function (req, res) {
            utils.startTimeResponse();
            try {
                var tester = req.body.tester;
                if (tester.fbid) {
                    models.Tester.insert(tester, function (err, result) {
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
    return Tester;
};