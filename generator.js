/**
 * WordRam - Dynamic Grid (4x4 to 9x9) & 100% Cell Coverage Generator (v9)
 * Генерация полей переменного размера под уровень сложности, 100% покрытие словами.
 */

class WordRamGenerator {
  constructor(dataModule = null) {
    this.data = dataModule || (typeof WordRamData !== "undefined" ? WordRamData : null);
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

  /**
   * Разделение сетки размера gridSize (от 4 до 9) на N змеек
   */
  partitionGrid(gridSize, wordLengths, minTurns = 1, maxAttempts = 150) {
    const totalCells = gridSize * gridSize;

    for (let attempt = 0; attempt < maxAttempts; attempt++) {
      const grid = Array.from({ length: gridSize }, () => Array(gridSize).fill(-1));
      const routes = [];
      let success = true;

      for (let wIdx = 0; wIdx < wordLengths.length; wIdx++) {
        const targetLen = wordLengths[wIdx];

        let startR = -1, startC = -1;
        for (let r = 0; r < gridSize; r++) {
          for (let c = 0; c < gridSize; c++) {
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

        if (this._findPathDFS(gridSize, wIdx, targetLen, path, grid, minTurns)) {
          routes.push(path);
        } else {
          grid[startR][startC] = -1;
          success = false;
          break;
        }
      }

      if (success && routes.length === wordLengths.length) {
        let covered = 0;
        let turnsOk = true;
        for (const r of routes) {
          covered += r.length;
          if (this.countTurns(r) < 1 && r.length >= 3) turnsOk = false;
        }

        if (covered === totalCells && turnsOk) {
          return routes;
        }
      }
    }

    return this._getSerpentineFallback(gridSize, wordLengths);
  }

  _findPathDFS(gridSize, wIdx, targetLen, path, grid, minTurns) {
    if (path.length === targetLen) {
      return targetLen < 3 || this.countTurns(path) >= minTurns;
    }

    const [cr, cc] = path[path.length - 1];
    const shuffledDirs = [...this.directions].sort(() => Math.random() - 0.5);

    for (const d of shuffledDirs) {
      const nr = cr + d.dr;
      const nc = cc + d.dc;
      if (nr >= 0 && nr < gridSize && nc >= 0 && nc < gridSize && grid[nr][nc] === -1) {
        grid[nr][nc] = wIdx;
        path.push([nr, nc]);

        if (this._findPathDFS(gridSize, wIdx, targetLen, path, grid, minTurns)) {
          return true;
        }

        path.pop();
        grid[nr][nc] = -1;
      }
    }
    return false;
  }

  _getSerpentineFallback(gridSize, wordLengths) {
    const fullSnake = [];
    for (let r = 0; r < gridSize; r++) {
      if (r % 2 === 0) {
        for (let c = 0; c < gridSize; c++) fullSnake.push([r, c]);
      } else {
        for (let c = gridSize - 1; c >= 0; c--) fullSnake.push([r, c]);
      }
    }

    const routes = [];
    let offset = 0;
    for (const len of wordLengths) {
      routes.push(fullSnake.slice(offset, offset + len));
      offset += len;
    }
    return routes;
  }

  /**
   * Сборка уровня динамического размера (4x4, 5x5, 6x6, 7x7, 8x8, 9x9)
   */
  generateLevel(levelNumber = 1, userCefr = "A2") {
    const config = this.data.getLevelPackingConfig(levelNumber, userCefr);
    const size = config.gridSize;

    // 1. Разбиваем сетку заданного размера на змейки
    const routesArray = this.partitionGrid(size, config.wordLengths, config.minTurns);

    // 2. Подбираем слова
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
      totalCells: config.totalCells,
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
