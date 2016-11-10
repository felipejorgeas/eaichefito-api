module.exports = function (mongoose) {
    var prospectSchema = mongoose.Schema({
        email: String
    });
    var Prospect = mongoose.model('Tester', prospectSchema);
    return Prospect;
};