import React from "react";
import logo from "./logo.svg";
import "./App.css";
import CardDisplay from "./CardDisplay/CardDisplay";
import { CharacterEnum } from "./Data/Characters";

function App() {
  return (
    <div className="App">
      <section className="section">
        <div className="container is-flex">
          <CardDisplay character={CharacterEnum.Kimiko} isPL={true} />
          <CardDisplay character={CharacterEnum.Takahashi} isPL={true} />
          <CardDisplay character={CharacterEnum.DrPrince} isPL={true} />
        </div>
      </section>
    </div>
  );
}

export default App;
