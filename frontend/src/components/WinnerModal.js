import React from "react";

import { useNavigate } from "react-router-dom";

const WinnerModal = (props) => {
  const navigate = useNavigate();
  // const [playAgain, setPlayAgain] = useState(false);
  function refreshPage() {
    navigate("/");
  }
  function againPlay() {
    navigate("/tiles");
  }

  return (
    <>
      <div className="centered">
        <div className="modal">
          {/* <div className="modalHeader"></div> */}
          {/* <div class="close" onClick={() => setIsOpenModal(false)}></div> */}
          {/* <button className="modalBtn" onClick={() => setIsOpenModal(false)}>
            <RiCloseLine />
          </button> */}
          <div>
            <div className="winContent">
              <h4>You won the game successfully...</h4>
              <p>Total Clicks = {props.moves}</p>
              <p>Total Score = {props.score}</p>

              <h4> Do you want to play again with different tiles?</h4>
            </div>
            <div className="modalActions">
              <div className="actionsContainer">
                <button className="cancelBtn" onClick={againPlay}>
                  Yes
                </button>

                <button className="okBtn" onClick={refreshPage}>
                  Back
                </button>
                {/* <button onClick={() => click("view1")}>Go to view 1</button> */}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* {playAgain && <PlayModal nmbr={1} />} */}
    </>
  );
};

export default WinnerModal;
