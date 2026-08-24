/**
 * WordRam - Data & Pedagogical Architecture (v20)
 * 534 слова, семантические темы, монстрики-этапы в колбе (по образцу Филвордов),
 * чистая терминология (без многобожия), Web Speech API озвучка.
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
  wordDefinitions: {
  "ABBEY": {
    "tr": "Аббатство / Монастырь",
    "def": "Католический монастырь с комплексом зданий.",
    "ph": "[ˈæbi]",
    "ex": "Ancient abbey — Древнее аббатство.",
    "collocations": [
      "abbey in context",
      "use abbey"
    ]
  },
  "ABSOLUTE": {
    "tr": "Абсолютный / Полный",
    "def": "Совершенный, безусловный, ничем не ограниченный.",
    "ph": "[ˈæbsəluːt]",
    "ex": "Absolute truth — Абсолютная правда.",
    "collocations": [
      "absolute in context",
      "use absolute"
    ]
  },
  "ACADEMIC": {
    "tr": "Академический / Учебный",
    "def": "Связанный с высшим образованием и наукой.",
    "ph": "[ˌækəˈdemɪk]",
    "ex": "Academic success — Академический успех.",
    "collocations": [
      "academic in context",
      "use academic"
    ]
  },
  "ACADEMY": {
    "tr": "Академия",
    "def": "Высшее научное или учебное заведение.",
    "ph": "[əˈkædəmi]",
    "ex": "Art academy — Академия искусств.",
    "collocations": [
      "academy in context",
      "use academy"
    ]
  },
  "ACCURATE": {
    "tr": "Точный / Безошибочный",
    "def": "Правильный, аккуратный, соответствующий истине.",
    "ph": "[ˈækjərət]",
    "ex": "Accurate data — Точные данные.",
    "collocations": [
      "accurate in context",
      "use accurate"
    ]
  },
  "ACID": {
    "tr": "Кислота / Кислый",
    "def": "Химическое вещество с кислым вкусом или свойствами.",
    "ph": "[ˈæsɪd]",
    "ex": "Citric acid — Лимонная кислота.",
    "collocations": [
      "acid in context",
      "use acid"
    ]
  },
  "ACROBAT": {
    "tr": "Акробат",
    "def": "Артист или спортсмен, выполняющий сложные трюки.",
    "ph": "[ˈækrəbæt]",
    "ex": "Circus acrobat — Цирковой акробат.",
    "collocations": [
      "acrobat in context",
      "use acrobat"
    ]
  },
  "ACTION": {
    "tr": "Действие / Поступок",
    "def": "Процесс деятельности или сюжетное событие.",
    "ph": "[ˈækʃn]",
    "ex": "Take action — Принять меры.",
    "collocations": [
      "take action",
      "direct action",
      "action plan"
    ]
  },
  "ADAPT": {
    "tr": "Адаптироваться / Привыкать",
    "def": "Приспосабливаться к новым условиям или среде.",
    "ph": "[əˈdæpt]",
    "ex": "Adapt to climate — Приспособиться к климату.",
    "collocations": [
      "adapt quickly",
      "adapt to changes",
      "adapt well"
    ]
  },
  "ADVENTURE": {
    "tr": "Приключение",
    "def": "Захватывающее путешествие или необычное событие.",
    "ph": "[ədˈventʃə]",
    "ex": "Exciting adventure — Захватывающее приключение.",
    "collocations": [
      "great adventure",
      "exciting adventure",
      "adventure story"
    ]
  },
  "ADVOCATE": {
    "tr": "Сторонник / Защитник",
    "def": "Человек, поддерживающий идею или защищающий права.",
    "ph": "[ˈædvəkeɪt]",
    "ex": "Peace advocate — Защитник мира.",
    "collocations": [
      "advocate in context",
      "use advocate"
    ]
  },
  "AFTERNOON": {
    "tr": "День (после полудня)",
    "def": "Время суток между полуднем и вечером.",
    "ph": "[ˌɑːftəˈnuːn]",
    "ex": "Good afternoon — Добрый день.",
    "collocations": [
      "afternoon in context",
      "use afternoon"
    ]
  },
  "AGE": {
    "tr": "Возраст / Эпоха",
    "def": "Количество прожитых лет или исторический период.",
    "ph": "[eɪdʒ]",
    "ex": "Golden age — Золотой век.",
    "collocations": [
      "age in context",
      "use age"
    ]
  },
  "AIM": {
    "tr": "Цель / Стремиться",
    "def": "Желаемый результат или направление выстрела.",
    "ph": "[eɪm]",
    "ex": "Clear aim — Ясная цель.",
    "collocations": [
      "aim in context",
      "use aim"
    ]
  },
  "AIR": {
    "tr": "Воздух / Атмосфера",
    "def": "Смесь газов, образующая атмосферу Земли.",
    "ph": "[eə]",
    "ex": "Fresh air — Свежий воздух.",
    "collocations": [
      "air in context",
      "use air"
    ]
  },
  "AIRPLANE": {
    "tr": "Самолет",
    "def": "Воздушное судно с крыльями и двигателем.",
    "ph": "[ˈeəpleɪn]",
    "ex": "Fly by airplane — Лететь на самолете.",
    "collocations": [
      "airplane in context",
      "use airplane"
    ]
  },
  "AIRPORT": {
    "tr": "Аэропорт",
    "def": "Комплекс сооружений для взлета и посадки самолетов.",
    "ph": "[ˈeəpɔːt]",
    "ex": "City airport — Городской аэропорт.",
    "collocations": [
      "airport in context",
      "use airport"
    ]
  },
  "ALACRITY": {
    "tr": "Готовность / Рвение",
    "def": "Оживленная готовность и быстрота в действиях.",
    "ph": "[əˈlækrəti]",
    "ex": "Accept with alacrity — Принять с радостной готовностью.",
    "collocations": [
      "alacrity in context",
      "use alacrity"
    ]
  },
  "ALCHEMIST": {
    "tr": "Алхимик",
    "def": "Средневековый ученый в поисках философского камня.",
    "ph": "[ˈælkəmɪst]",
    "ex": "Wise alchemist — Мудрый алхимик.",
    "collocations": [
      "alchemist in context",
      "use alchemist"
    ]
  },
  "ALERT": {
    "tr": "Бдительный / Тревога",
    "def": "Внимательный к опасности или сигнал предупреждения.",
    "ph": "[əˈlɜːt]",
    "ex": "Stay alert — Будьте начеку.",
    "collocations": [
      "alert in context",
      "use alert"
    ]
  },
  "ALIBI": {
    "tr": "Алиби",
    "def": "Доказательство непричастности к событию.",
    "ph": "[ˈæləbaɪ]",
    "ex": "Solid alibi — Надежное алиби.",
    "collocations": [
      "alibi in context",
      "use alibi"
    ]
  },
  "ALLIANCE": {
    "tr": "Альянс / Союз",
    "def": "Объединение государств или организаций ради цели.",
    "ph": "[əˈlaɪəns]",
    "ex": "Strategic alliance — Стратегический альянс.",
    "collocations": [
      "alliance in context",
      "use alliance"
    ]
  },
  "ALPINE": {
    "tr": "Альпийский / Высокогорный",
    "def": "Относящийся к высоким горам или Альпам.",
    "ph": "[ˈælpaɪn]",
    "ex": "Alpine meadow — Альпийский луг.",
    "collocations": [
      "alpine in context",
      "use alpine"
    ]
  },
  "ALTO": {
    "tr": "Альт",
    "def": "Низкий женский или детский певческий голос.",
    "ph": "[ˈæltəʊ]",
    "ex": "Sing alto — Петь альтом.",
    "collocations": [
      "alto in context",
      "use alto"
    ]
  },
  "AMBER": {
    "tr": "Янтарь / Янтарный",
    "def": "Окаменевшая ископаемая смола желтого цвета.",
    "ph": "[ˈæmbə]",
    "ex": "Amber necklace — Янтарное ожерелье.",
    "collocations": [
      "amber in context",
      "use amber"
    ]
  },
  "ANALOGY": {
    "tr": "Аналогия / Сходство",
    "def": "Сходство или сопоставление между понятиями.",
    "ph": "[əˈnælədʒi]",
    "ex": "Draw an analogy — Провести аналогию.",
    "collocations": [
      "analogy in context",
      "use analogy"
    ]
  },
  "ANCHOR": {
    "tr": "Якорь",
    "def": "Тяжелый металлический прибор для удержания судна.",
    "ph": "[ˈæŋkə]",
    "ex": "Drop the anchor — Бросить якорь.",
    "collocations": [
      "anchor in context",
      "use anchor"
    ]
  },
  "ANIMAL": {
    "tr": "Животное",
    "def": "Живое существо, представитель фауны.",
    "ph": "[ˈænɪml]",
    "ex": "Wild animal — Дикое животное.",
    "collocations": [
      "animal in context",
      "use animal"
    ]
  },
  "ANTIDOTE": {
    "tr": "Противоядие",
    "def": "Средство, нейтрализующее действие яда.",
    "ph": "[ˈæntidəʊt]",
    "ex": "Universal antidote — Универсальное противоядие.",
    "collocations": [
      "antidote in context",
      "use antidote"
    ]
  },
  "ANVIL": {
    "tr": "Наковальня",
    "def": "Опорный кузнечный инструмент для ковки металла.",
    "ph": "[ˈænvɪl]",
    "ex": "Blacksmith anvil — Кузнечная наковальня.",
    "collocations": [
      "anvil in context",
      "use anvil"
    ]
  },
  "APARTMENT": {
    "tr": "Квартира",
    "def": "Жилое помещение из нескольких комнат в доме.",
    "ph": "[əˈpɑːtmənt]",
    "ex": "Rent an apartment — Снимать квартиру.",
    "collocations": [
      "apartment in context",
      "use apartment"
    ]
  },
  "APEX": {
    "tr": "Вершина / Апекс",
    "def": "Высшая точка горы, фигуры или карьеры.",
    "ph": "[ˈeɪpeks]",
    "ex": "Apex of success — Вершина успеха.",
    "collocations": [
      "apex in context",
      "use apex"
    ]
  },
  "APPLE": {
    "tr": "Яблоко",
    "def": "Популярный сочный фрукт круглой формы.",
    "ph": "[ˈæpl]",
    "ex": "Red apple — Красное яблоко.",
    "collocations": [
      "apple in context",
      "use apple"
    ]
  },
  "APRON": {
    "tr": "Фартук / Передник",
    "def": "Одежда для защиты от грязи при готовке.",
    "ph": "[ˈeɪprən]",
    "ex": "Kitchen apron — Кухонный фартук.",
    "collocations": [
      "apron in context",
      "use apron"
    ]
  },
  "APT": {
    "tr": "Подходящий / Меткий",
    "def": "Уместный, точный, способный к чему-либо.",
    "ph": "[æpt]",
    "ex": "Apt remark — Меткое замечание.",
    "collocations": [
      "apt in context",
      "use apt"
    ]
  },
  "ARCH": {
    "tr": "Арка / Свод",
    "def": "Дугообразное перекрытие проема в стене.",
    "ph": "[ɑːtʃ]",
    "ex": "Stone arch — Каменная арка.",
    "collocations": [
      "arch in context",
      "use arch"
    ]
  },
  "ARM": {
    "tr": "Рука",
    "def": "Верхняя конечность тела от плеча до кисти.",
    "ph": "[ɑːm]",
    "ex": "Left arm — Левая рука.",
    "collocations": [
      "arm in context",
      "use arm"
    ]
  },
  "ARROW": {
    "tr": "Стрела / Указатель",
    "def": "Оружие для стрельбы из лука или знак направления.",
    "ph": "[ˈærəʊ]",
    "ex": "Bow and arrow — Лук и стрела.",
    "collocations": [
      "arrow in context",
      "use arrow"
    ]
  },
  "ART": {
    "tr": "Искусство",
    "def": "Творческое отражение действительности в образах.",
    "ph": "[ɑːt]",
    "ex": "Modern art — Современное искусство.",
    "collocations": [
      "art in context",
      "use art"
    ]
  },
  "ASH": {
    "tr": "Пепел / Зола",
    "def": "Серый порошок, остающийся после сгорания.",
    "ph": "[æʃ]",
    "ex": "Volcanic ash — Вулканический пепел.",
    "collocations": [
      "ash in context",
      "use ash"
    ]
  },
  "ASSET": {
    "tr": "Актив / Ценность",
    "def": "Полезный ресурс, имущество или преимущество.",
    "ph": "[ˈæset]",
    "ex": "Valuable asset — Ценный актив.",
    "collocations": [
      "asset in context",
      "use asset"
    ]
  },
  "ATTRITION": {
    "tr": "Истощение / Трение",
    "def": "Постепенное ослабление или износ в борьбе.",
    "ph": "[əˈtrɪʃn]",
    "ex": "War of attrition — Война на истощение.",
    "collocations": [
      "attrition in context",
      "use attrition"
    ]
  },
  "AUDIENCE": {
    "tr": "Аудитория / Публика",
    "def": "Группа слушателей, зрителей или читателей.",
    "ph": "[ˈɔːdiəns]",
    "ex": "Large audience — Большая аудитория.",
    "collocations": [
      "audience in context",
      "use audience"
    ]
  },
  "AUSTERE": {
    "tr": "Строгий / Аскетичный",
    "def": "Простой, суровый, без излишеств.",
    "ph": "[ɒˈstɪə]",
    "ex": "Austere style — Строгий стиль.",
    "collocations": [
      "austere in context",
      "use austere"
    ]
  },
  "AUTHORITY": {
    "tr": "Авторитет / Власть",
    "def": "Официальные органы управления или признанное влияние.",
    "ph": "[ɔːˈθɒrəti]",
    "ex": "Local authority — Местная власть.",
    "collocations": [
      "authority in context",
      "use authority"
    ]
  },
  "AVENUE": {
    "tr": "Проспект / Авеню",
    "def": "Широкая городская улица с деревьями.",
    "ph": "[ˈævənjuː]",
    "ex": "Fifth Avenue — Пятая авеню.",
    "collocations": [
      "avenue in context",
      "use avenue"
    ]
  },
  "AWARENESS": {
    "tr": "Осведомленность / Осознанность",
    "def": "Понимание ситуации и знание происходящего.",
    "ph": "[əˈweənəs]",
    "ex": "Raise awareness — Повысить осведомленность.",
    "collocations": [
      "awareness in context",
      "use awareness"
    ]
  },
  "AWE": {
    "tr": "Трепет / Благоговение",
    "def": "Чувство глубокого уважения и восторга.",
    "ph": "[ɔː]",
    "ex": "Stand in awe — Стоять в благоговении.",
    "collocations": [
      "awe in context",
      "use awe"
    ]
  },
  "AXE": {
    "tr": "Топор",
    "def": "Орудие для колки дров с металлическим лезвием.",
    "ph": "[æks]",
    "ex": "Sharp axe — Острый топор.",
    "collocations": [
      "axe in context",
      "use axe"
    ]
  },
  "AXIS": {
    "tr": "Ось вращения",
    "def": "Прямая линия, вокруг которой происходит вращение.",
    "ph": "[ˈæksɪs]",
    "ex": "Earth axis — Ось Земли.",
    "collocations": [
      "axis in context",
      "use axis"
    ]
  },
  "AZIMUTH": {
    "tr": "Азимут",
    "def": "Угол между направлением на север и на объект.",
    "ph": "[ˈæzɪməθ]",
    "ex": "Calculate azimuth — Рассчитать азимут.",
    "collocations": [
      "azimuth in context",
      "use azimuth"
    ]
  },
  "BABY": {
    "tr": "Малыш / Младенец",
    "def": "Очень маленький ребенок в первый год жизни.",
    "ph": "[ˈbeɪbi]",
    "ex": "Sweet baby — Милый малыш.",
    "collocations": [
      "baby in context",
      "use baby"
    ]
  },
  "BADGE": {
    "tr": "Значок / Бейдж",
    "def": "Нагрудный знак, эмблема или карточка с именем.",
    "ph": "[bædʒ]",
    "ex": "Police badge — Полицейский значок.",
    "collocations": [
      "badge in context",
      "use badge"
    ]
  },
  "BAG": {
    "tr": "Сумка / Пакет",
    "def": "Вместилище для переноски личных вещей.",
    "ph": "[bæɡ]",
    "ex": "Travel bag — Дорожная сумка.",
    "collocations": [
      "bag in context",
      "use bag"
    ]
  },
  "BALL": {
    "tr": "Мяч / Шар",
    "def": "Сферический предмет для спортивных игр.",
    "ph": "[bɔːl]",
    "ex": "Play ball — Играть в мяч.",
    "collocations": [
      "ball in context",
      "use ball"
    ]
  },
  "BALLOON": {
    "tr": "Воздушный шар",
    "def": "Надувная резиновая игрушка или летательный аппарат.",
    "ph": "[bəˈluːn]",
    "ex": "Hot air balloon — Воздушный шар.",
    "collocations": [
      "balloon in context",
      "use balloon"
    ]
  },
  "BANANA": {
    "tr": "Банан",
    "def": "Сладкий тропический фрукт в желтой кожуре.",
    "ph": "[bəˈnɑːnə]",
    "ex": "Ripe banana — Спелый банан.",
    "collocations": [
      "banana in context",
      "use banana"
    ]
  },
  "BARRIER": {
    "tr": "Барьер / Преграда",
    "def": "Препятствие, ограничивающее движение или доступ.",
    "ph": "[ˈbæriə]",
    "ex": "Sound barrier — Звуковой барьер.",
    "collocations": [
      "barrier in context",
      "use barrier"
    ]
  },
  "BASEBALL": {
    "tr": "Бейсбол",
    "def": "Командная игра с мячом и битой на поле.",
    "ph": "[ˈbeɪsbɔːl]",
    "ex": "Baseball game — Бейсбольный матч.",
    "collocations": [
      "baseball in context",
      "use baseball"
    ]
  },
  "BASK": {
    "tr": "Греться / Нежиться",
    "def": "Купаться в лучах солнца или наслаждаться теплом.",
    "ph": "[bɑːsk]",
    "ex": "Bask in the sun — Греться на солнце.",
    "collocations": [
      "bask in context",
      "use bask"
    ]
  },
  "BEACH": {
    "tr": "Пляж / Взморье",
    "def": "Пологий песчаный или галечный берег водоема.",
    "ph": "[biːtʃ]",
    "ex": "Sandy beach — Песчаный пляж.",
    "collocations": [
      "beach in context",
      "use beach"
    ]
  },
  "BEACON": {
    "tr": "Маяк / Ориентир",
    "def": "Сигнальная башня со светом для навигации.",
    "ph": "[ˈbiːkən]",
    "ex": "Safety beacon — Маяк безопасности.",
    "collocations": [
      "beacon in context",
      "use beacon"
    ]
  },
  "BEAUTIFUL": {
    "tr": "Красивый / Прекрасный",
    "def": "Радующий глаз, обладающий эстетическим совершенством.",
    "ph": "[ˈbjuːtɪfl]",
    "ex": "Beautiful view — Прекрасный вид.",
    "collocations": [
      "beautiful view",
      "beautiful smile",
      "beautiful day"
    ]
  },
  "BED": {
    "tr": "Кровать / Постель",
    "def": "Предмет мебели для сна и отдыха.",
    "ph": "[bed]",
    "ex": "Go to bed — Ложиться спать.",
    "collocations": [
      "bed in context",
      "use bed"
    ]
  },
  "BEDROOM": {
    "tr": "Спальня",
    "def": "Комната в доме или квартире, предназначенная для сна.",
    "ph": "[ˈbedruːm]",
    "ex": "Cozy bedroom — Уютная спальня.",
    "collocations": [
      "bedroom in context",
      "use bedroom"
    ]
  },
  "BIRD": {
    "tr": "Птица",
    "def": "Оперенное теплокровное летающее существо.",
    "ph": "[bɜːd]",
    "ex": "Singing bird — Поющая птица.",
    "collocations": [
      "bird in context",
      "use bird"
    ]
  },
  "BIRTHDAY": {
    "tr": "День рождения",
    "def": "Ежегодный праздник дня рождения человека.",
    "ph": "[ˈbɜːθdeɪ]",
    "ex": "Happy birthday! — С днем рождения!",
    "collocations": [
      "birthday in context",
      "use birthday"
    ]
  },
  "BLAZE": {
    "tr": "Пламя / Пожар",
    "def": "Яркий сильный огонь или ослепительное сияние.",
    "ph": "[bleɪz]",
    "ex": "Blaze of light — Вспышка света.",
    "collocations": [
      "blaze in context",
      "use blaze"
    ]
  },
  "BLEAK": {
    "tr": "Мрачный / Унылый",
    "def": "Холодный, лишенный уюта и красок пейзаж.",
    "ph": "[bliːk]",
    "ex": "Bleak landscape — Унылый пейзаж.",
    "collocations": [
      "bleak in context",
      "use bleak"
    ]
  },
  "BLOOM": {
    "tr": "Цвести / Расцвет",
    "def": "Период распускания цветов на растениях.",
    "ph": "[bluːm]",
    "ex": "In full bloom — В полном расцвете.",
    "collocations": [
      "bloom in context",
      "use bloom"
    ]
  },
  "BLOSSOM": {
    "tr": "Цветение дерева",
    "def": "Цветы плодовых деревьев весной.",
    "ph": "[ˈblɒsəm]",
    "ex": "Cherry blossom — Цветение вишни.",
    "collocations": [
      "blossom in context",
      "use blossom"
    ]
  },
  "BOAT": {
    "tr": "Лодка / Катер",
    "def": "Небольшое судно для плавания по воде.",
    "ph": "[bəʊt]",
    "ex": "Row a boat — Грести на лодке.",
    "collocations": [
      "boat in context",
      "use boat"
    ]
  },
  "BOG": {
    "tr": "Трясина / Болото",
    "def": "Участок земли с избыточной влажностью и мхом.",
    "ph": "[bɒɡ]",
    "ex": "Peat bog — Торфяное болото.",
    "collocations": [
      "bog in context",
      "use bog"
    ]
  },
  "BOND": {
    "tr": "Связь / Узы",
    "def": "Узы дружбы, обязательство или ценная бумага.",
    "ph": "[bɒnd]",
    "ex": "Strong bond — Крепкая связь.",
    "collocations": [
      "bond in context",
      "use bond"
    ]
  },
  "BONSAI": {
    "tr": "Бонсай",
    "def": "Японское искусство выращивания миниатюрных деревьев.",
    "ph": "[ˈbɒnsaɪ]",
    "ex": "Japanese bonsai — Японский бонсай.",
    "collocations": [
      "bonsai in context",
      "use bonsai"
    ]
  },
  "BOOK": {
    "tr": "Книга",
    "def": "Сброшюрованные листы с печатным текстом.",
    "ph": "[bʊk]",
    "ex": "Read a book — Читать книгу.",
    "collocations": [
      "book in context",
      "use book"
    ]
  },
  "BOUNDARY": {
    "tr": "Граница / Предел",
    "def": "Разделительная черта между территориями.",
    "ph": "[ˈbaʊndri]",
    "ex": "Cross the boundary — Пересечь границу.",
    "collocations": [
      "boundary in context",
      "use boundary"
    ]
  },
  "BOX": {
    "tr": "Коробка / Ящик",
    "def": "Емкость с крышкой для хранения предметов.",
    "ph": "[bɒks]",
    "ex": "Cardboard box — Картонная коробка.",
    "collocations": [
      "box in context",
      "use box"
    ]
  },
  "BOY": {
    "tr": "Мальчик",
    "def": "Ребенок или подросток мужского пола.",
    "ph": "[bɔɪ]",
    "ex": "Little boy — Маленький мальчик.",
    "collocations": [
      "boy in context",
      "use boy"
    ]
  },
  "BRAIN": {
    "tr": "Мозг / Разум",
    "def": "Главный орган мышления и нервной системы.",
    "ph": "[breɪn]",
    "ex": "Human brain — Человеческий мозг.",
    "collocations": [
      "brain in context",
      "use brain"
    ]
  },
  "BREAD": {
    "tr": "Хлеб",
    "def": "Базовый продукт питания из запеченной муки.",
    "ph": "[bred]",
    "ex": "Fresh bread — Свежий хлеб.",
    "collocations": [
      "fresh bread",
      "slice of bread",
      "white bread"
    ]
  },
  "BREAKFAST": {
    "tr": "Завтрак",
    "def": "Первый утренний прием пищи.",
    "ph": "[ˈbrekfəst]",
    "ex": "Healthy breakfast — Полезный завтрак.",
    "collocations": [
      "breakfast in context",
      "use breakfast"
    ]
  },
  "BREEZE": {
    "tr": "Бриз / Ветерок",
    "def": "Легкий приятный морской ветер.",
    "ph": "[briːz]",
    "ex": "Cool breeze — Прохладный бриз.",
    "collocations": [
      "gentle breeze",
      "sea breeze",
      "cool breeze"
    ]
  },
  "BRIDGE": {
    "tr": "Мост",
    "def": "Сооружение для переправы через реку или препятствие.",
    "ph": "[brɪdʒ]",
    "ex": "Suspension bridge — Висячий мост.",
    "collocations": [
      "build a bridge",
      "cross the bridge",
      "golden bridge"
    ]
  },
  "BRONZE": {
    "tr": "Бронза / Бронзовый",
    "def": "Сплав меди с оловом коричневато-золотого цвета.",
    "ph": "[brɒnz]",
    "ex": "Bronze medal — Бронзовая медаль.",
    "collocations": [
      "bronze in context",
      "use bronze"
    ]
  },
  "BROTHER": {
    "tr": "Брат",
    "def": "Сын тех же родителей по отношению к другим детям.",
    "ph": "[ˈbrʌðə]",
    "ex": "Older brother — Старший брат.",
    "collocations": [
      "brother in context",
      "use brother"
    ]
  },
  "BULK": {
    "tr": "Объем / Масса",
    "def": "Основная масса чего-либо или оптовая партия.",
    "ph": "[bʌlk]",
    "ex": "In bulk — В больших количествах.",
    "collocations": [
      "bulk in context",
      "use bulk"
    ]
  },
  "BUS": {
    "tr": "Автобус",
    "def": "Пассажирский автотранспорт большой вместимости.",
    "ph": "[bʌs]",
    "ex": "Catch the bus — Сесть на автобус.",
    "collocations": [
      "bus in context",
      "use bus"
    ]
  },
  "BUSINESS": {
    "tr": "Бизнес / Дело",
    "def": "Предпринимательская деятельность с целью дохода.",
    "ph": "[ˈbɪznəs]",
    "ex": "Start a business — Начать бизнес.",
    "collocations": [
      "start a business",
      "business plan",
      "family business"
    ]
  },
  "CABIN": {
    "tr": "Хижина / Каюта",
    "def": "Небольшой деревянный домик или комната на судне.",
    "ph": "[ˈkæbɪn]",
    "ex": "Log cabin — Бревенчатая хижина.",
    "collocations": [
      "cabin in context",
      "use cabin"
    ]
  },
  "CAFE": {
    "tr": "Кафе",
    "def": "Небольшое заведение для отдыха и напитков.",
    "ph": "[ˈkæfeɪ]",
    "ex": "Cozy cafe — Уютное кафе.",
    "collocations": [
      "cafe in context",
      "use cafe"
    ]
  },
  "CAKE": {
    "tr": "Торт / Пирожное",
    "def": "Сладкое праздничное кондитерское изделие.",
    "ph": "[keɪk]",
    "ex": "Chocolate cake — Шоколадный торт.",
    "collocations": [
      "cake in context",
      "use cake"
    ]
  },
  "CALENDAR": {
    "tr": "Календарь",
    "def": "Система счисления дней, месяцев и дат года.",
    "ph": "[ˈkælɪndə]",
    "ex": "Wall calendar — Настенный календарь.",
    "collocations": [
      "calendar in context",
      "use calendar"
    ]
  },
  "CAMERA": {
    "tr": "Фотоаппарат / Камера",
    "def": "Оптическое устройство для фото- и видеосъемки.",
    "ph": "[ˈkæmrə]",
    "ex": "Digital camera — Цифровая камера.",
    "collocations": [
      "camera in context",
      "use camera"
    ]
  },
  "CAMPAIGN": {
    "tr": "Кампания / Поход",
    "def": "Организованные действия для достижения цели.",
    "ph": "[kæmˈpeɪn]",
    "ex": "Ad campaign — Рекламная кампания.",
    "collocations": [
      "campaign in context",
      "use campaign"
    ]
  },
  "CANDY": {
    "tr": "Конфета / Сладость",
    "def": "Сладкое лакомство из сахара или шоколада.",
    "ph": "[ˈkændi]",
    "ex": "Sweet candy — Сладкая конфета.",
    "collocations": [
      "candy in context",
      "use candy"
    ]
  },
  "CANYON": {
    "tr": "Каньон / Ущелье",
    "def": "Глубокая долина реки с крутыми скалистыми стенами.",
    "ph": "[ˈkænjən]",
    "ex": "Grand Canyon — Великий каньон.",
    "collocations": [
      "canyon in context",
      "use canyon"
    ]
  },
  "CAPTAIN": {
    "tr": "Капитан",
    "def": "Командир корабля, самолета или спортивной команды.",
    "ph": "[ˈkæptɪn]",
    "ex": "Ship captain — Капитан корабля.",
    "collocations": [
      "captain in context",
      "use captain"
    ]
  },
  "CAR": {
    "tr": "Машина / Автомобиль",
    "def": "Легковой автотранспорт для поездок.",
    "ph": "[kɑː]",
    "ex": "Drive a car — Водить машину.",
    "collocations": [
      "car in context",
      "use car"
    ]
  },
  "CARAVAN": {
    "tr": "Караван",
    "def": "Группа путешественников с повозками или верблюдами.",
    "ph": "[ˈkærəvæn]",
    "ex": "Desert caravan — Караван в пустыне.",
    "collocations": [
      "caravan in context",
      "use caravan"
    ]
  },
  "CASCADE": {
    "tr": "Каскад / Водопад",
    "def": "Ступенчатый водопад или цепь последовательных шагов.",
    "ph": "[kæˈskeɪd]",
    "ex": "Water cascade — Каскад воды.",
    "collocations": [
      "cascade in context",
      "use cascade"
    ]
  },
  "CASTLE": {
    "tr": "Замок / Крепость",
    "def": "Укрепленное монументальное старинное жилище.",
    "ph": "[ˈkɑːsl]",
    "ex": "Ancient castle — Древний замок.",
    "collocations": [
      "castle in context",
      "use castle"
    ]
  },
  "CAT": {
    "tr": "Кот / Кошка",
    "def": "Домашний пушистый питомец семейства кошачьих.",
    "ph": "[kæt]",
    "ex": "Cute cat — Милый кот.",
    "collocations": [
      "cat in context",
      "use cat"
    ]
  },
  "CATALYST": {
    "tr": "Катализатор",
    "def": "Вещество или фактор, ускоряющий процесс перемен.",
    "ph": "[ˈkætəlɪst]",
    "ex": "Catalyst for growth — Катализатор роста.",
    "collocations": [
      "catalyst in context",
      "use catalyst"
    ]
  },
  "CELEBRATE": {
    "tr": "Праздновать",
    "def": "Устраивать торжество в честь радостного события.",
    "ph": "[ˈselɪbreɪt]",
    "ex": "Celebrate victory — Праздновать победу.",
    "collocations": [
      "celebrate in context",
      "use celebrate"
    ]
  },
  "CEREMONY": {
    "tr": "Церемония / Обряд",
    "def": "Торжественный ритуал по установленному регламенту.",
    "ph": "[ˈserəməni]",
    "ex": "Award ceremony — Церемония награждения.",
    "collocations": [
      "ceremony in context",
      "use ceremony"
    ]
  },
  "CHAIR": {
    "tr": "Стул",
    "def": "Предмет мебели со спинкой для одного человека.",
    "ph": "[tʃeə]",
    "ex": "Wooden chair — Деревянный стул.",
    "collocations": [
      "chair in context",
      "use chair"
    ]
  },
  "CHALLENGE": {
    "tr": "Вызов / Испытание",
    "def": "Сложная задача, требующая максимальной отдачи.",
    "ph": "[ˈtʃælɪndʒ]",
    "ex": "New challenge — Новый вызов.",
    "collocations": [
      "face a challenge",
      "accept the challenge",
      "big challenge"
    ]
  },
  "CHAMP": {
    "tr": "Чемпион",
    "def": "Разговорное обозначение триумфатора или лидера.",
    "ph": "[tʃæmp]",
    "ex": "True champ — Настоящий чемпион.",
    "collocations": [
      "champ in context",
      "use champ"
    ]
  },
  "CHAMPION": {
    "tr": "Чемпион / Победитель",
    "def": "Победитель соревнований или турнира.",
    "ph": "[ˈtʃæmpiən]",
    "ex": "World champion — Чемпион мира.",
    "collocations": [
      "champion in context",
      "use champion"
    ]
  },
  "CHARM": {
    "tr": "Обаяние / Талисман",
    "def": "Привлекательность или амулет на удачу.",
    "ph": "[tʃɑːm]",
    "ex": "Lucky charm — Талисман на удачу.",
    "collocations": [
      "charm in context",
      "use charm"
    ]
  },
  "CHEMISTRY": {
    "tr": "Химия",
    "def": "Естественная наука о веществах и реакциях.",
    "ph": "[ˈkemɪstri]",
    "ex": "Study chemistry — Изучать химию.",
    "collocations": [
      "chemistry in context",
      "use chemistry"
    ]
  },
  "CHESS": {
    "tr": "Шахматы",
    "def": "Классическая настольная стратегическая игра.",
    "ph": "[tʃes]",
    "ex": "Play chess — Играть в шахматы.",
    "collocations": [
      "chess in context",
      "use chess"
    ]
  },
  "CHIEF": {
    "tr": "Шеф / Вождь / Главный",
    "def": "Руководитель организации или глава сообщества.",
    "ph": "[tʃiːf]",
    "ex": "Editor in chief — Главный редактор.",
    "collocations": [
      "chief in context",
      "use chief"
    ]
  },
  "CHILDREN": {
    "tr": "Дети",
    "def": "Маленькие мальчики и девочки.",
    "ph": "[ˈtʃɪldrən]",
    "ex": "Happy children — Счастливые дети.",
    "collocations": [
      "children in context",
      "use children"
    ]
  },
  "CHISEL": {
    "tr": "Стамеска / Долото",
    "def": "Инструмент для высекания по дереву и камню.",
    "ph": "[ˈtʃɪzl]",
    "ex": "Sculptor chisel — Резец скульптора.",
    "collocations": [
      "chisel in context",
      "use chisel"
    ]
  },
  "CHOCOLATE": {
    "tr": "Шоколад",
    "def": "Любимое сладкое лакомство из какао-бобов.",
    "ph": "[ˈtʃɒklət]",
    "ex": "Milk chocolate — Молочный шоколад.",
    "collocations": [
      "chocolate in context",
      "use chocolate"
    ]
  },
  "CIRCUS": {
    "tr": "Цирк",
    "def": "Зрелищное искусство с клоунами, акробатами и фокусами.",
    "ph": "[ˈsɜːkəs]",
    "ex": "Go to circus — Пойти в цирк.",
    "collocations": [
      "circus in context",
      "use circus"
    ]
  },
  "CITIZEN": {
    "tr": "Гражданин",
    "def": "Полноправный житель государства с паспортом.",
    "ph": "[ˈsɪtɪzn]",
    "ex": "Proud citizen — Гордый гражданин.",
    "collocations": [
      "citizen in context",
      "use citizen"
    ]
  },
  "CITY": {
    "tr": "Город",
    "def": "Крупный населенный пункт с улицами и транспортом.",
    "ph": "[ˈsɪti]",
    "ex": "Modern city — Современный город.",
    "collocations": [
      "city in context",
      "use city"
    ]
  },
  "CLASSROOM": {
    "tr": "Класс / Кабинет",
    "def": "Помещение в учебном заведении для уроков.",
    "ph": "[ˈklɑːsruːm]",
    "ex": "In the classroom — В классе.",
    "collocations": [
      "classroom in context",
      "use classroom"
    ]
  },
  "CLAY": {
    "tr": "Глина",
    "def": "Мягкая пластичная природная порода для гончарного мастерства и лепки посуды.",
    "ph": "[kleɪ]",
    "ex": "Pottery clay — Гончарная глина.",
    "collocations": [
      "shape clay",
      "soft clay"
    ]
  },
  "CLEAN": {
    "tr": "Чистый / Мыть",
    "def": "Свободный от грязи и пыли; наводить порядок.",
    "ph": "[kliːn]",
    "ex": "Clean hands — Чистые руки.",
    "collocations": [
      "clean water",
      "clean hands",
      "keep clean"
    ]
  },
  "CLOCK": {
    "tr": "Часы",
    "def": "Настенный или настольный прибор для отсчета времени.",
    "ph": "[klɒk]",
    "ex": "Wall clock — Настенные часы.",
    "collocations": [
      "clock in context",
      "use clock"
    ]
  },
  "CLOUD": {
    "tr": "Облако / Туча",
    "def": "Скопление микрокапель воды в синем небе.",
    "ph": "[klaʊd]",
    "ex": "White cloud — Белое облако.",
    "collocations": [
      "cloud in context",
      "use cloud"
    ]
  },
  "CLOVE": {
    "tr": "Гвоздика / Зубчик",
    "def": "Ароматная пряность или долька чеснока.",
    "ph": "[kləʊv]",
    "ex": "Garlic clove — Зубчик чеснока.",
    "collocations": [
      "clove in context",
      "use clove"
    ]
  },
  "CLOVER": {
    "tr": "Клевер",
    "def": "Растение с тройчатыми листочками на лугу.",
    "ph": "[ˈkləʊvə]",
    "ex": "Four-leaf clover — Четырехлистный клевер.",
    "collocations": [
      "clover in context",
      "use clover"
    ]
  },
  "CLUSTERS": {
    "tr": "Кластеры / Скопления",
    "def": "Группы близко расположенных звезд или объектов.",
    "ph": "[ˈklʌstəz]",
    "ex": "Data clusters — Кластеры данных.",
    "collocations": [
      "clusters in context",
      "use clusters"
    ]
  },
  "COBALT": {
    "tr": "Кобальт",
    "def": "Металл, дающий глубокий насыщенный синий цвет.",
    "ph": "[ˈkəʊbɔːlt]",
    "ex": "Cobalt blue — Кобальтово-синий.",
    "collocations": [
      "cobalt in context",
      "use cobalt"
    ]
  },
  "COFFEE": {
    "tr": "Кофе",
    "def": "Ароматный горячий напиток из обжаренных зерен.",
    "ph": "[ˈkɒfi]",
    "ex": "Hot coffee — Горячий кофе.",
    "collocations": [
      "cup of coffee",
      "black coffee",
      "fresh coffee"
    ]
  },
  "COGNAC": {
    "tr": "Коньяк",
    "def": "Крепкий благородный виноградный напиток.",
    "ph": "[ˈkɒnjæk]",
    "ex": "Fine cognac — Хороший коньяк.",
    "collocations": [
      "cognac in context",
      "use cognac"
    ]
  },
  "COHERENT": {
    "tr": "Связный / Логичный",
    "def": "Последовательный, ясный и понятный в изложении.",
    "ph": "[kəʊˈhɪərənt]",
    "ex": "Coherent argument — Связный аргумент.",
    "collocations": [
      "coherent in context",
      "use coherent"
    ]
  },
  "COIN": {
    "tr": "Монета",
    "def": "Металлический денежный знак круглой формы.",
    "ph": "[kɔɪn]",
    "ex": "Gold coin — Золотая монета.",
    "collocations": [
      "coin in context",
      "use coin"
    ]
  },
  "COLD": {
    "tr": "Холодный / Холод",
    "def": "Имеющий низкую температуру воздуха или воды.",
    "ph": "[kəʊld]",
    "ex": "Cold wind — Холодный ветер.",
    "collocations": [
      "cold in context",
      "use cold"
    ]
  },
  "COMMUNITY": {
    "tr": "Сообщество / Община",
    "def": "Группа людей, объединенных общими целями.",
    "ph": "[kəˈmjuːnəti]",
    "ex": "Online community — Онлайн-сообщество.",
    "collocations": [
      "local community",
      "support the community",
      "online community"
    ]
  },
  "COMPASS": {
    "tr": "Компас",
    "def": "Прибор с магнитной стрелкой для навигации.",
    "ph": "[ˈkʌmpəs]",
    "ex": "Use a compass — Использовать компас.",
    "collocations": [
      "magnetic compass",
      "use a compass",
      "moral compass"
    ]
  },
  "COMPUTER": {
    "tr": "Компьютер",
    "def": "Электронное устройство для обработки информации.",
    "ph": "[kəmˈpjuːtə]",
    "ex": "Desktop computer — Настольный компьютер.",
    "collocations": [
      "computer in context",
      "use computer"
    ]
  },
  "CONSENSUS": {
    "tr": "Консенсус / Согласие",
    "def": "Единодушное общее согласие всех сторон.",
    "ph": "[kənˈsensəs]",
    "ex": "General consensus — Общий консенсус.",
    "collocations": [
      "consensus in context",
      "use consensus"
    ]
  },
  "CONUNDRUM": {
    "tr": "Головоломка / Загадка",
    "def": "Сложная и запутанная интеллектуальная задача.",
    "ph": "[kəˈnʌndrəm]",
    "ex": "Tricky conundrum — Хитрая головоломка.",
    "collocations": [
      "conundrum in context",
      "use conundrum"
    ]
  },
  "COOP": {
    "tr": "Курятник / Загон",
    "def": "Небольшое помещение для содержания кур.",
    "ph": "[kuːp]",
    "ex": "Chicken coop — Курятник.",
    "collocations": [
      "coop in context",
      "use coop"
    ]
  },
  "CORAL": {
    "tr": "Коралл / Коралловый",
    "def": "Морской рифообразующий известковый полип.",
    "ph": "[ˈkɒrəl]",
    "ex": "Coral reef — Коралловый риф.",
    "collocations": [
      "coral in context",
      "use coral"
    ]
  },
  "COSMOS": {
    "tr": "Космос / Вселенная",
    "def": "Бескрайнее пространство за пределами Земли.",
    "ph": "[ˈkɒzmɒs]",
    "ex": "Deep cosmos — Глубокий космос.",
    "collocations": [
      "cosmos in context",
      "use cosmos"
    ]
  },
  "COUNTRY": {
    "tr": "Страна / Село",
    "def": "Государство с границами или загородная природа.",
    "ph": "[ˈkʌntri]",
    "ex": "Native country — Родная страна.",
    "collocations": [
      "country in context",
      "use country"
    ]
  },
  "CRANE": {
    "tr": "Журавль / Кран",
    "def": "Перелетная грациозная птица или подъемный механизм.",
    "ph": "[kreɪn]",
    "ex": "Flying crane — Летящий журавль.",
    "collocations": [
      "crane in context",
      "use crane"
    ]
  },
  "CRATER": {
    "tr": "Кратер",
    "def": "Воронка на вершине вулкана или от удара метеорита.",
    "ph": "[ˈkreɪtə]",
    "ex": "Impact crater — Ударный кратер.",
    "collocations": [
      "crater in context",
      "use crater"
    ]
  },
  "CREATION": {
    "tr": "Создание / Творение",
    "def": "Процесс созидания или шедевр мастера.",
    "ph": "[kriˈeɪʃn]",
    "ex": "Unique creation — Уникальное творение.",
    "collocations": [
      "creation in context",
      "use creation"
    ]
  },
  "CREED": {
    "tr": "Кредо / Жизненный принцип",
    "def": "Система личных убеждений, моральных правил и принципов человека.",
    "ph": "[kriːd]",
    "ex": "Personal creed — Личное жизненное кредо.",
    "collocations": [
      "live by creed",
      "family creed"
    ]
  },
  "CROWN": {
    "tr": "Корона",
    "def": "Драгоценный головной убор царей и королей.",
    "ph": "[kraʊn]",
    "ex": "Gold crown — Золотая корона.",
    "collocations": [
      "crown in context",
      "use crown"
    ]
  },
  "CRUISE": {
    "tr": "Круиз / Морской тур",
    "def": "Путешествие на комфортабельном лайнере по морю.",
    "ph": "[kruːz]",
    "ex": "Ocean cruise — Океанский круиз.",
    "collocations": [
      "cruise in context",
      "use cruise"
    ]
  },
  "CRUX": {
    "tr": "Суть / Сердцевина",
    "def": "Самое главное, решающее зерно вопроса.",
    "ph": "[krʌks]",
    "ex": "Crux of matter — Суть дела.",
    "collocations": [
      "crux in context",
      "use crux"
    ]
  },
  "CRYSTAL": {
    "tr": "Кристалл / Хрусталь",
    "def": "Твердое минеральное тело с четкой огранкой.",
    "ph": "[ˈkrɪstl]",
    "ex": "Clear crystal — Прозрачный кристалл.",
    "collocations": [
      "crystal in context",
      "use crystal"
    ]
  },
  "CUE": {
    "tr": "Кий / Намек / Сигнал",
    "def": "Длинная палка для бильярда или знак к действию.",
    "ph": "[kjuː]",
    "ex": "Visual cue — Визуальный сигнал.",
    "collocations": [
      "cue in context",
      "use cue"
    ]
  },
  "CULL": {
    "tr": "Отбирать / Браковать",
    "def": "Тщательно отбирать лучшее или удалять негодное.",
    "ph": "[kʌl]",
    "ex": "Cull the best — Отобрать самое лучшее.",
    "collocations": [
      "cull in context",
      "use cull"
    ]
  },
  "CUP": {
    "tr": "Чашка / Кубок",
    "def": "Небольшая посуда для чая или спортивная награда.",
    "ph": "[kʌp]",
    "ex": "Cup of tea — Чашка чая.",
    "collocations": [
      "cup in context",
      "use cup"
    ]
  },
  "DANCE": {
    "tr": "Танец / Танцевать",
    "def": "Ритмичные движения тела под музыку.",
    "ph": "[dɑːns]",
    "ex": "Dance to music — Танцевать под музыку.",
    "collocations": [
      "dance in context",
      "use dance"
    ]
  },
  "DANGEROUS": {
    "tr": "Опасный",
    "def": "Представляющий угрозу здоровью или жизни.",
    "ph": "[ˈdeɪndʒərəs]",
    "ex": "Dangerous road — Опасная дорога.",
    "collocations": [
      "dangerous in context",
      "use dangerous"
    ]
  },
  "DATABASE": {
    "tr": "База данных",
    "def": "Организованное хранилище структурированной информации.",
    "ph": "[ˈdeɪtəbeɪs]",
    "ex": "SQL database — База данных SQL.",
    "collocations": [
      "database in context",
      "use database"
    ]
  },
  "DAUGHTER": {
    "tr": "Дочь",
    "def": "Девочка или женщина по отношению к родителям.",
    "ph": "[ˈdɔːtə]",
    "ex": "Beloved daughter — Любимая дочь.",
    "collocations": [
      "daughter in context",
      "use daughter"
    ]
  },
  "DAWN": {
    "tr": "Рассвет / Заря",
    "def": "Первые лучи восходящего солнца на утреннем небе.",
    "ph": "[dɔːn]",
    "ex": "At early dawn — На раннем рассвете.",
    "collocations": [
      "dawn in context",
      "use dawn"
    ]
  },
  "DAY": {
    "tr": "День",
    "def": "Светлый период суток от рассвета до заката.",
    "ph": "[deɪ]",
    "ex": "Sunny day — Солнечный день.",
    "collocations": [
      "day in context",
      "use day"
    ]
  },
  "DECISIVE": {
    "tr": "Решительный / Решающий",
    "def": "Имеющий определяющее значение или твердый духом.",
    "ph": "[dɪˈsaɪsɪv]",
    "ex": "Decisive victory — Решающая победа.",
    "collocations": [
      "decisive in context",
      "use decisive"
    ]
  },
  "DEMOCRACY": {
    "tr": "Демократия",
    "def": "Форма народовластия с выборами и правами граждан.",
    "ph": "[dɪˈmɒkrəsi]",
    "ex": "Modern democracy — Современная демократия.",
    "collocations": [
      "democracy in context",
      "use democracy"
    ]
  },
  "DESERT": {
    "tr": "Пустыня / Безлюдный",
    "def": "Засушливая песчаная территория с редкой растительностью.",
    "ph": "[ˈdezət]",
    "ex": "Sahara desert — Пустыня Сахара.",
    "collocations": [
      "desert in context",
      "use desert"
    ]
  },
  "DESK": {
    "tr": "Письменный стол",
    "def": "Рабочий стол для учебы, документов и компьютера.",
    "ph": "[desk]",
    "ex": "Office desk — Офисный стол.",
    "collocations": [
      "desk in context",
      "use desk"
    ]
  },
  "DICHOTOMY": {
    "tr": "Дихотомия / Раздвоение",
    "def": "Деление целого на две противоположные части.",
    "ph": "[daɪˈkɒtəmi]",
    "ex": "Sharp dichotomy — Резкая дихотомия.",
    "collocations": [
      "dichotomy in context",
      "use dichotomy"
    ]
  },
  "DIMENSION": {
    "tr": "Измерение / Размер",
    "def": "Пространственная величина или аспект проблемы.",
    "ph": "[daɪˈmenʃn]",
    "ex": "Fourth dimension — Четвертое измерение.",
    "collocations": [
      "dimension in context",
      "use dimension"
    ]
  },
  "DIRECTOR": {
    "tr": "Директор / Режиссер",
    "def": "Руководитель предприятия или постановщик кино.",
    "ph": "[dəˈrektə]",
    "ex": "Movie director — Кинорежиссер.",
    "collocations": [
      "director in context",
      "use director"
    ]
  },
  "DISASTER": {
    "tr": "Катастрофа / Бедствие",
    "def": "Внезапное разрушительное бедствие или провал.",
    "ph": "[dɪˈzɑːstə]",
    "ex": "Natural disaster — Стихийное бедствие.",
    "collocations": [
      "disaster in context",
      "use disaster"
    ]
  },
  "DISCOVERY": {
    "tr": "Открытие / Находка",
    "def": "Обнаружение новых фактов, земель или законов природы.",
    "ph": "[dɪˈskʌvəri]",
    "ex": "Great discovery — Великое открытие.",
    "collocations": [
      "great discovery",
      "make a discovery",
      "scientific discovery"
    ]
  },
  "DOCTOR": {
    "tr": "Врач / Доктор",
    "def": "Специалист с медицинским образованием, лечащий людей.",
    "ph": "[ˈdɒktə]",
    "ex": "Visit the doctor — Посетить врача.",
    "collocations": [
      "doctor in context",
      "use doctor"
    ]
  },
  "DOG": {
    "tr": "Собака / Пес",
    "def": "Преданное четвероногое домашнее животное.",
    "ph": "[dɒɡ]",
    "ex": "Faithful dog — Верный пес.",
    "collocations": [
      "dog in context",
      "use dog"
    ]
  },
  "DOLPHIN": {
    "tr": "Дельфин",
    "def": "Умное и дружелюбное морское млекопитающее.",
    "ph": "[ˈdɒlfɪn]",
    "ex": "Swim with dolphin — Плавать с дельфином.",
    "collocations": [
      "dolphin in context",
      "use dolphin"
    ]
  },
  "DOMINANCE": {
    "tr": "Господство / Доминирование",
    "def": "Преобладающее положение и решающее влияние.",
    "ph": "[ˈdɒmɪnəns]",
    "ex": "Market dominance — Господство на рынке.",
    "collocations": [
      "dominance in context",
      "use dominance"
    ]
  },
  "DOMINANT": {
    "tr": "Доминирующий / Главный",
    "def": "Преобладающий, занимающий ведущую позицию.",
    "ph": "[ˈdɒmɪnənt]",
    "ex": "Dominant role — Ведущая роль.",
    "collocations": [
      "dominant in context",
      "use dominant"
    ]
  },
  "DOOR": {
    "tr": "Дверь",
    "def": "Подвижная створка для входа и выхода из комнаты.",
    "ph": "[dɔː]",
    "ex": "Front door — Входная дверь.",
    "collocations": [
      "door in context",
      "use door"
    ]
  },
  "DOT": {
    "tr": "Точка / Пятнышко",
    "def": "Маленький круглый след или знак препинания.",
    "ph": "[dɒt]",
    "ex": "Red dot — Красная точка.",
    "collocations": [
      "dot in context",
      "use dot"
    ]
  },
  "DRAFT": {
    "tr": "Черновик / Проект / Сквозняк",
    "def": "Предварительный набросок текста или поток воздуха.",
    "ph": "[drɑːft]",
    "ex": "Rough draft — Черновой набросок.",
    "collocations": [
      "draft in context",
      "use draft"
    ]
  },
  "DRAGON": {
    "tr": "Дракон",
    "def": "Сказочный огнедышащий крылатый змей.",
    "ph": "[ˈdræɡən]",
    "ex": "Legendary dragon — Легендарный дракон.",
    "collocations": [
      "dragon in context",
      "use dragon"
    ]
  },
  "DREAM": {
    "tr": "Мечта / Сон",
    "def": "Заветное искреннее желание или сновидение ночью.",
    "ph": "[driːm]",
    "ex": "Follow your dream — Следуй за мечтой.",
    "collocations": [
      "sweet dreams",
      "follow your dream",
      "dream job"
    ]
  },
  "DRIFT": {
    "tr": "Дрейф / Плыть по течению",
    "def": "Медленное плавное движение по воде или ветру.",
    "ph": "[drɪft]",
    "ex": "Drift on water — Дрейфовать по воде.",
    "collocations": [
      "drift in context",
      "use drift"
    ]
  },
  "DROSS": {
    "tr": "Шлак / Окалина / Мусор",
    "def": "Ненужные примеси или отходы при плавке металла.",
    "ph": "[drɒs]",
    "ex": "Separate gold from dross — Отделить золото от шлака.",
    "collocations": [
      "dross in context",
      "use dross"
    ]
  },
  "DYNAMIC": {
    "tr": "Динамичный / Энергичный",
    "def": "Подвижный, быстро развивающийся и меняющийся.",
    "ph": "[daɪˈnæmɪk]",
    "ex": "Dynamic process — Динамичный процесс.",
    "collocations": [
      "dynamic in context",
      "use dynamic"
    ]
  },
  "EAR": {
    "tr": "Ухо / Слух",
    "def": "Орган слуха на голове человека или колос пшеницы.",
    "ph": "[ɪə]",
    "ex": "Hear with ear — Слышать ухом.",
    "collocations": [
      "ear in context",
      "use ear"
    ]
  },
  "EARTH": {
    "tr": "Земля / Почва",
    "def": "Наша обитаемая планета или плодородный грунт.",
    "ph": "[ɜːθ]",
    "ex": "Planet Earth — Планета Земля.",
    "collocations": [
      "earth in context",
      "use earth"
    ]
  },
  "EBB": {
    "tr": "Отлив / Убывать",
    "def": "Периодический уход морской воды от берега.",
    "ph": "[eb]",
    "ex": "Ebb and flow — Приливы и отливы.",
    "collocations": [
      "ebb in context",
      "use ebb"
    ]
  },
  "ECHO": {
    "tr": "Эхо / Отголосок",
    "def": "Отражение звуковой волны от скал или стен.",
    "ph": "[ˈekəʊ]",
    "ex": "Loud echo — Громкое эхо.",
    "collocations": [
      "echo in context",
      "use echo"
    ]
  },
  "ECLIPSE": {
    "tr": "Затмение",
    "def": "Астрономическое закрытие одного светила другим.",
    "ph": "[ɪˈklɪps]",
    "ex": "Solar eclipse — Солнечное затмение.",
    "collocations": [
      "eclipse in context",
      "use eclipse"
    ]
  },
  "ECOSYSTEM": {
    "tr": "Экосистема",
    "def": "Природное сообщество живых организмов и среды.",
    "ph": "[ˈiːkəʊsɪstəm]",
    "ex": "Forest ecosystem — Лесная экосистема.",
    "collocations": [
      "ecosystem in context",
      "use ecosystem"
    ]
  },
  "EDUCATION": {
    "tr": "Образование / Обучение",
    "def": "Процесс получения знаний и навыков в учебе.",
    "ph": "[ˌedʒuˈkeɪʃn]",
    "ex": "Higher education — Высшее образование.",
    "collocations": [
      "education in context",
      "use education"
    ]
  },
  "EGG": {
    "tr": "Яйцо",
    "def": "Питательный продукт птиц в прочной скорлупе.",
    "ph": "[eɡ]",
    "ex": "Boiled egg — Вареное яйцо.",
    "collocations": [
      "egg in context",
      "use egg"
    ]
  },
  "EGO": {
    "tr": "Эго / Самомнение",
    "def": "Личное самосознание или чувство собственной важности.",
    "ph": "[ˈiːɡəʊ]",
    "ex": "Big ego — Раздутое эго.",
    "collocations": [
      "ego in context",
      "use ego"
    ]
  },
  "ELECTION": {
    "tr": "Выборы",
    "def": "Процесс голосования граждан за кандидатов.",
    "ph": "[ɪˈlekʃn]",
    "ex": "Win election — Выиграть выборы.",
    "collocations": [
      "election in context",
      "use election"
    ]
  },
  "ELOQUENT": {
    "tr": "Красноречивый / Выразительный",
    "def": "Убедительный и красивый в речи оратор.",
    "ph": "[ˈeləkwənt]",
    "ex": "Eloquent speech — Красноречивая речь.",
    "collocations": [
      "eloquent in context",
      "use eloquent"
    ]
  },
  "EMBER": {
    "tr": "Тлеющий уголек",
    "def": "Горящий уголек в остывающем костре.",
    "ph": "[ˈembə]",
    "ex": "Glowing ember — Тлеющий уголек.",
    "collocations": [
      "ember in context",
      "use ember"
    ]
  },
  "EMBRACE": {
    "tr": "Обнимать / Принимать",
    "def": "Заключать в объятия или с радостью принимать идею.",
    "ph": "[ɪmˈbreɪs]",
    "ex": "Warm embrace — Теплые объятия.",
    "collocations": [
      "embrace in context",
      "use embrace"
    ]
  },
  "EMERALD": {
    "tr": "Изумруд / Изумрудный",
    "def": "Драгоценный прозрачный камень насыщенного зеленого цвета.",
    "ph": "[ˈemərəld]",
    "ex": "Emerald green — Изумрудно-зеленый.",
    "collocations": [
      "emerald in context",
      "use emerald"
    ]
  },
  "EMISSARY": {
    "tr": "Эмиссар / Посланник",
    "def": "Официальный представитель со специальной миссией.",
    "ph": "[ˈemɪsəri]",
    "ex": "Secret emissary — Тайный посланник.",
    "collocations": [
      "emissary in context",
      "use emissary"
    ]
  },
  "ENERGY": {
    "tr": "Энергия / Мощь",
    "def": "Жизненная сила, электричество или активность.",
    "ph": "[ˈenədʒi]",
    "ex": "Solar energy — Солнечная энергия.",
    "collocations": [
      "renewable energy",
      "save energy",
      "full of energy"
    ]
  },
  "ENGINEER": {
    "tr": "Инженер",
    "def": "Специалист по проектированию машин и конструкций.",
    "ph": "[ˌendʒɪˈnɪə]",
    "ex": "Software engineer — Инженер-программист.",
    "collocations": [
      "engineer in context",
      "use engineer"
    ]
  },
  "ENTROPY": {
    "tr": "Энтропия / Мера хаоса",
    "def": "Степень беспорядка и рассеивания энергии в системе.",
    "ph": "[ˈentrəpi]",
    "ex": "System entropy — Энтропия системы.",
    "collocations": [
      "entropy in context",
      "use entropy"
    ]
  },
  "EPITOME": {
    "tr": "Воплощение / Эталон",
    "def": "Идеальный образчик или олицетворение высшего качества.",
    "ph": "[ɪˈpɪtəmi]",
    "ex": "Epitome of courage — Воплощение мужества.",
    "collocations": [
      "epitome in context",
      "use epitome"
    ]
  },
  "EQUIPMENT": {
    "tr": "Оборудование / Снаряжение",
    "def": "Технические приборы, аппараты или экипировка.",
    "ph": "[ɪˈkwɪpmənt]",
    "ex": "Sports equipment — Спортивное снаряжение.",
    "collocations": [
      "equipment in context",
      "use equipment"
    ]
  },
  "ERA": {
    "tr": "Эра / Эпоха",
    "def": "Продолжительный исторический период времени.",
    "ph": "[ˈɪərə]",
    "ex": "Digital era — Цифровая эра.",
    "collocations": [
      "era in context",
      "use era"
    ]
  },
  "ETHOS": {
    "tr": "Этос / Нравственный уклад",
    "def": "Характерный дух и моральные ценности общества.",
    "ph": "[ˈiːθɒs]",
    "ex": "Company ethos — Корпоративный дух.",
    "collocations": [
      "ethos in context",
      "use ethos"
    ]
  },
  "EVENING": {
    "tr": "Вечер",
    "def": "Время суток между днем и ночью перед сном.",
    "ph": "[ˈiːvnɪŋ]",
    "ex": "Good evening — Добрый вечер.",
    "collocations": [
      "evening in context",
      "use evening"
    ]
  },
  "EVOLUTION": {
    "tr": "Эволюция / Развитие",
    "def": "Постепенный многовековой процесс развития природы.",
    "ph": "[ˌiːvəˈluːʃn]",
    "ex": "Human evolution — Эволюция человека.",
    "collocations": [
      "evolution in context",
      "use evolution"
    ]
  },
  "EXERCISE": {
    "tr": "Упражнение / Тренировка",
    "def": "Физическая активность или учебное задание.",
    "ph": "[ˈeksəsaɪz]",
    "ex": "Morning exercise — Утренняя зарядка.",
    "collocations": [
      "exercise in context",
      "use exercise"
    ]
  },
  "EXPLORE": {
    "tr": "Исследовать / Изучать",
    "def": "Путешествовать в неизведанные места и открывать новое.",
    "ph": "[ɪkˈsplɔː]",
    "ex": "Explore world — Исследовать мир.",
    "collocations": [
      "explore in context",
      "use explore"
    ]
  },
  "EXPLORER": {
    "tr": "Исследователь / Первооткрыватель",
    "def": "Путешественник, открывающий новые земли.",
    "ph": "[ɪkˈsplɔːrə]",
    "ex": "Arctic explorer — Полярный исследователь.",
    "collocations": [
      "explorer in context",
      "use explorer"
    ]
  },
  "EYE": {
    "tr": "Глаз",
    "def": "Орган зрения, воспринимающий световые лучи.",
    "ph": "[aɪ]",
    "ex": "Blue eye — Голубой глаз.",
    "collocations": [
      "eye in context",
      "use eye"
    ]
  },
  "FALCON": {
    "tr": "Сокол",
    "def": "Быстрая хищная птица с острым охотничьим зрением.",
    "ph": "[ˈfɔːlkən]",
    "ex": "Hunting falcon — Охотничий сокол.",
    "collocations": [
      "falcon in context",
      "use falcon"
    ]
  },
  "FAMILY": {
    "tr": "Семья",
    "def": "Круг самых близких родных людей: родители и дети.",
    "ph": "[ˈfæməli]",
    "ex": "Big family — Большая семья.",
    "collocations": [
      "big family",
      "happy family",
      "family values"
    ]
  },
  "FAN": {
    "tr": "Вентилятор / Фанат / Веер",
    "def": "Прибор для обдува воздухом или преданный болельщик.",
    "ph": "[fæn]",
    "ex": "Football fan — Футбольный фанат.",
    "collocations": [
      "fan in context",
      "use fan"
    ]
  },
  "FARM": {
    "tr": "Ферма / Усадьба",
    "def": "Сельскохозяйственное хозяйство с полями и животными.",
    "ph": "[fɑːm]",
    "ex": "Dairy farm — Молочная ферма.",
    "collocations": [
      "farm in context",
      "use farm"
    ]
  },
  "FASHION": {
    "tr": "Мода / Стиль",
    "def": "Популярный в обществе стиль одежды и дизайна.",
    "ph": "[ˈfæʃn]",
    "ex": "High fashion — Высокая мода.",
    "collocations": [
      "fashion in context",
      "use fashion"
    ]
  },
  "FATHER": {
    "tr": "Отец / Папа",
    "def": "Мужчина-родитель по отношению к своим детям.",
    "ph": "[ˈfɑːðə]",
    "ex": "Kind father — Добрый отец.",
    "collocations": [
      "father in context",
      "use father"
    ]
  },
  "FEATHER": {
    "tr": "Перо птицы",
    "def": "Легкое роговое образование на теле птиц.",
    "ph": "[ˈfeðə]",
    "ex": "Bird feather — Птичье перо.",
    "collocations": [
      "feather in context",
      "use feather"
    ]
  },
  "FEE": {
    "tr": "Плата / Взнос / Сбор",
    "def": "Денежная сумма за услугу или входной билет.",
    "ph": "[fiː]",
    "ex": "Entry fee — Входная плата.",
    "collocations": [
      "fee in context",
      "use fee"
    ]
  },
  "FESTIVAL": {
    "tr": "Фестиваль / Празднество",
    "def": "Массовое праздничное мероприятие с концертами.",
    "ph": "[ˈfestɪvl]",
    "ex": "Music festival — Музыкальный фестиваль.",
    "collocations": [
      "festival in context",
      "use festival"
    ]
  },
  "FIG": {
    "tr": "Инжир / Фига",
    "def": "Сладкий южный плод фигового дерева.",
    "ph": "[fɪɡ]",
    "ex": "Sweet fig — Сладкий инжир.",
    "collocations": [
      "fig in context",
      "use fig"
    ]
  },
  "FIRE": {
    "tr": "Огонь / Пламя",
    "def": "Горящие языки пламени, дающие свет и тепло.",
    "ph": "[ˈfaɪə]",
    "ex": "Camp fire — Костер в лагере.",
    "collocations": [
      "fire in context",
      "use fire"
    ]
  },
  "FIREFLY": {
    "tr": "Светлячок",
    "def": "Ночной жук, светящийся в темноте фосфорным светом.",
    "ph": "[ˈfaɪəflaɪ]",
    "ex": "Glowing firefly — Светящийся светлячок.",
    "collocations": [
      "firefly in context",
      "use firefly"
    ]
  },
  "FISH": {
    "tr": "Рыба",
    "def": "Водное позвоночное существо с чешуей и плавниками.",
    "ph": "[fɪʃ]",
    "ex": "Gold fish — Золотая рыбка.",
    "collocations": [
      "fish in context",
      "use fish"
    ]
  },
  "FLAME": {
    "tr": "Пламя / Огонь",
    "def": "Светящийся столб раскаленных газов при горении.",
    "ph": "[fleɪm]",
    "ex": "Candle flame — Пламя свечи.",
    "collocations": [
      "flame in context",
      "use flame"
    ]
  },
  "FLAW": {
    "tr": "Изъян / Дефект",
    "def": "Слабое место, ошибка или недостаток вещи.",
    "ph": "[flɔː]",
    "ex": "Minor flaw — Небольшой изъян.",
    "collocations": [
      "flaw in context",
      "use flaw"
    ]
  },
  "FLOW": {
    "tr": "Поток / Течь",
    "def": "Непрерывное плавное движение реки или мыслей.",
    "ph": "[fləʊ]",
    "ex": "River flow — Течение реки.",
    "collocations": [
      "flow in context",
      "use flow"
    ]
  },
  "FLOWER": {
    "tr": "Цветок",
    "def": "Красивая цветущая часть растения с лепестками.",
    "ph": "[ˈflaʊə]",
    "ex": "Spring flower — Весенний цветок.",
    "collocations": [
      "flower in context",
      "use flower"
    ]
  },
  "FLUX": {
    "tr": "Поток / Изменчивость",
    "def": "Непрерывный поток или состояние перемен.",
    "ph": "[flʌks]",
    "ex": "Constant flux — Постоянные перемены.",
    "collocations": [
      "flux in context",
      "use flux"
    ]
  },
  "FOE": {
    "tr": "Враг / Противник",
    "def": "Недруг или соперник в противоборстве.",
    "ph": "[fəʊ]",
    "ex": "Friend or foe — Друг или враг.",
    "collocations": [
      "foe in context",
      "use foe"
    ]
  },
  "FOG": {
    "tr": "Туман",
    "def": "Густое облако сконденсированного пара у земли.",
    "ph": "[fɒɡ]",
    "ex": "Thick fog — Густой туман.",
    "collocations": [
      "fog in context",
      "use fog"
    ]
  },
  "FOIL": {
    "tr": "Фольга / Рапира",
    "def": "Тонкий блестящий лист металла для запекания.",
    "ph": "[fɔɪl]",
    "ex": "Aluminum foil — Алюминиевая фольга.",
    "collocations": [
      "foil in context",
      "use foil"
    ]
  },
  "FOOD": {
    "tr": "Еда / Пища",
    "def": "Питательные продукты, поддерживающие силы тела.",
    "ph": "[fuːd]",
    "ex": "Healthy food — Здоровая еда.",
    "collocations": [
      "food in context",
      "use food"
    ]
  },
  "FOOTBALL": {
    "tr": "Футбол",
    "def": "Самая популярная командная игра в мяч ногами.",
    "ph": "[ˈfʊtbɔːl]",
    "ex": "Play football — Играть в футбол.",
    "collocations": [
      "football in context",
      "use football"
    ]
  },
  "FOREST": {
    "tr": "Лес",
    "def": "Крупный массив земли, густо заросший деревьями.",
    "ph": "[ˈfɒrɪst]",
    "ex": "Pine forest — Сосновый лес.",
    "collocations": [
      "forest in context",
      "use forest"
    ]
  },
  "FORGE": {
    "tr": "Кузница / Ковать",
    "def": "Мастерская кузнеца или создание прочных связей.",
    "ph": "[fɔːdʒ]",
    "ex": "Forge metal — Ковать металл.",
    "collocations": [
      "forge in context",
      "use forge"
    ]
  },
  "FORMATION": {
    "tr": "Формирование / Структура",
    "def": "Процесс создания строя или геологический пласт.",
    "ph": "[fɔːˈmeɪʃn]",
    "ex": "Rock formation — Скальное образование.",
    "collocations": [
      "formation in context",
      "use formation"
    ]
  },
  "FORTUNE": {
    "tr": "Удача / Состояние / Судьба",
    "def": "Счастливый случай или крупное богатство.",
    "ph": "[ˈfɔːtʃuːn]",
    "ex": "Good fortune — Большая удача.",
    "collocations": [
      "fortune in context",
      "use fortune"
    ]
  },
  "FOSSIL": {
    "tr": "Окаменелость / Ископаемое",
    "def": "Остатки древних организмов в горных породах.",
    "ph": "[ˈfɒsl]",
    "ex": "Dinosaur fossil — Окаменелость динозавра.",
    "collocations": [
      "fossil in context",
      "use fossil"
    ]
  },
  "FRACTION": {
    "tr": "Дробь / Частица / Фракция",
    "def": "Малая часть целого или математическая дробь.",
    "ph": "[ˈfrækʃn]",
    "ex": "Small fraction — Малая часть.",
    "collocations": [
      "fraction in context",
      "use fraction"
    ]
  },
  "FREEDOM": {
    "tr": "Свобода",
    "def": "Возможность действовать по своей воле без оков.",
    "ph": "[ˈfriːdəm]",
    "ex": "Freedom of speech — Свобода слова.",
    "collocations": [
      "freedom of choice",
      "fight for freedom",
      "total freedom"
    ]
  },
  "FREQUENCY": {
    "tr": "Частота / Периодичность",
    "def": "Количество повторений события за единицу времени.",
    "ph": "[ˈfriːkwənsi]",
    "ex": "High frequency — Высокая частота.",
    "collocations": [
      "frequency in context",
      "use frequency"
    ]
  },
  "FRIEND": {
    "tr": "Друг / Товарищ",
    "def": "Человек, связанный узами дружбы и взаимопомощи.",
    "ph": "[frend]",
    "ex": "Close friend — Близкий друг.",
    "collocations": [
      "best friend",
      "close friend",
      "make friends"
    ]
  },
  "FRUIT": {
    "tr": "Фрукт / Плод",
    "def": "Сочный сладкий плод дерева или кустарника.",
    "ph": "[fruːt]",
    "ex": "Fresh fruit — Свежие фрукты.",
    "collocations": [
      "fruit in context",
      "use fruit"
    ]
  },
  "FUTURE": {
    "tr": "Будущее",
    "def": "Время и события, которые наступят завтра.",
    "ph": "[ˈfjuːtʃə]",
    "ex": "Plan for future — Строить планы на будущее.",
    "collocations": [
      "bright future",
      "in the near future",
      "plan for future"
    ]
  },
  "GALAXY": {
    "tr": "Галактика",
    "def": "Гигантская гравитационная система из миллиардов звезд.",
    "ph": "[ˈɡæləksi]",
    "ex": "Spiral galaxy — Спиральная галактика.",
    "collocations": [
      "galaxy in context",
      "use galaxy"
    ]
  },
  "GAME": {
    "tr": "Игра",
    "def": "Увлекательное занятие по правилам для отдыха.",
    "ph": "[ɡeɪm]",
    "ex": "Board game — Настольная игра.",
    "collocations": [
      "game in context",
      "use game"
    ]
  },
  "GAP": {
    "tr": "Пробел / Зазор / Брешь",
    "def": "Расстояние между предметами или пропуск в данных.",
    "ph": "[ɡæp]",
    "ex": "Mind the gap — Осторожно, зазор!",
    "collocations": [
      "gap in context",
      "use gap"
    ]
  },
  "GARDEN": {
    "tr": "Сад",
    "def": "Огороженная территория с цветами и деревьями.",
    "ph": "[ˈɡɑːdn]",
    "ex": "Flower garden — Цветочный сад.",
    "collocations": [
      "garden in context",
      "use garden"
    ]
  },
  "GEM": {
    "tr": "Самоцвет / Драгоценный камень",
    "def": "Редкий ограненный минерал ювелирного качества.",
    "ph": "[dʒem]",
    "ex": "Hidden gem — Скрытое сокровище.",
    "collocations": [
      "gem in context",
      "use gem"
    ]
  },
  "GENEROUS": {
    "tr": "Щедрый / Великодушный",
    "def": "Охотно делящийся с другими, не скупящийся.",
    "ph": "[ˈdʒenərəs]",
    "ex": "Generous gift — Щедрый подарок.",
    "collocations": [
      "generous in context",
      "use generous"
    ]
  },
  "GENUINE": {
    "tr": "Подлинный / Искренний",
    "def": "Настоящий, неподдельный и честный от сердца.",
    "ph": "[ˈdʒenjuɪn]",
    "ex": "Genuine leather — Натуральная кожа.",
    "collocations": [
      "genuine in context",
      "use genuine"
    ]
  },
  "GEOGRAPHY": {
    "tr": "География",
    "def": "Наука о строении поверхности Земли и странах.",
    "ph": "[dʒiˈɒɡrəfi]",
    "ex": "Physical geography — Физическая география.",
    "collocations": [
      "geography in context",
      "use geography"
    ]
  },
  "GEYSER": {
    "tr": "Гейзер",
    "def": "Горячий источник, фонтанирующий паром и водой.",
    "ph": "[ˈɡiːzə]",
    "ex": "Active geyser — Действующий гейзер.",
    "collocations": [
      "geyser in context",
      "use geyser"
    ]
  },
  "GIFT": {
    "tr": "Подарок / Дар",
    "def": "Вещь, подаренная от души на торжество.",
    "ph": "[ɡɪft]",
    "ex": "Birthday gift — Подарок на день рождения.",
    "collocations": [
      "gift in context",
      "use gift"
    ]
  },
  "GIST": {
    "tr": "Суть / Главная мысль",
    "def": "Основное зерно сказанного текста или речи.",
    "ph": "[dʒɪst]",
    "ex": "Get the gist — Понять главную суть.",
    "collocations": [
      "gist in context",
      "use gist"
    ]
  },
  "GLACIER": {
    "tr": "Ледник",
    "def": "Огромная масса льда, медленно сползающая с гор.",
    "ph": "[ˈɡlæsiə]",
    "ex": "Mountain glacier — Горный ледник.",
    "collocations": [
      "glacier in context",
      "use glacier"
    ]
  },
  "GLASS": {
    "tr": "Стекло / Стакан",
    "def": "Прозрачный твердый материал или емкость для сока.",
    "ph": "[ɡlɑːs]",
    "ex": "Glass of water — Стакан воды.",
    "collocations": [
      "glass in context",
      "use glass"
    ]
  },
  "GLIDER": {
    "tr": "Планер",
    "def": "Легкий безмоторный летательный аппарат.",
    "ph": "[ˈɡlaɪdə]",
    "ex": "Soar on a glider — Парить на планере.",
    "collocations": [
      "glider in context",
      "use glider"
    ]
  },
  "GLOW": {
    "tr": "Свечение / Сияние",
    "def": "Мягкий теплый свет в полумраке.",
    "ph": "[ɡləʊ]",
    "ex": "Warm glow — Теплое свечение.",
    "collocations": [
      "glow in context",
      "use glow"
    ]
  },
  "GOLD": {
    "tr": "Золото / Золотой",
    "def": "Благородный драгоценный металл желтого цвета.",
    "ph": "[ɡəʊld]",
    "ex": "Pure gold — Чистое золото.",
    "collocations": [
      "gold in context",
      "use gold"
    ]
  },
  "GRAVITY": {
    "tr": "Гравитация / Тяготение",
    "def": "Сила притяжения тел к центру Земли.",
    "ph": "[ˈɡrævəti]",
    "ex": "Zero gravity — Невесомость.",
    "collocations": [
      "gravity in context",
      "use gravity"
    ]
  },
  "GREEN": {
    "tr": "Зеленый",
    "def": "Цвет свежей травы, листвы и весеннего леса.",
    "ph": "[ɡriːn]",
    "ex": "Green leaves — Зеленые листья.",
    "collocations": [
      "green in context",
      "use green"
    ]
  },
  "GRID": {
    "tr": "Сетка / Решетка",
    "def": "Пересекающиеся линии, образующие матрицу ячеек.",
    "ph": "[ɡrɪd]",
    "ex": "Game grid — Игровая сетка.",
    "collocations": [
      "grid in context",
      "use grid"
    ]
  },
  "GUILE": {
    "tr": "Хитрость / Коварство",
    "def": "Ловкий обман или изворотливость в поведении.",
    "ph": "[ɡaɪl]",
    "ex": "Without guile — Без лукавства.",
    "collocations": [
      "guile in context",
      "use guile"
    ]
  },
  "GUM": {
    "tr": "Жвачка / Десна / Смола",
    "def": "Жевательная резинка или ткань вокруг зубов.",
    "ph": "[ɡʌm]",
    "ex": "Bubble gum — Жвачка.",
    "collocations": [
      "gum in context",
      "use gum"
    ]
  },
  "HABITAT": {
    "tr": "Среда обитания",
    "def": "Природный дом диких животных и растений.",
    "ph": "[ˈhæbɪtæt]",
    "ex": "Forest habitat — Лесная среда обитания.",
    "collocations": [
      "habitat in context",
      "use habitat"
    ]
  },
  "HAPHAZARD": {
    "tr": "Случайный / Бессистемный",
    "def": "Лишенный четкого плана или порядка.",
    "ph": "[hæpˈhæzəd]",
    "ex": "Haphazard choice — Случайный выбор.",
    "collocations": [
      "haphazard in context",
      "use haphazard"
    ]
  },
  "HAPPY": {
    "tr": "Счастливый / Радостный",
    "def": "Испытывающий чувство искренней радости.",
    "ph": "[ˈhæpi]",
    "ex": "Happy family — Счастливая семья.",
    "collocations": [
      "happy in context",
      "use happy"
    ]
  },
  "HARBOR": {
    "tr": "Гавань / Порт",
    "def": "Укрытый от волн залив для швартовки судов.",
    "ph": "[ˈhɑːbə]",
    "ex": "Safe harbor — Безопасная гавань.",
    "collocations": [
      "harbor in context",
      "use harbor"
    ]
  },
  "HARE": {
    "tr": "Заяц",
    "def": "Быстроногий лесной зверек с длинными ушами.",
    "ph": "[heə]",
    "ex": "Wild hare — Дикий заяц.",
    "collocations": [
      "hare in context",
      "use hare"
    ]
  },
  "HARMONY": {
    "tr": "Гармония / Согласие",
    "def": "Созвучие элементов, слаженность и покой.",
    "ph": "[ˈhɑːməni]",
    "ex": "Live in harmony — Жить в гармонии.",
    "collocations": [
      "harmony in context",
      "use harmony"
    ]
  },
  "HAT": {
    "tr": "Шляпа / Шапка",
    "def": "Головной убор для защиты от солнца и холода.",
    "ph": "[hæt]",
    "ex": "Straw hat — Соломенная шляпа.",
    "collocations": [
      "hat in context",
      "use hat"
    ]
  },
  "HAVEN": {
    "tr": "Приют / Убежище",
    "def": "Тихое безопасное место отдыха и защиты.",
    "ph": "[ˈheɪvn]",
    "ex": "Safe haven — Надежное убежище.",
    "collocations": [
      "haven in context",
      "use haven"
    ]
  },
  "HEALTH": {
    "tr": "Здоровье",
    "def": "Состояние физического и душевного благополучия.",
    "ph": "[helθ]",
    "ex": "Good health — Крепкое здоровье.",
    "collocations": [
      "good health",
      "health care",
      "stay in health"
    ]
  },
  "HEART": {
    "tr": "Сердце / Душа",
    "def": "Центральный орган кровообращения и символ любви.",
    "ph": "[hɑːt]",
    "ex": "Warm heart — Доброе сердце.",
    "collocations": [
      "warm heart",
      "heart of stone",
      "from the heart"
    ]
  },
  "HEIR": {
    "tr": "Наследник",
    "def": "Человек, законно получающий права или титул.",
    "ph": "[eə]",
    "ex": "Legal heir — Законный наследник.",
    "collocations": [
      "heir in context",
      "use heir"
    ]
  },
  "HERITAGE": {
    "tr": "Наследие / Достояние",
    "def": "Культурно-исторические ценности предков.",
    "ph": "[ˈherɪtɪdʒ]",
    "ex": "World heritage — Всемирное наследие.",
    "collocations": [
      "heritage in context",
      "use heritage"
    ]
  },
  "HERMETIC": {
    "tr": "Герметичный / Тайный",
    "def": "Плотно закрытый или сокровенный эзотерический.",
    "ph": "[hɜːˈmetɪk]",
    "ex": "Hermetic seal — Герметичное уплотнение.",
    "collocations": [
      "hermetic in context",
      "use hermetic"
    ]
  },
  "HERO": {
    "tr": "Герой",
    "def": "Человек исключительного мужества и отваги.",
    "ph": "[ˈhɪərəʊ]",
    "ex": "National hero — Национальный герой.",
    "collocations": [
      "hero in context",
      "use hero"
    ]
  },
  "HOLIDAY": {
    "tr": "Праздник / Каникулы",
    "def": "Нерабочий день отдыха и торжеств.",
    "ph": "[ˈhɒlədeɪ]",
    "ex": "Summer holiday — Летние каникулы.",
    "collocations": [
      "holiday in context",
      "use holiday"
    ]
  },
  "HOME": {
    "tr": "Дом / Родной очаг",
    "def": "Место, где живут семья, уют и тепло.",
    "ph": "[həʊm]",
    "ex": "Sweet home — Родной дом.",
    "collocations": [
      "home in context",
      "use home"
    ]
  },
  "HORIZON": {
    "tr": "Горизонт",
    "def": "Видимая линия схождения неба и земной тверди.",
    "ph": "[həˈraɪzn]",
    "ex": "New horizon — Новый горизонт.",
    "collocations": [
      "horizon in context",
      "use horizon"
    ]
  },
  "HORIZONS": {
    "tr": "Горизонты",
    "def": "Кругозор, перспективы развития и новые дали.",
    "ph": "[həˈraɪznz]",
    "ex": "Broaden horizons — Расширять горизонты.",
    "collocations": [
      "horizons in context",
      "use horizons"
    ]
  },
  "HORN": {
    "tr": "Рог / Гудок",
    "def": "Твердый нарост на голове животных или сигнал авто.",
    "ph": "[hɔːn]",
    "ex": "Car horn — Автомобильный гудок.",
    "collocations": [
      "horn in context",
      "use horn"
    ]
  },
  "HOSPITAL": {
    "tr": "Больница",
    "def": "Медицинское учреждение для лечения пациентов.",
    "ph": "[ˈhɒspɪtl]",
    "ex": "City hospital — Городская больница.",
    "collocations": [
      "hospital in context",
      "use hospital"
    ]
  },
  "HOTEL": {
    "tr": "Отель / Гостиница",
    "def": "Здание с номерами для временного проживания туристов.",
    "ph": "[həʊˈtel]",
    "ex": "Five-star hotel — Пятизвездочный отель.",
    "collocations": [
      "hotel in context",
      "use hotel"
    ]
  },
  "HOUSE": {
    "tr": "Дом / Здание",
    "def": "Жилое капитальное строение с комнатами.",
    "ph": "[haʊs]",
    "ex": "Country house — Загородный дом.",
    "collocations": [
      "house in context",
      "use house"
    ]
  },
  "HUE": {
    "tr": "Оттенок / Цветовой тон",
    "def": "Градация цвета по спектральной шкале.",
    "ph": "[hjuː]",
    "ex": "Bright hue — Яркий оттенок.",
    "collocations": [
      "hue in context",
      "use hue"
    ]
  },
  "HYMNAL": {
    "tr": "Сборник гимнов",
    "def": "Книга духовных или торжественных песнопений.",
    "ph": "[ˈhɪmnl]",
    "ex": "Church hymnal — Церковный сборник гимнов.",
    "collocations": [
      "hymnal in context",
      "use hymnal"
    ]
  },
  "ICE": {
    "tr": "Лед",
    "def": "Вода в твердом замерзшем кристаллическом виде.",
    "ph": "[aɪs]",
    "ex": "Ice cube — Кубик льда.",
    "collocations": [
      "ice in context",
      "use ice"
    ]
  },
  "ICEBERG": {
    "tr": "Айсберг",
    "def": "Гигантская плавучая ледяная гора в океане.",
    "ph": "[ˈaɪsbɜːɡ]",
    "ex": "Giant iceberg — Гигантский айсберг.",
    "collocations": [
      "iceberg in context",
      "use iceberg"
    ]
  },
  "ICON": {
    "tr": "Значок / Иконка / Символ",
    "def": "Графический элемент интерфейса или общепризнанный символ.",
    "ph": "[ˈaɪkɒn]",
    "ex": "App icon — Иконка приложения.",
    "collocations": [
      "desktop icon",
      "click the icon"
    ]
  },
  "IMMUTABLE": {
    "tr": "Неизменный / Вечный",
    "def": "Не поддающийся изменениям во времени.",
    "ph": "[ɪˈmjuːtəbl]",
    "ex": "Immutable law — Непреложный закон.",
    "collocations": [
      "immutable in context",
      "use immutable"
    ]
  },
  "IMPORTANT": {
    "tr": "Важный / Значимый",
    "def": "Имеющий существенное и первостепенное значение.",
    "ph": "[ɪmˈpɔːtnt]",
    "ex": "Important rule — Важное правило.",
    "collocations": [
      "important in context",
      "use important"
    ]
  },
  "INCOGNITO": {
    "tr": "Инкогнито / Тайно",
    "def": "Под вымышленным именем, скрывая свою личность.",
    "ph": "[ˌɪnkɒɡˈniːtəʊ]",
    "ex": "Travel incognito — Путешествовать инкогнито.",
    "collocations": [
      "incognito in context",
      "use incognito"
    ]
  },
  "INSIGHT": {
    "tr": "Озарение / Инсайт",
    "def": "Глубокое внезапное понимание сути вещей.",
    "ph": "[ˈɪnsaɪt]",
    "ex": "Valuable insight — Ценное озарение.",
    "collocations": [
      "insight in context",
      "use insight"
    ]
  },
  "INTEGRITY": {
    "tr": "Целостность / Честность",
    "def": "Неподкупность, моральная чистота и полнота.",
    "ph": "[ɪnˈteɡrəti]",
    "ex": "High integrity — Высокая честность.",
    "collocations": [
      "integrity in context",
      "use integrity"
    ]
  },
  "INTERNET": {
    "tr": "Интернет",
    "def": "Глобальная цифровая сеть обмена информацией.",
    "ph": "[ˈɪntənet]",
    "ex": "Browse the internet — Искать в интернете.",
    "collocations": [
      "internet in context",
      "use internet"
    ]
  },
  "INVENTION": {
    "tr": "Изобретение",
    "def": "Создание нового полезного устройства или метода.",
    "ph": "[ɪnˈvenʃn]",
    "ex": "Great invention — Великое изобретение.",
    "collocations": [
      "invention in context",
      "use invention"
    ]
  },
  "ISLAND": {
    "tr": "Остров",
    "def": "Участок суши, полностью омываемый водой.",
    "ph": "[ˈaɪlənd]",
    "ex": "Green island — Зеленый остров.",
    "collocations": [
      "desert island",
      "tropical island",
      "isolated island"
    ]
  },
  "ISLE": {
    "tr": "Островок / Остров",
    "def": "Поэтическое обозначение небольшого острова.",
    "ph": "[aɪl]",
    "ex": "Emerald Isle — Изумрудный остров.",
    "collocations": [
      "isle in context",
      "use isle"
    ]
  },
  "IVORY": {
    "tr": "Слоновая кость",
    "def": "Ценный гладкий белый материал бивней.",
    "ph": "[ˈaɪvəri]",
    "ex": "Carved ivory — Резная кость.",
    "collocations": [
      "ivory in context",
      "use ivory"
    ]
  },
  "JAB": {
    "tr": "Колющий удар / Укол",
    "def": "Резкий быстрый тычок или медицинский укол.",
    "ph": "[dʒæb]",
    "ex": "Quick jab — Быстрый тычок.",
    "collocations": [
      "jab in context",
      "use jab"
    ]
  },
  "JAR": {
    "tr": "Стеклянная банка / Кувшин",
    "def": "Сосуд с широким горлышком для варенья или меда.",
    "ph": "[dʒɑː]",
    "ex": "Glass jar — Стеклянная банка.",
    "collocations": [
      "jar in context",
      "use jar"
    ]
  },
  "JOB": {
    "tr": "Работа / Профессия",
    "def": "Трудовая деятельность по специальности.",
    "ph": "[dʒɒb]",
    "ex": "Find a job — Найти работу.",
    "collocations": [
      "job in context",
      "use job"
    ]
  },
  "JOURNEY": {
    "tr": "Путешествие / Дорога",
    "def": "Поездка из одного пункта в другой.",
    "ph": "[ˈdʒɜːni]",
    "ex": "Long journey — Долгий путь.",
    "collocations": [
      "safe journey",
      "long journey",
      "start a journey"
    ]
  },
  "JUICE": {
    "tr": "Сок",
    "def": "Вкусный жидкий напиток, выжатый из фруктов.",
    "ph": "[dʒuːs]",
    "ex": "Orange juice — Апельсиновый сок.",
    "collocations": [
      "juice in context",
      "use juice"
    ]
  },
  "JUNGLE": {
    "tr": "Джунгли / Тропики",
    "def": "Густой непроходимый влажный тропический лес.",
    "ph": "[ˈdʒʌŋɡl]",
    "ex": "Wild jungle — Дикие джунгли.",
    "collocations": [
      "jungle in context",
      "use jungle"
    ]
  },
  "JUSTICE": {
    "tr": "Справедливость / Правосудие",
    "def": "Честное беспристрастное следование закону и правде.",
    "ph": "[ˈdʒʌstɪs]",
    "ex": "Seek justice — Искать справедливости.",
    "collocations": [
      "bring to justice",
      "sense of justice",
      "social justice"
    ]
  },
  "JUXTAPOSE": {
    "tr": "Сопоставлять / Налагать",
    "def": "Размещать рядом для контрастного сравнения.",
    "ph": "[ˌdʒʌkstəˈpəʊz]",
    "ex": "Juxtapose colors — Сопоставить цвета.",
    "collocations": [
      "juxtapose in context",
      "use juxtapose"
    ]
  },
  "KEY": {
    "tr": "Ключ",
    "def": "Металлический стержень для отпирания замков дверей.",
    "ph": "[kiː]",
    "ex": "Door key — Ключ от двери.",
    "collocations": [
      "key in context",
      "use key"
    ]
  },
  "KINGDOM": {
    "tr": "Королевство / Царство",
    "def": "Страна, управляемая монархом — королем.",
    "ph": "[ˈkɪŋdəm]",
    "ex": "Fairytale kingdom — Сказочное королевство.",
    "collocations": [
      "kingdom in context",
      "use kingdom"
    ]
  },
  "KITCHEN": {
    "tr": "Кухня",
    "def": "Помещение в доме, где готовят вкусную пищу.",
    "ph": "[ˈkɪtʃɪn]",
    "ex": "Modern kitchen — Современная кухня.",
    "collocations": [
      "kitchen in context",
      "use kitchen"
    ]
  },
  "KNELL": {
    "tr": "Колокольный звон",
    "def": "Торжественный или погребальный звон колокола.",
    "ph": "[nel]",
    "ex": "Funeral knell — Погребальный звон.",
    "collocations": [
      "knell in context",
      "use knell"
    ]
  },
  "KNIFE": {
    "tr": "Нож",
    "def": "Острый инструмент с лезвием для нарезания еды.",
    "ph": "[naɪf]",
    "ex": "Kitchen knife — Кухонный нож.",
    "collocations": [
      "knife in context",
      "use knife"
    ]
  },
  "KNIGHT": {
    "tr": "Рыцарь",
    "def": "Благородный средневековый воин в доспехах.",
    "ph": "[naɪt]",
    "ex": "Brave knight — Храбрый рыцарь.",
    "collocations": [
      "knight in context",
      "use knight"
    ]
  },
  "KNIT": {
    "tr": "Вязать / Скреплять",
    "def": "Изготавливать вещи из пряжи спицами.",
    "ph": "[nɪt]",
    "ex": "Knit socks — Вязать носки.",
    "collocations": [
      "knit in context",
      "use knit"
    ]
  },
  "LACONIC": {
    "tr": "Лаконичный / Краткий",
    "def": "Краткий, немногословный и четкий в выражении.",
    "ph": "[ləˈkɒnɪk]",
    "ex": "Laconic answer — Лаконичный ответ.",
    "collocations": [
      "laconic in context",
      "use laconic"
    ]
  },
  "LAGOON": {
    "tr": "Лагуна",
    "def": "Мелкий водоем, отделенный от моря коралловым рифом.",
    "ph": "[ləˈɡuːn]",
    "ex": "Blue lagoon — Голубая лагуна.",
    "collocations": [
      "lagoon in context",
      "use lagoon"
    ]
  },
  "LAKE": {
    "tr": "Озеро",
    "def": "Природный пресноводный водоем в окружении берегов.",
    "ph": "[leɪk]",
    "ex": "Clear lake — Чистое озеро.",
    "collocations": [
      "lake in context",
      "use lake"
    ]
  },
  "LANDSCAPE": {
    "tr": "Пейзаж / Ландшафт",
    "def": "Общий вид природной местности, вид природы.",
    "ph": "[ˈlændskeɪp]",
    "ex": "Mountain landscape — Горный пейзаж.",
    "collocations": [
      "landscape in context",
      "use landscape"
    ]
  },
  "LANTERN": {
    "tr": "Фонарь / Светильник",
    "def": "Переносной источник света со стеклянным корпусом.",
    "ph": "[ˈlæntən]",
    "ex": "Chinese lantern — Китайский фонарик.",
    "collocations": [
      "lantern in context",
      "use lantern"
    ]
  },
  "LEG": {
    "tr": "Нога",
    "def": "Конечность тела человека, служащая для ходьбы.",
    "ph": "[leɡ]",
    "ex": "Left leg — Левая нога.",
    "collocations": [
      "leg in context",
      "use leg"
    ]
  },
  "LEMON": {
    "tr": "Лимон",
    "def": "Кислый цитрусовый плод ярко-желтого цвета.",
    "ph": "[ˈlemən]",
    "ex": "Slice of lemon — Долька лимона.",
    "collocations": [
      "lemon in context",
      "use lemon"
    ]
  },
  "LIGHT": {
    "tr": "Свет / Светлый",
    "def": "Лучистое сияние, разгоняющее тьму.",
    "ph": "[laɪt]",
    "ex": "Sun light — Солнечный свет.",
    "collocations": [
      "bright light",
      "bring to light",
      "green light"
    ]
  },
  "LIMPID": {
    "tr": "Прозрачный / Чистый",
    "def": "Абсолютно прозрачный, ясный как родниковая вода.",
    "ph": "[ˈlɪmpɪd]",
    "ex": "Limpid stream — Прозрачный ручей.",
    "collocations": [
      "limpid in context",
      "use limpid"
    ]
  },
  "LION": {
    "tr": "Лев",
    "def": "Могучий хищник саванны, царь зверей с пышной гривой.",
    "ph": "[ˈlaɪən]",
    "ex": "Mighty lion — Могучий лев.",
    "collocations": [
      "lion in context",
      "use lion"
    ]
  },
  "LIP": {
    "tr": "Губа",
    "def": "Мягкая подвижная складка вокруг рта.",
    "ph": "[lɪp]",
    "ex": "Smile with lips — Улыбнуться губами.",
    "collocations": [
      "lip in context",
      "use lip"
    ]
  },
  "LOCATION": {
    "tr": "Местоположение / Локация",
    "def": "Географическая точка или адрес объекта.",
    "ph": "[ləʊˈkeɪʃn]",
    "ex": "Secret location — Секретное место.",
    "collocations": [
      "location in context",
      "use location"
    ]
  },
  "LOFT": {
    "tr": "Чердак / Лофт",
    "def": "Просторное светлое помещение под самой крышей.",
    "ph": "[lɒft]",
    "ex": "Spacious loft — Просторный лофт.",
    "collocations": [
      "loft in context",
      "use loft"
    ]
  },
  "LORE": {
    "tr": "Знания / Предания",
    "def": "Древняя народная мудрость, сказания и мифы.",
    "ph": "[lɔː]",
    "ex": "Folk lore — Народные предания.",
    "collocations": [
      "lore in context",
      "use lore"
    ]
  },
  "MAGIC": {
    "tr": "Иллюзия / Фокус / Ловкость",
    "def": "Искусство зрелищных фокусов, трюков и ловкости рук.",
    "ph": "[ˈmædʒɪk]",
    "ex": "Stage magic — Сценические фокусы.",
    "collocations": [
      "magic trick",
      "magic show"
    ]
  },
  "MAGNET": {
    "tr": "Магнит",
    "def": "Предмет, притягивающий железо магнитным полем.",
    "ph": "[ˈmæɡnət]",
    "ex": "Strong magnet — Сильный магнит.",
    "collocations": [
      "magnet in context",
      "use magnet"
    ]
  },
  "MAJESTY": {
    "tr": "Величие / Его Величество",
    "def": "Царственное достоинство, пышность и грандиозность.",
    "ph": "[ˈmædʒəsti]",
    "ex": "Royal majesty — Королевское величество.",
    "collocations": [
      "majesty in context",
      "use majesty"
    ]
  },
  "MALLEABLE": {
    "tr": "Податливый / Пластичный",
    "def": "Легко поддающийся ковке, лепке или убеждению.",
    "ph": "[ˈmæliəbl]",
    "ex": "Malleable metal — Ковкий металл.",
    "collocations": [
      "malleable in context",
      "use malleable"
    ]
  },
  "MAP": {
    "tr": "Карта местности",
    "def": "Географический чертеж поверхности суши и морей.",
    "ph": "[mæp]",
    "ex": "World map — Карта мира.",
    "collocations": [
      "map in context",
      "use map"
    ]
  },
  "MARBLE": {
    "tr": "Мрамор",
    "def": "Ценный твердый отделочный камень со сложным узором.",
    "ph": "[ˈmɑːbl]",
    "ex": "White marble — Белый мрамор.",
    "collocations": [
      "marble in context",
      "use marble"
    ]
  },
  "MARKET": {
    "tr": "Рынок / Базар",
    "def": "Торговая площадь для покупки свежих продуктов.",
    "ph": "[ˈmɑːkɪt]",
    "ex": "City market — Городской рынок.",
    "collocations": [
      "market in context",
      "use market"
    ]
  },
  "MAZE": {
    "tr": "Лабиринт",
    "def": "Запутанная сеть извилистых коридоров и переходов.",
    "ph": "[meɪz]",
    "ex": "Garden maze — Садовый лабиринт.",
    "collocations": [
      "maze in context",
      "use maze"
    ]
  },
  "MEDICINE": {
    "tr": "Лекарство / Медицина",
    "def": "Целебный препарат или наука о лечении болезней.",
    "ph": "[ˈmedsn]",
    "ex": "Take medicine — Принять лекарство.",
    "collocations": [
      "medicine in context",
      "use medicine"
    ]
  },
  "MEMORY": {
    "tr": "Память / Воспоминание",
    "def": "Способность мозга хранить прожитый опыт.",
    "ph": "[ˈmeməri]",
    "ex": "Good memory — Хорошая память.",
    "collocations": [
      "sweet memory",
      "in loving memory",
      "lose memory"
    ]
  },
  "METAMORPH": {
    "tr": "Метаморфоз / Превращение",
    "def": "Полное глубокое преображение формы или сути.",
    "ph": "[ˈmetəmɔːf]",
    "ex": "Complete metamorph — Полное преображение.",
    "collocations": [
      "metamorph in context",
      "use metamorph"
    ]
  },
  "METAPHOR": {
    "tr": "Метафора",
    "def": "Образное иносказательное сравнение в литературе.",
    "ph": "[ˈmetəfə]",
    "ex": "Poetic metaphor — Поэтическая метафора.",
    "collocations": [
      "metaphor in context",
      "use metaphor"
    ]
  },
  "METEOR": {
    "tr": "Метеор / Падающая звезда",
    "def": "Светящийся след сгорающего в атмосфере болида.",
    "ph": "[ˈmiːtiə]",
    "ex": "Meteor shower — Метеорный поток.",
    "collocations": [
      "meteor in context",
      "use meteor"
    ]
  },
  "MIGRATION": {
    "tr": "Миграция / Перелет",
    "def": "Массовое переселение птиц или людей в новые края.",
    "ph": "[maɪˈɡreɪʃn]",
    "ex": "Bird migration — Перелет птиц.",
    "collocations": [
      "migration in context",
      "use migration"
    ]
  },
  "MILK": {
    "tr": "Молоко",
    "def": "Белый полезный питательный напиток.",
    "ph": "[mɪlk]",
    "ex": "Glass of milk — Стакан молока.",
    "collocations": [
      "milk in context",
      "use milk"
    ]
  },
  "MINT": {
    "tr": "Мята / Мятный",
    "def": "Ароматная освежающая зеленая трава.",
    "ph": "[mɪnt]",
    "ex": "Fresh mint — Свежая мята.",
    "collocations": [
      "mint in context",
      "use mint"
    ]
  },
  "MIRACLE": {
    "tr": "Чудо",
    "def": "Необычайное явление, поражающее воображение.",
    "ph": "[ˈmɪrəkl]",
    "ex": "Real miracle — Настоящее чудо.",
    "collocations": [
      "miracle in context",
      "use miracle"
    ]
  },
  "MIRROR": {
    "tr": "Зеркало",
    "def": "Гладкая отражающая поверхность из стекла.",
    "ph": "[ˈmɪrə]",
    "ex": "Look in mirror — Смотреть в зеркало.",
    "collocations": [
      "mirror in context",
      "use mirror"
    ]
  },
  "MOMENTUM": {
    "tr": "Импульс / Движущая сила",
    "def": "Количество движения или ускорение процесса.",
    "ph": "[məˈmentəm]",
    "ex": "Gain momentum — Набирать обороты.",
    "collocations": [
      "momentum in context",
      "use momentum"
    ]
  },
  "MONARCH": {
    "tr": "Монарх / Государь",
    "def": "Единоличный правитель страны: царь или король.",
    "ph": "[ˈmɒnək]",
    "ex": "Reigning monarch — Правящий монарх.",
    "collocations": [
      "monarch in context",
      "use monarch"
    ]
  },
  "MONEY": {
    "tr": "Деньги",
    "def": "Монеты и банкноты как средство оплаты покупок.",
    "ph": "[ˈmʌni]",
    "ex": "Earn money — Зарабатывать деньги.",
    "collocations": [
      "earn money",
      "save money",
      "spend money"
    ]
  },
  "MONUMENT": {
    "tr": "Памятник / Монумент",
    "def": "Скульптурное мемориальное сооружение в честь события.",
    "ph": "[ˈmɒnjumənt]",
    "ex": "Historic monument — Исторический памятник.",
    "collocations": [
      "monument in context",
      "use monument"
    ]
  },
  "MORNING": {
    "tr": "Утро",
    "def": "Первая светлая пора суток после рассвета.",
    "ph": "[ˈmɔːnɪŋ]",
    "ex": "Good morning — Доброе утро.",
    "collocations": [
      "good morning",
      "early morning",
      "morning coffee"
    ]
  },
  "MOSS": {
    "tr": "Мох",
    "def": "Зеленый пушистый растительный ковер на деревьях.",
    "ph": "[mɒs]",
    "ex": "Forest moss — Лесной мох.",
    "collocations": [
      "moss in context",
      "use moss"
    ]
  },
  "MOTHER": {
    "tr": "Мама / Мать",
    "def": "Самый родной человек, давший жизнь ребенку.",
    "ph": "[ˈmʌðə]",
    "ex": "Dear mother — Дорогая мама.",
    "collocations": [
      "mother in context",
      "use mother"
    ]
  },
  "MOTIF": {
    "tr": "Мотив / Лейтмотив",
    "def": "Повторяющаяся главная тема в музыке или узоре.",
    "ph": "[məʊˈtiːf]",
    "ex": "Floral motif — Цветочный мотив.",
    "collocations": [
      "motif in context",
      "use motif"
    ]
  },
  "MOUNTAIN": {
    "tr": "Гора",
    "def": "Величественная скалистая вершина, взмывающая ввысь.",
    "ph": "[ˈmaʊntən]",
    "ex": "Snowy mountain — Заснеженная гора.",
    "collocations": [
      "high mountain",
      "climb a mountain",
      "mountain view"
    ]
  },
  "MUSIC": {
    "tr": "Музыка",
    "def": "Прекрасное искусство гармонии звуков и мелодий.",
    "ph": "[ˈmjuːzɪk]",
    "ex": "Play music — Играть музыку.",
    "collocations": [
      "listen to music",
      "classical music",
      "live music"
    ]
  },
  "NAME": {
    "tr": "Имя / Название",
    "def": "Личное слово-наименование человека или города.",
    "ph": "[neɪm]",
    "ex": "My name is — Меня зовут",
    "collocations": [
      "name in context",
      "use name"
    ]
  },
  "NEBULA": {
    "tr": "Туманность",
    "def": "Космическое сияющее облако из пыли и газа.",
    "ph": "[ˈnebjələ]",
    "ex": "Space nebula — Космическая туманность.",
    "collocations": [
      "nebula in context",
      "use nebula"
    ]
  },
  "NET": {
    "tr": "Сеть / Сетка",
    "def": "Плетеная сеть для ловли рыбы или спортивная сетка.",
    "ph": "[net]",
    "ex": "Fishing net — Рыболовная сеть.",
    "collocations": [
      "net in context",
      "use net"
    ]
  },
  "NEWSPAPER": {
    "tr": "Газета",
    "def": "Периодическое бумажное издание со свежими новостями.",
    "ph": "[ˈnjuːzpeɪpə]",
    "ex": "Daily newspaper — Ежедневная газета.",
    "collocations": [
      "newspaper in context",
      "use newspaper"
    ]
  },
  "NIGHT": {
    "tr": "Ночь",
    "def": "Темное время суток под сиянием звезд и луны.",
    "ph": "[naɪt]",
    "ex": "Dark night — Темная ночь.",
    "collocations": [
      "good night",
      "late at night",
      "dark night"
    ]
  },
  "NIL": {
    "tr": "Ноль / Ничто",
    "def": "Полное отсутствие очков в спорте или пустота.",
    "ph": "[nɪl]",
    "ex": "Score is nil — Счет нулевой.",
    "collocations": [
      "nil in context",
      "use nil"
    ]
  },
  "NIX": {
    "tr": "Отменить / Ничто",
    "def": "Забраковать проект или отказать в предложении.",
    "ph": "[nɪks]",
    "ex": "Nix the deal — Расторгнуть сделку.",
    "collocations": [
      "nix in context",
      "use nix"
    ]
  },
  "NOBLE": {
    "tr": "Благородный / Знатный",
    "def": "Человек с чистой душой и высокими принципами.",
    "ph": "[ˈnəʊbl]",
    "ex": "Noble deed — Благородный поступок.",
    "collocations": [
      "noble in context",
      "use noble"
    ]
  },
  "NOTEBOOK": {
    "tr": "Блокнот / Тетрадь",
    "def": "Книжка с чистыми листами для заметок и рисунков.",
    "ph": "[ˈnəʊtbʊk]",
    "ex": "Spiral notebook — Тетрадь на спирали.",
    "collocations": [
      "notebook in context",
      "use notebook"
    ]
  },
  "OATH": {
    "tr": "Клятва / Присяга",
    "def": "Священное нерушимое обещание чести.",
    "ph": "[əʊθ]",
    "ex": "Take an oath — Дать клятву.",
    "collocations": [
      "oath in context",
      "use oath"
    ]
  },
  "OBLIVION": {
    "tr": "Забвение",
    "def": "Полная утрата памяти или состояние небытия.",
    "ph": "[əˈblɪviən]",
    "ex": "Sink into oblivion — Кануть в лету.",
    "collocations": [
      "oblivion in context",
      "use oblivion"
    ]
  },
  "OCEAN": {
    "tr": "Океан",
    "def": "Грандиозный водный простор планеты Земля.",
    "ph": "[ˈəʊʃn]",
    "ex": "Deep ocean — Глубокий океан.",
    "collocations": [
      "deep ocean",
      "pacific ocean",
      "ocean view"
    ]
  },
  "OCTAVE": {
    "tr": "Октава",
    "def": "Музыкальный гармоничный интервал в восемь ступеней.",
    "ph": "[ˈɒktɪv]",
    "ex": "High octave — Высокая октава.",
    "collocations": [
      "octave in context",
      "use octave"
    ]
  },
  "OIL": {
    "tr": "Масло / Нефть",
    "def": "Растительное жидкое масло или ценное ископаемое.",
    "ph": "[ɔɪl]",
    "ex": "Olive oil — Оливковое масло.",
    "collocations": [
      "oil in context",
      "use oil"
    ]
  },
  "OMEN": {
    "tr": "Знамение / Примета",
    "def": "Знак судьбы, предвещающий радость или перемены.",
    "ph": "[ˈəʊmən]",
    "ex": "Good omen — Добрый знак.",
    "collocations": [
      "omen in context",
      "use omen"
    ]
  },
  "ORANGE": {
    "tr": "Апельсин / Оранжевый",
    "def": "Сочный сладкий цитрус ярко-оранжевого цвета.",
    "ph": "[ˈɒrɪndʒ]",
    "ex": "Sweet orange — Сладкий апельсин.",
    "collocations": [
      "orange in context",
      "use orange"
    ]
  },
  "ORE": {
    "tr": "Руда",
    "def": "Горная порода, содержащая ценные металлы.",
    "ph": "[ɔː]",
    "ex": "Iron ore — Железная руда.",
    "collocations": [
      "ore in context",
      "use ore"
    ]
  },
  "PACKAGE": {
    "tr": "Посылка / Пакет",
    "def": "Упакованный сверток с подарком или товаром.",
    "ph": "[ˈpækɪdʒ]",
    "ex": "Delivery package — Посылка из доставки.",
    "collocations": [
      "package in context",
      "use package"
    ]
  },
  "PALACE": {
    "tr": "Дворец",
    "def": "Роскошное царственное здание правителей.",
    "ph": "[ˈpæləs]",
    "ex": "Royal palace — Королевский дворец.",
    "collocations": [
      "palace in context",
      "use palace"
    ]
  },
  "PAPER": {
    "tr": "Бумага",
    "def": "Тонкий лист для письма, чтения и рисования.",
    "ph": "[ˈpeɪpə]",
    "ex": "Sheet of paper — Лист бумаги.",
    "collocations": [
      "paper in context",
      "use paper"
    ]
  },
  "PARADIGM": {
    "tr": "Парадигма / Образец",
    "def": "Система фундаментальных взглядов или модель мышления.",
    "ph": "[ˈpærədaɪm]",
    "ex": "New paradigm — Новая парадигма.",
    "collocations": [
      "paradigm in context",
      "use paradigm"
    ]
  },
  "PARADOX": {
    "tr": "Парадокс",
    "def": "Утверждение, противоречащее привычной логике.",
    "ph": "[ˈpærədɒks]",
    "ex": "Logical paradox — Логический парадокс.",
    "collocations": [
      "paradox in context",
      "use paradox"
    ]
  },
  "PARK": {
    "tr": "Парк / Сквер",
    "def": "Зеленый тенистый уголок природы для прогулок.",
    "ph": "[pɑːk]",
    "ex": "City park — Городской парк.",
    "collocations": [
      "park in context",
      "use park"
    ]
  },
  "PARTY": {
    "tr": "Вечеринка / Праздник",
    "def": "Веселое собрание друзей с музыкой и угощениями.",
    "ph": "[ˈpɑːti]",
    "ex": "Birthday party — Вечеринка ко дню рождения.",
    "collocations": [
      "birthday party",
      "dinner party",
      "join the party"
    ]
  },
  "PASSENGER": {
    "tr": "Пассажир",
    "def": "Человек, совершающий поездку на поезде или авто.",
    "ph": "[ˈpæsɪndʒə]",
    "ex": "Train passenger — Пассажир поезда.",
    "collocations": [
      "passenger in context",
      "use passenger"
    ]
  },
  "PEAK": {
    "tr": "Пик / Вершина",
    "def": "Наивысшая острая точка горы на фоне неба.",
    "ph": "[piːk]",
    "ex": "Mountain peak — Горная вершина.",
    "collocations": [
      "peak in context",
      "use peak"
    ]
  },
  "PEN": {
    "tr": "Ручка",
    "def": "Инструмент с чернилами для написания писем.",
    "ph": "[pen]",
    "ex": "Fountain pen — Перьевая ручка.",
    "collocations": [
      "pen in context",
      "use pen"
    ]
  },
  "PENCIL": {
    "tr": "Карандаш",
    "def": "Деревянная палочка с грифелем для рисования.",
    "ph": "[ˈpensl]",
    "ex": "Color pencil — Цветной карандаш.",
    "collocations": [
      "pencil in context",
      "use pencil"
    ]
  },
  "PHOENIX": {
    "tr": "Феникс",
    "def": "Легендарная птица, возрождающаяся из пепла.",
    "ph": "[ˈfiːnɪks]",
    "ex": "Rise like a phoenix — Возродиться как феникс.",
    "collocations": [
      "phoenix in context",
      "use phoenix"
    ]
  },
  "PICTURE": {
    "tr": "Картина / Фотография",
    "def": "Художественное изображение на холсте или снимке.",
    "ph": "[ˈpɪktʃə]",
    "ex": "Oil picture — Картина маслом.",
    "collocations": [
      "picture in context",
      "use picture"
    ]
  },
  "PITH": {
    "tr": "Сердцевина / Суть",
    "def": "Самая важная глубокая основа и зерно мысли.",
    "ph": "[pɪθ]",
    "ex": "Pith of problem — Сердцевина проблемы.",
    "collocations": [
      "pith in context",
      "use pith"
    ]
  },
  "PLANET": {
    "tr": "Планета",
    "def": "Космическое сферическое тело на орбите звезды.",
    "ph": "[ˈplænɪt]",
    "ex": "Blue planet — Голубая планета.",
    "collocations": [
      "planet in context",
      "use planet"
    ]
  },
  "PLANT": {
    "tr": "Растение / Сажать",
    "def": "Зеленая флора, цветущая на клумбе или в саду.",
    "ph": "[plɑːnt]",
    "ex": "Water a plant — Полить растение.",
    "collocations": [
      "plant in context",
      "use plant"
    ]
  },
  "PLEX": {
    "tr": "Комплекс / Сплетение",
    "def": "Сложная разветвленная сеть сосудов или узлов.",
    "ph": "[pleks]",
    "ex": "Solar plex — Солнечное сплетение.",
    "collocations": [
      "plex in context",
      "use plex"
    ]
  },
  "PLY": {
    "tr": "Слой / Гнуть / Курсировать",
    "def": "Слой материала или движение корабля по маршруту.",
    "ph": "[plaɪ]",
    "ex": "Two ply — Двухслойный.",
    "collocations": [
      "ply in context",
      "use ply"
    ]
  },
  "POCKET": {
    "tr": "Карман",
    "def": "Вшитый мешочек в одежде для мелочей и телефона.",
    "ph": "[ˈpɒkɪt]",
    "ex": "Coat pocket — Карман пальто.",
    "collocations": [
      "pocket in context",
      "use pocket"
    ]
  },
  "POLLUTION": {
    "tr": "Загрязнение природы",
    "def": "Вредные выбросы в окружающую среду и воздух.",
    "ph": "[pəˈluːʃn]",
    "ex": "Air pollution — Загрязнение воздуха.",
    "collocations": [
      "pollution in context",
      "use pollution"
    ]
  },
  "PRISM": {
    "tr": "Призма",
    "def": "Оптический многогранник, рождающий радугу из света.",
    "ph": "[ˈprɪzəm]",
    "ex": "Glass prism — Стеклянная призма.",
    "collocations": [
      "prism in context",
      "use prism"
    ]
  },
  "PROFESSOR": {
    "tr": "Профессор",
    "def": "Высокое ученое звание преподавателя университета.",
    "ph": "[prəˈfesə]",
    "ex": "University professor — Профессор университета.",
    "collocations": [
      "professor in context",
      "use professor"
    ]
  },
  "PROXIMITY": {
    "tr": "Близость / Соседство",
    "def": "Непосредственная близость расстояния или времени.",
    "ph": "[prɒkˈsɪməti]",
    "ex": "Close proximity — Непосредственная близость.",
    "collocations": [
      "proximity in context",
      "use proximity"
    ]
  },
  "PUDDLE": {
    "tr": "Лужа",
    "def": "Маленькое зеркало дождевой воды на асфальте.",
    "ph": "[ˈpʌdl]",
    "ex": "Rain puddle — Дождевая лужа.",
    "collocations": [
      "puddle in context",
      "use puddle"
    ]
  },
  "PULSE": {
    "tr": "Пульс / Ритм",
    "def": "Мерный ритмичный стук сердца в жилах.",
    "ph": "[pʌls]",
    "ex": "Strong pulse — Четкий пульс.",
    "collocations": [
      "pulse in context",
      "use pulse"
    ]
  },
  "PUZZLE": {
    "tr": "Головоломка / Пазл",
    "def": "Увлекательная словесная или мозаичная игра.",
    "ph": "[ˈpʌzl]",
    "ex": "Solve a puzzle — Разгадать головоломку.",
    "collocations": [
      "puzzle in context",
      "use puzzle"
    ]
  },
  "PYRAMID": {
    "tr": "Пирамида",
    "def": "Величественная древняя гробница в Египте.",
    "ph": "[ˈpɪrəmɪd]",
    "ex": "Great Pyramid — Великая пирамида.",
    "collocations": [
      "pyramid in context",
      "use pyramid"
    ]
  },
  "QUALM": {
    "tr": "Сомнение / Смущение",
    "def": "Внезапный укол совести или колебание души.",
    "ph": "[kwɑːm]",
    "ex": "No qualms — Ни малейших сомнений.",
    "collocations": [
      "qualm in context",
      "use qualm"
    ]
  },
  "QUESTION": {
    "tr": "Вопрос",
    "def": "Обращение с просьбой дать ответ или разъяснение.",
    "ph": "[ˈkwestʃən]",
    "ex": "Good question — Хороший вопрос.",
    "collocations": [
      "ask a question",
      "answer the question",
      "good question"
    ]
  },
  "RABBIT": {
    "tr": "Кролик",
    "def": "Пушистый ушастый зверек с мягкой шерсткой.",
    "ph": "[ˈræbɪt]",
    "ex": "White rabbit — Белый кролик.",
    "collocations": [
      "rabbit in context",
      "use rabbit"
    ]
  },
  "RADAR": {
    "tr": "Радар / Локатор",
    "def": "Прибор обнаружения самолетов и кораблей радиоволнами.",
    "ph": "[ˈreɪdɑː]",
    "ex": "Marine radar — Морской радар.",
    "collocations": [
      "radar in context",
      "use radar"
    ]
  },
  "RAIN": {
    "tr": "Дождь",
    "def": "Благодатные водяные капли, льющиеся из туч.",
    "ph": "[reɪn]",
    "ex": "Summer rain — Летний дождь.",
    "collocations": [
      "heavy rain",
      "in the rain",
      "rain shower"
    ]
  },
  "RAINBOW": {
    "tr": "Радуга",
    "def": "Семицветная сияющая дуга в небе после грозы.",
    "ph": "[ˈreɪnbəʊ]",
    "ex": "Bright rainbow — Яркая радуга.",
    "collocations": [
      "rainbow in context",
      "use rainbow"
    ]
  },
  "RAW": {
    "tr": "Сырой / Необработанный",
    "def": "Не подвергшийся варке или первичный материал.",
    "ph": "[rɔː]",
    "ex": "Raw material — Сырье.",
    "collocations": [
      "raw in context",
      "use raw"
    ]
  },
  "RAY": {
    "tr": "Луч солнца",
    "def": "Тонкая полоса света, пробивающаяся сквозь тучи.",
    "ph": "[reɪ]",
    "ex": "Sun ray — Солнечный луч.",
    "collocations": [
      "ray in context",
      "use ray"
    ]
  },
  "RED": {
    "tr": "Красный",
    "def": "Алый цвет спелой вишни, роз и рассвета.",
    "ph": "[red]",
    "ex": "Red apple — Красное яблоко.",
    "collocations": [
      "red in context",
      "use red"
    ]
  },
  "RELIC": {
    "tr": "Реликвия / Святыня",
    "def": "Драгоценный памятник старины, дошедший до нас.",
    "ph": "[ˈrelɪk]",
    "ex": "Ancient relic — Древняя реликвия.",
    "collocations": [
      "relic in context",
      "use relic"
    ]
  },
  "RESOURCE": {
    "tr": "Ресурс / Источник",
    "def": "Запас полезных средств или энергии для дел.",
    "ph": "[rɪˈsɔːs]",
    "ex": "Valuable resource — Ценный ресурс.",
    "collocations": [
      "resource in context",
      "use resource"
    ]
  },
  "RESOURCES": {
    "tr": "Ресурсы / Богатства",
    "def": "Совокупность запасов природы или капитала.",
    "ph": "[rɪˈsɔːsɪz]",
    "ex": "Natural resources — Природные ресурсы.",
    "collocations": [
      "resources in context",
      "use resources"
    ]
  },
  "RIB": {
    "tr": "Ребро",
    "def": "Изогнутая кость грудной клетки человека.",
    "ph": "[rɪb]",
    "ex": "Chest rib — Ребро груди.",
    "collocations": [
      "rib in context",
      "use rib"
    ]
  },
  "RIGOR": {
    "tr": "Строгость / Тщательность",
    "def": "Высокая точность и научная дисциплина ума.",
    "ph": "[ˈrɪɡə]",
    "ex": "Intellectual rigor — Интеллектуальная строгость.",
    "collocations": [
      "rigor in context",
      "use rigor"
    ]
  },
  "RIM": {
    "tr": "Обод / Край",
    "def": "Внешняя круглая кромка колеса или очков.",
    "ph": "[rɪm]",
    "ex": "Glasses rim — Оправа очков.",
    "collocations": [
      "rim in context",
      "use rim"
    ]
  },
  "RING": {
    "tr": "Кольцо / Звон",
    "def": "Круглое украшение на палец или звук колокола.",
    "ph": "[rɪŋ]",
    "ex": "Gold ring — Золотое кольцо.",
    "collocations": [
      "ring in context",
      "use ring"
    ]
  },
  "RIVER": {
    "tr": "Река",
    "def": "Широкий поток пресной воды, бегущий к морю.",
    "ph": "[ˈrɪvə]",
    "ex": "Blue river — Синяя река.",
    "collocations": [
      "river bank",
      "cross the river",
      "wide river"
    ]
  },
  "ROAD": {
    "tr": "Дорога / Трасса",
    "def": "Путь сообщения для автомобилей и путников.",
    "ph": "[rəʊd]",
    "ex": "Country road — Проселочная дорога.",
    "collocations": [
      "on the road",
      "road to success",
      "country road"
    ]
  },
  "ROBOT": {
    "tr": "Робот",
    "def": "Автоматическое механическое устройство с программой.",
    "ph": "[ˈrəʊbɒt]",
    "ex": "Smart robot — Умный робот.",
    "collocations": [
      "robot in context",
      "use robot"
    ]
  },
  "ROCKET": {
    "tr": "Ракета",
    "def": "Космический аппарат, уносящийся к далеким звездам.",
    "ph": "[ˈrɒkɪt]",
    "ex": "Space rocket — Космическая ракета.",
    "collocations": [
      "rocket in context",
      "use rocket"
    ]
  },
  "ROD": {
    "tr": "Стержень / Удочка",
    "def": "Длинная тонкая прямая палка или прут.",
    "ph": "[rɒd]",
    "ex": "Fishing rod — Рыболовная удочка.",
    "collocations": [
      "rod in context",
      "use rod"
    ]
  },
  "ROOM": {
    "tr": "Комната",
    "def": "Уютное жилое пространство в доме со стенами.",
    "ph": "[ruːm]",
    "ex": "Living room — Гостиная.",
    "collocations": [
      "room in context",
      "use room"
    ]
  },
  "ROSE": {
    "tr": "Роза",
    "def": "Прекрасный цветок с волшебным ароматом и шипами.",
    "ph": "[rəʊz]",
    "ex": "Red rose — Красная роза.",
    "collocations": [
      "rose in context",
      "use rose"
    ]
  },
  "ROW": {
    "tr": "Ряд / Грести",
    "def": "Прямая линия стульев или взмах веслами в лодке.",
    "ph": "[rəʊ]",
    "ex": "First row — Первый ряд.",
    "collocations": [
      "row in context",
      "use row"
    ]
  },
  "RUN": {
    "tr": "Бежать / Бег",
    "def": "Быстрое движение на ногах ради здоровья и спорта.",
    "ph": "[rʌn]",
    "ex": "Morning run — Утренняя пробежка.",
    "collocations": [
      "run in context",
      "use run"
    ]
  },
  "RUNE": {
    "tr": "Руна / Древний знак",
    "def": "Древний угловатый письменный знак или буква алфавита.",
    "ph": "[ruːn]",
    "ex": "Ancient rune — Древняя руническая буква.",
    "collocations": [
      "carve a rune",
      "read runes"
    ]
  },
  "RUSH": {
    "tr": "Спешка / Порыв",
    "def": "Стремительное движение вперед без промедления.",
    "ph": "[rʌʃ]",
    "ex": "Rush hour — Час пик.",
    "collocations": [
      "rush in context",
      "use rush"
    ]
  },
  "SAFARI": {
    "tr": "Сафари / Путешествие",
    "def": "Экскурсия по африканской саванне среди диких львов.",
    "ph": "[səˈfɑːri]",
    "ex": "Go on safari — Отправиться на сафари.",
    "collocations": [
      "safari in context",
      "use safari"
    ]
  },
  "SAGE": {
    "tr": "Мудрец / Шалфей",
    "def": "Человек высшей жизненной мудрости или трава.",
    "ph": "[seɪdʒ]",
    "ex": "Wise sage — Мудрый старец.",
    "collocations": [
      "sage in context",
      "use sage"
    ]
  },
  "SANCTUARY": {
    "tr": "Заповедник / Убежище",
    "def": "Охраняемый природный рай для птиц и зверей.",
    "ph": "[ˈsæŋktʃuəri]",
    "ex": "Nature sanctuary — Природный заповедник.",
    "collocations": [
      "sanctuary in context",
      "use sanctuary"
    ]
  },
  "SAND": {
    "tr": "Песок",
    "def": "Золотистые россыпи мелких крупинок на пляже.",
    "ph": "[sænd]",
    "ex": "Warm sand — Теплый песок.",
    "collocations": [
      "sand in context",
      "use sand"
    ]
  },
  "SANDWICH": {
    "tr": "Бутерброд / Сэндвич",
    "def": "Два ломтика хлеба с сыром, зеленью и ветчиной.",
    "ph": "[ˈsænwɪtʃ]",
    "ex": "Tasty sandwich — Вкусный сэндвич.",
    "collocations": [
      "sandwich in context",
      "use sandwich"
    ]
  },
  "SCENERY": {
    "tr": "Пейзаж / Декорации",
    "def": "Красивый живописный вид дикой природы гор и рек.",
    "ph": "[ˈsiːnəri]",
    "ex": "Stunning scenery — Потрясающий пейзаж.",
    "collocations": [
      "scenery in context",
      "use scenery"
    ]
  },
  "SCHISM": {
    "tr": "Раскол / Разногласие",
    "def": "Разделение группы на два непримиримых лагеря.",
    "ph": "[ˈsɪzəm]",
    "ex": "Great schism — Великий раскол.",
    "collocations": [
      "schism in context",
      "use schism"
    ]
  },
  "SCHOOL": {
    "tr": "Школа",
    "def": "Храм знаний и первой дружбы для детей.",
    "ph": "[skuːl]",
    "ex": "Go to school — Учиться в школе.",
    "collocations": [
      "go to school",
      "at school",
      "high school"
    ]
  },
  "SEA": {
    "tr": "Море",
    "def": "Бескрайняя синяя соленая водная гладь с волнами.",
    "ph": "[siː]",
    "ex": "Calm sea — Спокойное море.",
    "collocations": [
      "by the sea",
      "calm sea",
      "deep blue sea"
    ]
  },
  "SECTOR": {
    "tr": "Сектор / Отрасль",
    "def": "Выделенная часть круга, экономики или науки.",
    "ph": "[ˈsektə]",
    "ex": "Private sector — Частный сектор.",
    "collocations": [
      "sector in context",
      "use sector"
    ]
  },
  "SERVE": {
    "tr": "Служить / Подавать",
    "def": "Приносить пользу обществу или подавать мяч в игре.",
    "ph": "[sɜːv]",
    "ex": "Serve people — Служить людям.",
    "collocations": [
      "serve in context",
      "use serve"
    ]
  },
  "SHARD": {
    "tr": "Осколок / Черепок",
    "def": "Острый блестящий фрагмент разбитого стекла.",
    "ph": "[ʃɑːd]",
    "ex": "Glass shard — Осколок стекла.",
    "collocations": [
      "shard in context",
      "use shard"
    ]
  },
  "SHIELD": {
    "tr": "Щит / Защита",
    "def": "Оборонительное оружие рыцаря от ударов меча.",
    "ph": "[ʃiːld]",
    "ex": "Knight's shield — Рыцарский щит.",
    "collocations": [
      "shield in context",
      "use shield"
    ]
  },
  "SHIP": {
    "tr": "Корабль / Судно",
    "def": "Большой морской лайнер, бороздящий волны океанов.",
    "ph": "[ʃɪp]",
    "ex": "Sailing ship — Парусный корабль.",
    "collocations": [
      "ship in context",
      "use ship"
    ]
  },
  "SISTER": {
    "tr": "Сестра",
    "def": "Дочь тех же родителей, родная близкая душа.",
    "ph": "[ˈsɪstə]",
    "ex": "Beloved sister — Любимая сестра.",
    "collocations": [
      "sister in context",
      "use sister"
    ]
  },
  "SKY": {
    "tr": "Небо",
    "def": "Лазурный купол над головой с белыми облаками.",
    "ph": "[skaɪ]",
    "ex": "Blue sky — Синее небо.",
    "collocations": [
      "sky in context",
      "use sky"
    ]
  },
  "SLEEP": {
    "tr": "Сон / Спать",
    "def": "Сладкий целительный отдых тела и разума ночью.",
    "ph": "[sliːp]",
    "ex": "Deep sleep — Глубокий сон.",
    "collocations": [
      "go to sleep",
      "deep sleep",
      "lack of sleep"
    ]
  },
  "SLOTH": {
    "tr": "Ленивец / Лень",
    "def": "Медлительное забавное животное тропических лесов.",
    "ph": "[sləʊθ]",
    "ex": "Cute sloth — Милый ленивец.",
    "collocations": [
      "sloth in context",
      "use sloth"
    ]
  },
  "SNOW": {
    "tr": "Снег",
    "def": "Пушистые белые хлопья, укрывающие землю зимой.",
    "ph": "[snəʊ]",
    "ex": "White snow — Белый снег.",
    "collocations": [
      "heavy snow",
      "snow white",
      "melt snow"
    ]
  },
  "SOCCER": {
    "tr": "Футбол",
    "def": "Американское название европейской игры в мяч.",
    "ph": "[ˈsɒkə]",
    "ex": "Play soccer — Играть в футбол.",
    "collocations": [
      "soccer in context",
      "use soccer"
    ]
  },
  "SOLVENT": {
    "tr": "Растворитель / Платежеспособный",
    "def": "Вещество, растворяющее краски, или надежный партнер.",
    "ph": "[ˈsɒlvənt]",
    "ex": "Universal solvent — Универсальный растворитель.",
    "collocations": [
      "solvent in context",
      "use solvent"
    ]
  },
  "SPARK": {
    "tr": "Искра / Вспышка",
    "def": "Яркий горящий огонек или зарождение вдохновения.",
    "ph": "[spɑːk]",
    "ex": "Spark of idea — Искра идеи.",
    "collocations": [
      "spark in context",
      "use spark"
    ]
  },
  "SPEAR": {
    "tr": "Копье",
    "def": "Древковое колющее оружие с острым наконечником.",
    "ph": "[spɪə]",
    "ex": "Steel spear — Стальное копье.",
    "collocations": [
      "spear in context",
      "use spear"
    ]
  },
  "SPECTRUM": {
    "tr": "Спектр / Палитра",
    "def": "Цветная радужная полоса преломленного света.",
    "ph": "[ˈspektrəm]",
    "ex": "Color spectrum — Цветовой спектр.",
    "collocations": [
      "spectrum in context",
      "use spectrum"
    ]
  },
  "SPECTRUMS": {
    "tr": "Спектры",
    "def": "Множество частот, излучений или оттенков мнений.",
    "ph": "[ˈspektrəmz]",
    "ex": "Wide spectrums — Широкие спектры.",
    "collocations": [
      "spectrums in context",
      "use spectrums"
    ]
  },
  "SPRING": {
    "tr": "Весна / Родник",
    "def": "Пора расцвета природы или чистый ключ в лесу.",
    "ph": "[sprɪŋ]",
    "ex": "Spring water — Родниковая вода.",
    "collocations": [
      "spring water",
      "in the spring",
      "spring breeze"
    ]
  },
  "STAMP": {
    "tr": "Марка / Печать",
    "def": "Почтовая марка на конверте или гербовая печать.",
    "ph": "[stæmp]",
    "ex": "Post stamp — Почтовая марка.",
    "collocations": [
      "stamp in context",
      "use stamp"
    ]
  },
  "STAR": {
    "tr": "Звезда",
    "def": "Сверкающее небесное светило в ночном куполе.",
    "ph": "[stɑː]",
    "ex": "Guiding star — Путеводная звезда.",
    "collocations": [
      "star in context",
      "use star"
    ]
  },
  "STATION": {
    "tr": "Станция / Вокзал",
    "def": "Пункт остановки поездов для посадки пассажиров.",
    "ph": "[ˈsteɪʃn]",
    "ex": "Train station — Железнодорожная станция.",
    "collocations": [
      "train station",
      "bus station",
      "police station"
    ]
  },
  "STATUE": {
    "tr": "Статуя / Монумент",
    "def": "Величественная скульптура из бронзы или мрамора.",
    "ph": "[ˈstætʃuː]",
    "ex": "Marble statue — Мраморная статуя.",
    "collocations": [
      "statue in context",
      "use statue"
    ]
  },
  "STEAM": {
    "tr": "Пар",
    "def": "Горячий белый пар над чашкой чая или в бане.",
    "ph": "[stiːm]",
    "ex": "Hot steam — Горячий пар.",
    "collocations": [
      "steam in context",
      "use steam"
    ]
  },
  "STRATEGY": {
    "tr": "Стратегия / План",
    "def": "Генеральный план действий для верной победы.",
    "ph": "[ˈstrætədʒi]",
    "ex": "Win strategy — Победная стратегия.",
    "collocations": [
      "strategy in context",
      "use strategy"
    ]
  },
  "STREET": {
    "tr": "Улица",
    "def": "Городская дорога с тротуарами, домами и фонарями.",
    "ph": "[striːt]",
    "ex": "Quiet street — Тихая улица.",
    "collocations": [
      "cross the street",
      "quiet street",
      "main street"
    ]
  },
  "STRENGTH": {
    "tr": "Сила / Мощь",
    "def": "Физическая мощь мышц или стойкость характера.",
    "ph": "[streŋθ]",
    "ex": "Inner strength — Внутренняя сила.",
    "collocations": [
      "strength in context",
      "use strength"
    ]
  },
  "STRUCTURE": {
    "tr": "Структура / Строение",
    "def": "Четкая организация и взаимное расположение частей.",
    "ph": "[ˈstrʌktʃə]",
    "ex": "Clear structure — Четкая структура.",
    "collocations": [
      "structure in context",
      "use structure"
    ]
  },
  "STUDENT": {
    "tr": "Студент / Ученик",
    "def": "Человек, постигающий науки в институте или школе.",
    "ph": "[ˈstjuːdnt]",
    "ex": "Smart student — Умный студент.",
    "collocations": [
      "student in context",
      "use student"
    ]
  },
  "SUBLIME": {
    "tr": "Возвышенный / Величественный",
    "def": "Вызывающий благоговение своей высшей красотой.",
    "ph": "[səˈblaɪm]",
    "ex": "Sublime beauty — Возвышенная красота.",
    "collocations": [
      "sublime in context",
      "use sublime"
    ]
  },
  "SUBTLE": {
    "tr": "Тонкий / Едва уловимый",
    "def": "Изящный, деликатный, требующий чуткости оттенок.",
    "ph": "[ˈsʌtl]",
    "ex": "Subtle hint — Тонкий намек.",
    "collocations": [
      "subtle in context",
      "use subtle"
    ]
  },
  "SUM": {
    "tr": "Сумма / Итог",
    "def": "Результат сложения чисел или общее количество.",
    "ph": "[sʌm]",
    "ex": "Total sum — Общая сумма.",
    "collocations": [
      "sum in context",
      "use sum"
    ]
  },
  "SUMMER": {
    "tr": "Лето",
    "def": "Теплая золотая пора солнца, каникул и цветов.",
    "ph": "[ˈsʌmə]",
    "ex": "Hot summer — Жаркое лето.",
    "collocations": [
      "summer vacation",
      "hot summer",
      "summer time"
    ]
  },
  "SUN": {
    "tr": "Солнце",
    "def": "Золотое светило, согревающее нашу планету жизнью.",
    "ph": "[sʌn]",
    "ex": "Warm sun — Теплое солнце.",
    "collocations": [
      "warm sun",
      "sun rise",
      "sun set"
    ]
  },
  "SURPRISE": {
    "tr": "Сюрприз / Удивление",
    "def": "Приятный неожиданный подарок или событие.",
    "ph": "[səˈpraɪz]",
    "ex": "Pleasant surprise — Приятный сюрприз.",
    "collocations": [
      "surprise in context",
      "use surprise"
    ]
  },
  "SWIMMING": {
    "tr": "Плавание",
    "def": "Движение в воде, прекрасный оздоровительный спорт.",
    "ph": "[ˈswɪmɪŋ]",
    "ex": "Go swimming — Идти плавать.",
    "collocations": [
      "swimming in context",
      "use swimming"
    ]
  },
  "SYNERGY": {
    "tr": "Синергия / Содружество",
    "def": "Умножение общего эффекта при совместной работе.",
    "ph": "[ˈsɪnədʒi]",
    "ex": "Team synergy — Синергия команды.",
    "collocations": [
      "synergy in context",
      "use synergy"
    ]
  },
  "TABLE": {
    "tr": "Стол",
    "def": "Удобная мебель на ножках для обедов и работы.",
    "ph": "[ˈteɪbl]",
    "ex": "Dining table — Обеденный стол.",
    "collocations": [
      "table in context",
      "use table"
    ]
  },
  "TAX": {
    "tr": "Налог / Сбор",
    "def": "Официальный платеж граждан в бюджет государства.",
    "ph": "[tæks]",
    "ex": "Income tax — Подоходный налог.",
    "collocations": [
      "tax in context",
      "use tax"
    ]
  },
  "TEA": {
    "tr": "Чай",
    "def": "Благородный горячий напиток из чайных листьев.",
    "ph": "[tiː]",
    "ex": "Green tea — Зеленый чай.",
    "collocations": [
      "tea in context",
      "use tea"
    ]
  },
  "TEACHER": {
    "tr": "Учитель / Наставник",
    "def": "Педагог, передающий бесценные знания детям.",
    "ph": "[ˈtiːtʃə]",
    "ex": "Good teacher — Хороший учитель.",
    "collocations": [
      "good teacher",
      "school teacher",
      "experienced teacher"
    ]
  },
  "TELEPHONE": {
    "tr": "Телефон",
    "def": "Аппарат для голосовой связи на любых расстояниях.",
    "ph": "[ˈtelɪfəʊn]",
    "ex": "Mobile telephone — Мобильный телефон.",
    "collocations": [
      "telephone in context",
      "use telephone"
    ]
  },
  "TENET": {
    "tr": "Догмат / Постулат",
    "def": "Незыблемый фундаментальный принцип учения.",
    "ph": "[ˈtenɪt]",
    "ex": "Core tenet — Ключевой постулат.",
    "collocations": [
      "tenet in context",
      "use tenet"
    ]
  },
  "TIDE": {
    "tr": "Прилив / Морская волна",
    "def": "Периодический подъем уровня океана под луной.",
    "ph": "[taɪd]",
    "ex": "High tide — Полный прилив.",
    "collocations": [
      "tide in context",
      "use tide"
    ]
  },
  "TIE": {
    "tr": "Галстук / Завязывать / Ничья",
    "def": "Элегантный аксессуар костюма или равный счет.",
    "ph": "[taɪ]",
    "ex": "Silk tie — Шелковый галстук.",
    "collocations": [
      "tie in context",
      "use tie"
    ]
  },
  "TIMBER": {
    "tr": "Древесина / Бревна",
    "def": "Строительный лесной массив из хвойных пород.",
    "ph": "[ˈtɪmbə]",
    "ex": "Pine timber — Сосновые бревна.",
    "collocations": [
      "timber in context",
      "use timber"
    ]
  },
  "TIME": {
    "tr": "Время",
    "def": "Великий непрерывный ход мгновений, часов и веков.",
    "ph": "[taɪm]",
    "ex": "Value time — Ценить время.",
    "collocations": [
      "have time",
      "spend time",
      "on time"
    ]
  },
  "TOY": {
    "tr": "Игрушка",
    "def": "Забавная яркая вещица для детских игр и радости.",
    "ph": "[tɔɪ]",
    "ex": "Favorite toy — Любимая игрушка.",
    "collocations": [
      "toy in context",
      "use toy"
    ]
  },
  "TRAIN": {
    "tr": "Поезд / Тренироваться",
    "def": "Железнодорожный состав, мчащийся по рельсам.",
    "ph": "[treɪn]",
    "ex": "Express train — Скоростной поезд.",
    "collocations": [
      "train in context",
      "use train"
    ]
  },
  "TRANSPORT": {
    "tr": "Транспорт",
    "def": "Сеть машин, автобусов и поездов для перевозки.",
    "ph": "[ˈtrænspɔːt]",
    "ex": "City transport — Городской транспорт.",
    "collocations": [
      "transport in context",
      "use transport"
    ]
  },
  "TREASURE": {
    "tr": "Сокровище / Клад",
    "def": "Драгоценный сундук с золотом или дорогая реликвия.",
    "ph": "[ˈtreʒə]",
    "ex": "Hidden treasure — Спрятанное сокровище.",
    "collocations": [
      "hidden treasure",
      "treasure hunt",
      "national treasure"
    ]
  },
  "TREE": {
    "tr": "Дерево",
    "def": "Вековое могучее зеленое растение с ветвями.",
    "ph": "[triː]",
    "ex": "Oak tree — Могучий дуб.",
    "collocations": [
      "tall tree",
      "plant a tree",
      "under the tree"
    ]
  },
  "TRIUMPH": {
    "tr": "Триумф / Победа",
    "def": "Блистательный успех и всенародное признание.",
    "ph": "[ˈtraɪʌmf]",
    "ex": "Great triumph — Великий триумф.",
    "collocations": [
      "triumph in context",
      "use triumph"
    ]
  },
  "TUNNEL": {
    "tr": "Тоннель",
    "def": "Подземный тоннель сквозь толщу скал для поездов.",
    "ph": "[ˈtʌnl]",
    "ex": "Mountain tunnel — Горный тоннель.",
    "collocations": [
      "tunnel in context",
      "use tunnel"
    ]
  },
  "UMBRELLA": {
    "tr": "Зонт",
    "def": "Купол на трости, защищающий от капель дождя.",
    "ph": "[ʌmˈbrelə]",
    "ex": "Rain umbrella — Зонт от дождя.",
    "collocations": [
      "umbrella in context",
      "use umbrella"
    ]
  },
  "UNIFORM": {
    "tr": "Униформа / Форма",
    "def": "Специальная форменная одежда одной профессии.",
    "ph": "[ˈjuːnɪfɔːm]",
    "ex": "School uniform — Школьная форма.",
    "collocations": [
      "uniform in context",
      "use uniform"
    ]
  },
  "UNIVERSE": {
    "tr": "Вселенная / Космос",
    "def": "Весь необъятный материальный мир со всеми галактиками.",
    "ph": "[ˈjuːnɪvɜːs]",
    "ex": "Vast universe — Необъятная Вселенная.",
    "collocations": [
      "universe in context",
      "use universe"
    ]
  },
  "URGE": {
    "tr": "Побуждение / Призывать",
    "def": "Искренний внутренний импульс к благому поступку.",
    "ph": "[ɜːdʒ]",
    "ex": "Strong urge — Сильное побуждение.",
    "collocations": [
      "urge in context",
      "use urge"
    ]
  },
  "URN": {
    "tr": "Урна / Ваза",
    "def": "Декоративный каменный сосуд античных мастеров.",
    "ph": "[ɜːn]",
    "ex": "Stone urn — Каменная ваза.",
    "collocations": [
      "urn in context",
      "use urn"
    ]
  },
  "VACATION": {
    "tr": "Отпуск / Отдых",
    "def": "Период законного отдыха от трудов и забот.",
    "ph": "[vəˈkeɪʃn]",
    "ex": "Summer vacation — Летний отпуск.",
    "collocations": [
      "vacation in context",
      "use vacation"
    ]
  },
  "VALE": {
    "tr": "Долина / Лощина",
    "def": "Поэтическое название тихой цветущей долины.",
    "ph": "[veɪl]",
    "ex": "Green vale — Зеленая долина.",
    "collocations": [
      "vale in context",
      "use vale"
    ]
  },
  "VALLEY": {
    "tr": "Долина",
    "def": "Живописная равнина между горными хребтами.",
    "ph": "[ˈvæli]",
    "ex": "River valley — Речная долина.",
    "collocations": [
      "valley in context",
      "use valley"
    ]
  },
  "VALOR": {
    "tr": "Доблесть / Мужество",
    "def": "Высокая отвага и благородная храбрость воина.",
    "ph": "[ˈvælə]",
    "ex": "Knightly valor — Рыцарская доблесть.",
    "collocations": [
      "valor in context",
      "use valor"
    ]
  },
  "VEGETABLE": {
    "tr": "Овощ",
    "def": "Полезный сочный дар огорода: морковь, томат, огурец.",
    "ph": "[ˈvedʒtəbl]",
    "ex": "Fresh vegetable — Свежий овощ.",
    "collocations": [
      "vegetable in context",
      "use vegetable"
    ]
  },
  "VEIN": {
    "tr": "Вена / Кровеносный сосуд / Жила",
    "def": "Кровеносный сосуд, несущий кровь к сердцу, или жилка листа.",
    "ph": "[veɪn]",
    "ex": "Leaf vein — Жилка на листе дерева.",
    "collocations": [
      "vein in context",
      "use vein"
    ]
  },
  "VELVET": {
    "tr": "Бархат / Бархатный",
    "def": "Благородная мягкая ткань с нежным шелковым ворсом.",
    "ph": "[ˈvelvɪt]",
    "ex": "Blue velvet — Синий бархат.",
    "collocations": [
      "velvet in context",
      "use velvet"
    ]
  },
  "VIBE": {
    "tr": "Вайб / Атмосфера",
    "def": "Особая душевная энергетика места или компании.",
    "ph": "[vaɪb]",
    "ex": "Good vibe — Отличная атмосфера.",
    "collocations": [
      "vibe in context",
      "use vibe"
    ]
  },
  "VIGOR": {
    "tr": "Энергия / Бодрость",
    "def": "Кипучая жизненная сила, здоровье и оптимизм.",
    "ph": "[ˈvɪɡə]",
    "ex": "Full of vigor — Полон бодрости и сил.",
    "collocations": [
      "vigor in context",
      "use vigor"
    ]
  },
  "VILLAGE": {
    "tr": "Деревня / Село",
    "def": "Уютное сельское поселение среди природы.",
    "ph": "[ˈvɪlɪdʒ]",
    "ex": "Quiet village — Тихая деревня.",
    "collocations": [
      "village in context",
      "use village"
    ]
  },
  "VINTAGE": {
    "tr": "Винтаж / Винтажный",
    "def": "Раритетный классический предмет с выдержкой времени.",
    "ph": "[ˈvɪntɪdʒ]",
    "ex": "Vintage style — Винтажный стиль.",
    "collocations": [
      "vintage in context",
      "use vintage"
    ]
  },
  "VOID": {
    "tr": "Пустота / Вакуум",
    "def": "Ничем не занятое пространство или недействительный.",
    "ph": "[vɔɪd]",
    "ex": "Dark void — Темная пустота.",
    "collocations": [
      "void in context",
      "use void"
    ]
  },
  "VOLUNTEER": {
    "tr": "Волонтер / Доброволец",
    "def": "Человек, бескорыстно помогающий людям от сердца.",
    "ph": "[ˌvɒlənˈtɪə]",
    "ex": "Peace volunteer — Волонтер мира.",
    "collocations": [
      "volunteer in context",
      "use volunteer"
    ]
  },
  "VORTEX": {
    "tr": "Вихрь / Водоворот",
    "def": "Стремительное вращение потока воды или воздуха.",
    "ph": "[ˈvɔːteks]",
    "ex": "Energy vortex — Вихрь энергии.",
    "collocations": [
      "vortex in context",
      "use vortex"
    ]
  },
  "VOW": {
    "tr": "Обет / Торжественная клятва",
    "def": "Священное обещание верности и чести.",
    "ph": "[vaʊ]",
    "ex": "Solemn vow — Торжественный обет.",
    "collocations": [
      "vow in context",
      "use vow"
    ]
  },
  "WALNUT": {
    "tr": "Грецкий орех",
    "def": "Дерево с питательными орехами в прочной скорлупе.",
    "ph": "[ˈwɔːlnʌt]",
    "ex": "Cracked walnut — Расколотый орех.",
    "collocations": [
      "walnut in context",
      "use walnut"
    ]
  },
  "WARRIOR": {
    "tr": "Воин / Боец",
    "def": "Храбрый защитник Родины, закаленный в битвах.",
    "ph": "[ˈwɒriə]",
    "ex": "Brave warrior — Храбрый воин.",
    "collocations": [
      "warrior in context",
      "use warrior"
    ]
  },
  "WATER": {
    "tr": "Вода",
    "def": "Чистейшая живительная влага, основа всего живого.",
    "ph": "[ˈwɔːtə]",
    "ex": "Pure water — Чистая вода.",
    "collocations": [
      "pure water",
      "drink water",
      "glass of water"
    ]
  },
  "WAVE": {
    "tr": "Волна",
    "def": "Морской гребень волны или дружеский жест рукой.",
    "ph": "[weɪv]",
    "ex": "Ocean wave — Океанская волна.",
    "collocations": [
      "wave in context",
      "use wave"
    ]
  },
  "WEATHER": {
    "tr": "Погода",
    "def": "Состояние неба: ясное солнце, теплый дождь или снег.",
    "ph": "[ˈweðə]",
    "ex": "Nice weather — Хорошая погода.",
    "collocations": [
      "nice weather",
      "bad weather",
      "weather forecast"
    ]
  },
  "WEEKENDS": {
    "tr": "Выходные дни",
    "def": "Суббота и воскресенье — время отдыха с семьей.",
    "ph": "[ˌwiːkˈendz]",
    "ex": "Happy weekends — Счастливых выходных!",
    "collocations": [
      "weekends in context",
      "use weekends"
    ]
  },
  "WELCOME": {
    "tr": "Добро пожаловать / Приветствовать",
    "def": "Радушный и теплый прием долгожданных гостей.",
    "ph": "[ˈwelkəm]",
    "ex": "Warm welcome — Теплый прием.",
    "collocations": [
      "welcome in context",
      "use welcome"
    ]
  },
  "WIN": {
    "tr": "Побеждать / Выигрывать",
    "def": "Достигать триумфа и вершины в честной игре.",
    "ph": "[wɪn]",
    "ex": "Win the game — Выиграть игру.",
    "collocations": [
      "win in context",
      "use win"
    ]
  },
  "WIND": {
    "tr": "Ветер",
    "def": "Свежее движение воздушных потоков в кронах деревьев.",
    "ph": "[wɪnd]",
    "ex": "Gentle wind — Ласковый ветерок.",
    "collocations": [
      "strong wind",
      "gentle wind",
      "cold wind"
    ]
  },
  "WINDOW": {
    "tr": "Окно",
    "def": "Стеклянный проем, впускающий солнечный свет в дом.",
    "ph": "[ˈwɪndəʊ]",
    "ex": "Open window — Распахнутое окно.",
    "collocations": [
      "window in context",
      "use window"
    ]
  },
  "WINTER": {
    "tr": "Зима",
    "def": "Сказочная белоснежная пора пушистого снега и елок.",
    "ph": "[ˈwɪntə]",
    "ex": "Snowy winter — Снежная зима.",
    "collocations": [
      "cold winter",
      "winter holiday",
      "snowy winter"
    ]
  },
  "WIT": {
    "tr": "Остроумие / Ум",
    "def": "Быстрый живой ум и тонкое чувство юмора.",
    "ph": "[wɪt]",
    "ex": "Quick wit — Острый ум.",
    "collocations": [
      "wit in context",
      "use wit"
    ]
  },
  "WONDERFUL": {
    "tr": "Замечательный / Чудесный",
    "def": "Прекрасный, вызывающий восхищение и радость.",
    "ph": "[ˈwʌndəfl]",
    "ex": "Wonderful day — Замечательный день.",
    "collocations": [
      "wonderful in context",
      "use wonderful"
    ]
  },
  "WRATH": {
    "tr": "Гнев / Ярость",
    "def": "Глубокое праведное негодование стихии или героя.",
    "ph": "[rɒθ]",
    "ex": "Thunder wrath — Гнев грозы.",
    "collocations": [
      "wrath in context",
      "use wrath"
    ]
  },
  "YAK": {
    "tr": "Як",
    "def": "Могучий длинношерстный тибетский высокогорный бык.",
    "ph": "[jæk]",
    "ex": "Mountain yak — Горный як.",
    "collocations": [
      "yak in context",
      "use yak"
    ]
  },
  "YARD": {
    "tr": "Двор / Ярд",
    "def": "Уютный зеленый двор у дома или мера длины.",
    "ph": "[jɑːd]",
    "ex": "Green yard — Зеленый двор.",
    "collocations": [
      "yard in context",
      "use yard"
    ]
  },
  "YELLOW": {
    "tr": "Желтый",
    "def": "Солнечный цвет спелых лимонов, одуванчиков и тепла.",
    "ph": "[ˈjeləʊ]",
    "ex": "Yellow sun — Желтое солнце.",
    "collocations": [
      "yellow in context",
      "use yellow"
    ]
  },
  "YESTERDAY": {
    "tr": "Вчера",
    "def": "День, предшествующий сегодняшнему дню.",
    "ph": "[ˈjestədeɪ]",
    "ex": "Just yesterday — Буквально вчера.",
    "collocations": [
      "yesterday in context",
      "use yesterday"
    ]
  },
  "ZAG": {
    "tr": "Зигзаг / Изгиб",
    "def": "Резкий поворот на тропе или в узоре змейки.",
    "ph": "[zæɡ]",
    "ex": "Zig and zag — Изгибаться зигзагом.",
    "collocations": [
      "zag in context",
      "use zag"
    ]
  },
  "ZEAL": {
    "tr": "Рвение / Усердие",
    "def": "Пламенное искреннее стремление к победе и труду.",
    "ph": "[ziːl]",
    "ex": "Work with zeal — Трудиться с рвением.",
    "collocations": [
      "zeal in context",
      "use zeal"
    ]
  },
  "ZEALOTRY": {
    "tr": "Фанатичное рвение",
    "def": "Беззаветная преданность высоким идеалам.",
    "ph": "[ˈzelətri]",
    "ex": "Pure zealotry — Истинная преданность.",
    "collocations": [
      "zealotry in context",
      "use zealotry"
    ]
  },
  "ZEALOUS": {
    "tr": "Ревностный / Усердный",
    "def": "Полный энтузиазма, энергии и горячего сердца.",
    "ph": "[ˈzeləs]",
    "ex": "Zealous worker — Усердный труженик.",
    "collocations": [
      "zealous in context",
      "use zealous"
    ]
  },
  "ZENITH": {
    "tr": "Зенит / Высшая точка",
    "def": "Наивысшая сияющая точка солнца на небосводе.",
    "ph": "[ˈzenɪθ]",
    "ex": "Sun at zenith — Солнце в зените.",
    "collocations": [
      "zenith in context",
      "use zenith"
    ]
  }
},
  themes: {
  "food": {
    "title": "Еда и напитки",
    "icon": "☕",
    "words": [
      "APPLE",
      "BANANA",
      "BREAD",
      "BREAKFAST",
      "CAFE",
      "CAKE",
      "CANDY",
      "CHOCOLATE",
      "CLOVE",
      "COFFEE",
      "COGNAC",
      "CUP",
      "EGG",
      "FIG",
      "FOOD",
      "FRUIT",
      "GUM",
      "JUICE",
      "LEMON",
      "MILK",
      "MINT",
      "ORANGE",
      "SANDWICH",
      "TEA",
      "VEGETABLE",
      "WALNUT",
      "WATER"
    ]
  },
  "nature": {
    "title": "Природа и стихия",
    "icon": "🌿",
    "words": [
      "AIR",
      "ALPINE",
      "AMBER",
      "ASH",
      "BEACH",
      "BLAZE",
      "BLOOM",
      "BLOSSOM",
      "BOG",
      "BONSAI",
      "BREEZE",
      "CANYON",
      "CASCADE",
      "CLAY",
      "CLOUD",
      "CLOVER",
      "CORAL",
      "CRATER",
      "CRYSTAL",
      "DAWN",
      "DESERT",
      "EARTH",
      "EBB",
      "EMBER",
      "EMERALD",
      "FIRE",
      "FIREFLY",
      "FLAME",
      "FLOW",
      "FLOWER",
      "FOG",
      "FOREST",
      "FOSSIL",
      "GARDEN",
      "GEYSER",
      "GLACIER",
      "GREEN",
      "HABITAT",
      "HARBOR",
      "ICE",
      "ICEBERG",
      "ISLAND",
      "ISLE",
      "LAGOON",
      "LAKE",
      "LANDSCAPE",
      "MOSS",
      "MOUNTAIN",
      "OCEAN",
      "PUDDLE",
      "RAIN",
      "RAINBOW",
      "RIVER",
      "ROSE",
      "SAND",
      "SCENERY",
      "SEA",
      "SNOW",
      "SPRING",
      "STEAM",
      "SUMMER",
      "SUN",
      "TIDE",
      "TIMBER",
      "TREE",
      "VALE",
      "VALLEY",
      "WAVE",
      "WEATHER",
      "WIND",
      "WINTER"
    ]
  },
  "space": {
    "title": "Космос и наука",
    "icon": "🚀",
    "words": [
      "ACADEMIC",
      "ACADEMY",
      "ACID",
      "ALCHEMIST",
      "AZIMUTH",
      "CATALYST",
      "CHEMISTRY",
      "CLUSTERS",
      "COBALT",
      "COMPASS",
      "COMPUTER",
      "COSMOS",
      "DATABASE",
      "DIMENSION",
      "DYNAMIC",
      "ECLIPSE",
      "ECOSYSTEM",
      "EDUCATION",
      "ENERGY",
      "ENGINEER",
      "ENTROPY",
      "EVOLUTION",
      "FORMATION",
      "FREQUENCY",
      "GALAXY",
      "GEOGRAPHY",
      "GRAVITY",
      "GRID",
      "INVENTION",
      "MAGNET",
      "METEOR",
      "NEBULA",
      "OCTAVE",
      "PARADIGM",
      "PARADOX",
      "PLANET",
      "PRISM",
      "PROFESSOR",
      "PULSE",
      "RADAR",
      "ROBOT",
      "ROCKET",
      "SOLVENT",
      "SPECTRUM",
      "SPECTRUMS",
      "STRUCTURE",
      "UNIVERSE",
      "VORTEX",
      "ZENITH"
    ]
  },
  "city": {
    "title": "Город и путешествия",
    "icon": "🏛️",
    "words": [
      "ABBEY",
      "ADVENTURE",
      "AIRPLANE",
      "AIRPORT",
      "APARTMENT",
      "AVENUE",
      "BARRIER",
      "BRIDGE",
      "BUILDING",
      "BUS",
      "CABIN",
      "CALENDAR",
      "CAMERA",
      "CAMPAIGN",
      "CAPTAIN",
      "CAR",
      "CARAVAN",
      "CASTLE",
      "CITY",
      "CLASSROOM",
      "CLOCK",
      "CRUISE",
      "DOOR",
      "EXPLORE",
      "EXPLORER",
      "FESTIVAL",
      "HOLIDAY",
      "HOSPITAL",
      "HOTEL",
      "HOUSE",
      "JOURNEY",
      "KINGDOM",
      "LANTERN",
      "LOCATION",
      "LOFT",
      "MAP",
      "MARKET",
      "MAZE",
      "MIGRATION",
      "MONUMENT",
      "MUSEUM",
      "NEWSPAPER",
      "PACKAGE",
      "PALACE",
      "PARK",
      "PASSENGER",
      "PYRAMID",
      "ROAD",
      "ROOM",
      "SAFARI",
      "SANCTUARY",
      "SCHOOL",
      "STATION",
      "STATUE",
      "STREET",
      "TELEPHONE",
      "TICKET",
      "TRAIN",
      "TRANSPORT",
      "TUNNEL",
      "VACATION",
      "VILLAGE",
      "VINTAGE",
      "WINDOW"
    ]
  },
  "animals": {
    "title": "Животный мир",
    "icon": "🐾",
    "words": [
      "ANIMAL",
      "BIRD",
      "CAT",
      "COOP",
      "CRANE",
      "DOG",
      "DOLPHIN",
      "DRAGON",
      "FALCON",
      "FEATHER",
      "FISH",
      "HARE",
      "LION",
      "PHOENIX",
      "RABBIT",
      "SLOTH",
      "WARRIOR",
      "YAK"
    ]
  },
  "mind": {
    "title": "Разум и общество",
    "icon": "💡",
    "words": [
      "ABSOLUTE",
      "ACCURATE",
      "ACTION",
      "ADAPT",
      "ADVOCATE",
      "AGE",
      "AIM",
      "ALACRITY",
      "ALERT",
      "ALIBI",
      "ALLIANCE",
      "ANALOGY",
      "ANTIDOTE",
      "APT",
      "ASSET",
      "ATTRITION",
      "AUDIENCE",
      "AUSTERE",
      "AUTHORITY",
      "AWARENESS",
      "AWE",
      "BADGE",
      "BOND",
      "BOOK",
      "BRAIN",
      "BUSINESS",
      "CELEBRATE",
      "CEREMONY",
      "CHALLENGE",
      "CHAMP",
      "CHAMPION",
      "CHARM",
      "CHESS",
      "CHIEF",
      "CITIZEN",
      "COHERENT",
      "COIN",
      "COMMISSION",
      "COMMUNITY",
      "CONSENSUS",
      "CONUNDRUM",
      "CREATION",
      "CREED",
      "CROWN",
      "CRUX",
      "DECISIVE",
      "DEMOCRACY",
      "DICHOTOMY",
      "DIRECTOR",
      "DISASTER",
      "DISCOVERY",
      "DOMINANCE",
      "DOMINANT",
      "DRAFT",
      "DREAM",
      "ELOQUENT",
      "EMBRACE",
      "EMISSARY",
      "EPITOME",
      "EQUIPMENT",
      "ETHOS",
      "EXERCISE",
      "FASHION",
      "FORTUNE",
      "FRACTION",
      "FREEDOM",
      "FRIEND",
      "FUTURE",
      "GAME",
      "GENEROUS",
      "GENUINE",
      "GIFT",
      "GIST",
      "GLOW",
      "GOLD",
      "GUILE",
      "HARMONY",
      "HEALTH",
      "HEART",
      "HEIR",
      "HERITAGE",
      "HERMETIC",
      "HERO",
      "HOME",
      "HORIZON",
      "HORIZONS",
      "ICON",
      "IMMUTABLE",
      "IMPORTANT",
      "INCOGNITO",
      "INSIGHT",
      "INTEGRITY",
      "INTERNET",
      "JUSTICE",
      "JUXTAPOSE",
      "KNELL",
      "KNIGHT",
      "KNOWLEDGE",
      "LACONIC",
      "LORE",
      "MAGIC",
      "MAJESTY",
      "MALLEABLE",
      "MEDICINE",
      "MEMORY",
      "METAPHOR",
      "MOMENTUM",
      "MONARCH",
      "MONEY",
      "MOTIF",
      "MUSIC",
      "NAME",
      "NOBLE",
      "NOTEBOOK",
      "OATH",
      "OBLIVION",
      "OMEN",
      "OPINION",
      "PITH",
      "POCKET",
      "POLLUTION",
      "PROXIMITY",
      "PUZZLE",
      "QUALM",
      "QUESTION",
      "RELIC",
      "RESOURCE",
      "RESOURCES",
      "RIGOR",
      "RUNE",
      "RUSH",
      "SAGE",
      "SCHISM",
      "SECTOR",
      "SERVE",
      "SHIELD",
      "SILENCE",
      "SKILL",
      "SOLVENT",
      "SPARK",
      "SPEAR",
      "STRATEGY",
      "STRENGTH",
      "STUDENT",
      "SUBLIME",
      "SUBTLE",
      "SUCCESS",
      "SUM",
      "SURPRISE",
      "SYNERGY",
      "TALENT",
      "TEACHER",
      "TENET",
      "THEORY",
      "THOUGHT",
      "TIME",
      "TREASURE",
      "TRIUMPH",
      "TRUTH",
      "UNIFORM",
      "URGE",
      "VALOR",
      "VIBE",
      "VICTORY",
      "VIGOR",
      "VISION",
      "VOID",
      "VOLUNTEER",
      "VOW",
      "WARRIOR",
      "WIN",
      "WIT",
      "WONDERFUL",
      "WRATH",
      "ZEAL",
      "ZEALOTRY",
      "ZEALOUS"
    ]
  }
},

  // Монстрики-этапы (по образцу классических Филвордов)
  monstersStages: [
    {
      id: 1,
      name: "Морская губка",
      icon: "🧽",
      startLevel: 1,
      endLevel: 20,
      milestones: [
        { level: 5, label: "5 ур.", icon: "🎁", title: "Сундук монет" },
        { level: 10, label: "10 ур.", icon: "📖", title: "Книга слов" },
        { level: 20, label: "20 ур.", icon: "🪼", title: "Медуза" }
      ]
    },
    {
      id: 2,
      name: "Медуза",
      icon: "🪼",
      startLevel: 21,
      endLevel: 45,
      milestones: [
        { level: 25, label: "25 ур.", icon: "🎁", title: "Сундук монет" },
        { level: 35, label: "35 ур.", icon: "📖", title: "Книга слов" },
        { level: 45, label: "45 ур.", icon: "🐌", title: "Улитка" }
      ]
    },
    {
      id: 3,
      name: "Улитка",
      icon: "🐌",
      startLevel: 46,
      endLevel: 70,
      milestones: [
        { level: 50, label: "50 ур.", icon: "🎁", title: "Сундук монет" },
        { level: 60, label: "60 ур.", icon: "📖", title: "Книга слов" },
        { level: 70, label: "70 ур.", icon: "🦉", title: "Сова" }
      ]
    },
    {
      id: 4,
      name: "Мудрая Сова",
      icon: "🦉",
      startLevel: 71,
      endLevel: 95,
      milestones: [
        { level: 75, label: "75 ур.", icon: "🎁", title: "Сундук монет" },
        { level: 85, label: "85 ур.", icon: "📖", title: "Книга слов" },
        { level: 95, label: "95 ур.", icon: "🦊", title: "Лисенок" }
      ]
    },
    {
      id: 5,
      name: "Лисенок-полиглот",
      icon: "🦊",
      startLevel: 96,
      endLevel: 125,
      milestones: [
        { level: 100, label: "100 ур.", icon: "🎁", title: "Сундук мастера" },
        { level: 115, label: "115 ур.", icon: "📖", title: "Книга слов" },
        { level: 125, label: "125 ур.", icon: "👑", title: "Корона мастера" }
      ]
    }
  ],

  // Ранги опыта (XP) и CEFR
  xpRanks: [
    { code: "A1", title: "Начальный (A1)", badge: "A1 — Elementary", minXp: 0, nextXp: 300 },
    { code: "A2", title: "Базовый (A2)", badge: "A2 — Pre-Intermediate", minXp: 300, nextXp: 800 },
    { code: "B1", title: "Средний (B1)", badge: "B1 — Intermediate", minXp: 800, nextXp: 1600 },
    { code: "B2", title: "Выше среднего (B2)", badge: "B2 — Upper-Intermediate", minXp: 1600, nextXp: 3000 },
    { code: "C1", title: "Продвинутый (C1)", badge: "C1 — Advanced", minXp: 3000, nextXp: 5000 }
  ],

  // Еженедельные лиги (благородные соревновательные названия)
  leagues: [
    { id: 1, name: "Бронзовая лига", icon: "🥉", color: "#cd7f32", minXpWeek: 0, rewardCoins: 50 },
    { id: 2, name: "Серебряная лига", icon: "🥈", color: "#94a3b8", minXpWeek: 200, rewardCoins: 100 },
    { id: 3, name: "Золотая лига", icon: "🥇", color: "#f59e0b", minXpWeek: 500, rewardCoins: 180 },
    { id: 4, name: "Алмазная лига", icon: "💎", color: "#06b6d4", minXpWeek: 1000, rewardCoins: 300 },
    { id: 5, name: "Лига Мастеров", icon: "👑", color: "#a855f7", minXpWeek: 2000, rewardCoins: 500 }
  ],

  // Сектора Колеса Фортуны (8 призов)
  luckyWheelSectors: [
    { id: 0, label: "+20 🪙", type: "coins", value: 20, icon: "🪙", color: "#f59e0b" },
    { id: 1, label: "+1 💡", type: "hints", value: 1, icon: "💡", color: "#6366f1" },
    { id: 2, label: "+50 XP", type: "xp", value: 50, icon: "⚡", color: "#a855f7" },
    { id: 3, label: "+40 🪙", type: "coins", value: 40, icon: "🪙", color: "#f59e0b" },
    { id: 4, label: "❄️ Защита", type: "freeze", value: 1, icon: "❄️", color: "#0ea5e9" },
    { id: 5, label: "+2 💡", type: "hints", value: 2, icon: "💡", color: "#6366f1" },
    { id: 6, label: "+100 XP", type: "xp", value: 100, icon: "🌟", color: "#a855f7" },
    { id: 7, label: "👑 100 🪙", type: "coins", value: 100, icon: "👑", color: "#ec4899" }
  ],

  // Ежедневные задания (3 квеста)
  dailyQuestsTemplates: [
    { id: "find_words", title: "Сыщик слов", desc: "Найдите 8 любых слов на игровом поле", target: 8, rewardCoins: 20, rewardXp: 40 },
    { id: "no_hints", title: "Чистый разум", desc: "Пройдите 2 уровня без использования подсказок", target: 2, rewardCoins: 25, rewardXp: 50 },
    { id: "vocab_review", title: "Любознательность", desc: "Откройте и изучите 3 карточки в словаре", target: 3, rewardCoins: 15, rewardXp: 30 }
  ],

  // Список достижений (чистые благородные названия)
  achievements: [
    { id: "first_words", icon: "🐣", title: "Первые шаги", desc: "Собрать первые 10 слов в словаре", target: 10, type: "words", rewardCoins: 25 },
    { id: "bookworm", icon: "📚", title: "Книжный червь", desc: "Собрать 50 слов в личный словарь", target: 50, type: "words", rewardCoins: 50 },
    { id: "linguist", icon: "🎓", title: "Лингвист", desc: "Собрать 150 слов в словаре", target: 150, type: "words", rewardCoins: 100 },
    { id: "polyglot", icon: "👑", title: "Полиглот", desc: "Собрать 300 слов в словаре", target: 300, type: "words", rewardCoins: 200 },
    { id: "streak_3", icon: "🔥", title: "Ударный режим", desc: "Играть 3 дня подряд", target: 3, type: "streak", rewardCoins: 35 },
    { id: "streak_7", icon: "⚡", title: "Неделя без пропусков", desc: "Играть 7 дней подряд", target: 7, type: "streak", rewardCoins: 100 },
    { id: "no_hints", icon: "💡", title: "Острый ум", desc: "Пройти 5 уровней без подсказок", target: 5, type: "no_hints", rewardCoins: 50 },
    { id: "blitz_master", icon: "🎯", title: "Мастер блица", desc: "Дать 15 правильных ответов в Блиц-повторении", target: 15, type: "blitz", rewardCoins: 60 },
    { id: "bonus_hunter", icon: "🌟", title: "Эрудит", desc: "Найти 10 бонусных скрытых слов", target: 10, type: "bonus_words", rewardCoins: 50 },
    { id: "explorer", icon: "🗺️", title: "Исследователь", desc: "Пройти уровень на сетке 6x6 или больше", target: 1, type: "big_grid", rewardCoins: 40 },
    { id: "grandmaster", icon: "🏆", title: "Гроссмейстер", desc: "Пройти уровень на сетке 8x8 или 9x9", target: 1, type: "huge_grid", rewardCoins: 80 }
  ],

  // Ежедневный стрик наград (7 дней)
  dailyStreakRewards: [
    { day: 1, coins: 15, hints: 0, label: "День 1" },
    { day: 2, coins: 25, hints: 0, label: "День 2" },
    { day: 3, coins: 40, hints: 1, label: "Сундук 3 дн. 🎁" },
    { day: 4, coins: 30, hints: 0, label: "День 4" },
    { day: 5, coins: 45, hints: 0, label: "День 5" },
    { day: 6, coins: 50, hints: 1, label: "День 6" },
    { day: 7, coins: 120, hints: 2, label: "Мега-Сундук 👑" }
  ],

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

  getWordDetails(word) {
    if (!word) return null;
    const upper = word.toUpperCase();
    if (this.wordDefinitions[upper]) {
      return {
        word: upper,
        ...this.wordDefinitions[upper]
      };
    }
    return {
      word: upper,
      tr: upper.charAt(0) + upper.slice(1).toLowerCase(),
      def: "Лексическая единица словаря английского языка.",
      ph: "",
      ex: "",
      collocations: []
    };
  },

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

    const rank = this.xpRanks.find(r => r.code === assignedLevel) || this.xpRanks[0];
    return {
      code: rank.code,
      badge: rank.badge,
      title: rank.title,
      desc: "Персональный уровень владения языком",
      startingXp: rank.minXp
    };
  },

  getLevelPackingConfig(levelNumber, userCefr = "A2") {
    let gridSize = 5;
    let wordLengths = [5, 5, 5, 5, 5];

    if (levelNumber <= 5) {
      gridSize = 4;
      const templates4 = [
        [4, 4, 4, 4],
        [3, 4, 4, 5],
        [5, 5, 6]
      ];
      wordLengths = templates4[(levelNumber - 1) % templates4.length];
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
        [5, 5, 5, 6, 7, 8]
      ];
      wordLengths = templates6[(levelNumber - 26) % templates6.length];
    } else if (levelNumber <= 75) {
      gridSize = 7;
      const templates7 = [
        [7, 7, 7, 7, 7, 7, 7],
        [6, 6, 7, 7, 7, 8, 8],
        [5, 6, 7, 7, 8, 8, 8]
      ];
      wordLengths = templates7[(levelNumber - 51) % templates7.length];
    } else if (levelNumber <= 100) {
      gridSize = 8;
      const templates8 = [
        [8, 8, 8, 8, 8, 8, 8, 8],
        [7, 7, 8, 8, 8, 8, 9, 9],
        [6, 7, 7, 8, 8, 9, 9, 10]
      ];
      wordLengths = templates8[(levelNumber - 76) % templates8.length];
    } else {
      gridSize = 9;
      const templates9 = [
        [6, 7, 7, 8, 8, 9, 9, 9, 9, 9],
        [7, 7, 7, 8, 8, 8, 9, 9, 9, 9]
      ];
      wordLengths = templates9[(levelNumber - 101) % templates9.length];
    }

    const totalCells = gridSize * gridSize;

    // Подбираем семантическую тему уровня
    const themeKeys = Object.keys(this.themes);
    const themeKey = themeKeys[(levelNumber - 1) % themeKeys.length];
    const themeInfo = this.themes[themeKey];

    return {
      level: levelNumber,
      gridSize: gridSize,
      totalCells: totalCells,
      wordLengths: wordLengths,
      wordCount: wordLengths.length,
      minTurns: 1,
      cefrLevel: userCefr,
      themeKey: themeKey,
      themeTitle: themeInfo.title,
      themeIcon: themeInfo.icon,
      coinsReward: 15 + Math.min(levelNumber, 60),
      xpReward: 30 + Math.min(levelNumber * 2, 70)
    };
  },

  getWordForCefrAndLength(cefrLevel, targetLen, exclude = [], themeKey = null) {
    const rankOrder = ["A1", "A2", "B1", "B2", "C1"];
    const userRankIdx = Math.max(0, rankOrder.indexOf(cefrLevel));

    // 1. Сначала пробуем найти слово ТЕКУЩЕЙ ТЕМЫ на текущем уровне игрока
    if (themeKey && this.themes[themeKey] && this.cefrDictionary[cefrLevel] && this.cefrDictionary[cefrLevel][targetLen]) {
      const themeWords = this.themes[themeKey].words;
      const themedAvailable = this.cefrDictionary[cefrLevel][targetLen].filter(
        w => themeWords.includes(w) && !exclude.includes(w) && w.length === targetLen
      );
      if (themedAvailable.length > 0) {
        return themedAvailable[Math.floor(Math.random() * themedAvailable.length)];
      }
    }

    // 2. Любое слово на текущем уровне игрока
    if (this.cefrDictionary[cefrLevel] && this.cefrDictionary[cefrLevel][targetLen]) {
      const available = this.cefrDictionary[cefrLevel][targetLen].filter(
        w => !exclude.includes(w) && w.length === targetLen
      );
      if (available.length > 0) {
        return available[Math.floor(Math.random() * available.length)];
      }
    }

    // 3. Закрепление пройденного: уровни ниже
    for (let i = userRankIdx - 1; i >= 0; i--) {
      const lowerLvl = rankOrder[i];
      if (this.cefrDictionary[lowerLvl] && this.cefrDictionary[lowerLvl][targetLen]) {
        const available = this.cefrDictionary[lowerLvl][targetLen].filter(
          w => !exclude.includes(w) && w.length === targetLen
        );
        if (available.length > 0) {
          return available[Math.floor(Math.random() * available.length)];
        }
      }
    }

    // 4. Fallback
    if (this.cefrDictionary[cefrLevel] && this.cefrDictionary[cefrLevel][targetLen]) {
      const list = this.cefrDictionary[cefrLevel][targetLen];
      return list[Math.floor(Math.random() * list.length)];
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
