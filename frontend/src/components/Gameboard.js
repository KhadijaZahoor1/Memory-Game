import { useState, useEffect } from "react";
import getImages from "../Images";
import { shuffle } from "lodash";
import questionIcon from "../assets/images/s3.png";
import WinnerModal from "./WinnerModal";
import FailedModal from "./FailedModal";

const GameBoard = (props) => {
  const [cards, setCards] = useState(
    shuffle([
      ...getImages(props.gameType / 2),
      ...getImages(props.gameType / 2),
    ])
  );
  const [clicks, setClicks] = useState(0); // count everyclicks when user click on cards
  const [strict, setStrict] = useState(30); /// strict clicks for user
  const [won, setWon] = useState(false);
  const [activeCards, setActiveCards] = useState([]); // save and match index value of matching card
  const [matchCard, setmatchCard] = useState([]); // match same card

  useEffect(() => {
    if (won === true) {
      gameRecord();
    }
  }, [won]);

  console.log(props.gameMode);
  console.log(props.gameType);

  const gameRecord = async () => {
    await fetch("http://localhost:5000/api/game/moves/", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ moves: clicks, score: matchCard }),
    })
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  /////// function where i compare tiles, match tiles, set clicks and set mode etc

  function flipCard(index) {
    if (won) {
      setCards(
        shuffle([
          ...getImages(props.gameType / 2),
          ...getImages(props.gameType / 2),
        ])
      );
      setmatchCard([]);
      setWon(false);
      setClicks(0);
      setStrict(30);
    }
    if (activeCards.length === 0) {
      setActiveCards([index]);
    }
    if (activeCards.length === 1) {
      const cardOne = activeCards[0];
      const cardTwo = index;
      if (cards[cardOne] === cards[cardTwo]) {
        if (matchCard.length + 2 === cards.length) {
          setWon(true);
        }
        setmatchCard([...matchCard, cardOne, cardTwo]);
      }
      setActiveCards([...activeCards, index]);
    }
    if (activeCards.length === 2) {
      setActiveCards([index]);
    }
    setClicks(clicks + 1);
    setStrict(strict - 1);
  }

  return (
    <div className="gameBoard">
      {/* section game card */}
      {props.gameType && (
        <div
          className={
            props.gameType == 12
              ? "board"
              : props.gameType == 16
              ? "board2"
              : "board3"
          }
        >
          {cards.map((card, index) => {
            const flippedToFront =
              activeCards.indexOf(index) !== -1 ||
              matchCard.indexOf(index) !== -1;
            return (
              <div
                className={"card-outer " + (flippedToFront ? "flipped" : "")}
                onClick={() => flipCard(index)}
                key={index}
              >
                <div className="card">
                  <div className="front">
                    <img src={card} alt="front-card" />
                  </div>
                  <div className="back">
                    <img src={questionIcon} alt="" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
      {/* section result */}
      <div className="result">
        {won && <WinnerModal moves={clicks} score={matchCard.length / 2} />}
        <div className="status">
          {props.gameMode === "Free" && <div>Clicks: {clicks}</div>}
          {props.gameMode === "Strict" && <div>Clicks: {strict}</div>}
          {props.gameMode === "Strict" && strict === 0 && <FailedModal />}
          <div>Found pairs: {matchCard.length / 2}</div>
        </div>
      </div>
      <div className="modeText">Playing mode: {props.gameMode}</div>
    </div>
  );
};

export default GameBoard;
