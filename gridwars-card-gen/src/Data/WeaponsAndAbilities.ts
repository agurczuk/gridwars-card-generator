export enum WeponOrAbilityType {
  gun = 1,
  attack = 2,
  special = 3,
  ability = 4,
  passive = 5,
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
  {
    name: "Auto turret base",
    namePL: "Automatyczne działka",
    type: WeponOrAbilityType.gun,
    range: 9,
    description: "You may reroll 1 dice",
    descriptionPL: "Możesz przerzucić jedną kostkę",
    statistic: 4,
    dice: 4,
    shieldPiercing: 1,
    demage: 1,
    special: false,
    actions: undefined,
    energy: undefined,
  },
  {
    name: "Rotating turret",
    namePL: "Obracające się działko",
    type: WeponOrAbilityType.ability,
    range: undefined,
    description:
      "Until the next activation, Takeshi gains attacks from overwatch against every visible unit instead of just those in line",
    descriptionPL:
      "Do następnej aktywacji Takahashi zyskuję atak osłony przeciwko każdemu widocznemu wrogowi zamiast tylko tym w linii",
    statistic: undefined,
    dice: undefined,
    shieldPiercing: undefined,
    demage: undefined,
    special: false,
    actions: 0,
    energy: 2,
  },
  {
    name: "Optical fiber",
    namePL: "Światłowód",
    type: WeponOrAbilityType.passive,
    range: undefined,
    description:
      "Takahashi gains a move action after each successful hacking action",
    descriptionPL:
      "Takahashi zyskuje dodatkowy ruch po każdej udanej akcji hakowania",
    statistic: undefined,
    dice: undefined,
    shieldPiercing: undefined,
    demage: undefined,
    special: false,
    actions: undefined,
    energy: undefined,
  },
  {
    name: "Decomissioning",
    namePL: "undefined",
    type: WeponOrAbilityType.passive,
    range: undefined,
    description:
      "When Takahashi is destroyed, place a neutral sentry unit in his place facing any direction you choose",
    descriptionPL:
      "Kiedy Takahashi zostanie zniszczony umieść w jego miejscu neutralną jednostkę",
    statistic: undefined,
    dice: undefined,
    shieldPiercing: undefined,
    demage: undefined,
    special: false,
    actions: undefined,
    energy: undefined,
  },
  {
    name: "Brellablade",
    namePL: "Parasostrze",
    type: WeponOrAbilityType.attack,
    range: 1,
    description: "If this attack deals dmg, gain 2 shields",
    descriptionPL: "Gdy atak zada obrażenia - zyskaj 2 tarcze",
    statistic: undefined,
    dice: 3,
    shieldPiercing: 0,
    demage: 1,
    special: false,
    actions: undefined,
    energy: undefined,
  },
  {
    name: "concealed pistol",
    namePL: "Ukryty pistolet",
    type: WeponOrAbilityType.gun,
    range: undefined,
    description: "attack twice",
    descriptionPL: "Atakuj dwa razy",
    statistic: undefined,
    dice: 4,
    shieldPiercing: undefined,
    demage: 1,
    special: false,
    actions: undefined,
    energy: undefined,
  },
  {
    name: "Distraction",
    namePL: "Odwrócenie uwagi",
    type: WeponOrAbilityType.ability,
    range: undefined,
    description: "put stun on any unit in range 5, then move 2",
    descriptionPL:
      "daj stan ogłuszenie jednostce w zasięgu 5 - potem porusz sie o 2",
    statistic: undefined,
    dice: undefined,
    shieldPiercing: undefined,
    demage: undefined,
    special: true,
    actions: 1,
    energy: 0,
  },
  {
    name: "cover blown",
    namePL: "utrata przykrywki",
    type: WeponOrAbilityType.ability,
    range: undefined,
    description:
      "put stun on Kimiko. Give another ally a ranged attack action that can only target an enemy in range 4 from kimiko",
    descriptionPL:
      "Kimiko otrzymuje stan ogłuszony. Sojusznik otrzymuje atak przeciwko wrogu w odległości max 4 od kimiko",
    statistic: undefined,
    dice: undefined,
    shieldPiercing: undefined,
    demage: undefined,
    special: true,
    actions: 1,
    energy: 0,
  },
  {
    name: "Autonomic arm",
    namePL: "undefined",
    type: WeponOrAbilityType.attack,
    range: undefined,
    description: "undefined",
    descriptionPL: "undefined",
    statistic: undefined,
    dice: undefined,
    shieldPiercing: undefined,
    demage: undefined,
    special: false,
    actions: undefined,
    energy: undefined,
  },
  {
    name: "TCPD Baton",
    namePL: "Pałka TCPD",
    type: WeponOrAbilityType.attack,
    range: 1,
    description: "Inflicts stun",
    descriptionPL: "Ogłusza",
    statistic: 4,
    dice: 5,
    shieldPiercing: 0,
    demage: 1,
    special: true,
    actions: undefined,
    energy: undefined,
  },
  {
    name: "TCPD Pistol",
    namePL: "Pistolet TCPD",
    type: WeponOrAbilityType.gun,
    range: 6,
    description: "",
    descriptionPL: "",
    statistic: 4,
    dice: 3,
    shieldPiercing: 1,
    demage: 1,
    special: false,
    actions: undefined,
    energy: undefined,
  },
  {
    name: "Authority",
    namePL: "Autorytet",
    type: WeponOrAbilityType.ability,
    range: undefined,
    description:
      "Each police officer unit in range 6 gains a move, attak, or charge action",
    descriptionPL:
      "Każda jednostka policji w zasięgu 6 zyskuje dodatkowy ruch, atak lub szarżę",
    statistic: undefined,
    dice: undefined,
    shieldPiercing: undefined,
    demage: undefined,
    special: true,
    actions: 1,
    energy: 1,
  },
  {
    name: "Helipad extraction",
    namePL: "Ekstrakcja na helipad",
    type: WeponOrAbilityType.ability,
    range: undefined,
    description:
      "Blink any ally to your deploy zone. can be used once per game.",
    descriptionPL:
      "Blink jednego sojusznika do swojej strefy startowej. Może być użyte raz w grze.",
    statistic: undefined,
    dice: undefined,
    shieldPiercing: undefined,
    demage: undefined,
    special: true,
    actions: 1,
    energy: 1,
  },
  {
    name: "ION Cannon",
    namePL: "ION Cannon",
    type: WeponOrAbilityType.special,
    range: 7,
    description: "Plasma weapon",
    descriptionPL: "Broń plazmowa",
    statistic: 5,
    dice: 4,
    shieldPiercing: 1,
    demage: 1,
    special: false,
    actions: undefined,
    energy: undefined,
  },
  {
    name: "Magnetic field",
    namePL: "Pole magnetyczne",
    type: WeponOrAbilityType.passive,
    range: undefined,
    description:
      "As long as hardfall has 2 or more power tokens, he has +1 armor",
    descriptionPL:
      "Tak długo jak hardfall ma 2 lub więcej żetonów mocy ma +1 zbroi.",
    statistic: undefined,
    dice: undefined,
    shieldPiercing: undefined,
    demage: undefined,
    special: false,
    actions: undefined,
    energy: undefined,
  },
  {
    name: "hazmat suit",
    namePL: "strój hazmat",
    type: WeponOrAbilityType.passive,
    range: undefined,
    description: "Hardfall receives no dmg from template wapons and mines",
    descriptionPL: "Hardfall nie otrzymuje obrażeń od min i broni z siatką.",
    statistic: undefined,
    dice: undefined,
    shieldPiercing: undefined,
    demage: undefined,
    special: false,
    actions: undefined,
    energy: undefined,
  },
  {
    name: "long arm of the law",
    namePL: "Długie ramię sprawiedliwości",
    type: WeponOrAbilityType.passive,
    range: undefined,
    description: "ION Cannon has +2 range when attacking wanted enemies",
    descriptionPL:
      "ION Cannon ma +2 zasięgu kiedy atakuje poszukiwanych wrogów",
    statistic: undefined,
    dice: undefined,
    shieldPiercing: undefined,
    demage: undefined,
    special: false,
    actions: undefined,
    energy: undefined,
  },
  {
    name: "mechanical limb",
    namePL: "mechaniczne ramię",
    type: WeponOrAbilityType.attack,
    range: 1,
    description: "undefined",
    descriptionPL: "undefined",
    statistic: 4,
    dice: 6,
    shieldPiercing: 0,
    demage: 1,
    special: false,
    actions: undefined,
    energy: undefined,
  },
  {
    name: "cyberpoison",
    namePL: "cyber trucizna",
    type: WeponOrAbilityType.special,
    range: 5,
    description: "the number of dice is equal to the target hacking statistic",
    descriptionPL: "liczba kości jest równa wartości hakowania wroga",
    statistic: 4,
    dice: 0,
    shieldPiercing: 1,
    demage: 1,
    special: false,
    actions: undefined,
    energy: undefined,
  },
  {
    name: "melting ray",
    namePL: "Roztapiajacy promień",
    type: WeponOrAbilityType.gun,
    range: 9,
    description: "fusion weapon",
    descriptionPL: "broń fuzyjna",
    statistic: 4,
    dice: 3,
    shieldPiercing: 0,
    demage: 1,
    special: false,
    actions: undefined,
    energy: undefined,
  },
  {
    name: "web leap",
    namePL: "skok pajęczy",
    type: WeponOrAbilityType.ability,
    description: "jump 4 and gain a ranged or special weapon attack action",
    descriptionPL: "skocz 4 i zyskaj atak specjalny lub atak na odległość",
    special: true,
    actions: 1,
    energy: 2,
  },
  {
    name: "scope rifle",
    namePL: "karabin z lunetą",
    type: WeponOrAbilityType.special,
    range: 13,
    description: "undefined",
    descriptionPL: "undefined",
    statistic: 4,
    dice: 3,
    shieldPiercing: 1,
    demage: 1,
    special: false,
    actions: undefined,
    energy: undefined,
  },
  {
    name: "smokescreen",
    namePL: "zasłona dymna",
    type: WeponOrAbilityType.ability,
    range: undefined,
    description:
      "until the next activation, enemy and neutral units in range 10 do not gain attacks from overwatch.",
    descriptionPL:
      "do następnej aktywacji jednostki wrogie i neutralne w zasięgu 10 nie zyskują ataków z obserwacji",
    statistic: undefined,
    dice: undefined,
    shieldPiercing: undefined,
    demage: undefined,
    special: true,
    actions: 0,
    energy: 1,
  },
  {
    name: "Data drain",
    namePL: "Wysyanie danych",
    type: WeponOrAbilityType.ability,
    range: undefined,
    description:
      "Choose a terminal in range 13. All units adjecent to it loose 1 energy and you gain 1 energy for each energy lost.",
    descriptionPL:
      "Wybierz terminal w zasiegu 13. Wszystkie jednostki obok tracą 1 energię która zyskuje Furora",
    statistic: undefined,
    dice: undefined,
    shieldPiercing: undefined,
    demage: undefined,
    special: true,
    actions: 0,
    energy: 0,
  },
  {
    name: "Justicebringer",
    namePL: "Sprawiedliwość",
    type: WeponOrAbilityType.passive,
    range: undefined,
    description: "when furora attacks a wanted unit, she ignores cover.",
    descriptionPL: "Kiedy furora atakuje poszukiwanego wroga, ignoruje osłonę.",
    statistic: undefined,
    dice: undefined,
    shieldPiercing: undefined,
    demage: undefined,
    special: false,
    actions: undefined,
    energy: undefined,
  },
  {
    name: "Legalizer Pistol",
    namePL: "Pistolet Legalizacyjny",
    type: WeponOrAbilityType.gun,
    range: 6,
    description: "Handy. Has +1 die and +1 DMG against wanted enemies",
    descriptionPL:
      "Handy. Ma +1 kostę ataku i +1 obrażeń przeciwko poszukiwanym",
    statistic: 5,
    dice: 3,
    shieldPiercing: 0,
    demage: 1,
    special: false,
    actions: undefined,
    energy: undefined,
  },
  {
    name: "Bike turret",
    namePL: "Działko motoru",
    type: WeponOrAbilityType.special,
    range: 9,
    description: "undefined",
    descriptionPL: "undefined",
    statistic: 5,
    dice: 4,
    shieldPiercing: 1,
    demage: 1,
    special: false,
    actions: undefined,
    energy: undefined,
  },
  {
    name: "One-man job",
    namePL: "robota dla jednego",
    type: WeponOrAbilityType.passive,
    range: undefined,
    description:
      "when there is no other ally in range 6, harsh can reroll 1die in his attack rolls",
    descriptionPL:
      "Kiedy nie ma innego sojusznika w zasięgu 6, harsh może przerzucić jedną kostkę podczas ataku",
    statistic: undefined,
    dice: undefined,
    shieldPiercing: undefined,
    demage: undefined,
    special: false,
    actions: undefined,
    energy: undefined,
  },
  {
    name: "dispatch",
    namePL: "centrala",
    type: WeponOrAbilityType.ability,
    range: undefined,
    description:
      "when an enemy moves out of the bikes way to avoid overrun, put a wanted token on that enemy",
    descriptionPL:
      "kiedy przeciwnki usunie się z droki motoru by uninąć przejechania - nałóż na niego żeton poszukiwanego",
    statistic: undefined,
    dice: undefined,
    shieldPiercing: undefined,
    demage: undefined,
    special: false,
    actions: undefined,
    energy: undefined,
  },
  {
    name: "wall-penetrating ammo",
    namePL: "amunicja przebijająca",
    type: WeponOrAbilityType.gun,
    range: 4,
    description: "seeking weapon",
    descriptionPL: "broń szukająca",
    statistic: 5,
    dice: 3,
    shieldPiercing: 0,
    demage: 1,
    special: false,
    actions: undefined,
    energy: undefined,
  },
  {
    name: "burst ammo",
    namePL: "amunicja seryjna",
    type: WeponOrAbilityType.gun,
    range: 6,
    description: "handy. change all energy results to hits",
    descriptionPL: "handy. zmień wszystkie wyniki energii w sukcesy",
    statistic: 5,
    dice: 4,
    shieldPiercing: 1,
    demage: 1,
    special: false,
    actions: undefined,
    energy: undefined,
  },
  {
    name: "tazing ammo",
    namePL: "amunicja ogłuszająca",
    type: WeponOrAbilityType.gun,
    range: 6,
    description: "handy. inflicts stun.",
    descriptionPL: "handy. powoduje ogłuszenie",
    statistic: 5,
    dice: 1,
    shieldPiercing: 3,
    demage: 1,
    special: false,
    actions: undefined,
    energy: undefined,
  },
  //bob
  {
    name: "anti-riot baton",
    namePL: "pałka zamieszkowa",
    type: WeponOrAbilityType.attack,
    range: 2,
    description: "divide the attack dice amon any number of enemies in range",
    descriptionPL: "przydziel kości ataku między dowolnych wrogów w zasięgu",
    statistic: 3,
    dice: 6,
    shieldPiercing: 0,
    demage: 1,
    special: false,
    actions: undefined,
    energy: undefined,
  },
  {
    name: "turtle shield",
    namePL: "żółwia tarcza",
    type: WeponOrAbilityType.ability,
    range: undefined,
    description:
      "gain a throw action (you can only throw forward) and then a charge action targeting the thrown unit",
    descriptionPL:
      "zyskaj akcję rzutu (możesz rzucić tylko do przodu) a potem akcje szarży celującą w rzuconego przeciwnika",
    statistic: undefined,
    dice: undefined,
    shieldPiercing: undefined,
    demage: undefined,
    special: true,
    actions: 1,
    energy: 0,
  },
  {
    name: "full gear",
    namePL: "pełen ekwipunek",
    type: WeponOrAbilityType.passive,
    range: undefined,
    description: "bob blunt has +2 armour against range weapon attacks",
    descriptionPL: "bob blunt ma +2 zbroi przeciwko atakom z zasięgu",
    statistic: undefined,
    dice: undefined,
    shieldPiercing: undefined,
    demage: undefined,
    special: false,
    actions: undefined,
    energy: undefined,
  },
  {
    name: "phalanx",
    namePL: "falanga",
    type: WeponOrAbilityType.ability,
    range: undefined,
    description:
      "enemy ranged wapon attacks must target bob blunt if he is the closes visible target",
    descriptionPL:
      "ataki z odległości muszą atakować boba, jeśli jest najbliższą widoczą jednostką",
    statistic: undefined,
    dice: undefined,
    shieldPiercing: undefined,
    demage: undefined,
    special: false,
    actions: undefined,
    energy: undefined,
  },
  {
    name: "trophy baton",
    namePL: "Pałka trofeum",
    type: WeponOrAbilityType.attack,
    range: 1,
    description:
      "Gain 1 shield for each dmg dealt. if there is an allied dob unit in the same combat",
    descriptionPL:
      "Zyskaj 1 tarczę za każde obrażenie zadane jeżeli w tej samej walce jest pies",
    statistic: 4,
    dice: 3,
    shieldPiercing: 0,
    demage: 1,
    special: false,
    actions: undefined,
    energy: undefined,
  },
  {
    name: "TCPD Machine gun",
    namePL: "Karabin TCPD",
    type: WeponOrAbilityType.gun,
    range: 9,
    description: "",
    descriptionPL: "",
    statistic: 4,
    dice: 4,
    shieldPiercing: 1,
    demage: 1,
    special: false,
    actions: undefined,
    energy: undefined,
  },
  {
    name: "k9 handler",
    namePL: "Psi trener",
    type: WeponOrAbilityType.passive,
    range: undefined,
    description:
      "at the beginning of activation restore 1hp to all allied dog units in range 6",
    descriptionPL:
      "na początku aktywacji przywróć 1HP wszystkim psom w zasięgu 6",
    statistic: undefined,
    dice: undefined,
    shieldPiercing: undefined,
    demage: undefined,
    special: false,
    actions: undefined,
    energy: undefined,
  },
  {
    name: "synchronized routine",
    namePL: "synchroniczna rutyna",
    type: WeponOrAbilityType.ability,
    range: undefined,
    description:
      "when blender is attacking a unit in combat with an allied dog unit, he gains precision and changes all energy results to hits",
    descriptionPL:
      "kiedy blender atakuje w walce razem z psem zyskuje precyzje i zmienia wszystkie energie na trafienia",
    statistic: undefined,
    dice: undefined,
    shieldPiercing: undefined,
    demage: undefined,
    special: false,
    actions: undefined,
    energy: undefined,
  },
  {
    name: "mechanical bite",
    namePL: "mechaniczne ugryzienie",
    type: WeponOrAbilityType.attack,
    range: 1,
    description: "critical strike",
    descriptionPL: "krytyczny atak",
    statistic: 3,
    dice: 2,
    shieldPiercing: 0,
    demage: 1,
    special: false,
    actions: undefined,
    energy: undefined,
  },
  {
    name: "Electrohowl",
    namePL: "elektro-wycie",
    type: WeponOrAbilityType.special,
    range: 4,
    description: "precision. attacks 1 time for each energy the target has",
    descriptionPL: "precyzja. atakuje tyle razy ile energi ma przeciwnik",
    statistic: 3,
    dice: 3,
    shieldPiercing: 1,
    demage: 1,
    special: false,
    actions: undefined,
    energy: undefined,
  },
  {
    name: "watchdog",
    namePL: "stróż",
    type: WeponOrAbilityType.passive,
    range: undefined,
    description: "neutral units in range 8 cannot be hacked by enemies",
    descriptionPL:
      "neutralne jednostki w zasięgu 8 nie mogą być zhakowane przez wrogów",
    statistic: undefined,
    dice: undefined,
    shieldPiercing: undefined,
    demage: undefined,
    special: false,
    actions: undefined,
    energy: undefined,
  },
  {
    name: "security transmitter",
    namePL: "transmitter ochronny",
    type: WeponOrAbilityType.ability,
    range: undefined,
    description: "other allies in range 6 have +2 IDS statistic",
    descriptionPL: "sojusznicy w zasięgu 6 mają +2 IDS",
    statistic: undefined,
    dice: undefined,
    shieldPiercing: undefined,
    demage: undefined,
    special: false,
    actions: undefined,
    energy: undefined,
  },
  {
    name: "rapid bite",
    namePL: "szybkie kąsanie",
    type: WeponOrAbilityType.attack,
    range: 1,
    description: "critical strike. inflicts weakness.",
    descriptionPL: "atak krytyczny. zadaje osłabienie",
    statistic: 3,
    dice: 2,
    shieldPiercing: 0,
    demage: 1,
    special: false,
    actions: undefined,
    energy: undefined,
  },
  {
    name: "Scent tracking",
    namePL: "Tropienie",
    type: WeponOrAbilityType.ability,
    range: undefined,
    description: "put spotted on an enemy in range 8",
    descriptionPL: "nałóż oznaczony na wroga w zasięgu 8",
    statistic: undefined,
    dice: undefined,
    shieldPiercing: undefined,
    demage: undefined,
    special: true,
    actions: 0,
    energy: 1,
  },
  {
    name: "fetch",
    namePL: "aport",
    type: WeponOrAbilityType.ability,
    range: undefined,
    description:
      "remove 1 energy from an enemy in range 6. if ofc. blender is in range 6 he gains 1 energy",
    descriptionPL:
      "usun 1 energię z przeciwnika w zasięgu 6. jesli oficer blender jest w zasięgu 6 otrzymuje 1 energię",
    statistic: undefined,
    dice: undefined,
    shieldPiercing: undefined,
    demage: undefined,
    special: true,
    actions: 1,
    energy: 0,
  },
  {
    name: "playtime",
    namePL: "zabawa",
    type: WeponOrAbilityType.ability,
    range: undefined,
    description:
      "remove 1 energy from an ally in range 3 to restore 1hp to them",
    descriptionPL:
      "zamien jeden zeton energi na 1 punkt zycia sojusznikowi w zasiegu 3",
    statistic: undefined,
    dice: undefined,
    shieldPiercing: undefined,
    demage: undefined,
    special: true,
    actions: 0,
    energy: 0,
  },
  {
    name: "Flashbang",
    namePL: "Granat hukowy",
    type: WeponOrAbilityType.special,
    range: 4,
    description: "Template attack. Put stun on all units.",
    descriptionPL: "Atak szablonowy. Nałóż ogłuszenie na wszystkie jednostki.",
    statistic: 3,
    dice: 0,
    shieldPiercing: 0,
    demage: 0,
    special: false,
    actions: undefined,
    energy: undefined,
  },
  {
    name: "SMG-X bullride",
    namePL: "SMG-X bullride",
    type: WeponOrAbilityType.gun,
    range: 7,
    description: "",
    descriptionPL: "",
    statistic: 4,
    dice: 4,
    shieldPiercing: 0,
    demage: 1,
    special: false,
    actions: undefined,
    energy: undefined,
  },
  {
    name: "Shroud of silence",
    namePL: "Zasłona ciszy",
    type: WeponOrAbilityType.passive,
    range: undefined,
    description:
      "As long as DAI was not yet activated this round, he has cover.",
    descriptionPL:
      "Tak długo jak podczas tej rundy dai nie byl aktywowany posiada osłonę.",
    statistic: undefined,
    dice: undefined,
    shieldPiercing: undefined,
    demage: undefined,
    special: false,
    actions: undefined,
    energy: undefined,
  },
  {
    name: "Full Speed Slash",
    namePL: "Cięcie na gazie",
    type: WeponOrAbilityType.attack,
    range: 1,
    description: "Critical strike",
    descriptionPL: "atak krytyczny",
    statistic: 5,
    dice: 3,
    shieldPiercing: 1,
    demage: 1,
    special: false,
    actions: undefined,
    energy: undefined,
  },
  {
    name: "Last resort stunt",
    namePL: "skos ostatniej szansy",
    type: WeponOrAbilityType.ability,
    range: undefined,
    description:
      "move 6, then all units in range 2 lose 2 HP and ginji is destroyed.",
    descriptionPL:
      "porusz się o 6, następnie wszystkie jednostki w zasięgu 2 tracą 2 HP a ginji zostaje zniszczony",
    statistic: undefined,
    dice: undefined,
    shieldPiercing: undefined,
    demage: undefined,
    special: true,
    actions: 1,
    energy: 3,
  },
  {
    name: "gone in seconds",
    namePL: "znika w mgnieniu",
    type: WeponOrAbilityType.passive,
    range: undefined,
    description:
      "after using a move action two times in a single turn, ginji gains +2 armor and cover until his next activation",
    descriptionPL:
      "kiedy ginji poruszy się 2 razy w jednej turze zyskuje +2 zbroi i osłonę do następnej aktywacji",
    statistic: undefined,
    dice: undefined,
    shieldPiercing: undefined,
    demage: undefined,
    special: false,
    actions: undefined,
    energy: undefined,
  },
  {
    name: "maniac driving",
    namePL: "szalona jazda",
    type: WeponOrAbilityType.ability,
    range: undefined,
    description:
      "When an enemy moves out of the bikes way to avoid overrun, it loses 1 energy",
    descriptionPL:
      "kiedy przeciwnik poruszy się sprzed drogi motoru by uniknąć przejechania traci 1 energię.",
    statistic: undefined,
    dice: undefined,
    shieldPiercing: undefined,
    demage: undefined,
    special: false,
    actions: undefined,
    energy: undefined,
  },
  {
    name: "Ultramelt sword",
    namePL: "Miecz ultramelt",
    type: WeponOrAbilityType.attack,
    range: 1,
    description: "fusion weapon",
    descriptionPL: "broń fuzyjna",
    statistic: 5,
    dice: 2,
    shieldPiercing: 1,
    demage: 1,
    special: false,
    actions: undefined,
    energy: undefined,
  },
  {
    name: "Shurkiens",
    namePL: "Shurikeny",
    type: WeponOrAbilityType.special,
    range: 5,
    description: "Critical strike",
    descriptionPL: "Atak krytyczny",
    statistic: 4,
    dice: 3,
    shieldPiercing: 1,
    demage: 1,
    special: false,
    actions: undefined,
    energy: undefined,
  },
  {
    name: "flashdance",
    namePL: "szybki taniec",
    type: WeponOrAbilityType.ability,
    range: undefined,
    description: "put blind on all other units in range 1, then dash 5.",
    descriptionPL:
      "nałóż ślepotę na wszystkich w zasięgu 1, następni biegnij 5.",
    statistic: undefined,
    dice: undefined,
    shieldPiercing: undefined,
    demage: undefined,
    special: true,
    actions: 1,
    energy: 1,
  },
  {
    name: "piercing slide",
    namePL: "przeszywający ślizg",
    type: WeponOrAbilityType.ability,
    range: undefined,
    description:
      "dash 5, gain a melee attack action against every enemy you move through.",
    descriptionPL:
      "biegnij 5, zyskaj atak wręcz przeciwko każdemu przeciwnikowi przez którego przebiegasz.",
    statistic: undefined,
    dice: undefined,
    shieldPiercing: undefined,
    demage: undefined,
    special: true,
    actions: 1,
    energy: 1,
  },
  {
    name: "steady slash",
    namePL: "stabilne cięcie",
    type: WeponOrAbilityType.attack,
    range: 1,
    description: "Critical strike",
    descriptionPL: "atak krytyczny",
    statistic: 5,
    dice: 4,
    shieldPiercing: 1,
    demage: 1,
    special: false,
    actions: undefined,
    energy: undefined,
  },
  {
    name: "constructor",
    namePL: "konstruktor",
    type: WeponOrAbilityType.ability,
    range: undefined,
    description:
      "spend 3 material tokens to deploy a ginji on bike unit in his place. it does not activate this round. it keeps ginjis dmg tokens",
    descriptionPL:
      "wydaj 3 żetony materiałów aby zastąpić ginjego ginjim na motorze. nie aktywuje się w tej rundzie. zatrzymuje żetony DMG",
    statistic: undefined,
    dice: undefined,
    shieldPiercing: undefined,
    demage: undefined,
    special: false,
    actions: 1,
    energy: 0,
  },
  {
    name: "inspired charge",
    namePL: "zainpirowana szarża",
    type: WeponOrAbilityType.passive,
    range: undefined,
    description: "when ginji is charging, he can lose 1 HP to gain 2 energy",
    descriptionPL: "Kiedy ginji szarżuje może zamienić 1 HP na 2 energie",
    statistic: undefined,
    dice: undefined,
    shieldPiercing: undefined,
    demage: undefined,
    special: false,
    actions: undefined,
    energy: undefined,
  },
  {
    name: "battle fervor",
    namePL: "fervor walki",
    type: WeponOrAbilityType.ability,
    range: undefined,
    description:
      "after using a melee attack action for the second time in a single turn, ginji gains an attack action",
    descriptionPL:
      "po dwukrotnym ataku wręcz podczas jednej tury ginji zyskuje dodatkową akcje ataku",
    statistic: undefined,
    dice: undefined,
    shieldPiercing: undefined,
    demage: undefined,
    special: false,
    actions: undefined,
    energy: undefined,
  },
  {
    name: "katana",
    namePL: "katana",
    type: WeponOrAbilityType.attack,
    range: 1,
    description: "critical strike",
    descriptionPL: "atak krytyczny",
    statistic: 5,
    dice: 3,
    shieldPiercing: 1,
    demage: 1,
    special: false,
    actions: undefined,
    energy: undefined,
  },
  {
    name: "beam slash",
    namePL: "promień tnący",
    type: WeponOrAbilityType.special,
    range: 4,
    description: "beam weapon, costs 1 energy",
    descriptionPL: "broń promieniowa, kosztuje 1 energie",
    statistic: 3,
    dice: 3,
    shieldPiercing: 2,
    demage: 1,
    special: false,
    actions: undefined,
    energy: undefined,
  },
  {
    name: "Devils luck",
    namePL: "diabelne szczęście",
    type: WeponOrAbilityType.passive,
    range: undefined,
    description:
      "kurata gains 1 shield for each blank resulkt in his attack rolls",
    descriptionPL:
      "kurata zyskuje 1 tarczę za każdy pusty rezultat podczas ataku",
    statistic: undefined,
    dice: undefined,
    shieldPiercing: undefined,
    demage: undefined,
    special: false,
    actions: undefined,
    energy: undefined,
  },
  {
    name: "Daring look",
    namePL: "zabójczy wygląd",
    type: WeponOrAbilityType.ability,
    range: undefined,
    description:
      "in ranged and special weapon attack rolls against kurata, changing energy results to hits costs 2 energy instead of 1",
    descriptionPL:
      "w walce na odległość i przy pomocy broni specjalnej - zmiana wyniku kości kosztuje 2 energie zamiast jednej podczas ataku na kurate",
    statistic: undefined,
    dice: undefined,
    shieldPiercing: undefined,
    demage: undefined,
    special: false,
    actions: undefined,
    energy: undefined,
  },
  {
    name: "king katana",
    namePL: "królewska katana",
    type: WeponOrAbilityType.attack,
    range: 1,
    description: "",
    descriptionPL: "",
    statistic: 5,
    dice: 5,
    shieldPiercing: 2,
    demage: 1,
    special: false,
    actions: undefined,
    energy: undefined,
  },
  {
    name: "overhead swing",
    namePL: "cios z góry",
    type: WeponOrAbilityType.ability,
    range: 1,
    description:
      "enemies with 5 or less build cannot use energy in the defense roll",
    descriptionPL:
      "wrogowie z budową 5 lub mniej nie mogą zamieniać energii podczas rzutu obronnego",
    statistic: 5,
    dice: 2,
    shieldPiercing: 2,
    demage: 2,
    special: false,
    actions: undefined,
    energy: undefined,
  },
  {
    name: "torrent repair",
    namePL: "naprawa zewnętrzna",
    type: WeponOrAbilityType.ability,
    range: undefined,
    description:
      "if you are next to a terminal, pass a hacking test (7) to restore 2 HP",
    descriptionPL:
      "kiedy stoisz obok terminala możesz zdać test hakowania (7) by odzyskać 2 HP",
    statistic: undefined,
    dice: undefined,
    shieldPiercing: undefined,
    demage: undefined,
    special: true,
    actions: 1,
    energy: 0,
  },
  {
    name: "cold-fused core",
    namePL: "zimny rdzeń",
    type: WeponOrAbilityType.passive,
    range: undefined,
    description:
      "when the last samurai is destroyed, all enemies in range 2 lose 2 HP",
    descriptionPL:
      "kiedy ostatni samuraj zostanie zniszczony - wszyscy wrogowie w zasięgu 2 tracą 2 HP",
    statistic: undefined,
    dice: undefined,
    shieldPiercing: undefined,
    demage: undefined,
    special: false,
    actions: undefined,
    energy: undefined,
  },
  {
    name: "hand of doom",
    namePL: "ręka zagłady",
    type: WeponOrAbilityType.attack,
    range: undefined,
    description: "",
    descriptionPL: "",
    statistic: 4,
    dice: 4,
    shieldPiercing: 2,
    demage: 1,
    special: false,
    actions: undefined,
    energy: undefined,
  },
  {
    name: "MG-z tommy",
    namePL: "MG-Z tommy",
    type: WeponOrAbilityType.gun,
    range: 9,
    description: "",
    descriptionPL: "",
    statistic: 4,
    dice: 4,
    shieldPiercing: 1,
    demage: 1,
    special: false,
    actions: undefined,
    energy: undefined,
  },
  {
    name: "Mob reflex",
    namePL: "refleks mafii",
    type: WeponOrAbilityType.passive,
    range: undefined,
    description:
      "when che-sio receives dmg from an enemy's ranged or special weapon attack, he gains a ranged attack action against that enemy",
    descriptionPL:
      "kiedy che-sio otrzymuje dmg z ataku na ogległość lub z broni specjalnej - otrzymuje atak z odległości przeciwko temu wrogowi",
    statistic: undefined,
    dice: undefined,
    shieldPiercing: undefined,
    demage: undefined,
    special: false,
    actions: undefined,
    energy: undefined,
  },
  {
    name: "Mantis Blades",
    namePL: "Ostrza modliszki",
    type: WeponOrAbilityType.attack,
    range: 1,
    description: "critical strike",
    descriptionPL: "atak krytyczny",
    statistic: 4,
    dice: 5,
    shieldPiercing: 2,
    demage: 1,
    special: false,
    actions: undefined,
    energy: undefined,
  },
  {
    name: "thirst for blood",
    namePL: "pragnienie krwi",
    type: WeponOrAbilityType.passive,
    range: undefined,
    description: "nakahara has +2 to the charge die result",
    descriptionPL: "nakahara otrzymuje +2 do wyniku szarży",
    statistic: undefined,
    dice: undefined,
    shieldPiercing: undefined,
    demage: undefined,
    special: false,
    actions: undefined,
    energy: undefined,
  },
  {
    name: "Vendetta",
    namePL: "Wendeta",
    type: WeponOrAbilityType.ability,
    range: undefined,
    description:
      "nakahara has +1 melee weapon statitic and can reroll any number of dice in the attack right after a charge",
    descriptionPL:
      "nakahara ma +1 w ataku wręcz i może przerzucić dowolną liczbe kości zaraz po szarży",
    statistic: undefined,
    dice: undefined,
    shieldPiercing: undefined,
    demage: undefined,
    special: false,
    actions: undefined,
    energy: undefined,
  },
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

export { getWeaponOrAbility, weaponOrAbility };
