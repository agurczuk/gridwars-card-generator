export enum WeponOrAbilityType {
  gun,
  attack,
  special,
  ability,
  passive,
}

export type WeaponOrAbility = {
  name: string;
  namePL?: string;
  type: WeponOrAbilityType;
  range?: number;
  description?: string;
  descriptionPL?: string;
  statistic?: number;
  dice?: number;
  shieldPiercing?: number;
  demage?: number;
  special?: boolean;
  actions?: number;
  energy?: number;
};

const weaponOrAbility: Array<WeaponOrAbility> = [
  //takashi
  {
    name: "Auto turret base",
    namePL: "Automatyczne działka",
    type: WeponOrAbilityType.gun,
    description: "You may reroll 1 dice",
    descriptionPL: "Możesz przerzucić jedną kostkę",
    dice: 4,
    shieldPiercing: 1,
    demage: 1,
    range: 9,
    statistic: 4,
  },
  {
    name: "Rotating turret",
    namePL: "Obracające się działko",
    description:
      "Until the next activation, Takeshi gains attacks from overwatch against every visible unit instead of just those in line",
    descriptionPL:
      "Do następnej aktywacji Takahashi zyskuję atak osłony przeciwko każdemu widocznemu wrogowi zamiast tylko tym w linii",
    type: WeponOrAbilityType.ability,
    actions: 0,
    energy: 2,
  },
  {
    name: "Optical fiber",
    namePL: "Światłowód",
    type: WeponOrAbilityType.passive,
    description:
      "Takahashi gains a move action after each successful hacking action",
    descriptionPL:
      "Takahashi zyskuje dodatkowy ruch po każdej udanej akcji hakowania",
  },
  {
    name: "Decomissioning",
    type: WeponOrAbilityType.passive,
    description:
      "When Takahashi is destroyed, place a neutral sentry unit in his place facing any direction you choose",
    descriptionPL:
      "Kiedy Takahashi zostanie zniszczony umieść w jego miejscu neutralną jednostkę",
  },
  //kimiko
  {
    name: "Brellablade",
    namePL: "Parasostrze",
    type: WeponOrAbilityType.attack,
    description: "If this attack deals dmg, gain 2 shields",
    descriptionPL: "Gdy atak zada obrażenia - zyskaj 2 tarcze",
    dice: 3,
    shieldPiercing: 0,
    demage: 1,
    range: 1,
  },
  {
    name: "concealed pistol",
    namePL: "Ukryty pistolet",
    description: "attack twice",
    descriptionPL: "Atakuj dwa razy",
    dice: 4,
    type: WeponOrAbilityType.gun,
    demage: 1,
  },
  {
    name: "Distraction",
    namePL: "Odwrócenie uwagi",
    description: "put stun on any unit in range 5, then move 2",
    descriptionPL:
      "daj stan ogłuszenie jednostce w zasięgu 5 - potem porusz sie o 2",
    special: true,
    type: WeponOrAbilityType.ability,
    actions: 1,
    energy: 0,
  },
  {
    name: "cover blown",
    namePL: "utrata przykrywki",
    type: WeponOrAbilityType.ability,
    description:
      "put stun on Kimiko. Give another ally a ranged attack action that can only target an enemy in range 4 from kimiko",
    descriptionPL:
      "Kimiko otrzymuje stan ogłuszony. Sojusznik otrzymuje atak przeciwko wrogu w odległości max 4 od kimiko",
    special: true,
    actions: 1,
    energy: 0,
  },
  //dr prince
  { name: "Autonomic arm", type: WeponOrAbilityType.attack },
];

const getWeaponOrAbility = (name: string): WeaponOrAbility | null => {
  const found = weaponOrAbility.filter(
    (x) =>
      x.name.toLowerCase().replace(" ", "").trim() ===
      name.toLowerCase().replace(" ", "").trim()
  );
  if (found.length > 0) return found[0];

  return null;
};

export { getWeaponOrAbility };
