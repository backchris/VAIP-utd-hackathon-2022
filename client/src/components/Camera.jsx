import React from "react";
import "../styling/Camera.css";

function Camera() {
  return (
    <div className="Camera">
      <div className="camera-box">Hi</div>
      <div>
        <form id="form-add" onSubmit={(e) => hello(e)}>
          <label htmlFor="name-input">Name: </label>
          <input name="name" id="name-input"></input>

          <label htmlFor="temperature-input">Temperature: </label>
          <input
            name="temperature"
            id="temperature-input"
            type="number"
          ></input>

          <label htmlFor="fan-input">Fan Speed: </label>
          <input name="fan" id="fan-input" type="number"></input>

          <button></button>
        </form>
      </div>
    </div>
  );
}

export default Camera;
