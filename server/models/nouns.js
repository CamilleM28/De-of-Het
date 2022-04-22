const mongoose = require("mongoose");
const { Schema } = mongoose;

const nounSchema = new Schema({
  _id: Number,
  noun: String,
  article: String,
  image: String,
  category: String,
});

mongoose.model("nouns", nounSchema);
