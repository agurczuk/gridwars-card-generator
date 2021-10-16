import { CharacterType } from "../Data/Characters";

type Props = {
  character: CharacterType;
  handleCharacterSelect?: (char: CharacterType) => void;
};

const CharacterListElement = (props: Props) => {
  return (
    <tr
      onClick={() => {
        if (props.handleCharacterSelect)
          props.handleCharacterSelect(props.character);
      }}
    >
      <td></td>
      <td>
        <figure className="image">
          {props.character.img && (
            <img
              alt="characterImage"
              src={process.env.PUBLIC_URL + "/img/" + props.character.img}
              style={{ width: "50px" }}
            />
          )}
        </figure>
      </td>
      <td>{props.character.name}</td>
      <td>{props.character.faction}</td>
      <td>{props.character.cost}</td>
    </tr>
    // <div
    //   className="card"
    //   onClick={() => {
    //     if (props.handleCharacterSelect)
    //       props.handleCharacterSelect(props.character);
    //   }}
    // >
    //   <div className="card-content">
    //     <Columns>
    //       <Column className="is-one-fifth">
    //         <figure className="image">
    //           {props.character.img && (
    //             <img
    //               alt="characterImage"
    //               src={process.env.PUBLIC_URL + "/img/" + props.character.img}
    //               style={{ width: "50px" }}
    //             />
    //           )}
    //         </figure>
    //       </Column>
    //       <Column>{props.character.name}</Column>
    //     </Columns>
    //   </div>
    // </div>
  );
};
export default CharacterListElement;
