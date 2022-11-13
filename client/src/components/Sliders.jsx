import React, { useState } from "react";
import "../styling/Sliders.css";

function Sliders() {
  const slider = () => {
    var value = ((this.value - this.min) / (this.max - this.min)) * 100;
    output.innerHTML = this.value;
  };

  const [temperature, setTemperature] = useState(60);
  const [fan, setFan] = useState(1);

  const onSlide = (e) => {
    const value =
      ((e.target.value - e.target.min) / (e.target.max - e.target.min)) *
        (e.target.max - e.target.min) +
      parseInt(e.target.min);
    console.log(
      (e.target.value - e.target.min) / (e.target.max - e.target.min)
    );

    if (e.target.id === "myRange") setTemperature(parseInt(value));
    else if (e.target.id === "fader") setFan(parseInt(value));
  };

  return (
    <div className="Sliders">
      <div className="tempslider-container">
        <h1>Temperature</h1>
        <div className="value-container">
          <span id="demo">{temperature} Fahrenheit</span>
        </div>
        <input
          type="range"
          min="60"
          max="80"
          value={temperature}
          className="tempslider"
          id="myRange"
          onChange={onSlide}
        />
      </div>
      <div className="speed-container">
        <h1>Fan Speed</h1>
        <div className="value-container">
          <span id="demo">Power Level: {fan}</span>
        </div>
        <input
          type="range"
          min="1"
          max="5"
          value={fan}
          className="speedslider"
          id="fader"
          onChange={onSlide}
        />
      </div>
      <div>
        <label className="switch">
          <input type="checkbox" />
          <span className="slider2"></span>
        </label>
      </div>
    </div>
  );
}

export default Sliders;
