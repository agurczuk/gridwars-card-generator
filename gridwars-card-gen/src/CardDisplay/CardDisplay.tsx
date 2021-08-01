import React from "react";

import { Icon } from "@mdi/react";
import Columns, { Column } from "../Columns/Columns";
import { getWeaponOrAbility } from "../Data/WeaponsAndAbilities";
import AbilityDisplay from "./AbilityDisplay";
import { CharacterEnum, getCharacter } from "../Data/Characters";

const iconSize = 0.75;

type TraitProps = {
  icon: string;
  value: number;
};

const Trait = (props: TraitProps) => {
  return (
    <div className="character-trait">
      <Icon path={props.icon} size={iconSize} />
      {"  "}
      {props.value}
    </div>
  );
};

type Props = {
  character: CharacterEnum;
  isPL?: boolean;
};

const CardDisplay = (props: Props) => {
  const character = getCharacter(props.character as string);

  return (
    <div>
      {character && (
        <div className="card-box">
          <div className="character-name">
            <Columns>
              <Column className="is-four-fifths">
                <span style={{ paddingTop: "2px", display: "block" }}>
                  {character.name}
                </span>
              </Column>
              <Column>
                <span className="character-cost">{character.cost}</span>
              </Column>
            </Columns>
          </div>
          <Columns className="is-gapless">
            <Column className="is-flex is-flex-wrap-wrap is-8">
              {character.parameters.map((x, key) => {
                return <Trait key={key} value={x.value} icon={x.icon} />;
              })}
            </Column>
            <Column>
              <figure className="image">
                {character.img && (
                  <img
                    alt="characterImage"
                    src={process.env.PUBLIC_URL + "/img/" + character.img}
                  />
                )}
              </figure>
            </Column>
          </Columns>
          <div className="character-ability">
            <div className="character-ability-name">
              {props.isPL ? character.abilityNamePL : character.abilityName}
            </div>
            <div className="character-ability-description">
              {props.isPL ? character.abilityPL : character.ability}
            </div>
          </div>
          {character.abilities.map((ability, index) => (
            <AbilityDisplay
              key={index}
              ability={getWeaponOrAbility(ability)}
              isPL={props.isPL}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default CardDisplay;
