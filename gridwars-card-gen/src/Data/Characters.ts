export enum CyberCharacterEnum {
  Takahashi = "Takahashi",
  Kimiko = "Kimiko",

  //TCPD
  CptDonut = 'Cpt. "Donut" Wales',
  DeputyHardfall = "Deputy Harfall",
  Exobot = "Exo-bot aranea",
  Furora = "Lt. Nelly Furora",
  ProsecutorHarshBike = "Prosecutor Harsh (B)",
  ProsecutorHarsh = "Prosecutor Harsh",
  RiotOfficerBobBlunt = "Riot OFC. Bob Blunt",
  K9X = "K9-X Rex-2",
  OFCMichaelBlender = "Ofc. Michael Blender",
  K9Bio = "K9-Bio Athena",

  //Yakuza
  DaiTheSilentOne = "Dai the silent one",
  GinjiKawasakiBike = "Ginji Kawasaki (B)",
  GinjiKawasaki = "Ginji Kawasaki",
  Ichiko = "Ichiko serpentblade",
  RusselKurata = "Russel Kurata Jr.",
  TheLastSamurai = "The last samurai",
  UncleCheSio = "Uncle Che-Sio",
  VengfulNakahara = "Vengful Nakahara",

  //Corporation
  AmplificatorV4 = "Amplificator V4",
  DrPrinceCTO = "Doctor Prince CTO",
  JJPreston = "J.J. Preston",
  MarcusCrown = "Marcus Crown CTO",
  MrSmith = "Mr. Smith",
  MrsSmith = "Mrs. Smith",
  SheldonTheIntern = "Sheldon The Intern",

  //cyber cult
  BlastBot = "Blast Bot",
  CyberGiant = "Cyber Giant",
  CyberZombieI = "Cyber zombie I",
  CyberZombieII = "Cyber zombie II",
  CyberZombieIII = "Cyber zombie III",
  GorgonaTheStoneCold = "Gorgona the StoneCold",
  HeartPiercer = "HeartPiercer",
  IvaSteelValkyria = "Iva Steel Valkyria",
  XenosLordOfRuin = "Xenos Lord of ruin",
  CyberZombieDeployed = "Cyber Zombie (Deployed)",
  HeartPiercerDeployed = "Heartpiercer (Deployed)",
}

enum CharacterParameterType {
  shield,
  health,
  gun,
  rifle,
  hand,
  body,
  hack,
  engineer,
  actions,
  brain,
  speed,
}

export type ParameterType = {
  type: CharacterParameterType;
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
  faction?: string;
};

