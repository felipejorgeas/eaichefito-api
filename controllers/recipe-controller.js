module.exports = function (utils, models) {
    var Recipe = {
        find: function (req, res) {
            utils.startTimeResponse();
            var search = req.query.search.split(" ");
            var where = {
                $text: {
                    $search: '\"' + search.join('\" \"') + '\"'
                }
            };
            var score = {
                score: {
                    $meta: "textScore"
                }
            };
            var sort = score;
            models.Recipe.find(where, score).sort(sort).select('_id title image time').exec(function (err, result) {
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