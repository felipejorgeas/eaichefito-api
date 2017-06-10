module.exports = function (utils, models) {
    var Recipe = {
        find: function (req, res) {
            utils.startTimeResponse();
            var search = req.query.search.replace(/  /g, ' ').split(" ");
            var separated = req.query.separated;
            var rand = req.query.rand;
            var limit = req.query.limit;
            if (separated) {
                var where = {
                    $or: [
                        {
                            $text: {
                                $search: search.join(' ')
                            }
                        },
                        {
                            title: search.join(' ')
                        }
                    ]
                };
            } else {
                var where = {
                    $or: [
                        {
                            $text: {
                                $search: '\"' + search.join('\" \"') + '\"'
                            }
                        },
                        {
                            title: search.join(' ')
                        }
                    ]
                };
            }
            var random = 0;
            if (rand) {
                random = Math.floor(Math.random() * 2);
            }
            var score = {
                score: {
                    $meta: "textScore"
                }
            };
            var sort = score;
            models.Recipe.find(where, score).sort(sort).skip(random).limit(limit).select('_id title image time ingredients').exec(function (err, result) {
                if (err) {
                    return res.status(500).send(utils.setResponseError(err));
                }
                if (result.length) {
                    result = Recipe.formatRecipesSearch(result, search);
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
                    return res.status(400).send(utils.setResponseError({ error: 'Requisição com dados inválidos' }));
                }
            } catch (ex) {
                return res.status(400).send(utils.setResponseError({ error: 'Requisição com dados inválidos' }));
            }
        },
        formatRecipesSearch: function (result, search) {
            function compare(a, b) {
                if (a.diff.length < b.diff.length) {
                    return -1;
                }
                if (a.diff.length > b.diff.length) {
                    return 1;
                }
                return 0;
            }
            var resultOk = [];
            result.forEach(function (recipe) {
                var diff = [];
                recipe.ingredients.forEach(function (list) {
                    diff = diff.concat(utils.diffItems(list.items, search));
                });
                var recipeOk = {
                    _id: recipe._id,
                    title: recipe.title,
                    time: recipe.time,
                    image: recipe.image,
                    diff: diff
                };
                resultOk.push(recipeOk);
            });
            resultOk.sort(compare);
            return resultOk;
        }
    };
    return Recipe;
};
