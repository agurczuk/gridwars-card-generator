import React, { useState } from "react";
import Columns, { Column } from "../Columns/Columns";
import { CharacterParameterType, CharacterType } from "../Data/Characters";
import {
  WeaponOrAbility,
  WeponOrAbilityType,
} from "../Data/WeaponsAndAbilities";
import CharacterEdit from "./CharacterEdit";
import WeaponEdit from "./WeaponEdit";

const CardEdit = () => {
  const [showChar, setShowChar] = useState<boolean>(true);
  const [showWA, setShowWA] = useState<boolean>(false);

  const [weaponsOrAbilitise, setWeaponsOrAbilities] = useState<
    Array<WeaponOrAbility>
  >([]);

  const [char, setChar] = useState<CharacterType | null>(null);

  const handleWOAAdd = (x: WeaponOrAbility) => {
    let arr: Array<WeaponOrAbility> = Object.assign([], weaponsOrAbilitise);
    const exist = arr.filter((w) => w.name === x.name);
    if (exist.length === 0) {
      arr.push(x);
    } else {
      arr = arr.map((obj) => (obj.name === x.name ? x : obj));
    }

    setWeaponsOrAbilities(arr);
  };

  const getCharacterJSON = (x: CharacterType) => {
    const getParams = (): Array<string> => {
      const ps: Array<string> = [];
      x.parameters.forEach((p) =>
        ps.push(
          "{type: CharacterParameterType." +
            CharacterParameterType[p.type] +
            ", value: " +
            p.value.toString() +
            "}"
        )
      );
      return ps;
    };

    const char = [
      '{ name: "' + x.name + '",',
      "cost: " + x.cost + ",",
      "parameters: [",
      getParams(),
      "],",
      "ability:",
      '  "' + x.ability + '",',
      "abilityPL:",
      ' "' + x.abilityPL + '",',
      'abilityName: "' + x.abilityName + '",',
      'abilityNamePL: "' + x.abilityNamePL + '",',
      'type: "' + x.type + '",',
      "abilities: [",
      '"' + x.abilities.join('","') + '"',
      "],",
      'img: "' + x.img + '",',
      "}",
    ];
    return char.join("\r\n");
  };

  const getAllWeapons = (): string => {
    let x = "";
    weaponsOrAbilitise.forEach((wa) => {
      x += getWeaponsJSON(wa) + ",";
    });
    return x;
  };

  const getWeaponsJSON = (x: WeaponOrAbility) => {
    const getType = (n: number) => {
      switch (n) {
        case WeponOrAbilityType.ability:
          return "WeponOrAbilityType.ability";
        case WeponOrAbilityType.gun:
          return "WeponOrAbilityType.gun";
        case WeponOrAbilityType.special:
          return "WeponOrAbilityType.special";
        case WeponOrAbilityType.passive:
          return "WeponOrAbilityType.passive";
        case WeponOrAbilityType.attack:
          return "WeponOrAbilityType.attack";
        default:
          return "undefined";
      }
    };

    const a = x.special ? "true" : "false";
    const txt = [
      "{",
      "name: '" + x.name + "',",
      "namePL: '" + x.namePL + "' ,",
      "type: " + getType(x.type) + ",",
      "range: " + x.range + ",",
      "description: '" +
        (x.description !== undefined ? x.description : "") +
        "',",
      "descriptionPL: '" +
        (x.descriptionPL !== undefined ? x.descriptionPL : "") +
        "',",
      "statistic: " + x.statistic + ",",
      "dice: " + x.dice + ",",
      "shieldPiercing: " + x.shieldPiercing + ",",
      "demage: " + x.demage + ",",
      "special: " + a + ",",
      "actions: " + x.actions + ",",
      "energy: " + x.energy + ",",
      "}",
    ];
    return txt.join("\r\n");
  };

  return (
    <>
      <button
        value="switch"
        onClick={() => {
          setShowChar(true);
          setShowWA(false);
        }}
        style={{ marginBottom: "10px" }}
      >
        Show character
      </button>
      <button
        value="switch"
        onClick={() => {
          setShowChar(false);
          setShowWA(true);
        }}
        style={{ marginBottom: "10px" }}
      >
        Show Weapon
      </button>
      <Columns className="card-edit-form">
        {showChar && (
          <>
            <CharacterEdit character={char} onUpdate={(c) => setChar(c)} />
          </>
        )}
        {showWA && <WeaponEdit onAdd={handleWOAAdd} />}
        <Column>
          {showChar && (
            <>
              <h3>Character</h3>
              <textarea
                cols={90}
                rows={40}
                value={char ? getCharacterJSON(char) : ""}
                readOnly
              ></textarea>
            </>
          )}
          {showWA && (
            <>
              <h3>Weapons and abilities</h3>
              <textarea
                cols={90}
                rows={40}
                value={getAllWeapons()}
                readOnly
              ></textarea>
            </>
          )}
        </Column>
      </Columns>
    </>
  );
};

export default CardEdit;
