const mongoose = require("mongoose");

/// game schema
const gameSchema = new mongoose.Schema({
  name: {
    type: String,
    minlength: 5,
    maclength: 50,
    require: [true, "Please enter your name"],
  },
  age: {
    type: Number,
    require: [true, "Please enter your age"],
  },
  // gameType: {
  //   type: Number,
  //   require: true,
  // },
  // gameMode: {
  //   type: String,
  //   require: [true, "Please enter your game mode"],
  // },
});

const Game = mongoose.model("Game", gameSchema);
module.exports = Game;

//module.exports = mongoose.model("Game", gameSchema);

//// game schema against each user
// const gamesSchema = mongoose.Schema({
//   gameType: {
//     type: String,
//     required: [true, "Please enter your tiles"],
//   },
//   gameMode: {
//     value1: { type: Boolean, require: true, default: true },
//     value2: { type: Boolean, require: true, default: true },
//   },
//   user: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
// });

// module.exports = mongoose.model("Games", gamesSchema);
