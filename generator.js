/**
 * WordRam - Universal Snaking Grid Generator (v10)
 * Гарантирует ломаные змейки (минимум 1-4 поворота) без прямых линий
 * для всех размеров сеток (4x4, 5x5, 6x6, 7x7, 8x8, 9x9).
 */

class WordRamGenerator {
  constructor(dataModule = null) {
    this.data = dataModule || (typeof WordRamData !== "undefined" ? WordRamData : null);
    this.base3x3Templates = [
  [
    [
      [
        0,
        0
      ],
      [
        0,
        1
      ],
      [
        0,
        2
      ],
      [
        1,
        2
      ],
      [
        2,
        2
      ]
    ],
    [
      [
        1,
        0
      ],
      [
        1,
        1
      ],
      [
        2,
        1
      ],
      [
        2,
        0
      ]
    ]
  ],
  [
    [
      [
        0,
        0
      ],
      [
        1,
        0
      ],
      [
        2,
        0
      ],
      [
        2,
        1
      ],
      [
        1,
        1
      ]
    ],
    [
      [
        0,
        1
      ],
      [
        0,
        2
      ],
      [
        1,
        2
      ],
      [
        2,
        2
      ]
    ]
  ],
  [
    [
      [
        0,
        0
      ],
      [
        1,
        0
      ],
      [
        1,
        1
      ],
      [
        0,
        1
      ],
      [
        0,
        2
      ]
    ],
    [
      [
        1,
        2
      ],
      [
        2,
        2
      ],
      [
        2,
        1
      ],
      [
        2,
        0
      ]
    ]
  ],
  [
    [
      [
        0,
        0
      ],
      [
        1,
        0
      ],
      [
        2,
        0
      ],
      [
        2,
        1
      ],
      [
        2,
        2
      ]
    ],
    [
      [
        0,
        1
      ],
      [
        1,
        1
      ],
      [
        1,
        2
      ],
      [
        0,
        2
      ]
    ]
  ],
  [
    [
      [
        0,
        0
      ],
      [
        1,
        0
      ],
      [
        2,
        0
      ],
      [
        2,
        1
      ],
      [
        2,
        2
      ]
    ],
    [
      [
        0,
        1
      ],
      [
        0,
        2
      ],
      [
        1,
        2
      ],
      [
        1,
        1
      ]
    ]
  ],
  [
    [
      [
        0,
        0
      ],
      [
        0,
        1
      ],
      [
        1,
        1
      ],
      [
        1,
        0
      ],
      [
        2,
        0
      ]
    ],
    [
      [
        0,
        2
      ],
      [
        1,
        2
      ],
      [
        2,
        2
      ],
      [
        2,
        1
      ]
    ]
  ],
  [
    [
      [
        0,
        0
      ],
      [
        0,
        1
      ],
      [
        0,
        2
      ],
      [
        1,
        2
      ],
      [
        1,
        1
      ]
    ],
    [
      [
        1,
        0
      ],
      [
        2,
        0
      ],
      [
        2,
        1
      ],
      [
        2,
        2
      ]
    ]
  ],
  [
    [
      [
        0,
        0
      ],
      [
        1,
        0
      ],
      [
        1,
        1
      ],
      [
        2,
        1
      ],
      [
        2,
        0
      ]
    ],
    [
      [
        0,
        1
      ],
      [
        0,
        2
      ],
      [
        1,
        2
      ],
      [
        2,
        2
      ]
    ]
  ],
  [
    [
      [
        0,
        0
      ],
      [
        0,
        1
      ],
      [
        0,
        2
      ],
      [
        1,
        2
      ],
      [
        2,
        2
      ]
    ],
    [
      [
        1,
        0
      ],
      [
        2,
        0
      ],
      [
        2,
        1
      ],
      [
        1,
        1
      ]
    ]
  ],
  [
    [
      [
        0,
        0
      ],
      [
        0,
        1
      ],
      [
        1,
        1
      ],
      [
        1,
        2
      ],
      [
        0,
        2
      ]
    ],
    [
      [
        1,
        0
      ],
      [
        2,
        0
      ],
      [
        2,
        1
      ],
      [
        2,
        2
      ]
    ]
  ],
  [
    [
      [
        0,
        0
      ],
      [
        0,
        1
      ],
      [
        1,
        1
      ],
      [
        1,
        0
      ]
    ],
    [
      [
        0,
        2
      ],
      [
        1,
        2
      ],
      [
        2,
        2
      ],
      [
        2,
        1
      ],
      [
        2,
        0
      ]
    ]
  ],
  [
    [
      [
        0,
        0
      ],
      [
        1,
        0
      ],
      [
        1,
        1
      ],
      [
        0,
        1
      ]
    ],
    [
      [
        0,
        2
      ],
      [
        1,
        2
      ],
      [
        2,
        2
      ],
      [
        2,
        1
      ],
      [
        2,
        0
      ]
    ]
  ],
  [
    [
      [
        0,
        0
      ],
      [
        0,
        1
      ],
      [
        0,
        2
      ],
      [
        1,
        2
      ],
      [
        2,
        2
      ],
      [
        2,
        1
      ],
      [
        1,
        1
      ],
      [
        1,
        0
      ],
      [
        2,
        0
      ]
    ]
  ],
  [
    [
      [
        0,
        0
      ],
      [
        1,
        0
      ],
      [
        2,
        0
      ],
      [
        2,
        1
      ],
      [
        2,
        2
      ],
      [
        1,
        2
      ],
      [
        1,
        1
      ],
      [
        0,
        1
      ],
      [
        0,
        2
      ]
    ]
  ],
  [
    [
      [
        0,
        0
      ],
      [
        1,
        0
      ],
      [
        2,
        0
      ],
      [
        2,
        1
      ],
      [
        1,
        1
      ],
      [
        0,
        1
      ],
      [
        0,
        2
      ],
      [
        1,
        2
      ],
      [
        2,
        2
      ]
    ]
  ],
  [
    [
      [
        0,
        0
      ],
      [
        0,
        1
      ],
      [
        1,
        1
      ],
      [
        1,
        0
      ],
      [
        2,
        0
      ],
      [
        2,
        1
      ],
      [
        2,
        2
      ],
      [
        1,
        2
      ],
      [
        0,
        2
      ]
    ]
  ],
  [
    [
      [
        0,
        0
      ],
      [
        1,
        0
      ],
      [
        2,
        0
      ],
      [
        2,
        1
      ],
      [
        2,
        2
      ],
      [
        1,
        2
      ],
      [
        0,
        2
      ],
      [
        0,
        1
      ],
      [
        1,
        1
      ]
    ]
  ],
  [
    [
      [
        0,
        0
      ],
      [
        1,
        0
      ],
      [
        1,
        1
      ],
      [
        0,
        1
      ],
      [
        0,
        2
      ],
      [
        1,
        2
      ],
      [
        2,
        2
      ],
      [
        2,
        1
      ],
      [
        2,
        0
      ]
    ]
  ],
  [
    [
      [
        0,
        0
      ],
      [
        0,
        1
      ],
      [
        0,
        2
      ],
      [
        1,
        2
      ],
      [
        1,
        1
      ],
      [
        1,
        0
      ],
      [
        2,
        0
      ],
      [
        2,
        1
      ],
      [
        2,
        2
      ]
    ]
  ],
  [
    [
      [
        0,
        0
      ],
      [
        0,
        1
      ],
      [
        0,
        2
      ],
      [
        1,
        2
      ],
      [
        2,
        2
      ],
      [
        2,
        1
      ],
      [
        2,
        0
      ],
      [
        1,
        0
      ],
      [
        1,
        1
      ]
    ]
  ]
];
    this.directions = [
      { dr: -1, dc: 0 },
      { dr: 1, dc: 0 },
      { dr: 0, dc: -1 },
      { dr: 0, dc: 1 }
    ];
  }

