const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  product: {
    type: String,
    required: [true, "A order should have product name"],
  },
  quantity: {
    type: Number,
    default: 1,
  },
  company: {
    type: String,
    required: [true, "Please specify the company name"],
  },
});
const Order = mongoose.model("Orders", orderSchema);
module.exports = Order;
