module.exports = function (mongoose) {
    var testerSchema = mongoose.Schema({
        fbid: String,
        name: String,
        first_name: String,
        last_name: String,
        email: String
    });
    var Tester = mongoose.model('Tester', testerSchema);
    return Tester;
};