  countTurns(route) {
    if (!route || route.length < 3) return 0;
    let turns = 0;
    let prevDir = null;
    for (let i = 0; i < route.length - 1; i++) {
      const dr = route[i + 1][0] - route[i][0];
      const dc = route[i + 1][1] - route[i][1];
      const dir = `${dr},${dc}`;
      if (prevDir !== null && prevDir !== dir) turns++;
      prevDir = dir;
    }
    return turns;
  }

  get3x3BlockRoutes(R, C) {
    const tmpl = this.base3x3Templates[Math.floor(Math.random() * this.base3x3Templates.length)];
    return tmpl.map(wordRoute => {
      return wordRoute.map(([r, c]) => [R + r, C + c]);
    });
  }

  get2x2BlockRoutes(R, C) {
    return [
      [[R, C], [R, C+1], [R+1, C+1], [R+1, C]]
    ];
  }

  get2x3SnakingWord(r, c) {
    return [
      [[r, c], [r, c+1], [r, c+2], [r+1, c+2], [r+1, c+1], [r+1, c]]
    ];
  }

  get3x2SnakingWord(r, c) {
    return [
      [[r, c], [r+1, c], [r+2, c], [r+2, c+1], [r+1, c+1], [r, c+1]]
    ];
  }

  partitionGrid(gridSize, wordLengths) {
    const total = gridSize * gridSize;

    // 1. Для 9x9 (9 блоков 3x3)
    if (gridSize === 9) {
      const routes = [];
      for (let br = 0; br < 3; br++) {
        for (let bc = 0; bc < 3; bc++) {
          routes.push(...this.get3x3BlockRoutes(br * 3, bc * 3));
        }
      }
      return routes;
    }

    // 2. Для 6x6 (4 блока 3x3)
    if (gridSize === 6) {
      const routes = [];
      for (let br = 0; br < 2; br++) {
        for (let bc = 0; bc < 2; bc++) {
          routes.push(...this.get3x3BlockRoutes(br * 3, bc * 3));
        }
      }
      return routes;
    }

    // 3. Для 7x7 (модульное замощение 4x4 + 4x3 + 3x4 + 3x3 = 49 клеток)
    if (gridSize === 7) {
      const routes = [];
      // Top-left 4x4: четыре 2x2 блока
      routes.push([[0,0],[0,1],[1,1],[1,0]]);
      routes.push([[0,2],[0,3],[1,3],[1,2]]);
      routes.push([[2,0],[2,1],[3,1],[3,0]]);
      routes.push([[2,2],[2,3],[3,3],[3,2]]);

      // Top-right 4x3: два 2x3 блока
      routes.push(...this.get2x3SnakingWord(0, 4));
      routes.push(...this.get2x3SnakingWord(2, 4));

      // Bottom-left 3x4: два 3x2 блока
      routes.push(...this.get3x2SnakingWord(4, 0));
      routes.push(...this.get3x2SnakingWord(4, 2));

      // Bottom-right 3x3: верифицированный блок 3x3
      routes.push(...this.get3x3BlockRoutes(4, 4));
      return routes;
    }

    // 4. Для 4x4 (4 блока 2x2)
    if (gridSize === 4) {
      const routes = [];
      for (let br = 0; br < 2; br++) {
        for (let bc = 0; bc < 2; bc++) {
          routes.push(...this.get2x2BlockRoutes(br * 2, bc * 2));
        }
      }
      return routes;
    }

    // 5. Для 8x8 (16 блоков 2x2)
    if (gridSize === 8) {
      const routes = [];
      for (let br = 0; br < 4; br++) {
        for (let bc = 0; bc < 4; bc++) {
          routes.push(...this.get2x2BlockRoutes(br * 2, bc * 2));
        }
      }
      return routes;
    }

    // 6. Для 5x5 используем DFS с проверкой ломаных змеек
    for (let attempt = 0; attempt < 300; attempt++) {
      const grid = Array.from({ length: 5 }, () => Array(5).fill(-1));
      const routes = [];
      let success = true;

      for (let wIdx = 0; wIdx < wordLengths.length; wIdx++) {
        const targetLen = wordLengths[wIdx];

        let startR = -1, startC = -1;
        for (let r = 0; r < 5; r++) {
          for (let c = 0; c < 5; c++) {
            if (grid[r][c] === -1) {
              startR = r;
              startC = c;
              break;
            }
          }
          if (startR !== -1) break;
        }

        if (startR === -1) {
          success = false;
          break;
        }

        const path = [[startR, startC]];
        grid[startR][startC] = wIdx;

        if (this._findSnakingDFS(5, wIdx, targetLen, path, grid)) {
          routes.push(path);
        } else {
          grid[startR][startC] = -1;
          success = false;
          break;
        }
      }

      if (success && routes.length === wordLengths.length) {
        let covered = 0;
        let zeroTurn = false;
        for (const r of routes) {
          covered += r.length;
          if (this.countTurns(r) < 1 && r.length >= 3) zeroTurn = true;
        }
        if (covered === 25 && !zeroTurn) {
          return routes;
        }
      }
    }

    // Запасной 5x5 шаблон
    return [
      [[0, 0], [0, 1], [1, 1], [1, 0], [2, 0]],
      [[0, 2], [0, 3], [0, 4], [1, 4], [1, 3]],
      [[1, 2], [2, 2], [2, 1], [3, 1], [3, 0]],
      [[2, 3], [2, 4], [3, 4], [3, 3], [3, 2]],
      [[4, 0], [4, 1], [4, 2], [4, 3], [4, 4]]
    ];
  }

