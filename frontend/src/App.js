import "./App.css";
import "./style.css";
import Welcome from "./components/Welcome";
import { Routes, Route } from "react-router-dom";
import Homepage from "./components/Homepage";
import TilesModal from "./components/TilesModal";
//import WinnerModal from "./components/WinnerModal";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Welcome />}></Route>
        <Route path="/tiles" element={<TilesModal />}></Route>
        <Route path="/homepage" element={<Homepage />}></Route>
      </Routes>
    </>
  );
}

export default App;
