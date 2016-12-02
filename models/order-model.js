module.exports = function (mongoose) {
    var orderSchema = mongoose.Schema({
        info: String,
	psid: String,
        date: String
    });
    var Order = mongoose.model('Order', orderSchema);
    return Order;
};
