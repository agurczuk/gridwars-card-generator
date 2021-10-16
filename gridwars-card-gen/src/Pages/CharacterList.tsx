import { useState } from "react";
import CardDisplay from "../CardDisplay/CardDisplay";
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
        <Column>{char && <CardDisplay character={char} />}</Column>
      </Columns>
    </div>
  );
};

export default CharacterList;
