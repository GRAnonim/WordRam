/**
 * WordRam - Level & Snaking Path Generator
 * Реализует генерацию ломаных маршрутов слов, наложение сетки 5x5,
 * пересечения букв, дистракторы, поиск бонусных слов и валидацию.
 */

class WordRamGenerator {
  constructor(dataModule = null) {
    this.data = dataModule || (typeof WordRamData !== "undefined" ? WordRamData : null);
    this.gridSize = 5;
    this.directions = [
      { dr: -1, dc: 0, name: "U" }, // Вверх
      { dr: 1, dc: 0, name: "D" },  // Вниз
      { dr: 0, dc: -1, name: "L" }, // Влево
      { dr: 0, dc: 1, name: "R" }   // Вправо
    ];
  }

  /**
   * Подсчет количества поворотов (изменений направления) в пути.
   * @param {Array<[number, number]>} route - массив координат [[r, c], ...]
   * @returns {number} число поворотов
   */
  countTurns(route) {
    if (!route || route.length < 3) return 0;
    let turns = 0;
    let prevDir = null;

    for (let i = 0; i < route.length - 1; i++) {
      const [r1, c1] = route[i];
      const [r2, c2] = route[i + 1];
      const dr = r2 - r1;
      const dc = c2 - c1;
      const currentDir = `${dr},${dc}`;

      if (prevDir !== null && prevDir !== currentDir) {
        turns++;
      }
      prevDir = currentDir;
    }
    return turns;
  }

  /**
   * Проверка валидности шага: внутри сетки 5x5 и ортогонально
   */
  isValidStep(r, c) {
    return r >= 0 && r < this.gridSize && c >= 0 && c < this.gridSize;
  }

  /**
   * Поиск случайного пути для слова с соблюдением минимального количества поворотов
   * и допустимости пересечений с уже занятыми ячейками сетки.
   */
  findSnakingRouteForWord(word, currentGrid, minTurns = 2, maxAttempts = 500) {
    const letters = word.toUpperCase().split("");
    const wordLen = letters.length;

    for (let attempt = 0; attempt < maxAttempts; attempt++) {
      // Выбираем случайную стартовую позицию
      const startR = Math.floor(Math.random() * this.gridSize);
      const startC = Math.floor(Math.random() * this.gridSize);

      // Проверяем, подходит ли стартовая ячейка (пустая или совпадает буква)
      if (currentGrid[startR][startC] !== null && currentGrid[startR][startC] !== letters[0]) {
        continue;
      }

      const route = [[startR, startC]];
      const visited = new Set([`${startR},${startC}`]);

      // Рекурсивный или итеративный поиск с возвратом
      if (this._stepRoute(1, letters, route, visited, currentGrid, minTurns)) {
        const turns = this.countTurns(route);
        if (turns >= minTurns) {
          return route;
        }
      }
    }

    // Если со строгим minTurns не нашли за maxAttempts, пробуем с minTurns = Math.max(1, minTurns - 1)
    if (minTurns > 1) {
      return this.findSnakingRouteForWord(word, currentGrid, minTurns - 1, maxAttempts);
    }

    return null;
  }

  _stepRoute(index, letters, route, visited, grid, minTurns) {
    if (index === letters.length) {
      return this.countTurns(route) >= minTurns;
    }

    const [currR, currC] = route[route.length - 1];
    const targetChar = letters[index];

    // Перемешиваем направления для случайности
    const dirs = [...this.directions].sort(() => Math.random() - 0.5);

    for (const dir of dirs) {
      const nextR = currR + dir.dr;
      const nextC = currC + dir.dc;
      const key = `${nextR},${nextC}`;

      if (!this.isValidStep(nextR, nextC)) continue;
      if (visited.has(key)) continue;

      // Проверка совпадения буквы или пустой ячейки
      const cellVal = grid[nextR][nextC];
      if (cellVal !== null && cellVal !== targetChar) continue;

      route.push([nextR, nextC]);
      visited.add(key);

      if (this._stepRoute(index + 1, letters, route, visited, grid, minTurns)) {
        return true;
      }

      // Backtrack
      route.pop();
      visited.delete(key);
    }

    return false;
  }

