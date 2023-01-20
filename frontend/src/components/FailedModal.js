import React from "react";
import { useNavigate } from "react-router-dom";

const FailedModal = (props) => {
  // const navigate = useNavigate();
  // function backToHome() {
  //   navigate("/");
  // }
  return (
    <>
      <div className="centered">
        <form className="modal">
          <div className="modalHeader"></div>
          {/* <div class="close" onClick={() => setIsOpenModal(false)}></div> */}
          {/* <button className="modalBtn" onClick={() => setIsOpenModal(false)}>
            <RiCloseLine />
          </button> */}
          <div>
            <div className="modalContent">
              <h4>
                Oops, game over <br />
                you lose...
              </h4>
              <p>Total Clicks= {props.moves}</p>
            </div>
            <div className="modalActions">
              <div className="actionsContainer">
                {/* <button
                    className="cancelBtn"
                    onClick={() => setIsOpenModal(false)}
                  >
                    Cancel
                  </button> */}
                <button className="okBtn">Back</button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default FailedModal;
