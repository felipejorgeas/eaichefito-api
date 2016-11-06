module.exports = function (utils, models) {
    var Recipe = {
        find: function (req, res) {
            utils.startTimeResponse();
            models.Recipe.find({}, '_id title image time', function (err, result) {
                if (err) {
                    return res.status(500).send(utils.setResponseError(err));
                }
                return res.send(utils.setResponseSuccess(result));
            });
        },
        findById: function (req, res) {
            utils.startTimeResponse();
            var recipe_id = req.params.id;
            models.Recipe.findById(recipe_id, function (err, result) {
                if (err) {
                    return res.status(500).send(utils.setResponseError(err));
                }
                return res.send(utils.setResponseSuccess(result));
            });
        },
        save: function (req, res) {
            utils.startTimeResponse();
            try {
                var recipes = req.body.recipes;
                if (recipes.length) {
                    models.Recipe.insertMany(recipes, function (err, result) {
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
    return Recipe;
};