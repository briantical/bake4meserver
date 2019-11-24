const mongoose = require("mongoose");
const { schema } = require("./schema");

const Cart = mongoose.model("Cart", schema);
module.exports = { Cart };
