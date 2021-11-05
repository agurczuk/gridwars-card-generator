import { url } from "inspector";
import React from "react";
import Columns, { Column } from "../Columns/Columns";
import {
  CharacterParameterType,
  CharacterType,
  CyberCharacterEnum,
  getCharacter,
} from "../Data/Characters";
import { getWeaponOrAbility } from "../Data/WeaponsAndAbilities";
import { getParameterIcon } from "../Helpers/ParameterHelpers";
import AbilityDisplay from "./AbilityDisplay";

const iconSize = 0.75;

type TraitProps = {
  type: CharacterParameterType;
  value: number;
};

const Trait = (props: TraitProps) => {
  return (
    <div className="character-trait">
      {getParameterIcon(props.type, iconSize)} {"  "}
      {props.value}
    </div>
  );
};

type Props = {
  characterEnum?: CyberCharacterEnum;
  isPL?: boolean;
  character?: CharacterType;
};

const getImg = (img?: string) => {
  const imgs = process.env.PUBLIC_URL + "/img/" + img;
  console.log(imgs);
  return imgs;
};

const CardDisplayAlt = (props: Props) => {
  const character: CharacterType | null = props.character
    ? props.character
    : getCharacter(props.characterEnum as string);

  return (
    <div>
      {!character && <div>{props.characterEnum}</div>}
      {character && (
        <>
          <div className="card-box">
            <div
              className="character-top"
              style={{
                backgroundImage: `url(${getImg(character.img)})`,
              }}
            >
              <Columns className="is-gapless">
                <Column className="is-two-fifths">
                  <div className="is-gapless">
                    <div className="is-flex is-flex-wrap-wrap is-8">
                      {character.parameters.map((x, key) => {
                        return (
                          <Trait key={key} value={x.value} type={x.type} />
                        );
                      })}
                    </div>
                  </div>
                </Column>
              </Columns>
              <div className="character-name-box">{character.name}</div>
            </div>
          </div>
        </>
        // <div className="card-box character-card">
        //   <div className="character-name">
        //     <Columns>
        //       <Column className="is-four-fifths">
        //         <span style={{ paddingTop: "2px", display: "block" }}>
        //           {character.name}
        //         </span>
        //       </Column>
        //       <Column>
        //         <span className="character-cost">{character.cost}</span>
        //       </Column>
        //     </Columns>
        //   </div>
        //   <Columns className="is-gapless">
        //     <Column className="is-flex is-flex-wrap-wrap is-8">
        //       {character.parameters.map((x, key) => {
        //         return <Trait key={key} value={x.value} type={x.type} />;
        //       })}
        //     </Column>
        //     <Column>
        //       <figure className="image">
        //         {character.img && (
        //           <img
        //             alt="characterImage"
        //             src={process.env.PUBLIC_URL + "/img/" + character.img}
        //           />
        //         )}
        //       </figure>
        //     </Column>
        //   </Columns>
        //   <div className="character-ability">
        //     <div className="character-ability-name">
        //       {props.isPL ? character.abilityNamePL : character.abilityName}
        //     </div>
        //     <div className="character-ability-description">
        //       {props.isPL ? character.abilityPL : character.ability}
        //     </div>
        //   </div>
        //   {character.abilities.map((ability, index) => (
        //     <AbilityDisplay
        //       key={index}
        //       ability={getWeaponOrAbility(ability)}
        //       isPL={props.isPL}
        //     />
        //   ))}
        // </div>
      )}
    </div>
  );
};

export default CardDisplayAlt;
