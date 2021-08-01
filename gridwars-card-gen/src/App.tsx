import React from "react";
import "./App.css";
import CardDisplay from "./CardDisplay/CardDisplay";
import { CharacterEnum } from "./Data/Characters";
import CardEdit from "./CardEdit/CardEdit";

function App() {
  return (
    <div className="App">
      <section className="section">
        <div className="container is-flex">
          <CardDisplay character={CharacterEnum.Kimiko} isPL={true} />
          <CardDisplay character={CharacterEnum.Takahashi} isPL={true} />
          <CardDisplay character={CharacterEnum.DrPrince} isPL={true} />
          <CardDisplay character={CharacterEnum.CptDonut} isPL={true} />
        </div>
      </section>
      <section className="section">
        <div className="container box">
          <CardEdit />
        </div>
      </section>
    </div>
  );
}

export default App;
