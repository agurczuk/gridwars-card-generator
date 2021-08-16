import React from "react";
import "./App.css";
import CardDisplay from "./CardDisplay/CardDisplay";
import CardEdit from "./CardEdit/CardEdit";
import { CyberCharacterEnum } from "./Data/Characters";

function App() {
  const showAll = true;

  // const randomChars: Array<CyberCharacterEnum> = [
  //   CyberCharacterEnum.Kimiko,
  //   CyberCharacterEnum.Takahashi,
  // ];

  const tcpd: Array<CyberCharacterEnum> = [
    CyberCharacterEnum.CptDonut,
    CyberCharacterEnum.DeputyHardfall,
    CyberCharacterEnum.Exobot,
    CyberCharacterEnum.Furora,
    CyberCharacterEnum.ProsecutorHarshBike,
    CyberCharacterEnum.ProsecutorHarsh,
    CyberCharacterEnum.RiotOfficerBobBlunt,
    CyberCharacterEnum.OFCMichaelBlender,
    CyberCharacterEnum.K9X,
    CyberCharacterEnum.K9Bio,
  ];

  const chars: Array<CyberCharacterEnum> = tcpd;

  return (
    <div className="App">
      <section className="section">
        <div className="container is-flex is-flex-wrap-wrap">
          {chars.map((c, i) => (
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
