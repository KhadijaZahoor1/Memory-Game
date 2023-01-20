import React from "react";
import { useState } from "react";
import PlayModal from "./PlayModal";

const Welcome = (props) => {
  const [heading, setHeading] = useState(true);
  const [isOpenModal, setIsOpenModal] = useState(false);

  function handleClick() {
    setHeading(false);
  }
  return (
    <>
      <div className="App">
        <div className="app-content">
          {heading && (
            <div>
              <h1 className="waviy">
                <span className="sup">Welcome to</span> <br />
                <span className="animate-charcter">Brain Boxes</span>
              </h1>
              <div className="wrap">
                <button
                  className="play-btn"
                  onClick={() => setIsOpenModal(true)}
                >
                  Play
                </button>
              </div>
            </div>
          )}

          {isOpenModal && (
            <PlayModal
              setIsOpenModal={setIsOpenModal}
              handleClick={handleClick}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default Welcome;
