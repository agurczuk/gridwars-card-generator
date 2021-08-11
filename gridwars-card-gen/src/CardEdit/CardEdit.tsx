import {
  mdiAccountAlert,
  mdiBoxingGlove,
  mdiBrain,
  mdiCogSync,
  mdiFlare,
  mdiHeartMultipleOutline,
  mdiPistol,
  mdiShieldOutline,
  mdiShoePrint,
  mdiUsbFlashDriveOutline,
} from "@mdi/js";
import Icon from "@mdi/react";
import React, { useState } from "react";
import Columns, { Column } from "../Columns/Columns";
import RifleIcon from "../Components/RifleIcon";
import Textbox from "../Components/Textbox";
import { CharacterType } from "../Data/Characters";
import {
  weaponOrAbility,
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
      console.log("he");
      arr = arr.map((obj) => (obj.name === x.name ? x : obj));
    }

    setWeaponsOrAbilities(arr);
  };

  const getCharacterJSON = (x: CharacterType) => {
    const char = [
      '{ name: "' + x.name + '",',
      "cost: " + x.cost + ",",
      // "parameters: [",
      // " { icon: mdiHeartMultipleOutline, value: " + x.health + " }, //health",
      // " { icon: mdiShieldOutline, value: " + x.shield + " }, //armor",
      // " { icon: mdiShoePrint, value: " + speed + " }, //speed",
      // " { icon: mdiFlare, value: " + actions + " }, //actions",
      // " { icon: mdiPistol, value: " + gun + " }, //gun",
      // " { icon: mdiDiceMultiple, value: " + rifle + " }, //special",
      // " { icon: mdiBoxingGlove, value: " + hand + " }, // hand",
      // " { icon: mdiAccountAlert, value: " + body + "}, //body",
      // "{ icon: mdiUsbFlashDriveOutline, value: " + hack + " }, //hack",
      // " { icon: mdiCogSync, value: " + engineer + " }, //gears",
      // "{ icon: mdiBrain, value: " + brain + " },",
      // "],",
      // "ability:",
      // '  "' + ability + '",',
      // "abilityPL:",
      // ' "' + abilityPL + '",',
      // 'abilityName: "' + abilityName + '",',
      // 'abilityNamePL: "' + abilityNamePL + '",',
      'type: "organic",',
      "abilities: [",
      "],",
      'img: "kimiko.png",',
      "}",
    ];
    return char.join("\r\n");
  };

  const getAllWeapons = (): string => {
    let x = "";
    // console.log(weaponOrAbility);
    // weaponOrAbility.forEach((wa) => {
    //   x += getWeaponsJSON(wa) + ",";
    // });
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
    console.log(x);
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
