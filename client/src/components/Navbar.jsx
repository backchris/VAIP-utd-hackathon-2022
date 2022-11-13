import React from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import logo from "../styling/caiplogo.jpg";
import "../styling/Navbar.css";

function Navbar() {
  return (
    <div className="caip__navbar">
      <div className="caip__navbar-links">
        <div className="caip__navbar-links_logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="caip__navbar-links_container">
          <p>
            <a href="#user">Hello, Jane Doe</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
