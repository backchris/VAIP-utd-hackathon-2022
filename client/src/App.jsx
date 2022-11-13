import React from "react";
import "./styling/App.css";
import Navbar from "./components/Navbar";
import Camera from "./components/Camera";
import Sliders from "./components/Sliders";

function App() {
  return (
    <div className="App">
      {/* <Navbar />
      <div className="Main">
        <Camera />
        <Sliders />
      </div> */}
      <Sliders />
    </div>
  );
}

export default App;
