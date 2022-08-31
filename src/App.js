import React, {useState, useEffect, createContext} from "react";
import Form from "./components/Form";
import Info from "./components/Info";
import Card from "./components/Card";
import Panel from "./components/Panel";
import TaxInfo from "./TaxInfo";
import "./App.css";

export const ThemeContext = createContext(null)

function App() {
    useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="grid-container">
      <div className="info">
        <Info />
      </div>
      <div className="form">
        <Form />
      </div>
      <div className="panel">
        <Panel />
      </div>
    </div>
  );
}

export default App;