  /**
   * Сборка и генерация одного уровня по конфигурации
   */
  generateLevel(levelNumber = 1, customWords = null) {
    const config = this.data.getLevelConfig(levelNumber);
    const maxRetries = 25;

    for (let retry = 0; retry < maxRetries; retry++) {
      // 1. Создаем пустую сетку 5x5
      const grid = Array.from({ length: this.gridSize }, () => Array(this.gridSize).fill(null));
      const placedWords = [];
      const routes = {};

      // 2. Выбор слов (если не заданы кастомные)
      let targetWords = [];
      if (customWords && customWords.length > 0) {
        targetWords = customWords.map(w => w.toUpperCase());
      } else {
        const used = [];
        for (const len of config.wordLengths) {
          const w = this.data.getRandomWord(len, used);
          targetWords.push(w);
          used.push(w);
        }
      }

      // Сортируем слова от длинных к коротким для оптимального размещения
      const sortedWords = [...targetWords].sort((a, b) => b.length - a.length);
      let success = true;

      for (const word of sortedWords) {
        const route = this.findSnakingRouteForWord(word, grid, config.minTurns);
        if (!route) {
          success = false;
          break;
        }

        // Размещаем буквы слова в сетку
        for (let i = 0; i < word.length; i++) {
          const [r, c] = route[i];
          grid[r][c] = word[i];
        }

        placedWords.push(word);
        routes[word] = route;
      }

      if (!success || placedWords.length !== sortedWords.length) {
        continue; // пробуем заново
      }

      // 3. Заполнение оставшихся пустых ячеек буквами (дистракторы)
      let emptyCount = 0;
      for (let r = 0; r < this.gridSize; r++) {
        for (let c = 0; c < this.gridSize; c++) {
          if (grid[r][c] === null) {
            emptyCount++;
            const freqs = this.data.letterFrequencies;
            grid[r][c] = freqs[Math.floor(Math.random() * freqs.length)];
          }
        }
      }

      // 4. Валидация всех обязательных слов на поле
      const validationPassed = this.validateLevel(grid, placedWords, routes);
      if (!validationPassed) {
        continue;
      }

      // 5. Поиск бонусных слов на поле
      const bonusWords = this.findBonusWords(grid, placedWords);

      // 6. Подсчет метрик сложности
      const difficulty = this.calculateDifficulty(placedWords, routes, emptyCount);

      return {
        level: levelNumber,
        theme: config.theme,
        gridSize: this.gridSize,
        grid: grid,
        words: targetWords, // сохраняем исходный порядок
        routes: routes,
        bonusWords: bonusWords,
        coinsReward: config.coinsReward,
        difficulty: difficulty
      };
    }

    // Запасной fallback (если за maxRetries не удалось, генерируем базовый безопасный уровень)
    return this._generateSafeFallbackLevel(levelNumber, config);
  }

  /**
   * Валидация уровня: проверка, что все слова действительно читаются по заданным маршрутам,
   * без диагоналей, без дубликатов ячеек и с нужными поворотами.
   */
  validateLevel(grid, words, routes) {
    if (!grid || grid.length !== this.gridSize || grid[0].length !== this.gridSize) return false;

    for (const word of words) {
      const route = routes[word];
      if (!route || route.length !== word.length) return false;

      const visited = new Set();
      for (let i = 0; i < route.length; i++) {
        const [r, c] = route[i];
        if (!this.isValidStep(r, c)) return false;

        const key = `${r},${c}`;
        if (visited.has(key)) return false; // дубликат ячейки
        visited.add(key);

        if (grid[r][c] !== word[i]) return false; // не та буква

        if (i > 0) {
          const [prevR, prevC] = route[i - 1];
          const manhattan = Math.abs(r - prevR) + Math.abs(c - prevC);
          if (manhattan !== 1) return false; // диагональ или перескок запрещены!
        }
      }

      // Проверка на отсутствие прямых линий (минимум 1 поворот)
      if (this.countTurns(route) < 1 && word.length >= 3) {
        return false;
      }
    }
    return true;
  }

