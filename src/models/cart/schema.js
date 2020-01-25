const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const schema = new Schema({
  items: {
    type: [Object]
  }
});

module.exports = { schema };