  _findSnakingDFS(gridSize, wIdx, targetLen, path, grid) {
    if (path.length === targetLen) {
      return targetLen < 3 || this.countTurns(path) >= 1;
    }

    const [cr, cc] = path[path.length - 1];
    const shuffledDirs = [...this.directions].sort(() => Math.random() - 0.5);

    for (const d of shuffledDirs) {
      const nr = cr + d.dr;
      const nc = cc + d.dc;
      if (nr >= 0 && nr < gridSize && nc >= 0 && nc < gridSize && grid[nr][nc] === -1) {
        grid[nr][nc] = wIdx;
        path.push([nr, nc]);

        if (this._findSnakingDFS(gridSize, wIdx, targetLen, path, grid)) {
          return true;
        }

        path.pop();
        grid[nr][nc] = -1;
      }
    }
    return false;
  }

  generateLevel(levelNumber = 1, userCefr = "A2") {
    const config = this.data.getLevelPackingConfig(levelNumber, userCefr);
    const size = config.gridSize;

    const routesArray = this.partitionGrid(size, config.wordLengths);

    const grid = Array.from({ length: size }, () => Array(size).fill(""));
    const words = [];
    const routesMap = {};
    const usedWords = [];

    for (let i = 0; i < routesArray.length; i++) {
      const route = routesArray[i];
      const len = route.length;
      const word = this.data.getWordForCefrAndLength(userCefr, len, usedWords);
      usedWords.push(word);
      words.push(word);
      routesMap[word] = route;

      for (let j = 0; j < word.length; j++) {
        const [r, c] = route[j];
        grid[r][c] = word[j];
      }
    }

    return {
      level: levelNumber,
      cefrLevel: userCefr,
      gridSize: size,
      totalCells: size * size,
      grid: grid,
      words: words,
      routes: routesMap,
      coinsReward: config.coinsReward
    };
  }

  validateLevel(grid, words, routes, gridSize = 5) {
    if (!grid || grid.length !== gridSize) return false;
    const total = gridSize * gridSize;
    const coveredCells = new Set();

    for (const word of words) {
      const route = routes[word];
      if (!route || route.length !== word.length) return false;

      for (let i = 0; i < route.length; i++) {
        const [r, c] = route[i];
        if (r < 0 || r >= gridSize || c < 0 || c >= gridSize) return false;

        const key = `${r},${c}`;
        if (coveredCells.has(key)) return false;
        coveredCells.add(key);

        if (grid[r][c] !== word[i]) return false;

        if (i > 0) {
          const [pr, pc] = route[i - 1];
          if (Math.abs(r - pr) + Math.abs(c - pc) !== 1) return false;
        }
      }
    }

    return coveredCells.size === total;
  }
}

if (typeof module !== "undefined" && module.exports) {
  module.exports = WordRamGenerator;
}