const characters: Array<CharacterType> = [
  {
    name: "Takahashi",
    cost: 44,
    parameters: [
      { type: CharacterParameterType.health, value: 5 }, //health
      { type: CharacterParameterType.shield, value: 1 }, //armor
      { type: CharacterParameterType.speed, value: 4 }, //speed
      { type: CharacterParameterType.actions, value: 2 }, //actions
      { type: CharacterParameterType.gun, value: 4 }, //gun
      { type: CharacterParameterType.rifle, value: 4 }, //special
      { type: CharacterParameterType.hand, value: 2 }, // hand
      { type: CharacterParameterType.body, value: 4 }, //body
      { type: CharacterParameterType.hack, value: 7 }, //hack
      { type: CharacterParameterType.engineer, value: 6 }, //gears
      { type: CharacterParameterType.brain, value: 7 },
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
      { type: CharacterParameterType.health, value: 4 }, //health
      { type: CharacterParameterType.shield, value: 1 }, //armor
      { type: CharacterParameterType.speed, value: 4 }, //speed
      { type: CharacterParameterType.actions, value: 2 }, //actions
      { type: CharacterParameterType.gun, value: 4 }, //gun
      { type: CharacterParameterType.rifle, value: 2 }, //special
      { type: CharacterParameterType.hand, value: 4 }, // hand
      { type: CharacterParameterType.body, value: 2 }, //body
      { type: CharacterParameterType.hack, value: 5 }, //hack
      { type: CharacterParameterType.engineer, value: 3 }, //gears
      { type: CharacterParameterType.brain, value: 2 },
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
    name: CyberCharacterEnum.DrPrinceCTO,
    cost: 40,
    parameters: [
      { type: CharacterParameterType.health, value: 4 }, //health
      { type: CharacterParameterType.shield, value: 0 }, //armor
      { type: CharacterParameterType.speed, value: 3 }, //speed
      { type: CharacterParameterType.actions, value: 3 }, //actions
      { type: CharacterParameterType.gun, value: 3 }, //gun
      { type: CharacterParameterType.rifle, value: 4 }, //special
      { type: CharacterParameterType.hand, value: 3 }, // hand
      { type: CharacterParameterType.body, value: 4 }, //body
      { type: CharacterParameterType.hack, value: 5 }, //hack
      { type: CharacterParameterType.engineer, value: 7 }, //gears
      { type: CharacterParameterType.brain, value: 4 },
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
  //tcpd
  {
    name: CyberCharacterEnum.CptDonut,
    cost: 24,
    parameters: [
      { type: CharacterParameterType.health, value: 5 }, //health
      { type: CharacterParameterType.shield, value: 1 }, //armor
      { type: CharacterParameterType.speed, value: 4 }, //speed
      { type: CharacterParameterType.actions, value: 2 }, //actions
      { type: CharacterParameterType.gun, value: 4 }, //gun
      { type: CharacterParameterType.rifle, value: 2 }, //special
      { type: CharacterParameterType.hand, value: 4 }, // hand
      { type: CharacterParameterType.body, value: 3 }, //body
      { type: CharacterParameterType.hack, value: 3 }, //hack
      { type: CharacterParameterType.engineer, value: 4 }, //gears
      { type: CharacterParameterType.brain, value: 0 },
    ],
    ability:
      'When "Donut" receives DMG, he can redirect up to 2 of that DMG to an ally in range 6',
    abilityPL:
      'Kiedy "Donut" otrzyma obrażenia może przenieść do 2 na sojusznika w zasięgu 6',
    abilityName: "Shifting duties",
    abilityNamePL: "Przesuwanie obowiązków",
    type: "organic",
    abilities: ["TCPD Baton", "TCPD Pistol", "Authority", "Helipad extraction"],
    img: "donut.png",
  },
  {
    name: CyberCharacterEnum.DeputyHardfall,
    cost: 38,
    parameters: [
      { type: CharacterParameterType.health, value: 5 }, //health
      { type: CharacterParameterType.shield, value: 2 }, //armor
      { type: CharacterParameterType.speed, value: 3 }, //speed
      { type: CharacterParameterType.actions, value: 2 }, //actions
      { type: CharacterParameterType.gun, value: 3 }, //gun
      { type: CharacterParameterType.rifle, value: 5 }, //special
      { type: CharacterParameterType.hand, value: 4 }, // hand
      { type: CharacterParameterType.body, value: 6 }, //body
      { type: CharacterParameterType.hack, value: 1 }, //hack
      { type: CharacterParameterType.engineer, value: 5 }, //gears
      { type: CharacterParameterType.brain, value: 3 },
    ],
    ability:
      "At the end of a round, hardfall gets a power token for each unused energy. When he attacks he can discard up to 1 token to gain 1 die.",
    abilityPL:
      "Na koniec tury Hardfall dostaje żeton mocy za każdą niewykorzystaną energię. Kiedy atakuje może zamienić jeden z tych żetonów za dodatkową kostkę ataku.",
    abilityName: "Charging the core",
    abilityNamePL: "Ładowanie jądra",
    type: "organic",
    abilities: [
      "ION Cannon",
      "Magnetic field",
      "hazmat suit",
      "long arm of the law",
    ],
    img: "DeputyHardfall.png",
  },
  {
    name: CyberCharacterEnum.Exobot,
    cost: 49,
    parameters: [
      { type: CharacterParameterType.health, value: 7 }, //health
      { type: CharacterParameterType.shield, value: 3 }, //armor
      { type: CharacterParameterType.speed, value: 4 }, //speed
      { type: CharacterParameterType.actions, value: 2 }, //actions
      { type: CharacterParameterType.gun, value: 4 }, //gun
      { type: CharacterParameterType.rifle, value: 4 }, //special
      { type: CharacterParameterType.hand, value: 4 }, // hand
      { type: CharacterParameterType.body, value: 8 }, //body
      { type: CharacterParameterType.hack, value: 0 }, //hack
      { type: CharacterParameterType.engineer, value: 0 }, //gears
      { type: CharacterParameterType.brain, value: 3 },
    ],
    ability:
      "When an enemy fails a charge against aranea, it gains a free ranged or special weapon attack against that enemy",
    abilityPL:
      "Kiedy szraża przeciwnika nie powiedzie sie przeciwko niemu, aranea zyskuje darmowy atak przeciwko temu przeciwnikowi",
    abilityName: "Triggered defense",
    abilityNamePL: "Odruchowa obrona",
    type: "organic",
    abilities: ["mechanical limb", "cyberpoison", "melting ray", "web leap"],
    img: "exobot.png",
  },
  {
    name: CyberCharacterEnum.Furora,
    cost: 28,
    parameters: [
      { type: CharacterParameterType.health, value: 4 }, //health
      { type: CharacterParameterType.shield, value: 1 }, //armor
      { type: CharacterParameterType.speed, value: 4 }, //speed
      { type: CharacterParameterType.actions, value: 2 }, //actions
      { type: CharacterParameterType.gun, value: 4 }, //gun
      { type: CharacterParameterType.rifle, value: 4 }, //special
      { type: CharacterParameterType.hand, value: 2 }, // hand
      { type: CharacterParameterType.body, value: 3 }, //body
      { type: CharacterParameterType.hack, value: 3 }, //hack
      { type: CharacterParameterType.engineer, value: 4 }, //gears
      { type: CharacterParameterType.brain, value: 1 },
    ],
    ability:
      "Furora has +4 range and +1 special wapon statistic if she has not moved since the beginning of her last activation.",
    abilityPL:
      "Furora ma +4 zasięgu i +1 statystyki specjalnej broni jeżeli nie poruszyła się od ostatniej fazy aktywacji.",
    abilityName: "Perfect spot",
    abilityNamePL: "Idealne miejsce",
    type: "organic",
    abilities: ["scope rifle", "smokescreen", "data drain", "justicebringer"],
    img: "furora.png",
  },
  {
    name: CyberCharacterEnum.ProsecutorHarshBike,
    cost: 43,
    parameters: [
      { type: CharacterParameterType.health, value: 5 }, //health
      { type: CharacterParameterType.shield, value: 3 }, //armor
      { type: CharacterParameterType.speed, value: 8 }, //speed
      { type: CharacterParameterType.actions, value: 2 }, //actions
      { type: CharacterParameterType.gun, value: 5 }, //gun
      { type: CharacterParameterType.rifle, value: 5 }, //special
      { type: CharacterParameterType.hand, value: 5 }, // hand
      { type: CharacterParameterType.body, value: 7 }, //body
      { type: CharacterParameterType.hack, value: 1 }, //hack
      { type: CharacterParameterType.engineer, value: 2 }, //gears
      { type: CharacterParameterType.brain, value: 2 },
    ],
    ability:
      "once per turn when harsh uses a move action, he gains an attack action with bike turret at any time during the movement",
    abilityPL:
      "Raz na ture kiedy hash się porusza zyskuje atak działkiem motora w dowolnym momencie ruchu",
    abilityName: "Drive-by",
    abilityNamePL: "Drive-by",
    type: "organic",
    abilities: ["legalizer pistol", "bike turret", "one-man job", "dispatch"],
    img: "harsh.png",
  },
  {
    name: CyberCharacterEnum.ProsecutorHarsh,
    cost: 34,
    parameters: [
      { type: CharacterParameterType.health, value: 5 }, //health
      { type: CharacterParameterType.shield, value: 3 }, //armor
      { type: CharacterParameterType.speed, value: 4 }, //speed
      { type: CharacterParameterType.actions, value: 2 }, //actions
      { type: CharacterParameterType.gun, value: 5 }, //gun
      { type: CharacterParameterType.rifle, value: 5 }, //special
      { type: CharacterParameterType.hand, value: 5 }, // hand
      { type: CharacterParameterType.body, value: 5 }, //body
      { type: CharacterParameterType.hack, value: 2 }, //hack
      { type: CharacterParameterType.engineer, value: 3 }, //gears
      { type: CharacterParameterType.brain, value: 2 },
    ],
    ability:
      "Harsh's attacks against wanted units have +1 attack die and +1 dmg",
    abilityPL:
      "Ataki Harsha przeciwko poszukiwanym jednostką mają +1 kostkę ataku i +1 obrażeń.",
    abilityName: "Oath to temida",
    abilityNamePL: "Przysięga temidy",
    type: "organic",
    abilities: [
      "wall-penetrating ammo",
      "burst ammo",
      "tazing ammo",
      "one-man job",
    ],
    img: "harsh.png",
  },
  {
    name: CyberCharacterEnum.RiotOfficerBobBlunt,
    cost: 37,
    parameters: [
      { type: CharacterParameterType.health, value: 5 }, //health
      { type: CharacterParameterType.shield, value: 1 }, //armor
      { type: CharacterParameterType.speed, value: 4 }, //speed
      { type: CharacterParameterType.actions, value: 2 }, //actions
      { type: CharacterParameterType.gun, value: 3 }, //gun
      { type: CharacterParameterType.rifle, value: 3 }, //special
      { type: CharacterParameterType.hand, value: 3 }, // hand
      { type: CharacterParameterType.body, value: 5 }, //body
      { type: CharacterParameterType.hack, value: 2 }, //hack
      { type: CharacterParameterType.engineer, value: 3 }, //gears
      { type: CharacterParameterType.brain, value: 1 },
    ],
    ability:
      "When there are 2 or more enemies in range 2 from bob blunt, he has +2 melee weapon statitic",
    abilityPL:
      "Kiedy w zasięgu do 2 pól jest 2 lub więcej przeciwnków - Bob otrzymuje +2 ataku wręcz",
    abilityName: "Crowd Control",
    abilityNamePL: "Kontrola Tłumu",
    type: "organic",
    abilities: ["anti-riot baton", "turtle shield", "full gear", "phalanx"],
    img: "riotbob.png",
  },
  {
    name: CyberCharacterEnum.K9X,
    cost: 16,
    parameters: [
      { type: CharacterParameterType.health, value: 3 }, //health
      { type: CharacterParameterType.shield, value: 1 }, //armor
      { type: CharacterParameterType.speed, value: 4 }, //speed
      { type: CharacterParameterType.actions, value: 2 }, //actions
      { type: CharacterParameterType.gun, value: 0 }, //gun
      { type: CharacterParameterType.rifle, value: 3 }, //special
      { type: CharacterParameterType.hand, value: 3 }, // hand
      { type: CharacterParameterType.body, value: 3 }, //body
      { type: CharacterParameterType.hack, value: 0 }, //hack
      { type: CharacterParameterType.engineer, value: 0 }, //gears
      { type: CharacterParameterType.brain, value: 2 },
    ],
    ability: "When rex-2 is destroyed you gain 1 material token",
    abilityPL: "Kiedy rex-2 jest zniszczony otrzymujesz 1 żeton materiału",
    abilityName: "Auto recycling",
    abilityNamePL: "Auto recycling",
    type: "organic",
    abilities: [
      "mechanical bite",
      "electrohowl",
      "watchdog",
      "security transmitter",
    ],
    img: "k9x.png",
  },
  {
    name: "Ofc. Michael blender",
    cost: 26,
    parameters: [
      { type: CharacterParameterType.health, value: 5 }, //health
      { type: CharacterParameterType.shield, value: 1 }, //armor
      { type: CharacterParameterType.speed, value: 2 }, //speed
      { type: CharacterParameterType.actions, value: 2 }, //actions
      { type: CharacterParameterType.gun, value: 4 }, //gun
      { type: CharacterParameterType.rifle, value: 2 }, //special
      { type: CharacterParameterType.hand, value: 4 }, // hand
      { type: CharacterParameterType.body, value: 4 }, //body
      { type: CharacterParameterType.hack, value: 2 }, //hack
      { type: CharacterParameterType.engineer, value: 3 }, //gears
      { type: CharacterParameterType.brain, value: 0 },
    ],
    ability:
      "Every time blender uses a move or attack action, on 'dog' unit in range 8 gains the same action.",
    abilityPL:
      "za każdym razem gdy blender wykonuje ruch lub atak - jeden z psów w zasięgu 8 zyskuje tą sama akcję",
    abilityName: "natural bond",
    abilityNamePL: "Naturalne przywiązanie",
    type: "organic",
    abilities: [
      "trophy baton",
      "TCPD Machine gun",
      "k9 handler",
      "synchronized routine",
    ],
    img: "blender.png",
  },
  {
    name: "k9-bio athena",
    cost: 12,
    parameters: [
      { type: CharacterParameterType.health, value: 3 }, //health
      { type: CharacterParameterType.shield, value: 0 }, //armor
      { type: CharacterParameterType.speed, value: 4 }, //speed
      { type: CharacterParameterType.actions, value: 2 }, //actions
      { type: CharacterParameterType.gun, value: 0 }, //gun
      { type: CharacterParameterType.rifle, value: 0 }, //special
      { type: CharacterParameterType.hand, value: 3 }, // hand
      { type: CharacterParameterType.body, value: 2 }, //body
      { type: CharacterParameterType.hack, value: 0 }, //hack
      { type: CharacterParameterType.engineer, value: 0 }, //gears
      { type: CharacterParameterType.brain, value: 0 },
    ],
    ability:
      "when athena would be destroyed, blink her to the closes hex in your deploy zone, restore her to full hp and do not activate her next round",
    abilityPL:
      "kiedy athena miałabybyć zniszczona - przenieś ją do najbliższego hexa startowego. Przywraca do stanu startowego, ale nie aktywuje się w następnej turze.",
    abilityName: "dog heaven",
    abilityNamePL: "psie niebo",
    type: "organic",
    abilities: ["Rapid bite", "scent tracking", "fetch", "playtime"],
    img: "k9bio.png",
  },
  {
    name: "Dai the silent one",
    cost: 28,
    parameters: [
      { type: CharacterParameterType.health, value: 5 },
      { type: CharacterParameterType.shield, value: 1 },
      { type: CharacterParameterType.gun, value: 4 },
      { type: CharacterParameterType.rifle, value: 3 },
      { type: CharacterParameterType.engineer, value: 2 },
      { type: CharacterParameterType.hand, value: 4 },
      { type: CharacterParameterType.body, value: 4 },
      { type: CharacterParameterType.hack, value: 3 },
      { type: CharacterParameterType.actions, value: 2 },
      { type: CharacterParameterType.brain, value: 2 },
      { type: CharacterParameterType.speed, value: 4 },
    ],
    ability: "Dai ignores cover when using ranged attacks",
    abilityPL: "Dai ignoruje osłonę kiedy atakuje z odległości",
    abilityName: "Infrared glasses",
    abilityNamePL: "Okulary na podczerwień ",
    type: "organic",
    abilities: ["Flashbang", "SMG-X bullride", "Shroud of silence"],
    img: "DaiTheSilentOne.png",
  },
  {
    name: "Ginji Kawasaki (B)",
    cost: 39,
    parameters: [
      { type: CharacterParameterType.health, value: 5 },
      { type: CharacterParameterType.shield, value: 1 },
      { type: CharacterParameterType.gun, value: 3 },
      { type: CharacterParameterType.rifle, value: 3 },
      { type: CharacterParameterType.hand, value: 5 },
      { type: CharacterParameterType.body, value: 7 },
      { type: CharacterParameterType.hack, value: 0 },
      { type: CharacterParameterType.engineer, value: 0 },
      { type: CharacterParameterType.actions, value: 2 },
      { type: CharacterParameterType.brain, value: 1 },
      { type: CharacterParameterType.speed, value: 8 },
    ],
    ability:
      "once per turn, when ginji uses a move action , he gains an attack action with full speed slash at any time during the movement",
    abilityPL: "raz na ture podczas ruchu ginji zyskuje atak w pelnym pędzie",
    abilityName: "swing-by",
    abilityNamePL: "przejazd",
    type: "organic",
    abilities: [
      "Full Speed Slash",
      "Last resort stunt",
      "gone in seconds",
      "maniac driving",
    ],
    img: "ginji.png",
  },
  {
    name: "Ginji Kawasaki",
    cost: 33,
    parameters: [
      { type: CharacterParameterType.health, value: 5 },
      { type: CharacterParameterType.shield, value: 0 },
      { type: CharacterParameterType.gun, value: 3 },
      { type: CharacterParameterType.rifle, value: 3 },
      { type: CharacterParameterType.hand, value: 5 },
      { type: CharacterParameterType.body, value: 5 },
      { type: CharacterParameterType.hack, value: 1 },
      { type: CharacterParameterType.engineer, value: 4 },
      { type: CharacterParameterType.actions, value: 2 },
      { type: CharacterParameterType.brain, value: 1 },
      { type: CharacterParameterType.speed, value: 4 },
    ],
    ability:
      "ginji changes all energy results to saves in his defence rolls, as long as he has not yet been activated this round",
    abilityPL:
      "ginji zmienia wszystkie wyniki energii w sukcesy podczas obrony dopóki nie został aktywowany w tej turze",
    abilityName: "true samurai stance",
    abilityNamePL: "postawa prawdziwego samuraja",
    type: "organic",
    abilities: [
      "steady slash",
      "constructor",
      "inspired charge",
      "battle fervor",
    ],
    img: "ginji.png",
  },
  {
    name: "Ichiko serpentblade",
    cost: 35,
    parameters: [
      { type: CharacterParameterType.health, value: 5 },
      { type: CharacterParameterType.shield, value: 1 },
      { type: CharacterParameterType.gun, value: 1 },
      { type: CharacterParameterType.rifle, value: 4 },
      { type: CharacterParameterType.hand, value: 5 },
      { type: CharacterParameterType.body, value: 4 },
      { type: CharacterParameterType.hack, value: 2 },
      { type: CharacterParameterType.engineer, value: 1 },
      { type: CharacterParameterType.actions, value: 2 },
      { type: CharacterParameterType.brain, value: 1 },
      { type: CharacterParameterType.speed, value: 5 },
    ],
    ability:
      "when ichiko woulb be destroyed for the first time in the game, instead she survives with 1 HP left and is immune to DMG until the end of round",
    abilityPL:
      "kiedy ichiko ma być zniszczona po raz pierwszy - nie ginie - jej HP spada do 1 i jest odporna na ataki w tej turze",
    abilityName: "electric dream",
    abilityNamePL: "elektryczny sen",
    type: "cyborg",
    abilities: ["Ultramelt sword", "Shurkiens", "flashdance", "piercing slide"],
    img: "ichiko.png",
  },
  {
    name: "Russel Kurata Jr.",
    cost: 27,
    parameters: [
      { type: CharacterParameterType.health, value: 5 },
      { type: CharacterParameterType.shield, value: 1 },
      { type: CharacterParameterType.gun, value: 3 },
      { type: CharacterParameterType.rifle, value: 3 },
      { type: CharacterParameterType.hand, value: 5 },
      { type: CharacterParameterType.body, value: 5 },
      { type: CharacterParameterType.hack, value: 0 },
      { type: CharacterParameterType.engineer, value: 0 },
      { type: CharacterParameterType.actions, value: 2 },
      { type: CharacterParameterType.brain, value: 0 },
      { type: CharacterParameterType.speed, value: 4 },
    ],
    ability:
      "after an enemy attacks kurata with a melee attack, kurata gains a melee attack action against that enemy",
    abilityPL:
      "kiedy wróg atakuje atakiem wręcz - kurata zyskuje atak wręcz przeciwko tej jednostce",
    abilityName: "defend the honour",
    abilityNamePL: "obrona honoru",
    type: "organic",
    abilities: ["katana", "beam slash", "Devils luck", "Daring look"],
    img: "russelKurata.png",
  },
  {
    name: "The last samurai",
    cost: 49,
    parameters: [
      { type: CharacterParameterType.health, value: 6 },
      { type: CharacterParameterType.shield, value: 3 },
      { type: CharacterParameterType.gun, value: 1 },
      { type: CharacterParameterType.rifle, value: 1 },
      { type: CharacterParameterType.hand, value: 5 },
      { type: CharacterParameterType.body, value: 8 },
      { type: CharacterParameterType.hack, value: 2 },
      { type: CharacterParameterType.engineer, value: 0 },
      { type: CharacterParameterType.actions, value: 2 },
      { type: CharacterParameterType.brain, value: 2 },
      { type: CharacterParameterType.speed, value: 3 },
    ],
    ability:
      "enemies attacking the last samurai have -1 melee weapon statistic",
    abilityPL: "wrogowie atakujący mają -1 statystyki walki wręcz",
    abilityName: "reinforced steel",
    abilityNamePL: "stal zbrojona",
    type: "mech",
    abilities: [
      "king katana",
      "overhead swing",
      "torrent repair",
      "cold-fused core",
    ],
    img: "lastsamurai.png",
  },
  {
    name: "Uncle Che-Sio",
    cost: 24,
    parameters: [
      { type: CharacterParameterType.health, value: 6 },
      { type: CharacterParameterType.shield, value: 1 },
      { type: CharacterParameterType.gun, value: 4 },
      { type: CharacterParameterType.rifle, value: 3 },
      { type: CharacterParameterType.hand, value: 4 },
      { type: CharacterParameterType.body, value: 6 },
      { type: CharacterParameterType.hack, value: 1 },
      { type: CharacterParameterType.engineer, value: 2 },
      { type: CharacterParameterType.actions, value: 2 },
      { type: CharacterParameterType.brain, value: 1 },
      { type: CharacterParameterType.speed, value: 4 },
    ],
    ability: "che-sio is immune to stun",
    abilityPL: "odporność na ogłuszenie",
    abilityName: "center of gravity",
    abilityNamePL: "centrum grawitacji",
    type: "organic",
    abilities: ["hand of doom", "MG-z tommy", "Mob reflex", ""],
    img: "uncleCheSio.png",
  },
  {
    name: "Vengful Nakahara",
    cost: 25,
    parameters: [
      { type: CharacterParameterType.health, value: 5 },
      { type: CharacterParameterType.shield, value: 1 },
      { type: CharacterParameterType.gun, value: 3 },
      { type: CharacterParameterType.rifle, value: 3 },
      { type: CharacterParameterType.hand, value: 4 },
      { type: CharacterParameterType.body, value: 6 },
      { type: CharacterParameterType.hack, value: 0 },
      { type: CharacterParameterType.engineer, value: 1 },
      { type: CharacterParameterType.actions, value: 2 },
      { type: CharacterParameterType.brain, value: 1 },
      { type: CharacterParameterType.speed, value: 4 },
    ],
    ability:
      "ranged and special weapon attacks against nakahara have 0 armour penetration",
    abilityPL:
      "ataki na odległość i z broni specjalnej mają 0 penetracji zbroi",
    abilityName: "hyber-dodge",
    abilityNamePL: "hyper unik",
    type: "organic",
    abilities: ["Mantis Blades", "thirst for blood", "Vendetta", ""],
    img: "nakahara.png",
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

export { getCharacter, CharacterParameterType, characters };
