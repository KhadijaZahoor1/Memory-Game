import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const TilesModal = ({ handleClick, setIsOpenModal }) => {
  const [showHome, setShowHome] = useState(false);
  const [gameType, setGameType] = useState(0);
  const [gameMode, setGameMode] = useState("");
  const navigate = useNavigate();

  const typeUpdate = (event) => {
    setGameType(event.target.value);
    console.log(event.target.value);
  };
  const modeUpdate = (event) => {
    setGameMode(event.target.value);
    console.log(event.target.value);
  };

  function handleSubmit(e) {
    e.preventDefault();
    setShowHome(true);
    //    handleClick();
  }
  function handleNext() {
    navigate("/homepage", {
      state: { gameType: gameType, gameMode: gameMode },
    });
  }
  console.log(showHome);
  return (
    <>
      <div className="App">
        <div className="centered">
          {" "}
          {!showHome && (
            <form className="modal" onSubmit={handleSubmit}>
              <div className="modalHeader">Enter the details below</div>
              <div
                className="close"
                onClick={() => setIsOpenModal(false)}
              ></div>
              <div className="modalContent">
                <select className="" onChange={typeUpdate}>
                  <option className="">-- select Tiles --</option>
                  <option className="">12</option>
                  <option className="">16</option>
                  <option className="">20</option>
                </select>

                <div onChange={modeUpdate}>
                  <input type="radio" value="Free" /> <label>Free mode </label>
                  <input type="radio" value="Strict" />{" "}
                  <label>Strict mode</label>
                </div>
              </div>
              <div className="modalActions">
                <div className="actionsContainer">
                  <button className="okBtn" type="button" onClick={handleNext}>
                    Next
                  </button>
                </div>
              </div>
            </form>
          )}
        </div>
      </div>

      {/* {showHome && <Homepage gameType={gameType} gameMode={gameMode} />} */}
    </>
  );
};

export default TilesModal;
