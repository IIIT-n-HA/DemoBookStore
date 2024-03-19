const mongo = require("mongoose");

const bookSchema = mongo.Schema({
  title: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  publisher: {
    type: String,
    required: true,
  },
});

module.exports = mongo.model("book", bookSchema);