  /**
   * Поиск бонусных слов на сетке (слова из словаря, которые можно собрать, но они не обязательные)
   */
  findBonusWords(grid, mainWords) {
    const mainSet = new Set(mainWords.map(w => w.toUpperCase()));
    const foundBonuses = new Set();
    const minLen = 3;
    const maxLen = 6;

    // Рекурсивный обход от каждой ячейки до глубины maxLen
    for (let r = 0; r < this.gridSize; r++) {
      for (let c = 0; c < this.gridSize; c++) {
        this._searchWordsFromCell(r, c, grid, "", [[r, c]], new Set([`${r},${c}`]), minLen, maxLen, mainSet, foundBonuses);
      }
    }

    return Array.from(foundBonuses);
  }

  _searchWordsFromCell(r, c, grid, currentStr, path, visited, minLen, maxLen, mainSet, foundBonuses) {
    const nextStr = currentStr + grid[r][c];

    if (nextStr.length >= minLen) {
      if (this.data.isValidWord(nextStr) && !mainSet.has(nextStr)) {
        foundBonuses.add(nextStr);
      }
    }

    if (nextStr.length >= maxLen) return;

    for (const dir of this.directions) {
      const nr = r + dir.dr;
      const nc = c + dir.dc;
      const key = `${nr},${nc}`;

      if (this.isValidStep(nr, nc) && !visited.has(key)) {
        visited.add(key);
        path.push([nr, nc]);

        this._searchWordsFromCell(nr, nc, grid, nextStr, path, visited, minLen, maxLen, mainSet, foundBonuses);

        path.pop();
        visited.delete(key);
      }
    }
  }

  /**
   * Расчет метрики сложности уровня
   */
  calculateDifficulty(words, routes, emptyCells) {
    let totalLen = 0;
    let totalTurns = 0;
    const cellUsage = {};

    for (const word of words) {
      totalLen += word.length;
      const r = routes[word];
      totalTurns += this.countTurns(r);
      for (const [row, col] of r) {
        const key = `${row},${col}`;
        cellUsage[key] = (cellUsage[key] || 0) + 1;
      }
    }

    let intersections = 0;
    for (const key in cellUsage) {
      if (cellUsage[key] > 1) intersections += cellUsage[key] - 1;
    }

    const avgLength = totalLen / words.length;
    // Формула сложности: длина * 1.5 + повороты * 1.2 + пересечения * 2.0 + дистракторы * 0.3
    const score = Number((avgLength * 1.5 + totalTurns * 1.2 + intersections * 2.0 + emptyCells * 0.3).toFixed(1));

    return {
      score: score,
      metrics: {
        avgLength: Number(avgLength.toFixed(1)),
        turns: totalTurns,
        intersections: intersections,
        decoys: emptyCells
      }
    };
  }

  _generateSafeFallbackLevel(levelNumber, config) {
    const words = ["STAR", "MOON"];
    const grid = [
      ["S", "T", "A", "R", "X"],
      ["B", "O", "O", "M", "Y"],
      ["C", "N", "E", "T", "Z"],
      ["D", "F", "G", "H", "W"],
      ["J", "K", "L", "P", "Q"]
    ];
    // STAR: (0,0)->(0,1)->(0,2)->(0,3) -> превратим в змейку
    // S(0,0)->T(0,1)->A(1,1)->R(1,0) (2 поворота)
    grid[0][0] = "S";
    grid[0][1] = "T";
    grid[1][1] = "A";
    grid[1][0] = "R";

    // MOON: M(2,0)->O(3,0)->O(3,1)->N(2,1) (2 поворота)
    grid[2][0] = "M";
    grid[3][0] = "O";
    grid[3][1] = "O";
    grid[2][1] = "N";

    const routes = {
      "STAR": [[0, 0], [0, 1], [1, 1], [1, 0]],
      "MOON": [[2, 0], [3, 0], [3, 1], [2, 1]]
    };

    return {
      level: levelNumber,
      theme: config.theme,
      gridSize: 5,
      grid: grid,
      words: words,
      routes: routes,
      bonusWords: [],
      coinsReward: config.coinsReward,
      difficulty: this.calculateDifficulty(words, routes, 17)
    };
  }
}

// Экспорт для Node.js и браузера
if (typeof module !== "undefined" && module.exports) {
  module.exports = WordRamGenerator;
}
