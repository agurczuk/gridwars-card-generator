import React, { useReducer } from "react";
import Columns, { Column } from "../Columns/Columns";
import DropDown from "../Components/DropDown";
import Textbox from "../Components/Textbox";
import {
  CharacterParameterType,
  CharacterType,
  CyberCharacterEnum,
  ParameterType,
} from "../Data/Characters";
import { weaponOrAbility } from "../Data/WeaponsAndAbilities";
import CharacterParameter from "./CharacterParameter";

type Props = {
  character: CharacterType | null;
  onUpdate: (c: CharacterType) => void;
};

const empty: CharacterType = {
  name: "",
  abilities: ["", "", "", ""],
  ability: "",
  abilityName: "",
  cost: 0,
  parameters: [],
  type: "",
  abilityNamePL: "",
  abilityPL: "",
  img: "",
};

const cyberParameters: Array<CharacterParameterType> = [
  CharacterParameterType.health,
  CharacterParameterType.shield,
  CharacterParameterType.gun,
  CharacterParameterType.rifle,
  CharacterParameterType.hand,
  CharacterParameterType.body,
  CharacterParameterType.hack,
  CharacterParameterType.engineer,
  CharacterParameterType.actions,
  CharacterParameterType.brain,
  CharacterParameterType.speed,
];

const CharacterEdit = (props: Props) => {
  const [data, setData] = useReducer(
    (old: CharacterType, newData: Partial<CharacterType>) => {
      return { ...old, ...newData };
    },
    empty
  );

  const values = Object.values(CyberCharacterEnum).map((val, key) => {
    return { name: val, value: key };
  });

  const abilityValues: Array<any> = weaponOrAbility
    .sort((a, b) =>
      a.name.toUpperCase() > b.name.toUpperCase()
        ? 1
        : a.name.toUpperCase() < b.name.toUpperCase()
        ? -1
        : 0
    )
    .map((a, i) => {
      return { name: a.name.toUpperCase(), value: a.name };
    });

  const onDDChange = (value: string) => {
    const val = (Object.values(CyberCharacterEnum) as any)[value];
    setData({ name: val });
  };

  const onAbilityChange = (value: string, ix: number) => {
    console.log(value);
    const abilities: Array<string> = Object.assign([], data.abilities);
    abilities[ix] = value;
    setData({ abilities });
  };

  const getParameter = (param: CharacterParameterType): string | null => {
    const p = data.parameters.filter((x) => x.type === param);
    if (p.length === 1) {
      return p[0].value.toString();
    } else {
      return null;
    }
  };

  const setParameter = (param: CharacterParameterType, value: string) => {
    const params: Array<ParameterType> = Object.assign([], data.parameters);
    const p = params.filter((x) => x.type === param);
    if (p.length === 1) {
      p[0].value = parseInt(value, 10);
    } else {
      const x: ParameterType = {
        type: param,
        value: parseInt(value, 10),
      };
      params.push(x);
    }
    setData({ parameters: params });
  };

  return (
    <Column>
      <button
        onClick={() => {
          props.onUpdate(data);
        }}
      >
        Add
      </button>
      <button
        onClick={() => {
          setData({ ...empty });
        }}
      >
        Reset
      </button>
      <Columns>
        <Column>
          <DropDown values={values} onChange={onDDChange} label="name" />
        </Column>
        <Column>
          <Textbox
            label="name"
            value={data.name}
            onChange={(v) => setData({ name: v })}
          />
        </Column>
      </Columns>
      <Columns>
        <Column>
          <Textbox
            label="type"
            value={data.type}
            onChange={(v) => setData({ type: v })}
          />
        </Column>
        <Column>
          <Textbox
            label="cost"
            value={data.cost}
            onChange={(v) => setData({ cost: parseInt(v, 10) })}
          />
        </Column>
        <Column>
          <Textbox
            label="Image"
            value={data.img}
            onChange={(v) => setData({ img: v })}
          />
        </Column>
      </Columns>

      <Columns>
        <Column>
          <Textbox
            label="ability name"
            value={data.abilityName}
            onChange={(v) => setData({ abilityName: v })}
          />
        </Column>
        <Column>
          <Textbox
            label="ability name PL"
            value={data.abilityNamePL}
            onChange={(v) => setData({ abilityNamePL: v })}
          />
        </Column>
      </Columns>

      <Textbox
        label="ability"
        value={data.ability}
        onChange={(v) => setData({ ability: v })}
      />
      <Textbox
        label="abilityPL"
        value={data.abilityPL}
        onChange={(v) => setData({ abilityPL: v })}
      />

      <div className="">
        <Columns className="is-multiline">
          {cyberParameters.map((p, k) => (
            <Column key={k} className="is-one-quarter">
              <CharacterParameter
                key={k}
                type={p}
                value={getParameter(p)}
                onChange={(val) => setParameter(p, val)}
              />
            </Column>
          ))}
        </Columns>
      </div>

      <Columns>
        <Column>
          <DropDown
            onChange={(v) => {
              onAbilityChange(v, 0);
            }}
            values={abilityValues}
            label="Ability 1"
          />
        </Column>
        <Column>
          <DropDown
            onChange={(v) => {
              onAbilityChange(v, 1);
            }}
            values={abilityValues}
            label="Ability 2"
          />
        </Column>
      </Columns>
      <Columns>
        <Column>
          <DropDown
            onChange={(v) => {
              onAbilityChange(v, 2);
            }}
            values={abilityValues}
            label="Ability 3"
          />
        </Column>
        <Column>
          <DropDown
            onChange={(v) => {
              onAbilityChange(v, 3);
            }}
            values={abilityValues}
            label="Ability 4"
          />
        </Column>
      </Columns>
    </Column>
  );
};

export default CharacterEdit;
