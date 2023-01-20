const mongoose = require("mongoose");

// moves schema against user
const movesSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "Game" },
  moves: {
    type: Number,
    require: true,
  },
  score: {
    type: Number,
    require: true,
  },
});

const Moves = mongoose.model("Moves", movesSchema);

module.exports = Moves;
