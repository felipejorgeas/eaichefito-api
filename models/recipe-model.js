module.exports = function (mongoose) {
    var recipeSchema = mongoose.Schema({
        partner: String,
        id_ext: Number,
        title: String,
        time: String,
        image: String,
        rating: Number,
        tags: [],
        ingredients: [
            {
                title: String,
                items: []
            }
        ],
        prepare: [
            {
                title: String,
                items: []
            }
        ]
    });
    var Recipe = mongoose.model('Recipe', recipeSchema);
    return Recipe;
};