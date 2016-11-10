module.exports = function (mongoose) {
    var prospectSchema = mongoose.Schema({
        email: String
    });
    var Prospect = mongoose.model('Prospect', prospectSchema);
    return Prospect;
};