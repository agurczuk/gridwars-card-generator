import React, { useReducer } from "react";
import Columns, { Column } from "../Columns/Columns";
import DropDown from "../Components/DropDown";
import Textbox from "../Components/Textbox";
import {
  CharacterParameterType,
  CharacterType,
  CyberCharacterEnum,
} from "../Data/Characters";
import CharacterParameter from "./CharacterParameter";

type Props = {
  character: CharacterType | null;
  onUpdate: (c: CharacterType) => void;
};

const empty: CharacterType = {
  name: "",
  abilities: [],
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

  const onDDChange = (value: string) => {
    const val = (Object.values(CyberCharacterEnum) as any)[value];
    setData({ name: val });
  };

  const getParameter = (param: CharacterParameterType): string | null => {
    return null;
  };

  const setParameter = (param: CharacterParameterType, value: string) => {};

  return (
    <Column>
      <button onClick={() => {}}>Add</button>
      <button
        onClick={() => {
          setData({ ...empty });
        }}
      >
        Reset
      </button>
      <DropDown values={values} onChange={onDDChange} label="name" />
      <Textbox
        label="name"
        value={data.name}
        onChange={(v) => setData({ name: v })}
      />
      <Textbox
        label="ability name"
        value={data.abilityName}
        onChange={(v) => setData({ abilityName: v })}
      />
      <Textbox
        label="ability"
        value={data.ability}
        onChange={(v) => setData({ ability: v })}
      />
      <Textbox
        label="ability name PL"
        value={data.abilityNamePL}
        onChange={(v) => setData({ abilityNamePL: v })}
      />
      <Textbox
        label="abilityPL"
        value={data.abilityPL}
        onChange={(v) => setData({ abilityPL: v })}
      />
      <div className="">
        <Columns className="is-multiline">
          {cyberParameters.map((p, k) => (
            <Column className="is-one-quarter">
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
    </Column>
  );
};

export default CharacterEdit;
