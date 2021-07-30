import {
  mdiAccountAlert,
  mdiBoxingGlove,
  mdiBrain,
  mdiCogSync,
  mdiDiceMultiple,
  mdiFlare,
  mdiHeartMultipleOutline,
  mdiPistol,
  mdiShieldOutline,
  mdiShoePrint,
  mdiUsbFlashDriveOutline,
} from "@mdi/js";

export enum CharacterEnum {
  Takahashi = "Takahashi",
  Kimiko = "Kimiko",
  DrPrince = "Doctor Prince",
}

export type ParameterType = {
  icon: string;
  value: number;
};

export type CharacterType = {
  name: string;
  cost: number;
  parameters: Array<ParameterType>;
  ability: string;
  abilityPL?: string;
  abilityName: string;
  abilityNamePL?: string;
  type: string;
  abilities: Array<string>;
  img?: string;
};

const characters: Array<CharacterType> = [
  {
    name: "Takahashi",
    cost: 44,
    parameters: [
      { icon: mdiHeartMultipleOutline, value: 5 }, //health
      { icon: mdiShieldOutline, value: 1 }, //armor
      { icon: mdiShoePrint, value: 4 }, //speed
      { icon: mdiFlare, value: 2 }, //actions
      { icon: mdiPistol, value: 4 }, //gun
      { icon: mdiDiceMultiple, value: 4 }, //special
      { icon: mdiBoxingGlove, value: 2 }, // hand
      { icon: mdiAccountAlert, value: 4 }, //body
      { icon: mdiUsbFlashDriveOutline, value: 7 }, //hack
      { icon: mdiCogSync, value: 6 }, //gears
      { icon: mdiBrain, value: 7 },
    ],
    ability: "Takahashi and allies in range 3 have overwatch",
    abilityPL: "Takashi i jego sprzymierzeńcy w zasięgu 3 mają osłonę",
    abilityName: "Sentry formation",
    abilityNamePL: "Czujna formacja",
    type: "cyborg",
    abilities: [
      "Auto turret base",
      "Rotating turret",
      "optical fiber",
      "decomissioning",
    ],
  },
  {
    name: "Kimiko",
    cost: 33,
    parameters: [
      { icon: mdiHeartMultipleOutline, value: 4 }, //health
      { icon: mdiShieldOutline, value: 1 }, //armor
      { icon: mdiShoePrint, value: 4 }, //speed
      { icon: mdiFlare, value: 2 }, //actions
      { icon: mdiPistol, value: 4 }, //gun
      { icon: mdiDiceMultiple, value: 2 }, //special
      { icon: mdiBoxingGlove, value: 4 }, // hand
      { icon: mdiAccountAlert, value: 2 }, //body
      { icon: mdiUsbFlashDriveOutline, value: 5 }, //hack
      { icon: mdiCogSync, value: 3 }, //gears
      { icon: mdiBrain, value: 2 },
    ],
    ability:
      "As long as there are other allies active and kimiko was not yet activated this round, she cannot be targeted by attacks and abilities",
    abilityPL:
      "Dopóki w grze są sojusznicy a Kimiko nie aktywowała się w tej rundzie, nie może być celem ataku lub zdolności",
    abilityName: "Pedestrian disguise",
    abilityNamePL: "Znikanie w tłumie",
    type: "organic",
    abilities: [
      "Brellablade",
      "Concealed pistol",
      "distraction",
      "cover blown",
    ],
    img: "kimiko.png",
  },
  {
    name: CharacterEnum.DrPrince,
    cost: 40,
    parameters: [
      { icon: mdiHeartMultipleOutline, value: 4 }, //health
      { icon: mdiShieldOutline, value: 0 }, //armor
      { icon: mdiShoePrint, value: 3 }, //speed
      { icon: mdiFlare, value: 3 }, //actions
      { icon: mdiPistol, value: 3 }, //gun
      { icon: mdiDiceMultiple, value: 4 }, //special
      { icon: mdiBoxingGlove, value: 3 }, // hand
      { icon: mdiAccountAlert, value: 4 }, //body
      { icon: mdiUsbFlashDriveOutline, value: 5 }, //hack
      { icon: mdiCogSync, value: 7 }, //gears
      { icon: mdiBrain, value: 4 },
    ],
    ability:
      "When doctor diana is building from a blueprint, its material cost is reduced by 1",
    abilityPL:
      "Kiedy doktor diana buduje z planu, jego koszt materiału jest obniżony o 1",
    abilityName: "Thirst for invention",
    abilityNamePL: "Pragnienie wynalazków",
    type: "cyborg",
    abilities: [
      "Autonomic arm",
      "TX-Flame inferno",
      "Imported parts",
      "Arm's guard mode",
    ],
    img: "drPrince.png",
  },
];

const getCharacter = (name: string): CharacterType | null => {
  const found = characters.filter(
    (x) =>
      x.name.toLowerCase().replace(" ", "").trim() ===
      name.toLowerCase().replace(" ", "").trim()
  );
  if (found.length > 0) return found[0];

  return null;
};

export { getCharacter };
