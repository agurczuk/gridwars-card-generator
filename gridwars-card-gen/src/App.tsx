import React, { useState } from "react";
import "./App.css";
import CardDisplay from "./CardDisplay/CardDisplay";
import CardEdit from "./CardEdit/CardEdit";
import Button from "./Components/Button";
import { CyberCharacterEnum } from "./Data/Characters";

function App() {
  const [showToolbar, setShowToolbar] = useState<boolean>(true);
  const [showCardEdit, setShowCardEdit] = useState<boolean>(false);

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

  const yakuza: Array<CyberCharacterEnum> = [
    CyberCharacterEnum.DaiTheSilentOne,
    CyberCharacterEnum.GinjiKawasakiBike,
    CyberCharacterEnum.GinjiKawasaki,
    CyberCharacterEnum.Ichiko,
    CyberCharacterEnum.RusselKurata,
    CyberCharacterEnum.TheLastSamurai,
    CyberCharacterEnum.UncleCheSio,
    CyberCharacterEnum.VengfulNakahara,
    CyberCharacterEnum.Kimiko,
  ];

  const chars: Array<CyberCharacterEnum> = yakuza;

  return (
    <div className="App">
      {showToolbar && (
        <section className="section">
          <Button
            label={`${showCardEdit ? "hide" : "show"} card edit`}
            onClick={() => {
              setShowCardEdit(!showCardEdit);
            }}
          />
        </section>
      )}
      <section className="section">
        <div className="container is-flex is-flex-wrap-wrap">
          {chars.map((c, i) => (
            <CardDisplay character={c} key={i} isPL={true} />
          ))}
        </div>
      </section>
      {showCardEdit && (
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
