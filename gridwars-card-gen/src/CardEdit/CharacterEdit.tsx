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
import React, { useReducer, useState } from "react";
import Columns, { Column } from "../Columns/Columns";
import DropDown from "../Components/DropDown";
import RifleIcon from "../Components/RifleIcon";
import Textbox from "../Components/Textbox";
import {
  CharacterParameterType,
  CharacterType,
  CyberCharacterEnum,
} from "../Data/Characters";

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

  const setParameter = (
    param: CharacterParameterType,
    icon: string,
    value: string
  ) => {};

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
      <div className="is-flex">
        <Icon path={mdiHeartMultipleOutline} size={1} />
        <Textbox
          value={getParameter("health")}
          onChange={(v) => setParameter("health", mdiHeartMultipleOutline, v)}
        />
        <Icon path={mdiShieldOutline} size={1} />
        <Textbox
          value={getParameter("shield")}
          onChange={(v) => setParameter("shield", mdiShieldOutline, v)}
        />
      </div>
      <Columns>
        <Column>
          <div>
            <Icon path={mdiPistol} size={1} />
            <Textbox
              value={getParameter("gun")}
              onChange={(v) => setGun(v as string | null)}
            />
            <RifleIcon width={26} />
            <Textbox
              value={rifle}
              onChange={(v) => setRifle(v as string | null)}
            />
            <Icon path={mdiBoxingGlove} size={1} />
            <Textbox
              value={hand}
              onChange={(v) => setHand(v as string | null)}
            />
          </div>
        </Column>
        <Column>
          <div>
            <Icon path={mdiAccountAlert} size={1} />
            <Textbox
              value={body}
              onChange={(v) => setBody(v as string | null)}
            />
            <Icon path={mdiUsbFlashDriveOutline} size={1} />
            <Textbox
              value={hack}
              onChange={(v) => setHack(v as string | null)}
            />
            <Icon path={mdiCogSync} size={1} />
            <Textbox
              value={engineer}
              onChange={(v) => setEngineer(v as string | null)}
            />
          </div>
        </Column>
        <Column>
          <div>
            <Icon path={mdiFlare} size={1} />
            <Textbox
              value={actions}
              onChange={(v) => setActions(v as string | null)}
            />
            <Icon path={mdiBrain} size={1} />
            <Textbox
              value={brain}
              onChange={(v) => setBrain(v as string | null)}
            />
            <Icon path={mdiShoePrint} size={1} />
            <Textbox
              value={speed}
              onChange={(v) => setSpeed(v as string | null)}
            />
          </div>
        </Column>
      </Columns>
    </Column>
  );
};

export default CharacterEdit;
