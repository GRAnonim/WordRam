/**
 * WordRam - Data & CEFR Level Dictionaries (v10)
 * Словари A1-C1 (3-9 букв), диагностический тест и динамическая прогрессия сеток (4x4 - 9x9).
 */

const WordRamData = {
  cefrDictionary: {
  "A1": {
    "3": [
      "CAT",
      "DOG",
      "SUN",
      "BOY",
      "DAY",
      "CAR",
      "CUP",
      "BAG",
      "BED",
      "KEY",
      "EGG",
      "TEA",
      "RED",
      "PEN",
      "EYE",
      "BOX",
      "BUS",
      "HAT",
      "ARM",
      "LEG"
    ],
    "4": [
      "BOOK",
      "DOOR",
      "MILK",
      "TREE",
      "FISH",
      "BIRD",
      "HOME",
      "COLD",
      "FOOD",
      "NAME",
      "CITY",
      "BALL",
      "SNOW",
      "RAIN",
      "TIME",
      "ROOM",
      "PARK",
      "BABY",
      "DESK",
      "BOAT"
    ],
    "5": [
      "WATER",
      "APPLE",
      "HOUSE",
      "BREAD",
      "HAPPY",
      "GREEN",
      "RIVER",
      "MUSIC",
      "TABLE",
      "CHAIR",
      "CLEAN",
      "SLEEP",
      "PLANT",
      "NIGHT",
      "LIGHT",
      "CLOCK",
      "TRAIN",
      "PAPER",
      "MONEY",
      "BEACH"
    ],
    "6": [
      "MOTHER",
      "FATHER",
      "SISTER",
      "FAMILY",
      "SCHOOL",
      "FRIEND",
      "YELLOW",
      "SUMMER",
      "WINTER",
      "GARDEN",
      "STREET",
      "ORANGE",
      "DOCTOR",
      "WINDOW",
      "ANIMAL",
      "BANANA",
      "PENCIL",
      "FLOWER",
      "SOCCER",
      "COFFEE"
    ],
    "7": [
      "BROTHER",
      "STUDENT",
      "MORNING",
      "EVENING",
      "TEACHER",
      "HOLIDAY",
      "KITCHEN",
      "BEDROOM",
      "WEATHER",
      "PICTURE",
      "STATION",
      "AIRPORT",
      "WELCOME",
      "PACKAGE",
      "COUNTRY"
    ],
    "8": [
      "HOSPITAL",
      "NOTEBOOK",
      "AIRPLANE",
      "BASEBALL",
      "CHILDREN",
      "DAUGHTER",
      "MOUNTAIN",
      "SANDWICH",
      "SWIMMING",
      "UMBRELLA",
      "VACATION",
      "WEEKENDS",
      "FOOTBALL",
      "BIRTHDAY"
    ],
    "9": [
      "CLASSROOM",
      "BREAKFAST",
      "BEAUTIFUL",
      "AFTERNOON",
      "CHOCOLATE",
      "NEWSPAPER",
      "PASSENGER",
      "PROFESSOR",
      "TELEPHONE",
      "VEGETABLE",
      "APARTMENT",
      "YESTERDAY"
    ]
  },
  "A2": {
    "3": [
      "SEA",
      "SKY",
      "AIR",
      "ICE",
      "MAP",
      "OIL",
      "RUN",
      "WIN",
      "AGE",
      "JOB",
      "ART",
      "EAR",
      "ROW",
      "TAX",
      "FAN",
      "LIP",
      "TOY"
    ],
    "4": [
      "ROAD",
      "WIND",
      "FIRE",
      "STAR",
      "CAFE",
      "CAKE",
      "SHIP",
      "COIN",
      "GAME",
      "GIFT",
      "GOLD",
      "HERO",
      "LAKE",
      "RING",
      "SAND",
      "FARM",
      "LION"
    ],
    "5": [
      "BRAIN",
      "CANDY",
      "CLOUD",
      "DANCE",
      "DREAM",
      "EARTH",
      "FLAME",
      "FRUIT",
      "GLASS",
      "HEART",
      "HOTEL",
      "JUICE",
      "KNIFE",
      "LEMON",
      "MAGIC",
      "OCEAN",
      "PARTY"
    ],
    "6": [
      "ACTION",
      "BRIDGE",
      "CAMERA",
      "CASTLE",
      "DESERT",
      "ENERGY",
      "FOREST",
      "FUTURE",
      "HEALTH",
      "ISLAND",
      "JUNGLE",
      "MARKET",
      "MEMORY",
      "PALACE",
      "PLANET",
      "ROCKET",
      "SHIELD",
      "SPRING",
      "VALLEY"
    ],
    "7": [
      "CAPTAIN",
      "CARAVAN",
      "CRYSTAL",
      "DOLPHIN",
      "FASHION",
      "JOURNEY",
      "KINGDOM",
      "LANTERN",
      "PYRAMID",
      "UNIFORM",
      "VILLAGE",
      "WARRIOR"
    ],
    "8": [
      "BUSINESS",
      "CALENDAR",
      "COMPUTER",
      "DIRECTOR",
      "DISASTER",
      "ENGINEER",
      "EXERCISE",
      "FESTIVAL",
      "INTERNET",
      "LOCATION",
      "MEDICINE",
      "SURPRISE",
      "STRENGTH",
      "QUESTION",
      "RESOURCE"
    ],
    "9": [
      "ADVENTURE",
      "COMMUNITY",
      "DANGEROUS",
      "EDUCATION",
      "EQUIPMENT",
      "IMPORTANT",
      "POLLUTION",
      "TRANSPORT",
      "VOLUNTEER",
      "WONDERFUL",
      "CELEBRATE"
    ]
  },
  "B1": {
    "3": [
      "RAW",
      "FOG",
      "RAY",
      "ORE",
      "AIM",
      "TIE",
      "NET",
      "GAP",
      "FEE",
      "RIB",
      "ROD",
      "GUM",
      "GEM",
      "JAR"
    ],
    "4": [
      "BOND",
      "CLAY",
      "DAWN",
      "ECHO",
      "FLOW",
      "GRID",
      "HORN",
      "MAZE",
      "MINT",
      "PEAK",
      "RUSH",
      "TIDE",
      "VEIN",
      "WAVE",
      "YARD",
      "HARE",
      "ISLE",
      "ROSE",
      "VALE"
    ],
    "5": [
      "ALERT",
      "AMBER",
      "ARROW",
      "ASSET",
      "BADGE",
      "BLAZE",
      "BLOOM",
      "CABIN",
      "CHAMP",
      "CHARM",
      "CHESS",
      "CHIEF",
      "CORAL",
      "CRANE",
      "CROWN",
      "DRIFT",
      "FORGE",
      "HAVEN",
      "NOBLE",
      "PULSE"
    ],
    "6": [
      "ANCHOR",
      "AVENUE",
      "BREEZE",
      "BRONZE",
      "CANYON",
      "CIRCUS",
      "COBALT",
      "CRUISE",
      "DRAGON",
      "FOSSIL",
      "GALAXY",
      "GEYSER",
      "KNIGHT",
      "MARBLE",
      "METEOR",
      "NEBULA",
      "OCTAVE",
      "SAFARI",
      "STATUE",
      "TIMBER"
    ],
    "7": [
      "ACADEMY",
      "BLOSSOM",
      "CASCADE",
      "COMPASS",
      "EMERALD",
      "EXPLORE",
      "FEATHER",
      "FIREFLY",
      "FORTUNE",
      "GLACIER",
      "HARMONY",
      "HORIZON",
      "ICEBERG",
      "MIRACLE",
      "PHOENIX",
      "RAINBOW",
      "SCENERY",
      "TRIUMPH"
    ],
    "8": [
      "CHAMPION",
      "TREASURE",
      "ALLIANCE",
      "AUDIENCE",
      "CAMPAIGN",
      "CEREMONY",
      "CLUSTERS",
      "CREATION",
      "DATABASE",
      "ELECTION",
      "EXPLORER",
      "HORIZONS",
      "STRATEGY"
    ],
    "9": [
      "CHALLENGE",
      "CHEMISTRY",
      "DEMOCRACY",
      "DISCOVERY",
      "ECOSYSTEM",
      "FREQUENCY",
      "GEOGRAPHY",
      "INVENTION",
      "LANDSCAPE",
      "RESOURCES",
      "AWARENESS"
    ]
  },
  "B2": {
    "3": [
      "ERA",
      "EGO",
      "CUE",
      "RIM",
      "SUM",
      "VOW",
      "WIT",
      "APT",
      "FOE",
      "HUE",
      "ASH",
      "AXE",
      "BOG",
      "DOT",
      "FIG"
    ],
    "4": [
      "APEX",
      "AXIS",
      "BULK",
      "COOP",
      "FLAW",
      "GLOW",
      "HEIR",
      "ICON",
      "LOFT",
      "MOSS",
      "OATH",
      "PLEX",
      "VOID",
      "ZEAL",
      "ACID",
      "ALTO",
      "ARCH",
      "BASK",
      "CULL"
    ],
    "5": [
      "ADAPT",
      "ALIBI",
      "APRON",
      "CLOVE",
      "EMBER",
      "IVORY",
      "RADAR",
      "ROBOT",
      "SHARD",
      "SPARK",
      "SPEAR",
      "STAMP",
      "STEAM",
      "VALOR",
      "WRATH"
    ],
    "6": [
      "ALPINE",
      "BEACON",
      "CHISEL",
      "CRATER",
      "FALCON",
      "GLIDER",
      "HARBOR",
      "LAGOON",
      "MAGNET",
      "PUDDLE",
      "TUNNEL",
      "VELVET",
      "VORTEX",
      "WALNUT",
      "ZENITH"
    ],
    "7": [
      "BALLOON",
      "EMBRACE",
      "FREEDOM",
      "GENUINE",
      "GRAVITY",
      "HABITAT",
      "INSIGHT",
      "JUSTICE",
      "MONARCH",
      "SOLVENT",
      "BARRIER",
      "CITIZEN",
      "DYNAMIC"
    ],
    "8": [
      "HERITAGE",
      "MONUMENT",
      "SPECTRUM",
      "UNIVERSE",
      "ABSOLUTE",
      "ACADEMIC",
      "ACCURATE",
      "ADVOCATE",
      "BOUNDARY",
      "COHERENT",
      "DECISIVE",
      "DOMINANT",
      "ELOQUENT",
      "FRACTION",
      "GENEROUS",
      "MOMENTUM"
    ],
    "9": [
      "ALCHEMIST",
      "CONSENSUS",
      "SPECTRUMS",
      "DIMENSION",
      "DOMINANCE",
      "EVOLUTION",
      "FORMATION",
      "INTEGRITY",
      "MIGRATION",
      "SANCTUARY",
      "AUTHORITY",
      "STRUCTURE"
    ]
  },
  "C1": {
    "3": [
      "EBB",
      "AWE",
      "NIL",
      "JAB",
      "ZAG",
      "YAK",
      "URN",
      "PLY",
      "NIX"
    ],
    "4": [
      "CRUX",
      "FLUX",
      "KNIT",
      "LORE",
      "OMEN",
      "RUNE",
      "SAGE",
      "URGE",
      "VIBE",
      "GIST",
      "PITH",
      "FOIL"
    ],
    "5": [
      "ABBEY",
      "ANVIL",
      "BLEAK",
      "CREED",
      "DRAFT",
      "ETHOS",
      "GUILE",
      "KNELL",
      "MOTIF",
      "PRISM",
      "QUALM",
      "RELIC",
      "SERVE",
      "TENET",
      "RIGOR",
      "DROSS",
      "SLOTH",
      "VIGOR"
    ],
    "6": [
      "BONSAI",
      "CLOVER",
      "COSMOS",
      "HYMNAL",
      "MIRROR",
      "POCKET",
      "PUZZLE",
      "RABBIT",
      "SECTOR",
      "SUBTLE",
      "COGNAC",
      "SCHISM",
      "LIMPID"
    ],
    "7": [
      "ACROBAT",
      "ANALOGY",
      "DYNAMIC",
      "ENTROPY",
      "EPITOME",
      "ECLIPSE",
      "MAJESTY",
      "PARADOX",
      "VINTAGE",
      "ZEALOUS",
      "AZIMUTH",
      "LACONIC",
      "AUSTERE",
      "SYNERGY",
      "SUBLIME"
    ],
    "8": [
      "CATALYST",
      "EMISSARY",
      "HERMETIC",
      "OBLIVION",
      "ALACRITY",
      "ANTIDOTE",
      "METAPHOR",
      "PARADIGM",
      "ZEALOTRY"
    ],
    "9": [
      "ATTRITION",
      "CONUNDRUM",
      "DICHOTOMY",
      "HAPHAZARD",
      "IMMUTABLE",
      "PROXIMITY",
      "INCOGNITO",
      "JUXTAPOSE",
      "MALLEABLE",
      "METAMORPH"
    ]
  }
},

  placementTestWords: [
    { word: "FAMILY", level: "A1" },
    { word: "BREAD", level: "A1" },
    { word: "HAPPY", level: "A1" },
    { word: "ISLAND", level: "A2" },
    { word: "WEATHER", level: "A2" },
    { word: "JOURNEY", level: "A2" },
    { word: "BREEZE", level: "B1" },
    { word: "CASCADE", level: "B1" },
    { word: "COMPASS", level: "B1" },
    { word: "GENUINE", level: "B2" },
    { word: "HABITAT", level: "B2" },
    { word: "HERITAGE", level: "B2" },
    { word: "ENTROPY", level: "C1" },
    { word: "EPITOME", level: "C1" },
    { word: "CATALYST", level: "C1" }
  ],

  evaluatePlacementTest(answers) {
    const levelWeights = { A1: 0, A2: 0, B1: 0, B2: 0, C1: 0 };
    const levelCounts = { A1: 0, A2: 0, B1: 0, B2: 0, C1: 0 };

    this.placementTestWords.forEach(item => {
      const ans = answers[item.word] || "DONT_KNOW";
      levelCounts[item.level]++;

      if (ans === "KNOW") {
        levelWeights[item.level] += 1.0;
      } else if (ans === "NOT_SURE") {
        levelWeights[item.level] += 0.5;
      }
    });

    const levels = ["A1", "A2", "B1", "B2", "C1"];
    let assignedLevel = "A1";

    for (const lvl of levels) {
      const scoreRatio = levelWeights[lvl] / levelCounts[lvl];
      if (scoreRatio >= 0.6) {
        assignedLevel = lvl;
      } else {
        break;
      }
    }

    const levelDetails = {
      A1: { code: "A1", badge: "A1 — Elementary", title: "Начальный (A1)", desc: "Базовая повседневная лексика", startingLevel: 1 },
      A2: { code: "A2", badge: "A2 — Pre-Intermediate", title: "Базовый (A2)", desc: "Повседневная лексика, город, путешествия", startingLevel: 1 },
      B1: { code: "B1", badge: "B1 — Intermediate", title: "Средний (B1)", desc: "Широкий словарный запас, природа, работа", startingLevel: 1 },
      B2: { code: "B2", badge: "B2 — Upper-Intermediate", title: "Выше среднего (B2)", desc: "Богатая лексика, абстрактные понятия, наука", startingLevel: 1 },
      C1: { code: "C1", badge: "C1 — Advanced", title: "Продвинутый (C1)", desc: "Сложные и академические термины, свободное владение", startingLevel: 1 }
    };

    return levelDetails[assignedLevel] || levelDetails.A1;
  },

  getLevelPackingConfig(levelNumber, userCefr = "A2") {
    let gridSize = 5;
    let wordLengths = [5, 5, 5, 5, 5];

    if (levelNumber <= 5) {
      gridSize = 4;
      wordLengths = [4, 4, 4, 4];
    } else if (levelNumber <= 25) {
      gridSize = 5;
      const templates5 = [
        [5, 5, 5, 5, 5],
        [4, 5, 5, 5, 6],
        [4, 4, 5, 6, 6],
        [3, 4, 5, 6, 7]
      ];
      wordLengths = templates5[(levelNumber - 6) % templates5.length];
    } else if (levelNumber <= 50) {
      gridSize = 6;
      wordLengths = [5, 4, 5, 4, 5, 4, 5, 4]; // 4 блока 3x3 (36 клеток)
    } else if (levelNumber <= 75) {
      gridSize = 7;
      wordLengths = [7, 7, 7, 7, 7, 7, 7]; // 49 клеток
    } else if (levelNumber <= 100) {
      gridSize = 8;
      wordLengths = [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4]; // 64 клетки
    } else {
      gridSize = 9;
      wordLengths = [5, 4, 5, 4, 5, 4, 5, 4, 5, 4, 5, 4, 5, 4, 5, 4, 9]; // 9 блоков 3x3 (81 клетка)
    }

    const totalCells = gridSize * gridSize;

    return {
      level: levelNumber,
      gridSize: gridSize,
      totalCells: totalCells,
      wordLengths: wordLengths,
      wordCount: wordLengths.length,
      minTurns: 1,
      cefrLevel: userCefr,
      coinsReward: 15 + Math.min(levelNumber, 60)
    };
  },

  getWordForCefrAndLength(cefrLevel, targetLen, exclude = []) {
    const allLevels = ["A1", "A2", "B1", "B2", "C1"];
    let pool = [];

    if (this.cefrDictionary[cefrLevel] && this.cefrDictionary[cefrLevel][targetLen]) {
      pool = pool.concat(this.cefrDictionary[cefrLevel][targetLen]);
    }

    for (const lvl of allLevels) {
      if (lvl !== cefrLevel && this.cefrDictionary[lvl] && this.cefrDictionary[lvl][targetLen]) {
        pool = pool.concat(this.cefrDictionary[lvl][targetLen]);
      }
    }

    const available = pool.filter(w => !exclude.includes(w) && w.length === targetLen);
    if (available.length > 0) {
      return available[Math.floor(Math.random() * available.length)];
    }

    const fallbacks = {
      3: ["SUN", "CAT", "DOG", "CAR", "RED", "KEY", "SEA", "SKY", "AIR", "ICE", "RAW", "FOG", "RAY", "ERA", "EGO", "EBB", "AWE"],
      4: ["BOOK", "DOOR", "MILK", "TREE", "FISH", "BIRD", "HOME", "COLD", "FOOD", "NAME", "CITY", "BALL", "SNOW", "RAIN", "TIME", "ROAD", "WIND", "FIRE", "STAR", "CAFE", "BOND", "CLAY", "DAWN", "ECHO", "FLOW", "APEX", "AXIS", "BULK", "CRUX", "FLUX"],
      5: ["WATER", "APPLE", "HOUSE", "BREAD", "HAPPY", "GREEN", "RIVER", "MUSIC", "TABLE", "CHAIR", "CLEAN", "SLEEP", "PLANT", "NIGHT", "LIGHT", "BRAIN", "CANDY", "CLOUD", "DANCE", "DREAM", "ALERT", "AMBER", "ARROW", "ASSET", "BADGE", "ADAPT", "ALIBI", "ABBEY", "ANVIL"],
      6: ["MOTHER", "FATHER", "SISTER", "FAMILY", "SCHOOL", "FRIEND", "YELLOW", "SUMMER", "WINTER", "GARDEN", "STREET", "ORANGE", "DOCTOR", "WINDOW", "ANIMAL", "ACTION", "BRIDGE", "CAMERA", "CASTLE", "DESERT", "ANCHOR", "AVENUE", "BREEZE", "BRONZE", "ALPINE", "BEACON", "BONSAI", "CLOVER"],
      7: ["BROTHER", "STUDENT", "MORNING", "EVENING", "TEACHER", "HOLIDAY", "KITCHEN", "BEDROOM", "WEATHER", "PICTURE", "STATION", "AIRPORT", "WELCOME", "PACKAGE", "COUNTRY", "CAPTAIN", "CARAVAN", "CRYSTAL", "DOLPHIN", "FASHION", "JOURNEY", "ACADEMY", "BLOSSOM", "CASCADE", "BALLOON", "EMBRACE", "ACROBAT", "ANALOGY"],
      8: ["HOSPITAL", "NOTEBOOK", "AIRPLANE", "BASEBALL", "CHILDREN", "DAUGHTER", "MOUNTAIN", "SANDWICH", "SWIMMING", "UMBRELLA", "VACATION", "WEEKENDS", "FOOTBALL", "BIRTHDAY", "BUSINESS", "CALENDAR", "COMPUTER", "DIRECTOR", "DISASTER", "ENGINEER", "ALLIANCE", "AUDIENCE", "CAMPAIGN", "CEREMONY", "ABSOLUTE", "ACADEMIC", "ACCURATE", "CATALYST", "EMISSARY"],
      9: ["CLASSROOM", "BREAKFAST", "BEAUTIFUL", "AFTERNOON", "CHOCOLATE", "NEWSPAPER", "PASSENGER", "PROFESSOR", "TELEPHONE", "VEGETABLE", "APARTMENT", "YESTERDAY", "ADVENTURE", "COMMUNITY", "DANGEROUS", "EDUCATION", "EQUIPMENT", "IMPORTANT", "CHALLENGE", "CHEMISTRY", "DEMOCRACY", "DISCOVERY", "ALCHEMIST", "CONSENSUS", "ATTRITION", "CONUNDRUM"]
    };

    const fbList = (fallbacks[targetLen] || []).filter(w => !exclude.includes(w));
    if (fbList.length > 0) {
      return fbList[Math.floor(Math.random() * fbList.length)];
    }

    return "WORD".padEnd(targetLen, "S").slice(0, targetLen);
  },

  isValidWord(word) {
    if (!word || word.length < 3) return false;
    const upper = word.toUpperCase();
    const len = upper.length;
    for (const lvl of ["A1", "A2", "B1", "B2", "C1"]) {
      if (this.cefrDictionary[lvl][len] && this.cefrDictionary[lvl][len].includes(upper)) {
        return true;
      }
    }
    return false;
  }
};

if (typeof module !== "undefined" && module.exports) {
  module.exports = WordRamData;
}
