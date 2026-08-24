/**
 * WordRam - Data & Dictionaries
 * Содержит словари, темы, базовые конфигурации уровней и частоты букв.
 */

const WordRamData = {
  // Частотное распределение английских букв для реалистичного заполнения пустых ячеек (дистракторы)
  letterFrequencies: "EEEEEEEEEEEETTTTTTTTTAAAAAAAAAOOOOOOOOIIIIIIIINNNNNNNNSSSSSSSHHHHHHRRRRRRDDDDLLLLCCCUUUMMMWWFFGGYYPPBVKJXQZ",

  // Словарь популярных английских слов по длинам (3 - 8 букв)
  dictionary: {
    3: [
      "AIR", "ANT", "APE", "ARM", "ART", "ASH", "AXE", "BAG", "BAR", "BAT",
      "BED", "BEE", "BOG", "BOX", "BOY", "BUS", "CAP", "CAT", "COW", "CUP",
      "DAY", "DOG", "DOT", "DRY", "EAR", "EGG", "ELF", "EYE", "FAN", "FAT",
      "FIG", "FOG", "FOX", "GEM", "GUM", "HAT", "HEN", "HEX", "ICE", "INK",
      "JAR", "JAW", "JOY", "KEY", "LAB", "LEG", "LID", "LIP", "LOG", "MAP",
      "MUG", "NET", "NUT", "OAK", "OIL", "OWL", "PAN", "PEN", "PET", "PIG",
      "PIN", "POT", "RAT", "RAY", "RIB", "ROD", "ROW", "RUG", "RUN", "SEA",
      "SKY", "SPY", "SUN", "TEA", "TOE", "TOP", "TOY", "VAN", "WEB", "ZIP"
    ],
    4: [
      "ACID", "AGED", "ALTO", "APEX", "ARCH", "ARMY", "ATOM", "BABY", "BAKE", "BALL",
      "BANK", "BARK", "BARN", "BATH", "BEAM", "BEAN", "BEAR", "BEAT", "BELL", "BELT",
      "BIRD", "BLUE", "BOAT", "BOND", "BONE", "BOOK", "BOOT", "BOSS", "BOWL", "BUSH",
      "CAFE", "CAKE", "CALM", "CAMP", "CAPE", "CARD", "CARE", "CASH", "CAST", "CAVE",
      "CITY", "CLAP", "CLAY", "CLUB", "COAL", "COAT", "COIN", "COLD", "COOK", "COOL",
      "CORN", "CRAB", "DAWN", "DEAR", "DECK", "DEER", "DESK", "DIET", "DISK", "DOOR",
      "DORM", "DOVE", "DROP", "DRUM", "DUCK", "DUST", "EAGLE", "EARTH", "EAST", "ECHO",
      "EDGE", "EPIC", "FACE", "FACT", "FARM", "FAST", "FEET", "FILM", "FIRE", "FISH",
      "FLAG", "FLAT", "FLOW", "FOAM", "FOOD", "FORK", "FORT", "FROG", "FUEL", "GAME",
      "GATE", "GEAR", "GIFT", "GLOW", "GOAL", "GOLD", "GOLF", "GRID", "GULF", "HAIR",
      "HALL", "HAND", "HARE", "HERO", "HILL", "HOPE", "HORN", "HOUR", "ICON", "IDEA",
      "IRON", "ISLE", "JAZZ", "JOIN", "JUMP", "KEEP", "KING", "KITE", "LAKE", "LAMP",
      "LAND", "LEAF", "LION", "LOCK", "LUCK", "MAZE", "MILK", "MINT", "MOON", "MOSS",
      "NEST", "NOON", "OASIS", "OCEAN", "PARK", "PATH", "PEAK", "RAIN", "RING", "RIVER",
      "ROAD", "ROCK", "ROSE", "SAND", "SHIP", "SNOW", "STAR", "SURF", "TREE", "WIND"
    ],
    5: [
      "ACORN", "ACTOR", "ADAPT", "ALBUM", "ALERT", "ALIBI", "ALLEY", "AMBER", "ANGEL", "ANKLE",
      "APPLE", "APRON", "ARROW", "ASSET", "ATLAS", "AUDIO", "BADGE", "BAGEL", "BAKER", "BASIC",
      "BEACH", "BLAZE", "BLOOM", "BOARD", "BRAIN", "BRAVE", "BREAD", "BRICK", "BRIEF", "BROOM",
      "CABIN", "CAMEL", "CANDY", "CANOE", "CARGO", "CHALK", "CHAMP", "CHARM", "CHESS", "CHIEF",
      "CLOCK", "CLOUD", "CLOVE", "COAST", "CORAL", "CRANE", "CREAM", "CREEK", "CRISP", "CROWN",
      "DAILY", "DANCE", "DREAM", "DRIFT", "DRIVE", "EAGLE", "EARTH", "EMBER", "FAIRY", "FLAME",
      "FLASH", "FLUTE", "FORGE", "FROST", "GIANT", "GLOBE", "GRAPE", "GRASS", "GREEN", "GUIDE",
      "HAVEN", "HEART", "HONEY", "HOTEL", "HOUSE", "IMAGE", "IVORY", "JUICE", "KNIFE", "LEMON",
      "LIGHT", "MAGIC", "MANGO", "MEDAL", "MELON", "MODEL", "MONEY", "MUSIC", "NIGHT", "NOBLE",
      "NOVEL", "OCEAN", "ONION", "ORBIT", "ORGAN", "PAINT", "PANEL", "PAPER", "PARTY", "PEACE",
      "PEACH", "PEARL", "PIANO", "PILOT", "PIZZA", "PLANT", "PLAZA", "PRIDE", "PRISM", "PULSE",
      "QUEEN", "QUEST", "RADAR", "RADIO", "RIDER", "RIVER", "ROBOT", "ROBIN", "ROYAL", "SALAD",
      "SCALE", "SHADOW", "SHARK", "SHINE", "SHORE", "SILVER", "SMILE", "SNAKE", "SOLAR", "SPACE",
      "SPARK", "SPEAR", "STAMP", "STEAM", "STONE", "STORM", "SUGAR", "SUNNY", "SWORD", "TIGER",
      "TOWER", "TRACK", "TRAIL", "TRAIN", "VALLEY", "VAPOR", "VOICE", "WATER", "WHEAT", "ZEBRA"
    ],
    6: [
      "ACTION", "ALPINE", "ANCHOR", "ANIMAL", "ARCADE", "AVENUE", "BAMBOO", "BANNER", "BEACON", "BEETLE",
      "BLAZER", "BONSAI", "BREEZE", "BRIDGE", "BRONZE", "BUFFET", "BUTTER", "CACTUS", "CAMERA", "CANDLE",
      "CANYON", "CASTLE", "CHERRY", "CHISEL", "CIRCUS", "CLOVER", "COBALT", "COFFEE", "COSMOS", "CRATER",
      "CRUISE", "CRYSTAL", "DESERT", "DIAMOND", "DOLPHIN", "DRAGON", "EMERALD", "ENERGY", "ENGINE", "FALCON",
      "FOREST", "FOSSIL", "GALAXY", "GARDEN", "GEYSER", "GLIDER", "HARBOR", "HORIZON", "HUNTER", "ISLAND",
      "JUNGLE", "KNIGHT", "LAGOON", "LANTERN", "LEGEND", "MAGNET", "MARBLE", "MEADOW", "METEOR", "MIRROR",
      "MONKEY", "MUSEUM", "NEBULA", "OCTAVE", "PALACE", "PARROT", "PLANET", "POCKET", "PUDDLE", "PUZZLE",
      "RABBIT", "ROCKET", "SAFARI", "SAILOR", "SEASON", "SHADOW", "SHIELD", "SILVER", "SPRING", "STATUE",
      "SUMMER", "SUNSET", "TEMPLE", "THUNDER", "TIMBER", "TUNNEL", "VALLEY", "VELVET", "VIOLET", "VORTEX",
      "VOYAGE", "WALNUT", "WANDER", "WINTER", "WIZARD", "WOODS"
    ],
    7: [
      "ACADEMY", "AIRPORT", "ALCHEMIST", "BALLOON", "BLOSSOM", "CAPTAIN", "CARAVAN", "CASCADE", "CHAMPION", "COMPASS",
      "CRYSTAL", "DOLPHIN", "EMERALD", "EXPLORE", "FEATHER", "FIREFLY", "FORTUNE", "GALAXY", "GLACIER", "HARMONY",
      "HORIZON", "ICEBERG", "JOURNEY", "KINGDOM", "LANTERN", "MEADOWS", "MINERAL", "MIRACLE", "MONARCH", "MONUMENT",
      "MYSTERY", "OCTOPUS", "OLYMPIC", "ORIGAMI", "PACKAGE", "PANTHER", "PASSAGE", "PEACOCK", "PENDANT", "PHOENIX",
      "PIONEER", "PIRATES", "PYRAMID", "RAINBOW", "SCENERY", "SEAFOOD", "SPARROW", "SUNSHINE", "THUNDER", "TREASURE",
      "TRIUMPH", "TSUNAMI", "UNICORN", "UNIVERSE", "VICTORY", "VINTAGE", "VOLCANO", "VOYAGER", "WARRIOR", "WHISPER"
    ]
  },

  // Тематические наборы для специальных уровней и ежедневных испытаний
  themes: [
    {
      id: "nature",
      name: "Природа",
      words: ["TREE", "RIVER", "LEAF", "FOREST", "STONE", "VALLEY", "OCEAN", "EARTH", "STORM", "WIND"]
    },
    {
      id: "animals",
      name: "Животные",
      words: ["LION", "TIGER", "BEAR", "EAGLE", "SHARK", "RABBIT", "FALCON", "DOLPHIN", "WOLF", "ZEBRA"]
    },
    {
      id: "space",
      name: "Космос",
      words: ["STAR", "MOON", "SUN", "ORBIT", "PLANET", "GALAXY", "METEOR", "NEBULA", "ROCKET", "COMET"]
    },
    {
      id: "food",
      name: "Еда и напитки",
      words: ["CAKE", "BREAD", "MILK", "APPLE", "HONEY", "PIZZA", "LEMON", "GRAPE", "COFFEE", "SUGAR"]
    },
    {
      id: "adventure",
      name: "Приключения",
      words: ["MAP", "PATH", "CAMP", "QUEST", "SWORD", "CASTLE", "SHIELD", "KNIGHT", "VOYAGE", "TREASURE"]
    },
    {
      id: "weather",
      name: "Погода и стихии",
      words: ["RAIN", "SNOW", "WIND", "FIRE", "ICE", "CLOUD", "FROST", "FLAME", "THUNDER", "LIGHT"]
    },
    {
      id: "art",
      name: "Искусство и музыка",
      words: ["ART", "SONG", "DRUM", "MUSIC", "PIANO", "FLUTE", "PAINT", "DANCE", "CHIEF", "STAGE"]
    },
    {
      id: "ocean",
      name: "Подводный мир",
      words: ["FISH", "CRAB", "CORAL", "PEARL", "SHARK", "OCEAN", "BEACH", "LAGOON", "OCTOPUS", "WAVE"]
    }
  ],

  // Конфигурация уровней кампании (1 - 50+)
  // Каждый уровень определяет количество обязательных слов, их длину и минимальное число поворотов.
  getLevelConfig(levelNumber) {
    if (levelNumber <= 5) {
      return {
        level: levelNumber,
        gridSize: 5,
        wordCount: 2,
        wordLengths: [4, 4],
        minTurns: 1, // легкий уровень: минимум 1-2 поворота
        maxTurns: 3,
        theme: "Основы",
        coinsReward: 10
      };
    } else if (levelNumber <= 15) {
      return {
        level: levelNumber,
        gridSize: 5,
        wordCount: 2,
        wordLengths: [4, 5],
        minTurns: 2, // средний уровень: минимум 2 поворота
        maxTurns: 4,
        theme: "Исследователь",
        coinsReward: 15
      };
    } else if (levelNumber <= 30) {
      return {
        level: levelNumber,
        gridSize: 5,
        wordCount: 3,
        wordLengths: [4, 5, 5],
        minTurns: 2,
        maxTurns: 4,
        theme: "Мастер",
        coinsReward: 20
      };
    } else if (levelNumber <= 50) {
      return {
        level: levelNumber,
        gridSize: 5,
        wordCount: 3,
        wordLengths: [5, 5, 6],
        minTurns: 3, // сложный уровень: 3+ поворота
        maxTurns: 5,
        theme: "Эксперт",
        coinsReward: 25
      };
    } else {
      // Продвинутые / бесконечные уровни
      const count = Math.min(4, 3 + (levelNumber % 2));
      return {
        level: levelNumber,
        gridSize: 5,
        wordCount: count,
        wordLengths: count === 4 ? [4, 4, 5, 5] : [5, 6, 6],
        minTurns: 3,
        maxTurns: 6,
        theme: "Гроссмейстер",
        coinsReward: 30
      };
    }
  },

  // Получить случайное слово указанной длины (или из списка)
  getRandomWord(length, exclude = []) {
    const list = this.dictionary[length] || this.dictionary[4];
    const available = list.filter(w => !exclude.includes(w));
    if (available.length === 0) return list[Math.floor(Math.random() * list.length)];
    return available[Math.floor(Math.random() * available.length)];
  },

  // Проверка слова в словаре
  isValidWord(word) {
    if (!word || word.length < 3) return false;
    const len = word.length;
    if (!this.dictionary[len]) return false;
    return this.dictionary[len].includes(word.toUpperCase());
  }
};

// Экспорт для Node.js окружения и браузера
if (typeof module !== "undefined" && module.exports) {
  module.exports = WordRamData;
}
