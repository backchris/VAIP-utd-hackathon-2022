import React, { useState } from "react";
import "../styling/Sliders.css";

function Sliders() {
  const slider = () => {
    var value = ((this.value - this.min) / (this.max - this.min)) * 100;
    output.innerHTML = this.value;
  };

  const [range, setRange] = useState(60);

  const onSlide = (e) => {
    const value =
      ((e.target.value - e.target.min) / (e.target.max - e.target.min)) * 100 +
      parseInt(e.target.min);
    console.log(
      (e.target.value - e.target.min) / (e.target.max - e.target.min)
    );
    setRange(parseInt(value));
  };

  return (
    <div>
      <div className="tempslider-container">
        <h1>Temperature</h1>
        <div className="value-container">
          <span id="demo">{range} Fahrenheit</span>
        </div>
        <input
          type="range"
          min="60"
          max="80"
          value={range}
          className="tempslider"
          id="myRange"
          onChange={onSlide}
        />
      </div>
      <div className="speed-container">
        <input
          type="range"
          min="0"
          max="5"
          value="0"
          className="speedslider"
          id="fader"
          step="1"
          list="fanspeed"
        />
        <datalist id="fanspeed">
          <option>0</option>
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </datalist>
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
