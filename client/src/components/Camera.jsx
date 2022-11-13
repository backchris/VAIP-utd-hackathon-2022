import React, { useState } from "react";
import "../styling/Camera.css";

function Camera() {
  const [name, setName] = useState("friend");

  const handleSubmit = (e) => {
    e.preventDefault();

    setName(e.target.value);
  };

  const handleTrain = (e) => {
    e.preventDefault();
  };

  return (
    <div className="Camera">
      <img src="http://localhost:5000/video_feed" alt="Video" />
      <div>
        Hi, {name}!
        <form onSubmit={handleSubmit}>
          <input value={name}></input>
          <button>Submit name</button>
        </form>
        <button onClick={handleTrain}>Train AI</button>
      </div>
    </div>
  );
}

export default Camera;
