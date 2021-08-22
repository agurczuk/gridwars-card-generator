import React, { useMemo, useReducer } from "react";
import AbilityDisplay from "../CardDisplay/AbilityDisplay";
import { Column } from "../Columns/Columns";
import DropDown from "../Components/DropDown";
import Textbox from "../Components/Textbox";
import {
  weaponOrAbility,
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

  const abilityExists: boolean = useMemo(() => {
    return (
      weaponOrAbility.filter(
        (wa) => wa.name.toUpperCase() === x.name.toUpperCase()
      ).length > 0
    );
  }, [x.name]);

  return (
    <Column>
      <h1 className="title">Weapons and abilities</h1>
      <button onClick={() => props.onAdd(x)}>ADD</button>
      <button onClick={() => setX(empty)}>Clear</button>
      <Textbox
        label="name"
        value={x.name}
        onChange={(v) => setX({ name: v as string })}
      />
      {abilityExists && (
        <div className="has-text-danger">{x.name} already defined</div>
      )}
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
          onChange={(v) => setX({ statistic: parseInt(v, 10) })}
        />
        <Textbox
          label="range"
          value={x.range}
          onChange={(v) => setX({ range: parseInt(v, 10) })}
        />
      </div>
      <div className="is-flex">
        <Textbox
          label="dice"
          value={x.dice}
          onChange={(v) => setX({ dice: parseInt(v, 10) })}
        />
        <Textbox
          label="shield piercing"
          value={x.shieldPiercing}
          onChange={(v) => setX({ shieldPiercing: parseInt(v, 10) })}
        />
        <Textbox
          label="demage"
          value={x.demage}
          onChange={(v) => setX({ demage: parseInt(v, 10) })}
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
          onChange={(v) => setX({ actions: parseInt(v, 10) })}
        />
        <Textbox
          label="energy"
          value={x.energy}
          onChange={(v) => setX({ energy: parseInt(v, 10) })}
        />
      </div>
      <AbilityDisplay ability={x} />
      <AbilityDisplay ability={x} isPL={true} />
    </Column>
  );
};

export default WeaponEdit;
