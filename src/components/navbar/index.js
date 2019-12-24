import React from "react";
import "./styles.css";

import logo from "../../assets/logo.png";

export default function Navbar() {
  return (
    <>
      <nav>
        <img src={logo} alt="" />
        <div className="links">
          <div className="modulos">
            <i className="fa fa-lg fa-th"></i>
            <p>Módulos</p>
          </div>
          <div className="logout">
            <i className="fa fa-lg fa-sign-out-alt"></i>
            <p>Log Out</p>
          </div>
        </div>
      </nav>
    </>
  );
}
