import Gameboard from "./Gameboard";
import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Homepage = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([{ gameType: "" }]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { state } = useLocation();

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch("http://localhost:7000/api/game");
        if (!response.ok) {
          throw new Error(
            `This is an HTTP error: The status is ${response.status}`
          );
        }
        let actualData = await response.json();
        setData(actualData);
        setError(null);
      } catch (err) {
        setError(err.message);
        setData(null);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, []);
  //////
  const [reload, setReLoad] = useState(1);
  function refresh() {
    setReLoad(Math.random());
  }
  console.log(state.gameMode);
  console.log(state.gameType);

  function backToHome() {
    navigate("/");
  }
  return (
    <div className="App">
      {loading ? (
        <div>Please wait.....</div>
      ) : (
        <>
          <div className="main-content">
            {loading && <div>Please wait.....</div>}
            {error && (
              <div>{`There is a problem fetching the post data ${error}`}</div>
            )}
            {data && (
              <div>
                <h1>{`welcome ${data[0].name}`}</h1>
              </div>
            )}
            <h2 className="">Level 1</h2>
            <div className="text-box"></div>
            <button className="refreshBtn" type="button" onClick={refresh}>
              Play again
            </button>
            &nbsp; &nbsp; &nbsp;
            <button className="refreshBtn" type="button" onClick={backToHome}>
              Back
            </button>
          </div>
          <Gameboard
            key={reload}
            moves={data[0].moves}
            gameType={state.gameType}
            gameMode={state.gameMode}
          />
        </>
      )}
    </div>
  );
};

export default Homepage;
