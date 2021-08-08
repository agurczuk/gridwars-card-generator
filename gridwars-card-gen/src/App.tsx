import React from "react";
import "./App.css";
import CardDisplay from "./CardDisplay/CardDisplay";
import { CharacterEnum } from "./Data/Characters";
import CardEdit from "./CardEdit/CardEdit";

function App() {
  const showAll = true;

  const randomChars: Array<CharacterEnum> = [
    CharacterEnum.Kimiko,
    CharacterEnum.Takahashi,
  ];

  const tcpd: Array<CharacterEnum> = [
    CharacterEnum.CptDonut,
    CharacterEnum.DeputyHardfall,
    CharacterEnum.Exobot,
    CharacterEnum.Furora,
    CharacterEnum.ProsecutorHarshBike,
    CharacterEnum.ProsecutorHarsh,
    CharacterEnum.RiotOfficerBobBlunt,
    CharacterEnum.OFCMichaelBlender,
    CharacterEnum.K9X,
    CharacterEnum.K9Bio,
  ];

  return (
    <div className="App">
      <section className="section">
        <div className="container is-flex is-flex-wrap-wrap">
          {tcpd.map((c, i) => (
            <CardDisplay character={c} key={i} isPL={true} />
          ))}
        </div>
      </section>
      {showAll && (
        <section className="section">
          <div className="container box">
            <CardEdit />
          </div>
        </section>
      )}
    </div>
  );
}

export default App;
