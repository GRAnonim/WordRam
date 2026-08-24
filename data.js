/**
 * WordRam - Data & CEFR Level Dictionaries (v9)
 * Словари A1-C1 (3-9 букв), диагностический тест и динамическая прогрессия сеток (4x4 - 9x9).
 */

const WordRamData = {
  // Словарь по уровням CEFR и длинам слов (3 - 9 букв)
  cefrDictionary: {
    A1: {
      3: ["CAT", "DOG", "SUN", "BOY", "DAY", "CAR", "CUP", "BAG", "BED", "KEY", "EGG", "TEA", "RED", "PEN", "EYE", "BOX", "BUS", "HAT", "ARM", "LEG"],
      4: ["BOOK", "DOOR", "MILK", "TREE", "FISH", "BIRD", "HOME", "COLD", "FOOD", "NAME", "CITY", "BALL", "SNOW", "RAIN", "TIME", "ROOM", "PARK", "BABY", "DESK", "BOAT"],
      5: ["WATER", "APPLE", "HOUSE", "BREAD", "HAPPY", "GREEN", "RIVER", "MUSIC", "TABLE", "CHAIR", "CLEAN", "SLEEP", "PLANT", "NIGHT", "LIGHT", "CLOCK", "TRAIN", "PAPER", "MONEY", "BEACH"],
      6: ["MOTHER", "FATHER", "SISTER", "FAMILY", "SCHOOL", "FRIEND", "YELLOW", "SUMMER", "WINTER", "GARDEN", "STREET", "ORANGE", "DOCTOR", "WINDOW", "ANIMAL", "BANANA", "PENCIL", "FLOWER", "SOCCER", "COFFEE"],
      7: ["BROTHER", "STUDENT", "MORNING", "EVENING", "TEACHER", "HOLIDAY", "KITCHEN", "BEDROOM", "WEATHER", "PICTURE", "STATION", "AIRPORT", "WELCOME", "PACKAGE", "COUNTRY"],
      8: ["HOSPITAL", "NOTEBOOK", "AIRPLANE", "BASEBALL", "CHILDREN", "DAUGHTER", "MOUNTAIN", "SANDWICH", "SWIMMING", "UMBRELLA", "VACATION", "WEEKENDS", "FOOTBALL", "BIRTHDAY", "AIRPORTS"],
      9: ["CLASSROOM", "BREAKFAST", "BEAUTIFUL", "AFTERNOON", "CHOCOLATE", "NEWSPAPER", "PASSENGER", "PROFESSOR", "TELEPHONE", "VEGETABLE", "APARTMENT", "SATURDAYS", "YESTERDAY", "DICTIONARY"]
    },
    A2: {
      3: ["SEA", "SKY", "AIR", "ICE", "MAP", "OIL", "RUN", "WIN", "BOX", "AGE", "JOB", "BUS", "ART", "ARM", "EAR", "ROW", "TAX", "FAN", "LIP", "TOY"],
      4: ["ROAD", "WIND", "FIRE", "STAR", "PARK", "CAFE", "CAKE", "SHIP", "BOAT", "COIN", "DESK", "GAME", "GIFT", "GOLD", "HERO", "LAKE", "RING", "SAND", "FARM", "LION"],
      5: ["BEACH", "BRAIN", "CANDY", "CLOCK", "CLOUD", "DANCE", "DREAM", "EARTH", "FLAME", "FRUIT", "GLASS", "HEART", "HOTEL", "ISLAND", "JUICE", "KNIFE", "LEMON", "MAGIC", "OCEAN", "PARTY"],
      6: ["ACTION", "BRIDGE", "CAMERA", "CASTLE", "COFFEE", "DESERT", "ENERGY", "FOREST", "FUTURE", "HEALTH", "ISLAND", "JUNGLE", "MARKET", "MEMORY", "PALACE", "PLANET", "ROCKET", "SHIELD", "SPRING", "VALLEY"],
      7: ["AIRPORT", "CAPTAIN", "CARAVAN", "CRYSTAL", "DOLPHIN", "FASHION", "JOURNEY", "KINGDOM", "LANTERN", "PACKAGE", "PYRAMID", "UNIFORM", "VILLAGE", "WARRIOR", "WEATHER"],
      8: ["BUSINESS", "CALENDAR", "COMPUTER", "DIRECTOR", "DISASTER", "ENGINEER", "EXERCISE", "FESTIVAL", "INTERNET", "LOCATION", "MEDICINE", "SURPRISE", "STRENGTH", "QUESTION", "RESOURCE"],
      9: ["ADVENTURE", "COMMUNITY", "DANGEROUS", "EDUCATION", "EQUIPMENT", "IMPORTANT", "POLLUTION", "TRANSPORT", "VOLUNTEER", "WONDERFUL", "CELEBRATE", "DIFFERENT", "INTERESTING"]
    },
    B1: {
      3: ["RAW", "FOG", "RAY", "ORE", "AIM", "ROW", "TIE", "NET", "GAP", "FEE", "RIB", "ROD", "GUM", "GEM", "JAR"],
      4: ["BOND", "CLAY", "DAWN", "ECHO", "FLOW", "GRID", "HORN", "MAZE", "MINT", "PEAK", "RUSH", "TIDE", "VEIN", "WAVE", "YARD", "FOSS", "HARE", "ISLE", "ROSE", "VALE"],
      5: ["ALERT", "AMBER", "ARROW", "ASSET", "BADGE", "BLAZE", "BLOOM", "CABIN", "CHAMP", "CHARM", "CHESS", "CHIEF", "CORAL", "CRANE", "CROWN", "DRIFT", "FORGE", "HAVEN", "NOBLE", "PULSE"],
      6: ["ANCHOR", "AVENUE", "BREEZE", "BRONZE", "CANYON", "CIRCUS", "COBALT", "CRUISE", "DRAGON", "FOSSIL", "GALAXY", "GEYSER", "KNIGHT", "MARBLE", "METEOR", "NEBULA", "OCTAVE", "SAFARI", "STATUE", "TIMBER"],
      7: ["ACADEMY", "BLOSSOM", "CASCADE", "CHAMPION", "COMPASS", "EMERALD", "EXPLORE", "FEATHER", "FIREFLY", "FORTUNE", "GLACIER", "HARMONY", "HORIZON", "ICEBERG", "MIRACLE", "PHOENIX", "RAINBOW", "SCENERY", "TREASURE", "TRIUMPH"],
      8: ["ALLIANCE", "AUDIENCE", "BARRIER", "CAMPAIGN", "CEREMONY", "CHAMPION", "CITIZEN", "CLUSTERS", "CREATION", "DATABASE", "DISCOVERY", "ELECTION", "EXPLORER", "HORIZONS", "STRATEGY"],
      9: ["CHALLENGE", "CHEMISTRY", "DEMOCRACY", "DISCOVERY", "ECOSYSTEM", "FREQUENCY", "GEOGRAPHY", "INVENTION", "LANDSCAPE", "RESOURCES", "AWARENESS", "CREATIVITY", "EXPERIENCE"]
    },
    B2: {
      3: ["ERA", "EGO", "CUE", "RIM", "SUM", "VOW", "WIT", "APT", "FOE", "HUE", "ASH", "AXE", "BOG", "DOT", "FIG"],
      4: ["APEX", "AXIS", "BULK", "COOP", "FLAW", "GLOW", "HEIR", "ICON", "ISLE", "LOFT", "MOSS", "OATH", "PLEX", "VOID", "ZEAL", "ACID", "ALTO", "ARCH", "BASK", "CULL"],
      5: ["ADAPT", "ALIBI", "APRON", "CLOVE", "DRIFT", "EMBER", "FORGE", "HAVEN", "IVORY", "NOBLE", "PULSE", "RADAR", "ROBOT", "SHARD", "SPARK", "SPEAR", "STAMP", "STEAM", "VALOR", "WRATH"],
      6: ["ALPINE", "BEACON", "CHISEL", "CRATER", "FALCON", "GLIDER", "HARBOR", "LAGOON", "MAGNET", "NEBULA", "OCTAVE", "PUDDLE", "SAFARI", "STATUE", "TIMBER", "TUNNEL", "VELVET", "VORTEX", "WALNUT", "ZENITH"],
      7: ["ALCHEMIST", "BALLOON", "EMBRACE", "FREEDOM", "GENUINE", "GRAVITY", "HABITAT", "HERITAGE", "IMMENSE", "INSIGHT", "JUSTICE", "MONARCH", "MONUMENT", "MYSTERY", "PHOENIX", "PYRAMID", "SOLVENT", "SPECTRUM", "TRIUMPH", "UNIVERSE"],
      8: ["ABSOLUTE", "ACADEMIC", "ACCURATE", "ADVOCATE", "BOUNDARY", "COHERENT", "CONSENSUS", "DECISIVE", "DOMINANT", "DYNAMIC", "ELOQUENT", "FRACTION", "GENEROUS", "HYPOTHESIS", "MOMENTUM", "SPECTRUMS"],
      9: ["BIODIVERSITY", "COGNITION", "COMMISSION", "DIMENSION", "DOMINANCE", "EVOLUTION", "FORMATION", "INTEGRITY", "MIGRATION", "SANCTUARY", "AUTHORITY", "CONSENSUS", "STRUCTURE"]
    },
    C1: {
      3: ["EBB", "AWE", "NIL", "JAB", "VEER", "ZAG", "YAK", "URN", "PLY", "NIX"],
      4: ["CRUX", "FLUX", "KNIT", "LORE", "OMEN", "RUNE", "SAGE", "URGE", "VALE", "VIBE", "GIST", "PITH", "ZEAL", "APEX", "FOIL"],
      5: ["ABBEY", "ANVIL", "BLEAK", "CREED", "DRAFT", "ETHOS", "GUILE", "KNELL", "MOTIF", "PRISM", "QUALM", "RELIC", "SERVE", "VALOR", "WRATH", "TENET", "RIGOR", "DROSS", "SLOTH", "VIGOR"],
      6: ["BONSAI", "CLOVER", "COSMOS", "HYMNAL", "MIRROR", "POCKET", "PUZZLE", "RABBIT", "SECTOR", "SHIELD", "SUBTLE", "VALLEY", "VORTEX", "WALNUT", "ZENITH", "COGNAC", "SCHISM", "LIMPID", "LACONIC", "AUSTERE"],
      7: ["ACROBAT", "ANALOGY", "CATALYST", "DYNAMIC", "ENTROPY", "EPITOME", "ECLIPSE", "HARMONY", "MAJESTY", "PARADOX", "SPECTRUM", "TRIUMPH", "UNIVERSE", "VINTAGE", "ZEALOUS", "AZIMUTH", "EMISSARY", "HERMETIC", "OBLIVION", "SUBLIME"],
      8: ["ALACRITY", "ANTIDOTE", "ATTRITION", "CONUNDRUM", "DICHOTOMY", "EPIPHANY", "EQUANIMITY", "FASTIDIOUS", "HAPHAZARD", "IMMUTABLE", "METAPHOR", "PARADIGM", "PROXIMITY", "SYNERGY", "ZEALOTRY"],
      9: ["ANACHRONISM", "BENEVOLENT", "CORROBORATE", "DILETTANTE", "EQUANIMITY", "INCOGNITO", "JUXTAPOSE", "MALLEABLE", "METAMORPH", "PERIPHERAL", "UBIQUITOUS", "SURREPTIT", "INDOLENCE"]
    }
  },

  placementTestWords: [
    { word: "FAMILY", level: "A1", translation: "Семья", hint: "Группа людей: родители и дети" },
    { word: "BREAD", level: "A1", translation: "Хлеб", hint: "Продукт питания из муки" },
    { word: "HAPPY", level: "A1", translation: "Счастливый", hint: "Чувство радости и удовольствия" },
    { word: "ISLAND", level: "A2", translation: "Остров", hint: "Участок суши, окруженный водой" },
    { word: "WEATHER", level: "A2", translation: "Погода", hint: "Состояние атмосферы (дождь, солнце)" },
    { word: "JOURNEY", level: "A2", translation: "Путешествие", hint: "Поездка из одного места в другое" },
    { word: "BREEZE", level: "B1", translation: "Легкий ветерок", hint: "Приятный, мягкий ветер" },
    { word: "CASCADE", level: "B1", translation: "Водопад / каскад", hint: "Небольшой водопад или цепочка событий" },
    { word: "COMPASS", level: "B1", translation: "Компас", hint: "Прибор для ориентирования по сторонам света" },
    { word: "GENUINE", level: "B2", translation: "Подлинный / искренний", hint: "Настоящий, неподдельный" },
    { word: "HABITAT", level: "B2", translation: "Среда обитания", hint: "Естественная природная среда животного или растения" },
    { word: "HERITAGE", level: "B2", translation: "Наследие", hint: "Культурные и исторические ценности прошлого" },
    { word: "ENTROPY", level: "C1", translation: "Энтропия", hint: "Мера беспорядка и непредсказуемости системы" },
    { word: "EPITOME", level: "C1", translation: "Воплощение / эталон", hint: "Человек или вещь как идеальный образец качества" },
    { word: "CATALYST", level: "C1", translation: "Катализатор", hint: "Фактор или вещество, ускоряющее процесс" }
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
      const templates6 = [
        [6, 6, 6, 6, 6, 6],
        [5, 5, 6, 6, 7, 7],
        [4, 5, 6, 7, 7, 7],
        [5, 6, 6, 6, 6, 7]
      ];
      wordLengths = templates6[(levelNumber - 26) % templates6.length];
    } else if (levelNumber <= 75) {
      gridSize = 7;
      const templates7 = [
        [7, 7, 7, 7, 7, 7, 7],
        [6, 6, 7, 7, 7, 8, 8],
        [5, 6, 7, 7, 8, 8, 8],
        [6, 7, 7, 7, 7, 7, 8]
      ];
      wordLengths = templates7[(levelNumber - 51) % templates7.length];
    } else if (levelNumber <= 100) {
      gridSize = 8;
      const templates8 = [
        [8, 8, 8, 8, 8, 8, 8, 8],
        [7, 7, 8, 8, 8, 8, 9, 9],
        [6, 7, 8, 8, 8, 9, 9, 9]
      ];
      wordLengths = templates8[(levelNumber - 76) % templates8.length];
    } else {
      gridSize = 9;
      wordLengths = [9, 9, 9, 9, 9, 9, 9, 9, 9];
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

    // Приоритетно берем из выбранного уровня
    if (this.cefrDictionary[cefrLevel] && this.cefrDictionary[cefrLevel][targetLen]) {
      pool = pool.concat(this.cefrDictionary[cefrLevel][targetLen]);
    }

    // Дополняем из остальных уровней
    for (const lvl of allLevels) {
      if (lvl !== cefrLevel && this.cefrDictionary[lvl] && this.cefrDictionary[lvl][targetLen]) {
        pool = pool.concat(this.cefrDictionary[lvl][targetLen]);
      }
    }

    // Фильтруем уже использованные в этом уровне
    const available = pool.filter(w => !exclude.includes(w) && w.length === targetLen);
    if (available.length > 0) {
      return available[Math.floor(Math.random() * available.length)];
    }

    // Fallback генератор уникального слова нужной длины
    const fallbackList = pool.filter(w => w.length === targetLen);
    if (fallbackList.length > 0) {
      return fallbackList[Math.floor(Math.random() * fallbackList.length)];
    }

    return "WORDS".padEnd(targetLen, "X").slice(0, targetLen);
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
