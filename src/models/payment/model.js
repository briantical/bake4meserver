const mongoose = require("mongoose");
const { schema } = require("./schema");

const Payment = mongoose.model("Payment", schema);
module.exports = { Payment };
