module.exports = function (mongoose) {
    var deviceSchema = mongoose.Schema({
        token: String
    });
    var Device = mongoose.model('Device', deviceSchema);
    return Device;
};
