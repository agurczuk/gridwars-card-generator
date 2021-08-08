import React, { useReducer } from "react";
import AbilityDisplay from "../CardDisplay/AbilityDisplay";
import { Column } from "../Columns/Columns";
import DropDown from "../Components/DropDown";
import Textbox from "../Components/Textbox";
import {
  WeaponOrAbility,
  WeponOrAbilityType,
} from "../Data/WeaponsAndAbilities";

type Props = {
  onAdd: (x: WeaponOrAbility) => void;
};

const empty: WeaponOrAbility = {
  name: "",
  type: WeponOrAbilityType.ability,
  namePL: undefined,
  actions: undefined,
  demage: undefined,
  description: undefined,
  descriptionPL: undefined,
  dice: undefined,
  energy: undefined,
  range: undefined,
  shieldPiercing: undefined,
  special: undefined,
  statistic: undefined,
};

const WeaponEdit = (props: Props) => {
  const [x, setX] = useReducer(
    (state: WeaponOrAbility, action: Partial<WeaponOrAbility>) => {
      return { ...state, ...action };
    },
    empty
  );

  return (
    <Column>
      <button onClick={() => props.onAdd(x)}>ADD</button>
      <button onClick={() => setX(empty)}>Clear</button>
      <Textbox
        label="name"
        value={x.name}
        onChange={(v) => setX({ name: v as string })}
      />
      <Textbox
        label="namePL"
        value={x.namePL}
        onChange={(v) => setX({ namePL: v as string })}
      />
      <Textbox
        label="description"
        value={x.description}
        onChange={(v) => setX({ description: v as string })}
      />
      <Textbox
        label="descriptionPL"
        value={x.descriptionPL}
        onChange={(v) => setX({ descriptionPL: v as string })}
      />
      <div></div>
      <div className="is-flex">
        {/* <Textbox
          label="type"
          value={x.type}
          onChange={(v) => setX({ type: parseInt(v as string, 10) as number })}
        /> */}
        <DropDown
          label="Type"
          values={[
            { name: "gun", value: 1 },
            { name: "rifle", value: 3 },
            { name: "fist", value: 2 },
            { name: "ability", value: 4 },
            { name: "passive", value: 5 },
          ]}
          onChange={(v) => setX({ type: parseInt(v as string, 10) as number })}
        />
        <Textbox
          label="statistic"
          value={x.statistic}
          onChange={(v) => setX({ statistic: v as number })}
        />
        <Textbox
          label="range"
          value={x.range}
          onChange={(v) => setX({ range: v as number })}
        />
      </div>
      <div className="is-flex">
        <Textbox
          label="dice"
          value={x.dice}
          onChange={(v) => setX({ dice: v as number })}
        />
        <Textbox
          label="shield piercing"
          value={x.shieldPiercing}
          onChange={(v) => setX({ shieldPiercing: v as number })}
        />
        <Textbox
          label="demage"
          value={x.demage}
          onChange={(v) => setX({ demage: v as number })}
        />
      </div>
      <div className="is-flex">
        <Textbox
          label="special"
          value={x.special === true ? 1 : 0}
          onChange={(v) => setX({ special: v === "1" ? true : false })}
        />
        <Textbox
          label="actions"
          value={x.actions}
          onChange={(v) => setX({ actions: v as number })}
        />
        <Textbox
          label="energy"
          value={x.energy}
          onChange={(v) => setX({ energy: v as number })}
        />
      </div>
      <AbilityDisplay ability={x} />
      <AbilityDisplay ability={x} isPL={true} />
    </Column>
  );
};

export default WeaponEdit;
