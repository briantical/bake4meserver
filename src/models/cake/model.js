const mongoose = require("mongoose");
const { schema } = require("./schema");

const Cake = mongoose.model("Cake", schema);
module.exports = { Cake };
