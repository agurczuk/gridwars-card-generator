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
import React, { useMemo, useReducer, useState } from "react";
import { compileFunction } from "vm";
import AbilityDisplay from "../CardDisplay/AbilityDisplay";
import Columns, { Column } from "../Columns/Columns";
import RifleIcon from "../Components/RifleIcon";
import Textbox from "../Components/Textbox";
import {
  WeaponOrAbility,
  WeponOrAbilityType,
} from "../Data/WeaponsAndAbilities";

const CardEdit = () => {
  const [name, setName] = useState<string | null>(null);
  const [ability, setAbility] = useState<string | null>(null);
  const [abilityPL, setAbilityPL] = useState<string | null>(null);
  const [cost, setCost] = useState<string | null>(null);
  const [abilityName, setAbilityName] = useState<string | null>(null);
  const [abilityNamePL, setAbilitNamePL] = useState<string | null>(null);
  const [type, setType] = useState<string | null>(null);

  const [health, setHealth] = useState<string | null>(null);
  const [shield, setShield] = useState<string | null>(null);
  const [actions, setActions] = useState<string | null>(null);
  const [speed, setSpeed] = useState<string | null>(null);
  const [gun, setGun] = useState<string | null>(null);
  const [rifle, setRifle] = useState<string | null>(null);
  const [hand, setHand] = useState<string | null>(null);
  const [body, setBody] = useState<string | null>(null);
  const [hack, setHack] = useState<string | null>(null);
  const [engineer, setEngineer] = useState<string | null>(null);
  const [brain, setBrain] = useState<string | null>(null);

  const [showChar, setShowChar] = useState<boolean>(true);
  const [showWA, setShowWA] = useState<boolean>(false);

  const [x, setX] = useReducer(
    (state: WeaponOrAbility, action: Partial<WeaponOrAbility>) => {
      return { ...state, ...action };
    },
    {
      name: "",
      type: WeponOrAbilityType.ability,
    }
  );

  const getCharacterJSON = () => {
    const char = [
      '{ name: "' + name + '",',
      "cost: " + cost + ",",
      "parameters: [",
      " { icon: mdiHeartMultipleOutline, value: " + health + " }, //health",
      " { icon: mdiShieldOutline, value: " + shield + " }, //armor",
      " { icon: mdiShoePrint, value: " + speed + " }, //speed",
      " { icon: mdiFlare, value: " + actions + " }, //actions",
      " { icon: mdiPistol, value: " + gun + " }, //gun",
      " { icon: mdiDiceMultiple, value: " + rifle + " }, //special",
      " { icon: mdiBoxingGlove, value: " + hand + " }, // hand",
      " { icon: mdiAccountAlert, value: " + body + "}, //body",
      "{ icon: mdiUsbFlashDriveOutline, value: " + hack + " }, //hack",
      " { icon: mdiCogSync, value: " + engineer + " }, //gears",
      "{ icon: mdiBrain, value: " + brain + " },",
      "],",
      "ability:",
      '  "' + ability + '",',
      "abilityPL:",
      ' "' + abilityPL + '",',
      'abilityName: "' + abilityName + '",',
      'abilityNamePL: "' + abilityNamePL + '",',
      'type: "organic",',
      "abilities: [",
      "],",
      'img: "kimiko.png",',
      "}",
    ];
    return char.join("\r\n");
  };

  const getWeaponsJSON = () => {
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
    console.log(x.special);
    const a = x.special ? "true" : "false";

    const txt = [
      "{",
      "name: '" + x.name + "',",
      "namePL: '" + x.namePL + "' ,",
      "type: " + getType(x.type) + ",",
      "range: " + x.range + ",",
      "description: '" + x.description + "',",
      "descriptionPL: '" + x.descriptionPL + "',",
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
          setShowChar(!showChar);
          setShowWA(!showWA);
        }}
        style={{ marginBottom: "10px" }}
      >
        swich
      </button>
      <Columns className="card-edit-form">
        {showChar && (
          <>
            <Column>
              <Textbox
                label="name"
                value={name}
                onChange={(v) => setName(v as string | null)}
              />
              <Textbox
                label="ability name"
                value={abilityName}
                onChange={(v) => setAbilityName(v as string | null)}
              />
              <Textbox
                label="ability"
                value={ability}
                onChange={(v) => setAbility(v as string | null)}
              />{" "}
              <Textbox
                label="ability name PL"
                value={abilityNamePL}
                onChange={(v) => setAbilitNamePL(v as string | null)}
              />
              <Textbox
                label="abilityPL"
                value={abilityPL}
                onChange={(v) => setAbilityPL(v as string | null)}
              />
              <div className="is-flex">
                <Icon path={mdiHeartMultipleOutline} size={1} />
                <Textbox
                  value={health}
                  onChange={(v) => setHealth(v as string | null)}
                />
                <Icon path={mdiShieldOutline} size={1} />
                <Textbox
                  value={shield}
                  onChange={(v) => setShield(v as string | null)}
                />
              </div>
              <Columns>
                <Column>
                  <div>
                    <Icon path={mdiPistol} size={1} />
                    <Textbox
                      value={gun}
                      onChange={(v) => setGun(v as string | null)}
                    />
                    {/* <Icon
              path={
                "M0.293,22.117l2.329,2.757c0,0,0.822,1.163,1.413,0.291c0.591-0.87,4.134-8.052,4.134-8.052 s0.355-0.586,0.604,0.461s2.294,6.113,2.294,6.113s0.309,0.427,0.68,0.112c0.372-0.312,1.86-1.567,1.86-1.567 s0.502-0.159-0.018-1.151c-0.521-0.995-2.43-5.521-2.43-5.521s-0.279-0.58,0.125-0.92c0.403-0.339,0.924-0.728,0.924-0.728 s0.232-0.479,0.871,0.026c0.638,0.504,2.468,2.357,5.287,3.054c2.818,0.699,5.285,0.793,5.285,0.793s0.604,0.022,0.689-1.009 c0.088-1.026,0.037-2.47,0.037-2.47s0.058-0.688-0.547-0.708c-0.603-0.021-1.627,0.209-2.918-0.189 c-1.291-0.396-4.208-2.53-4.208-2.53s-0.468-0.367-0.034-0.735c0.434-0.366,3.471-2.928,3.471-2.928s0.521-0.389,0.207-0.761 c-0.313-0.371-0.47-0.557-0.47-0.557l5.516-4.658L24.346,0L18.83,4.656l-0.453-0.409c0,0-0.403-0.351-0.744-0.063 c-0.34,0.284-3.9,3.236-3.9,3.236s-1.003-1.061-1.746-0.434s-5.266,4.449-5.266,4.449s-0.197,0.271-0.042,0.83 c0.154,0.561,0.437,0.957,0.158,1.193c-0.278,0.234-1.735,1.465-1.735,1.465s-0.407,0.397-0.356,1.151 c0.052,0.752-0.364,1.578-1.169,2.26c-0.804,0.68-3.125,2.586-3.125,2.586S-0.229,21.497,0.293,22.117z"
              }
              size={1}
            />
            <img
              width={28}
              src="data:image/svg+xml;base64,PHN2ZyBpZD0iQ2FwYV8xIiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCA0OTYuNTM2IDQ5Ni41MzYiIGhlaWdodD0iNTEyIiB2aWV3Qm94PSIwIDAgNDk2LjUzNiA0OTYuNTM2IiB3aWR0aD0iNTEyIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxnPjxwYXRoIGQ9Im0zNjEuODU0IDM4NS4xOTgtMTMuMzIxLTcuOTA4Yy0yNC4yNTEtMTIuODgzLTQ1LjU3Mi0yOS45MTYtNjQuOTg5LTQ5LjMzNGwtMTIuNTkyLTEyLjU5MiA0My40MTctNDMuNDE3IDExLjYzNSA4LjE2MyAyLjY4NyAyLjY4N2MxNC43NTkgMTQuNzU5IDMxLjYzMiAyNy4yNCA1MC4wNjUgMzcuMDMzbDE0LjM4NSA3LjY0M2MxLjk1MSAxLjAzNiAyLjY5MiAzLjQ1OCAxLjY1NiA1LjQwOWwtMTAuMTE2IDE5LjA0My03LjYzNSA3LjAwMy42IDYuMjQtNS41NjggMTAuNDgxLTQuODE2IDcuODk0Yy0xLjAzNiAxLjk1LTMuNDU3IDIuNjkxLTUuNDA4IDEuNjU1eiIgZmlsbD0iIzg1N2U4NyIvPjxwYXRoIGQ9Im0zNzIuMDc3IDM3NS42NDctNC42OSA4Ljg0Yy0xLjA0IDEuOTUtMy40NiAyLjY5LTUuNDEgMS42NmwtMTQuMzktNy42NWMtMjQuMjUtMTIuODgtNDYuNDUtMjkuMy02NS44Ny00OC43MmwtMTIuNTktMTIuNTkgMTcuODY1LTIzLjIxMiAyOS4xMTUtMjMuNzY4IDkuODk3IDkuOTAzLTM0LjM5IDM0LjM5Yy0xLjQ4NCAxLjQ4NC0xLjQ4NCAzLjg5IDAgNS4zNzRsLjAwMy4wMDNjMTguNDUgMTguNDUgMzkuNDkgMzQuMDIgNjIuNTQgNDYuMjZ6IiBmaWxsPSIjNmY2NTcxIi8+PGc+PHBhdGggZD0ibTM4NC42ODEgMzUxLjkyNC03LjAzNSAxMy4yNDMtMTcuOTQtOS4zNWMtMjIuMDctMTEuNzMtNDIuMTgtMjYuNi01OS44LTQ0LjIybC0xMi41My0xMi42NiAxMC42LTEwLjYgMTIuNTYgMTIuNjhjMTYuNTUgMTYuNTQgMzUuNDUgMzAuNTMgNTYuMTUgNDEuNTJ6IiBmaWxsPSIjNmY2NTcxIi8+PC9nPjxnPjxwYXRoIGQ9Im0zMDcuODI3IDI5OC4yODctMTAuNiAxMC42LTkuODUxLTkuOTUgMi40NzgtNS42OTQgOC4xMjMtNC45MDZ6IiBmaWxsPSIjNjM1YTYzIi8+PC9nPjxwYXRoIGQ9Im0xNDQuNDI3IDM2Ny44NjctMTkuNDEgMTkuOC0xOC4zMDEtMTEuMzc3LTE1LjM1OS0yMi4yODMgMTEuNjA5LTYuMjU0IDcuOTkxLTEzLjM0NiAxOS4yMDkgMTQuNzV6IiBmaWxsPSIjODU3ZTg3Ii8+PHBhdGggZD0ibTEyNS4wMTcgMzg3LjY2Ny0zLjIzIDMuMjljLTMuMjkgMy4zNS01LjI3IDcuNzYtNS42MSAxMi40NWwtNC41NSA2My42NmMtLjM0IDQuODItMi40NCA5LjM1LTUuOSAxMi43NGwtMTEuMjA3IDEwLjk2My0zLjA0MyAxLjk4M2MtMy44OCAzLjc1LTEwLjA2IDMuNy0xMy44OC0uMTJsLTUzLjY5Ny01NS4zM2MtMy44Ni0zLjg3LTMuODYtMTAuMTMgMC0xNGw2OC41LTY4LjI1M3oiIGZpbGw9IiNlOGU4ZTgiLz48cGF0aCBkPSJtMzguNjk5IDQzNC45NSA1NS44MjEgNTUuODItMy4wNTMgMi45ODdjLTMuODggMy43NS0xMC4wNiAzLjctMTMuODgtLjEybC01NS45My01NS45M2MtMy44Ni0zLjg3LTMuODYtMTAuMTMgMC0xNGw2OS43LTY5LjcgNi44NTUgMi42NjMgMy4wNDUgNy4yMzctNjIuNTU3IDYyLjU1N2MtMi4zNDQgMi4zNDQtMi4zNDQgNi4xNDMtLjAwMSA4LjQ4NnoiIGZpbGw9IiNkY2RiZGQiLz48cGF0aCBkPSJtMTIwLjg1NyAzNDQuMzA3LTE5LjYgMTkuNi05LjktOS45IDE5LjYtMTkuNiA3LjQ4NCAzLjQzOHoiIGZpbGw9IiM2ZjY1NzEiLz48Zz48cGF0aCBkPSJtMjAzLjE0OCAzODAuMDZjLTEuOTE5IDAtMy44MzktLjczMi01LjMwNC0yLjE5Ny0yLjkyOS0yLjkyOS0yLjkyOS03LjY3OCAwLTEwLjYwNmw1Ny42NS01Ny42NWMyLjkzLTIuOTI5IDcuNjc4LTIuOTI5IDEwLjYwNyAwczEuODU1IDYuNzA0LTEuMDc0IDkuNjMzbC00LjUxNCA2LjU2MS01Mi4wNjMgNTIuMDYzYy0xLjQ2MyAxLjQ2My0zLjM4MyAyLjE5Ni01LjMwMiAyLjE5NnoiIGZpbGw9IiNkY2RiZGQiLz48L2c+PHBhdGggZD0ibTI0My4xMjcgNDIxLjQ4NC0xNC41MzIgMTQuNTMyLS43NzEuMDY1Yy01LjM0NCA1LjM0NC0xMy4yODEgMi45ODItMTYuNjYxLTMuNzc4bC0zMy45MzktNzAuMTg5IDMwLjA1LTMwLjA1IDIuOTAxIDkuMDgzIDMuODM3IDQuNTMyIDMxLjE4OSA2My4wMjNjMi4xMzIgNC4yNjMgMS4yOTYgOS40MTItMi4wNzQgMTIuNzgyeiIgZmlsbD0iIzg1N2U4NyIvPjxwYXRoIGQ9Im0yMjguNTk1IDQzNi4wMTYtLjI3OS4yODFjLTUuMzUgNS4zNC0xNC4zNSAzLjg4LTE3LjczLTIuODhsLTM0LjYzLTcwLjAzIDkuNTMtMTcuNDUxIDIxLjc5LTEzLjg2OSA2LjczNSAxMy42MTItMTcuOTAzIDE4LjY3MmMtMS4xNjYgMS4yMTYtMS40NDUgMy4wMzEtLjY5OSA0LjU0MXoiIGZpbGw9IiM2ZjY1NzEiLz48cGF0aCBkPSJtNDA1LjAyNyA1Ni45MjctMTIuOTk0LTM5LjI4NGMtMS41NTktNC44NjItLjY4LTEwLjAxNiAzLTEzLjU1NS43ODUtLjc1NSAxLjc0MS0xLjQ1NiAyLjY0Mi0xLjk4MiAxLjAyNy0uNTk5IDIuODItMS42NDQgMi44Mi0xLjY0NCA0LjQ3NS0xLjIwNyA5LjQ0OS0uMDQ5IDEyLjk1MyAzLjQ1NWwxMi4zOTQgMTIuMzk0IDQuNjU0IDYuMDY1IDUuMjQ2IDMuODM0eiIgZmlsbD0iIzZmNjU3MSIvPjxwYXRoIGQ9Im00MzUuNzQ3IDI2LjIwNy0xMy4zOCAxOC4wMjMtMTguMTkgMTMuNTQ3LTEyLjkzLTQwLjMxYy0xLjU2LTQuODctLjIxLTEwLjE5IDMuNDctMTMuNzMgMS42OC0xLjYxIDMuNjc5LTIuNzE1IDUuNzc5LTMuMjc1bDguNSAyNi41MTNjLjY4NSAyLjEzOCAzLjM5IDIuNzkzIDQuOTc4IDEuMjA1bDExLjg3My0xMS44NzN6IiBmaWxsPSIjNjM1YTYzIi8+PHBhdGggZD0ibTQyNy40NDUgODAuMzYzIDEwLjg5MS04LjkwNiAzNy45NzQtMzcuOTc0YzEuOTUzLTEuOTUzIDEuOTUzLTUuMTE4IDAtNy4wNzFsLTEwLjQ4NC0xMC40ODQtNS45OTMtNS40NjhjLTEuOTUzLTEuOTUzLTUuMTE4LTEuOTUzLTcuMDcxIDBsLTQ2Ljk1IDQ4LjI3MXoiIGZpbGw9IiM4NTdlODciLz48cGF0aCBkPSJtNDI3LjE0NSA2MC4yNjYgMTEuMTkyIDExLjE5Mi0xNS4xOTcgMTUuMTk3LTIzLjkyLTIzLjkyIDUzLjE2Ny01My4xNjdjMS45Ni0xLjk2IDUuMTItMS45NiA3LjA3IDBsNi4zNyA2LjM2LTM4LjY4MiAzOC42ODJjLTEuNTYyIDEuNTYxLTEuNTYyIDQuMDk0IDAgNS42NTZ6IiBmaWxsPSIjNmY2NTcxIi8+PHBhdGggZD0ibTI2MS42OTIgMTg3LjgxNWg0OS40MTV2MjguODkyaC00OS40MTV6IiBmaWxsPSIjNmY2NTcxIiB0cmFuc2Zvcm09Im1hdHJpeCguNzA3IC0uNzA3IC43MDcgLjcwNyAtNTkuMTM1IDI2MS43NTYpIi8+PHBhdGggZD0ibTI1My40OSAxODYuMjc5aDQ5LjQxM3YxNS41NTZoLTQ5LjQxM3oiIGZpbGw9IiM2MzVhNjMiIHRyYW5zZm9ybT0ibWF0cml4KC43MDcgLS43MDcgLjcwNyAuNzA3IC01NS43MzcgMjUzLjU1MykiLz48cGF0aCBkPSJtMTMxLjYwOCAzMDYuOTkxLTIzLjk1Ni0yNi4xMTljLTQuOTgtNS4zMi00LjU1My0xMy43MTEuOTQxLTE4LjQ5OGwyLjUwNi0zLjMyNCA3Ny41NTYtNjcuNTgyYzQuOTM2LTQuMzAxIDEyLjMxMy00LjIxMSAxNy4xNDMuMjA4bDIuMTE4IDIuMDIzIDMuNzA1IDUuMjI0IDE1LjIwOSAxMi44NDd6IiBmaWxsPSIjODU3ZTg3Ii8+PHBhdGggZD0ibTIwNy45MTUgMTkzLjY5OS03OC41NzMgNzguNTczYy0xLjU3NSAxLjU3NS00LjEzNCAxLjU2LTUuNjkxLS4wMzRsLTEwLjEwNC0xMC4zNTFjLS44OS0uOTItMS43MDgtMS44NjgtMi40NDgtMi44MzdsLTMuNzIyIDMuMjM4Yy01LjQ5IDQuNzktNS45MiAxMy4xOC0uOTQgMTguNWw3LjA1MSA3LjMzOS0uMDAxLjAwMSAxOC4xMiAxOC44NiA5NS4yMi05NS4yMnoiIGZpbGw9IiM2ZjY1NzEiLz48cGF0aCBkPSJtMjMzLjU5NyAxODUuODA4LTEyNy43MzEgMTI4LjU4NWMtMy44NjYgMy44NjYtMy44NjYgMTAuMTM1IDAgMTQuMDAxbDQ1LjI3MyA0NC45OTZjMy44NjYgMy44NjYgMTAuMTM1IDMuODY2IDE0LjAwMSAwbDIuNzEtMS45MDEgNjMuNTc3LTYzLjU3N2MzLjA5My0zLjA5MyA4LjEwOC0zLjA5MyAxMS4yMDEgMGwxNy44ODggMTcuODg4IDU3LjIwMi01Ny4yMDJjMy44NjYtMy44NjYgMy44NjYtMTAuMTM1IDAtMTQuMDAxbC02Ni45Ny02Ni45Ny0zLjE0OS0xLjgyYy0zLjg2Ny0zLjg2NS0xMC4xMzYtMy44NjUtMTQuMDAyLjAwMXoiIGZpbGw9IiNlOGU4ZTgiLz48cGF0aCBkPSJtMTIxLjYwOSAzMjUuMjUgNDYuMjM3IDQ2LjIzNy0yLjkgMi45Yy0zLjg2IDMuODctMTAuMTMgMy44Ny0xNCAwbC00Ni4zOC00Ni4zOGMtMy44Ni0zLjg2LTMuODYtMTAuMTMgMC0xNGwxMjkuMjgtMTI5LjI4YzMuODctMy44NiAxMC4xNC0zLjg2IDE0IDBsMi45IDIuOS0xMjkuMTM3IDEyOS4xMzhjLTIuMzQzIDIuMzQzLTIuMzQzIDYuMTQyIDAgOC40ODV6IiBmaWxsPSIjZGNkYmRkIi8+PHBhdGggZD0ibTQzMC4wNjIgOTcuODE0LTcuNjk0IDcuNjk0LTcuNzczIDMuMzk0LTIuODMyIDcuMjExLTkuNDYgOS40Ni03LjQyMSAzLjA0Mi0zLjE4OSA3LjU2OC05LjQ2IDkuNDYtNy45NTEgMy41NzItMi42NTkgNy4wMzgtOS40NiA5LjQ2LTcuNDA4IDMuMDI5LTMuMTk3IDcuNTc2LTkuNDYgOS40Ni03LjY1NyAzLjI3Ny0yLjk1MyA3LjMzMy00Ljg2IDQuODYtMi40ODkgMS45NjhjLTMuOTA1IDMuOTA1LTEwLjIzNyAzLjkwNS0xNC4xNDIgMGwtMjYuOTk2LTI2Ljg5OWMtMy45MDUtMy45MDUtMy45MDUtMTAuMjM3IDAtMTQuMTQybDEwNC45MDMtMTA1LjQzNmMzLjkwNS0zLjkwNSAxMC4yMzctMy45MDUgMTQuMTQyIDBsMi45ODEgMS44OTggMjUuMDM1IDI1LjAzNWMzLjkwNSAzLjkwNSAzLjkwNSAxMC4yMzcgMCAxNC4xNDJ6IiBmaWxsPSIjODU3ZTg3Ii8+PHBhdGggZD0ibTI5Ny4zNDYgMTcxLjk3NiAyOS4yODEgMjkuMjcyLTIuODMgMi44M2MtMy45MSAzLjkxLTEwLjI0IDMuOTEtMTQuMTQgMGwtMjcuODYtMjcuODZjLTMuOTEtMy45LTMuOTEtMTAuMjMgMC0xNC4xNGw3LjY5LTcuNjkgNi4zMjEtMS45OTIgNC4yODktOC42MTkgOS40Ni05LjQ2IDYuODU4LTIuNTI5IDMuNzQ3LTguMDc3IDkuNDY0LTkuNDY1IDYuODg3LTIuNTU4IDMuNzE3LTguMDQ3IDkuNDYtOS40NiA2Ljg4Ni0yLjU1NyAzLjcyMy04LjA1MyA5LjQ2LTkuNDYgNi4xNTgtMS44MjkgNC40NDYtOC43NzYgNy42OTUtNy42OTVjMy45MS0zLjkgMTAuMjQtMy45IDE0LjE0IDBsMi44MyAyLjgzLTEwNy42ODMgMTA3LjY3N2MtMS41NjIgMS41NjMtMS41NjIgNC4wOTYuMDAxIDUuNjU4eiIgZmlsbD0iIzZmNjU3MSIvPjxnPjxnPjxwYXRoIGQ9Im00MjIuMzY4IDEwNS41MDgtMTAuNjA1IDEwLjYwNS00MS41NjYtNDEuNTY2IDUuOC0zLjczIDQuMzctNy4zMXoiIGZpbGw9IiM2ZjY1NzEiLz48L2c+PGc+PHBhdGggZD0ibTQwMi4zMDMgMTI1LjU3My0xMC42MDYgMTAuNjE0LTQyLjAxLTQyLjAxIDcuMjEzLTIuMjIyIDMuMzk3LTguMzg4eiIgZmlsbD0iIzZmNjU3MSIvPjwvZz48Zz48cGF0aCBkPSJtMzgyLjIzMyAxNDUuNjQzLTEwLjYwNyAxMC42MTQtNDItNDIuMDEgNi42MzEtMy4zMDIgNC4yNDItNy4wMzV6IiBmaWxsPSIjNmY2NTcxIi8+PC9nPjxnPjxwYXRoIGQ9Im0zNjIuMTYzIDE2NS43MTMtMTAuNjA2IDEwLjYwNC00Mi00MiA2LjIzNS0yLjcyOSA0Ljg2NS03LjM4MXoiIGZpbGw9IiM2ZjY1NzEiLz48L2c+PGc+PHBhdGggZD0ibTM0Mi4wOTcgMTg1Ljc3Ny0xMC42MSAxMC42MS00Mi00MiA3LjQ2OC0zLjcyNiAzLjE0Mi02Ljg4NHoiIGZpbGw9IiM2ZjY1NzEiLz48L2c+PC9nPjxnPjxnPjxwYXRoIGQ9Im0zNzIuNTEyIDY2Ljc1NWgxNC45OTh2MTQuMDAzaC0xNC45OTh6IiBmaWxsPSIjNjM1YTYzIiB0cmFuc2Zvcm09Im1hdHJpeCguNzA3IC0uNzA3IC43MDcgLjcwNyA1OS4wNDggMjkwLjE2MSkiLz48L2c+PGc+PHBhdGggZD0ibTM1Mi40MzkgODYuODIyaDE1LjAwNXYxNC4wMDFoLTE1LjAwNXoiIGZpbGw9IiM2MzVhNjMiIHRyYW5zZm9ybT0ibWF0cml4KC43MDcgLS43MDcgLjcwNyAuNzA3IDM5LjA4MyAyODEuOTk5KSIvPjwvZz48Zz48cGF0aCBkPSJtMzMyLjM3MyAxMDYuODk0aDE1LjAwMXYxMy45OTdoLTE1LjAwMXoiIGZpbGw9IiM2MzVhNjMiIHRyYW5zZm9ybT0ibWF0cml4KC43MDcgLS43MDcgLjcwNyAuNzA3IDE5LjAxNCAyNzMuNjg3KSIvPjwvZz48Zz48cGF0aCBkPSJtMzEyLjMwOSAxMjYuOTY0aDE0Ljk5OHYxMy45OThoLTE0Ljk5OHoiIGZpbGw9IiM2MzVhNjMiIHRyYW5zZm9ybT0ibWF0cml4KC43MDcgLS43MDcgLjcwNyAuNzA3IC0uOTk1IDI2NS41MjQpIi8+PC9nPjxnPjxwYXRoIGQ9Im0yOTIuMjM5IDE0Ny4wMzJoMTUuMDA1djE0LjAwMWgtMTUuMDA1eiIgZmlsbD0iIzYzNWE2MyIgdHJhbnNmb3JtPSJtYXRyaXgoLjcwNyAtLjcwNyAuNzA3IC43MDcgLTIxLjEyNCAyNTcuMDY2KSIvPjwvZz48L2c+PHBhdGggZD0ibTIwMi43MTkgMjkyLjUxIDYuNDgzLTUuNjY4IDQ5LjU2OS00OS41NjljMS45NTMtMS45NTMgMS45NTMtNS4xMTggMC03LjA3MWwtNy41NjQtNy41NjQtNi4zNTUtNS4xMjNjLTEuOTUzLTEuOTUzLTUuMTE4LTEuOTUzLTcuMDcxIDBsLTU1LjI0OCA1NC43MTZjLTEuOTUzIDEuOTUzLTEuOTUzIDUuMTE4IDAgNy4wNzFsMTMuMTE1IDEzLjIwOWMxLjk1MiAxLjk1MiA1LjExOCAxLjk1MiA3LjA3MS0uMDAxeiIgZmlsbD0iI2RjZGJkZCIvPjxwYXRoIGQ9Im0yMDAuOTI1IDI3OC41NjYgOC4yODEgOC4yODEtNi4zNyA2LjM2Yy0xLjk1IDEuOTUtNS4xMiAxLjk1LTcuMDcgMGwtMTMuOTMtMTMuOTNjLTEuOTUtMS45NS0xLjk1LTUuMTIgMC03LjA3bDU1LjkzLTU1Ljk0YzEuOTYtMS45NSA1LjEyLTEuOTUgNy4wNyAwbDYuMzcgNi4zNy01MC4yODEgNTAuMjcyYy0xLjU2MiAxLjU2Mi0xLjU2MiA0LjA5NSAwIDUuNjU3eiIgZmlsbD0iI2QxZDFkMSIvPjxnPjxwYXRoIGQ9Im0xNDYuOTk4IDMzNS41NDRjLTEuOTE5IDAtMy44MzktLjczMi01LjMwNC0yLjE5Ny0yLjkyOS0yLjkyOS0yLjkyOS03LjY3OCAwLTEwLjYwNmwyNy4zMDItMjcuMzAyYzIuOTMtMi45MjkgNy42NzgtMi45MjkgMTAuNjA3IDBzMi45MjkgNy42NzggMCAxMC42MDZsLTI3LjMwMiAyNy4zMDJjLTEuNDY0IDEuNDY1LTMuMzg0IDIuMTk3LTUuMzAzIDIuMTk3eiIgZmlsbD0iI2RjZGJkZCIvPjwvZz48L2c+PC9zdmc+"
            /> */}
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
          </>
        )}
        {showWA && (
          <Column>
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
            <div className="is-flex">
              <Textbox
                label="type"
                value={x.type}
                onChange={(v) =>
                  setX({ type: parseInt(v as string, 10) as number })
                }
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
                value={x.energy ? 1 : 0}
                onChange={(v) => setX({ energy: v as number })}
              />
            </div>
            <AbilityDisplay ability={x} />
            <AbilityDisplay ability={x} isPL={true} />
          </Column>
        )}
        <Column>
          <h3>Character</h3>
          <textarea
            cols={90}
            rows={20}
            value={getCharacterJSON()}
            readOnly
          ></textarea>
          <h3>Weapons and abilities</h3>
          <textarea
            cols={90}
            rows={20}
            value={getWeaponsJSON()}
            readOnly
          ></textarea>
        </Column>
      </Columns>
    </>
  );
};

export default CardEdit;
