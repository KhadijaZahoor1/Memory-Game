const express = require("express");
const router = express.Router();
const Joi = require("joi");
const Game = require("../models/gameModel");
const Moves = require("../models/movesModal");

//// get req for moves
router.get("/moves", async (req, res) => {
  const movesInfo = await Moves.find().sort({ _id: -1 }).limit(1);
  res.status(200).send(movesInfo);
});
/// get req
router.get("/", async (req, res) => {
  const info = await Game.find().sort({ _id: -1 }).limit(1);
  res.status(200).send(info);
});

////// HTTP post req for moves
router.post("/moves", async (req, res) => {
  console.log(req.body);
  const moves = new Moves({
    moves: req.body.moves,
    score: req.body.score,
  });
  console.log(moves);
  await moves.save();
  res.status(200).send(moves);
});

/////// HTTP post req
router.post("/", async (req, res) => {
  console.log(req.body);
  const { error } = validationGame(req.body);
  if (error) return res.status(404).send(error.details[0].message);

  let game = new Game({
    name: req.body.name,
    age: req.body.age,
    // gameType: req.body.gameType,
    // gameMode: req.body.gameMode,
  });

  await game.save();
  res.status(200).send(game);
});

function validationGame(game) {
  const Schema = Joi.object({
    name: Joi.string().min(5).max(50).required(),
    age: Joi.number().min(5).max(100).required("Must be greater than 5"),
    // gameType: Joi.number().required(),
    // gameMode: Joi.string().required(),
  });

  return Schema.validate(game);
}
module.exports = router;
