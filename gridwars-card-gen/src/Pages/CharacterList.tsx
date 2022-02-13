import { useState } from "react";
import CardDisplayAlt from "../CardDisplay/CardDisplayAlt";
import Columns, { Column } from "../Columns/Columns";
import { characters, CharacterType } from "../Data/Characters";
import CharacterListElement from "./CharacterListElement";

const CharacterList = () => {
  const [char, setChar] = useState<CharacterType | null>(null);

  return (
    <div className="container">
      {/* <Columns>
        <Column>
          {characters.map((char) => (
            <CharacterListElement
              character={char}
              key={char.name}
              handleCharacterSelect={(char) => setChar(char)}
            />
          ))}
        </Column>
        <Column>{char && <CardDisplay character={char} />}</Column>
      </Columns> */}
      <Columns>
        <Column>
          <table className="table">
            <thead>
              <tr>
                <th>ID</th>
                <th>img</th>
                <th>Name</th>
                <th>Faction</th>
                <th>Cost</th>
              </tr>
            </thead>
            <tbody>
              {characters.map((char) => (
                <CharacterListElement
                  character={char}
                  key={char.name}
                  handleCharacterSelect={(char) => setChar(char)}
                />
              ))}
            </tbody>
          </table>
        </Column>
        <Column>
          <div style={{ position: "fixed" }} className="is-flex">
            {/* <div
              style={{ transform: "scale(1.5)", transformOrigin: "top left" }}
            >
              {char && <CardDisplayAlt character={char} />}
            </div> */}
            <div style={{ transform: "scale(1)", transformOrigin: "top left" }}>
              {char && <CardDisplayAlt character={char} />}
            </div>
          </div>
        </Column>
      </Columns>
    </div>
  );
};

export default CharacterList;
