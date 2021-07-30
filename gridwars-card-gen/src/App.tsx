import React from "react";
import logo from "./logo.svg";
import "./App.css";
import CardDisplay from "./CardDisplay/CardDisplay";

function App() {
  return (
    <div className="App">
      <section className="section">
        <div className="container">
          <CardDisplay />
        </div>
      </section>
    </div>
  );
}

export default App;
