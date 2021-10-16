import React, { useState } from "react";
import "./App.css";
import NavMenu, { NavPage } from "./Layout/Navbar";
import CharacterList from "./Pages/CharacterList";

function App() {
  const [navPage, setNavPage] = useState<NavPage | null>(null);

  // const [showToolbar, setShowToolbar] = useState<boolean>(true);
  // const [showCardEdit, setShowCardEdit] = useState<boolean>(false);
  // const [showCards, setShowCards] = useState<boolean>(false);

  // const randomChars: Array<CyberCharacterEnum> = [
  //   CyberCharacterEnum.Kimiko,
  //   CyberCharacterEnum.Takahashi,
  // ];

  // const tcpd: Array<CyberCharacterEnum> = [
  //   CyberCharacterEnum.CptDonut,
  //   CyberCharacterEnum.DeputyHardfall,
  //   CyberCharacterEnum.Exobot,
  //   CyberCharacterEnum.Furora,
  //   CyberCharacterEnum.ProsecutorHarshBike,
  //   CyberCharacterEnum.ProsecutorHarsh,
  //   CyberCharacterEnum.RiotOfficerBobBlunt,
  //   CyberCharacterEnum.OFCMichaelBlender,
  //   CyberCharacterEnum.K9X,
  //   CyberCharacterEnum.K9Bio,
  // ];

  // const yakuza: Array<CyberCharacterEnum> = [
  //   CyberCharacterEnum.DaiTheSilentOne,
  //   CyberCharacterEnum.GinjiKawasakiBike,
  //   CyberCharacterEnum.GinjiKawasaki,
  //   CyberCharacterEnum.Ichiko,
  //   CyberCharacterEnum.RusselKurata,
  //   CyberCharacterEnum.TheLastSamurai,
  //   CyberCharacterEnum.UncleCheSio,
  //   CyberCharacterEnum.VengfulNakahara,
  //   CyberCharacterEnum.Kimiko,
  // ];

  // const chars: Array<CyberCharacterEnum> = yakuza;

  return (
    <div className="App">
      <NavMenu onMenuSelect={(page) => setNavPage(page)} />

      {navPage === NavPage.List && <CharacterList />}
      {/* {showToolbar && (
        <section classNameName="section">
          <Button
            label={`${showCardEdit ? "hide" : "show"} card edit`}
            onClick={() => {
              setShowCardEdit(!showCardEdit);
            }}
          />
          <Button
            label={`${showCards ? "hide" : "show"} cards`}
            onClick={() => {
              setShowCards(!showCards);
            }}
          />
          <Button label="hide toolbar" onClick={() => setShowToolbar(false)} />
        </section>
      )}
      <section classNameName="section">
        {showCards && (
          <div classNameName="container is-flex is-flex-wrap-wrap">
            {chars.map((c, i) => (
              <CardDisplay character={c} key={i} isPL={true} />
            ))}
          </div>
        )}
      </section>
      {showCardEdit && (
        <section classNameName="section">
          <div classNameName="container box">
            <CardEdit />
          </div>
        </section>
      )} */}
    </div>
  );
}

export default App;
