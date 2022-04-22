const mongoose = require("mongoose");
const { Schema } = mongoose;

const profileSchema = new Schema({
  username: String,
  password: String,
  favourites: Array,
  scores: {
    food: { type: Number, default: 0 },
    travel: { type: Number, default: 0 },
    animals: { type: Number, default: 0 },
    people: { type: Number, default: 0 },
  },
  failed: Array,
});

mongoose.model("profiles", profileSchema);
