import logo from "./logo.svg";
import "./App.css";
import React from "react";
import ReactDOM from 'react-dom'
import About from '../src/About'
import Home from "./Home";
import Contact from "./Contact";

function App() {
  return (
    <div>
      <h1>Sarang</h1>
      <About />
      <Home />
      <Contact />
    </div>
  );
}

export default App;
