module.exports = function (models) {
    var Recipe = {
        find: function (req, res) {
            models.Recipe.find({}, function (err, result) {
                if (err) {
                    return res.send(err);
                }
                return res.send(result);
            });
        },
        save: function (req, res) {
            var recipes = req.body;
            try {
                if (recipes.length) {
                    models.Recipe.insertMany(recipes, function (err, result) {
                        if (err) {
                            return res.send(err);
                        }
                        return res.send(result);
                    });
                }
            } catch (ex) {
                return res.status(400).send({error: 'Requisição com dados inválidos'});
            }
        }
    };
    return Recipe;
};