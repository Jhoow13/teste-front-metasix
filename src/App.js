import React from "react";

import "./App.css";
import Navbar from "./components/navbar/";
import Menu from "./components/menu/";
import Perguntas from "./components/perguntas/";

function App() {
  return (
    <div className="container">
      <Navbar></Navbar>
      <Menu></Menu>
      <Perguntas></Perguntas>
    </div>
  );
}

export default App;
