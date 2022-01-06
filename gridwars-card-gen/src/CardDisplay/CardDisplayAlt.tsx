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
import AbilityDisplayAlt from "./AbilityDisplayAlt";

const iconSize = 0.5;

type TraitProps = {
  type: CharacterParameterType;
  value: number;
};

const Trait = (props: TraitProps) => {
  return (
    <div className="character-trait-alt">
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
          <div className="card-box-alt">
            <div
              className="character-top-alt"
              style={{
                backgroundImage: `url(${getImg(character.img)})`,
              }}
            >
              <span className="character-cost-alt">{character.cost}</span>
              <Columns className="is-gapless">
                <Column className="is-half">
                  <div className="is-gapless">
                    <div className="is-flex is-flex-wrap-wrap is-8">
                      {character.parameters
                        .filter(
                          (x) =>
                            x.type !== CharacterParameterType.health &&
                            x.type !== CharacterParameterType.shield
                        )
                        .map((x, key) => {
                          return (
                            <Trait key={key} value={x.value} type={x.type} />
                          );
                        })}
                    </div>
                  </div>
                </Column>
              </Columns>
              <div className="character-name-box-alt">{character.name}</div>
            </div>
            <Columns className="is-gapless">
              <Column>
                <div className="main-params is-flex is-flex-wrap-wrap">
                  <Trait
                    value={
                      character.parameters.find(
                        (x) => x.type === CharacterParameterType.health
                      )?.value || 0
                    }
                    type={CharacterParameterType.health}
                  />
                  <Trait value={1} type={CharacterParameterType.shield} />
                  <div className="char-type">{character.type}</div>
                </div>
              </Column>
              <Column className="is-8">
                <div className="character-ability-alt">
                  <div className="character-ability-name-alt">
                    {props.isPL
                      ? character.abilityNamePL
                      : character.abilityName}
                  </div>
                  <div className="character-ability-description-alt">
                    {props.isPL ? character.abilityPL : character.ability}
                  </div>
                </div>
              </Column>
            </Columns>
            <div className="abilities">
              {character.abilities.map((ability, index) => (
                <AbilityDisplayAlt
                  isAlt={true}
                  key={index}
                  ability={getWeaponOrAbility(ability)}
                  isPL={props.isPL}
                />
              ))}
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
