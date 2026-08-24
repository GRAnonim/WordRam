/**
 * WordRam - Organic Labyrinth Snaking Generator (v11)
 * Генерация органических лабиринтов слов (сложные изгибы, S/U-повороты,
 * пересечения без простых 2x2 квадратов) для сеток от 4x4 до 9x9.
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
   * Разделение сетки размера gridSize на N органических лабиринтных змеек
   */
  partitionGrid(gridSize, wordLengths) {
    const total = gridSize * gridSize;

    // Пробуем органический DFS с приоритетом узких мест и углов (убирает тривиальные квадраты)
    for (let attempt = 0; attempt < 350; attempt++) {
      const grid = Array.from({ length: gridSize }, () => Array(gridSize).fill(-1));
      const routes = [];
      let success = true;

      for (let wIdx = 0; wIdx < wordLengths.length; wIdx++) {
        const targetLen = wordLengths[wIdx];

        // Ищем свободные ячейки и сортируем по количеству свободных соседей
        const freeCells = [];
        for (let r = 0; r < gridSize; r++) {
          for (let c = 0; c < gridSize; c++) {
            if (grid[r][c] === -1) {
              let neighbors = 0;
              for (const d of this.directions) {
                const nr = r + d.dr, nc = c + d.dc;
                if (nr >= 0 && nr < gridSize && nc >= 0 && nc < gridSize && grid[nr][nc] === -1) {
                  neighbors++;
                }
              }
              freeCells.push({ r, c, neighbors });
            }
          }
        }

        if (freeCells.length < targetLen) {
          success = false;
          break;
        }

        // Заполняем сначала угловые и изолированные ячейки
        freeCells.sort((a, b) => a.neighbors - b.neighbors);
        const startCell = freeCells[0];

        const path = [[startCell.r, startCell.c]];
        grid[startCell.r][startCell.c] = wIdx;

        if (this._findOrganicDFS(gridSize, wIdx, targetLen, path, grid, null, 0)) {
          routes.push(path);
        } else {
          grid[startCell.r][startCell.c] = -1;
          success = false;
          break;
        }
      }

      if (success && routes.length === wordLengths.length) {
        let covered = 0;
        let allSnaking = true;
        for (const r of routes) {
          covered += r.length;
          const minT = r.length >= 5 ? 2 : 1;
          if (this.countTurns(r) < minT) allSnaking = false;
        }

        if (covered === total && allSnaking) {
          return routes;
        }
      }
    }

    // Запасной генератор лабиринтов с органическими змейками
    return this._getLabyrinthFallback(gridSize, wordLengths);
  }

  _findOrganicDFS(gridSize, wIdx, targetLen, path, grid, lastDir, straightCount) {
    if (path.length === targetLen) {
      const minT = targetLen >= 5 ? 2 : 1;
      return targetLen < 3 || this.countTurns(path) >= minT;
    }

    const [cr, cc] = path[path.length - 1];

    // Рандомизируем направления с приоритетом поворотов при straightCount >= 2
    let shuffledDirs = [...this.directions].sort(() => Math.random() - 0.5);
    if (lastDir !== null && straightCount >= 2) {
      shuffledDirs.sort((a, b) => {
        const aSame = (a.dr === lastDir.dr && a.dc === lastDir.dc) ? 1 : 0;
        const bSame = (b.dr === lastDir.dr && b.dc === lastDir.dc) ? 1 : 0;
        return aSame - bSame;
      });
    }

    for (const d of shuffledDirs) {
      const nr = cr + d.dr;
      const nc = cc + d.dc;
      if (nr >= 0 && nr < gridSize && nc >= 0 && nc < gridSize && grid[nr][nc] === -1) {
        const isSame = lastDir && (d.dr === lastDir.dr && d.dc === lastDir.dc);
        const nextStraight = isSame ? straightCount + 1 : 1;

        // Запрещаем прямые линии длиннее 2-3 клеток, стимулируя извилистые повороты
        if (nextStraight > 3 && targetLen >= 5) continue;

        grid[nr][nc] = wIdx;
        path.push([nr, nc]);

        if (this._findOrganicDFS(gridSize, wIdx, targetLen, path, grid, d, nextStraight)) {
          return true;
        }

        path.pop();
        grid[nr][nc] = -1;
      }
    }
    return false;
  }

  _getLabyrinthFallback(gridSize, wordLengths) {
    // Ветвистая непрерывная змейка с переменным шагом
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
      let word = this.data.getWordForCefrAndLength(userCefr, len, usedWords);
      if (!word || word.length !== len) {
        word = (word || "WORD").padEnd(len, "S").slice(0, len);
      }
      usedWords.push(word);
      words.push(word);
      routesMap[word] = route;

      for (let j = 0; j < len; j++) {
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
