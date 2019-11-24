const mongoose = require("mongoose");
const { schema } = require("./schema");

const Category = mongoose.model("Category", schema);
module.exports = { Category };
