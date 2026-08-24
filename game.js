/**
 * WordRam - Core Game Engine (v7)
 * Обработка ввода (тач/мышь), проверка слов, пошаговые подсказки,
 * визуальные эффекты и синтез звуков через Web Audio API.
 */

class WordRamGame {
  constructor(options = {}) {
    this.storage = options.storage || new WordRamStorage();
    this.generator = options.generator || new WordRamGenerator(WordRamData);

    // DOM Элементы
    this.container = options.container || document.getElementById("game-container");
    this.gridElement = options.gridElement || document.getElementById("game-grid");
    this.wordPreviewElement = options.wordPreviewElement || document.getElementById("word-preview");
    this.progressElement = options.progressElement || document.getElementById("level-progress-text");
    this.hintButton = options.hintButton || document.getElementById("btn-hint");
    this.coinsDisplay = options.coinsDisplay || document.getElementById("coins-counter");
    this.levelTitleDisplay = options.levelTitleDisplay || document.getElementById("current-level-title");
    this.slotsContainer = options.slotsContainer || document.getElementById("word-slots-container");

    // Игровое состояние
    this.currentLevel = 1;
    this.levelData = null;
    this.isDailyMode = false;
    this.foundWords = [];
    this.foundBonusWords = [];
    this.selectedPath = []; // [[r, c], ...]
    this.isDragging = false;
    this.revealedHints = {}; // { word: revealedLetterCount }
    this.isGameOver = false;

    // Web Audio синтезатор
    this.audioCtx = null;

    // Callbacks
    this.onLevelCompleted = options.onLevelCompleted || (() => {});
    this.onProgressUpdated = options.onProgressUpdated || (() => {});

    this.initAudio();
    this.bindEvents();
  }

  initAudio() {
    try {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (AudioContext) {
        this.audioCtx = new AudioContext();
      }
    } catch (e) {
      console.warn("Web Audio API не поддерживается", e);
    }
  }

  playSound(type) {
    if (!this.storage.getSetting("soundEnabled") || !this.audioCtx) return;
    if (this.audioCtx.state === "suspended") {
      this.audioCtx.resume();
    }

    const now = this.audioCtx.currentTime;

    if (type === "select") {
      const osc = this.audioCtx.createOscillator();
      const gain = this.audioCtx.createGain();
      const pitch = 320 + Math.min(this.selectedPath.length * 60, 480);
      osc.type = "sine";
      osc.frequency.setValueAtTime(pitch, now);
      gain.gain.setValueAtTime(0.08, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.08);
      osc.connect(gain);
      gain.connect(this.audioCtx.destination);
      osc.start(now);
      osc.stop(now + 0.08);
    } else if (type === "found") {
      const notes = [523.25, 659.25, 783.99, 1046.5];
      notes.forEach((freq, idx) => {
        const osc = this.audioCtx.createOscillator();
        const gain = this.audioCtx.createGain();
        osc.type = "triangle";
        osc.frequency.setValueAtTime(freq, now + idx * 0.07);
        gain.gain.setValueAtTime(0.12, now + idx * 0.07);
        gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.07 + 0.25);
        osc.connect(gain);
        gain.connect(this.audioCtx.destination);
        osc.start(now + idx * 0.07);
        osc.stop(now + idx * 0.07 + 0.25);
      });
    } else if (type === "bonus") {
      const notes = [880, 1108.73, 1318.51, 1760];
      notes.forEach((freq, idx) => {
        const osc = this.audioCtx.createOscillator();
        const gain = this.audioCtx.createGain();
        osc.type = "sine";
        osc.frequency.setValueAtTime(freq, now + idx * 0.05);
        gain.gain.setValueAtTime(0.1, now + idx * 0.05);
        gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.05 + 0.2);
        osc.connect(gain);
        gain.connect(this.audioCtx.destination);
        osc.start(now + idx * 0.05);
        osc.stop(now + idx * 0.05 + 0.2);
      });
    } else if (type === "error") {
      const osc = this.audioCtx.createOscillator();
      const gain = this.audioCtx.createGain();
      osc.type = "sawtooth";
      osc.frequency.setValueAtTime(180, now);
      osc.frequency.linearRampToValueAtTime(120, now + 0.15);
      gain.gain.setValueAtTime(0.08, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.15);
      osc.connect(gain);
      gain.connect(this.audioCtx.destination);
      osc.start(now);
      osc.stop(now + 0.15);
    } else if (type === "hint") {
      const osc = this.audioCtx.createOscillator();
      const gain = this.audioCtx.createGain();
      osc.type = "sine";
      osc.frequency.setValueAtTime(987.77, now);
      gain.gain.setValueAtTime(0.12, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.35);
      osc.connect(gain);
      gain.connect(this.audioCtx.destination);
      osc.start(now);
      osc.stop(now + 0.35);
    } else if (type === "win") {
      const chord = [523.25, 659.25, 783.99, 1046.5, 1318.51];
      chord.forEach((freq, idx) => {
        const osc = this.audioCtx.createOscillator();
        const gain = this.audioCtx.createGain();
        osc.type = "sine";
        osc.frequency.setValueAtTime(freq, now + 0.05 * idx);
        gain.gain.setValueAtTime(0.12, now + 0.05 * idx);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.8);
        osc.connect(gain);
        gain.connect(this.audioCtx.destination);
        osc.start(now + 0.05 * idx);
        osc.stop(now + 0.8);
      });
    }
  }

  vibrate(duration = 20) {
    if (this.storage.getSetting("vibrationEnabled") && navigator.vibrate) {
      try {
        navigator.vibrate(duration);
      } catch (e) {}
    }
  }

  bindEvents() {
    if (!this.gridElement) return;

    // Мышь
    this.gridElement.addEventListener("mousedown", (e) => this.handlePointerStart(e));
    window.addEventListener("mousemove", (e) => this.handlePointerMove(e));
    window.addEventListener("mouseup", (e) => this.handlePointerEnd(e));

    // Тач / мобильные устройства
    this.gridElement.addEventListener("touchstart", (e) => this.handlePointerStart(e), { passive: false });
    window.addEventListener("touchmove", (e) => this.handlePointerMove(e), { passive: false });
    window.addEventListener("touchend", (e) => this.handlePointerEnd(e), { passive: false });
    window.addEventListener("touchcancel", (e) => this.handlePointerEnd(e), { passive: false });

    // Кнопка подсказки
    if (this.hintButton) {
      this.hintButton.addEventListener("click", () => this.applyStepHint());
    }
  }

  /**
   * Запуск уровня по номеру
   */
  startLevel(levelNumber = 1, isDaily = false) {
    this.isDailyMode = isDaily;
    this.currentLevel = levelNumber;
    this.foundWords = [];
    this.foundBonusWords = [];
    this.selectedPath = [];
    this.revealedHints = {};
    this.isGameOver = false;

    // Генерируем уровень
    this.levelData = this.generator.generateLevel(levelNumber);

    // Инициализируем словарь подсказок
    for (const w of this.levelData.words) {
      this.revealedHints[w] = 0;
    }

    this.renderHeader();
    this.renderGrid();
    this.renderWordSlots();
    this.updatePreview("");
    this.updateCoinsDisplay();

    // Сохраняем состояние
    this.saveCurrentGameState();
  }

  renderHeader() {
    if (this.levelTitleDisplay) {
      if (this.isDailyMode) {
        this.levelTitleDisplay.textContent = `Сегодня (${new Date().toLocaleDateString("ru-RU")})`;
      } else {
        this.levelTitleDisplay.textContent = `Уровень ${this.currentLevel}`;
      }
    }

    if (this.progressElement) {
      this.progressElement.textContent = `Слов найдено: ${this.foundWords.length} из ${this.levelData.words.length}`;
    }
  }

  /**
   * Отрисовка слотов слов (скрытый список)
   */
  renderWordSlots() {
    if (!this.slotsContainer) return;
    this.slotsContainer.innerHTML = "";

    this.levelData.words.forEach((word) => {
      const isFound = this.foundWords.includes(word);
      const slot = document.createElement("div");
      slot.className = `word-slot ${isFound ? "found" : ""}`;
      slot.dataset.word = word;

      if (isFound) {
        slot.textContent = word;
      } else {
        const dots = "● ".repeat(word.length).trim();
        slot.innerHTML = `<span class="slot-dots">${dots}</span> <span class="slot-length">(${word.length})</span>`;
      }

      this.slotsContainer.appendChild(slot);
    });
  }

  renderGrid() {
    if (!this.gridElement) return;
    this.gridElement.innerHTML = "";

    const size = this.levelData.gridSize || 5;
    this.gridElement.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    this.gridElement.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    for (let r = 0; r < size; r++) {
      for (let c = 0; c < size; c++) {
        const cell = document.createElement("div");
        cell.className = "grid-cell";
        cell.dataset.row = r;
        cell.dataset.col = c;
        cell.textContent = this.levelData.grid[r][c];

        const hintBadge = document.createElement("span");
        hintBadge.className = "hint-badge";
        cell.appendChild(hintBadge);

        this.gridElement.appendChild(cell);
      }
    }

    this.refreshCellStates();
  }

  getCellElement(r, c) {
    return this.gridElement ? this.gridElement.querySelector(`[data-row='${r}'][data-col='${c}']`) : null;
  }

  updateCoinsDisplay() {
    if (this.coinsDisplay) {
      this.coinsDisplay.textContent = this.storage.getCoins();
    }
  }

  updatePreview(text) {
    if (this.wordPreviewElement) {
      this.wordPreviewElement.textContent = text || " ";
      if (text) {
        this.wordPreviewElement.classList.add("active");
      } else {
        this.wordPreviewElement.classList.remove("active");
      }
    }
  }

  getCellFromPointer(e) {
    let clientX, clientY;
    if (e.touches && e.touches.length > 0) {
      clientX = e.touches[0].clientX;
      clientY = e.touches[0].clientY;
    } else {
      clientX = e.clientX;
      clientY = e.clientY;
    }

    const element = document.elementFromPoint(clientX, clientY);
    if (!element) return null;

    const cell = element.closest(".grid-cell");
    if (cell && this.gridElement.contains(cell)) {
      const r = parseInt(cell.dataset.row, 10);
      const c = parseInt(cell.dataset.col, 10);
      return [r, c];
    }
    return null;
  }

  handlePointerStart(e) {
    if (this.isGameOver) return;
    const coords = this.getCellFromPointer(e);
    if (!coords) return;

    if (e.cancelable && e.type.startsWith("touch")) {
      e.preventDefault();
    }

    this.isDragging = true;
    this.selectedPath = [coords];
    this.playSound("select");
    this.vibrate(15);
    this.refreshCellStates();
    this.updatePreviewFromPath();
  }

  handlePointerMove(e) {
    if (!this.isDragging || this.isGameOver) return;
    const coords = this.getCellFromPointer(e);
    if (!coords) return;

    if (e.cancelable && e.type.startsWith("touch")) {
      e.preventDefault();
    }

    const [r, c] = coords;
    const pathLen = this.selectedPath.length;
    const [lastR, lastC] = this.selectedPath[pathLen - 1];

    if (pathLen > 1) {
      const [prevR, prevC] = this.selectedPath[pathLen - 2];
      if (prevR === r && prevC === c) {
        this.selectedPath.pop();
        this.playSound("select");
        this.vibrate(10);
        this.refreshCellStates();
        this.updatePreviewFromPath();
        return;
      }
    }

    const alreadyVisited = this.selectedPath.some(([pr, pc]) => pr === r && pc === c);
    if (alreadyVisited) return;

    const manhattanDist = Math.abs(r - lastR) + Math.abs(c - lastC);
    if (manhattanDist === 1) {
      this.selectedPath.push(coords);
      this.playSound("select");
      this.vibrate(15);
      this.refreshCellStates();
      this.updatePreviewFromPath();
    }
  }

  handlePointerEnd(e) {
    if (!this.isDragging || this.isGameOver) return;
    this.isDragging = false;

    if (this.selectedPath.length >= 2) {
      this.submitSelectedWord();
    } else {
      this.selectedPath = [];
      this.refreshCellStates();
      this.updatePreview("");
    }
  }

  getSelectedWordString() {
    return this.selectedPath.map(([r, c]) => this.levelData.grid[r][c]).join("");
  }

  updatePreviewFromPath() {
    const word = this.getSelectedWordString();
    this.updatePreview(word);
  }

  submitSelectedWord() {
    const word = this.getSelectedWordString();
    const reversedWord = word.split("").reverse().join("");

    let matchedTarget = null;
    if (this.levelData.words.includes(word)) {
      matchedTarget = word;
    } else if (this.levelData.words.includes(reversedWord)) {
      matchedTarget = reversedWord;
    }

    if (matchedTarget) {
      if (!this.foundWords.includes(matchedTarget)) {
        this.foundWords.push(matchedTarget);
        this.storage.recordWordFound(false);
        this.playSound("found");
        this.vibrate(40);

        this.highlightFoundWordCells(this.selectedPath);
        this.showFloatingMessage(`Найдено: ${matchedTarget}!`, "success");
        this.renderHeader();
        this.renderWordSlots();
        this.saveCurrentGameState();

        if (this.foundWords.length > 0 && this.levelData && this.levelData.words && this.foundWords.length === this.levelData.words.length) {
          this.handleLevelWin();
          return;
        }
      } else {
        this.showFloatingMessage("Уже найдено!", "info");
      }
    } else {
      let matchedBonus = null;
      if (this.levelData.bonusWords.includes(word)) {
        matchedBonus = word;
      } else if (this.levelData.bonusWords.includes(reversedWord)) {
        matchedBonus = reversedWord;
      }

      if (matchedBonus) {
        if (!this.foundBonusWords.includes(matchedBonus)) {
          this.foundBonusWords.push(matchedBonus);
          this.storage.recordWordFound(true);
          this.playSound("bonus");
          this.vibrate(30);
          this.showFloatingMessage(`+2 🪙 Бонус: ${matchedBonus}!`, "bonus");
          this.updateCoinsDisplay();
          this.saveCurrentGameState();
        } else {
          this.showFloatingMessage("Бонусное слово уже собрано!", "info");
        }
      } else {
        this.playSound("error");
        this.vibrate([30, 40, 30]);
        this.animateErrorCells(this.selectedPath);
      }
    }

    this.selectedPath = [];
    this.refreshCellStates();
    this.updatePreview("");
  }

  highlightFoundWordCells(path) {
    path.forEach(([r, c]) => {
      const cell = this.getCellElement(r, c);
      if (cell) {
        cell.classList.add("cell-found-pop");
        setTimeout(() => cell.classList.remove("cell-found-pop"), 400);
      }
    });
  }

  animateErrorCells(path) {
    path.forEach(([r, c]) => {
      const cell = this.getCellElement(r, c);
      if (cell) {
        cell.classList.add("cell-shake");
        setTimeout(() => cell.classList.remove("cell-shake"), 400);
      }
    });
  }

  applyStepHint() {
    if (this.isGameOver) return;

    const unsolvedWord = this.levelData.words.find(w => !this.foundWords.includes(w));
    if (!unsolvedWord) return;

    const hintRes = this.storage.useHint();
    if (!hintRes.success) {
      this.showFloatingMessage(`Нужно ${hintRes.needed} монет для подсказки!`, "warning");
      this.playSound("error");
      return;
    }

    this.updateCoinsDisplay();
    this.playSound("hint");
    this.vibrate(25);

    const currentStep = this.revealedHints[unsolvedWord] || 0;
    const route = this.levelData.routes[unsolvedWord];

    if (currentStep < route.length) {
      this.revealedHints[unsolvedWord] = currentStep + 1;
      const [r, c] = route[currentStep];

      const cell = this.getCellElement(r, c);
      if (cell) {
        cell.classList.add("cell-hint-pulse");
        setTimeout(() => cell.classList.remove("cell-hint-pulse"), 1200);
      }

      this.showFloatingMessage(`Подсказка: буква ${currentStep + 1} (${unsolvedWord[currentStep]})`, "info");
      this.refreshCellStates();
      this.saveCurrentGameState();
    }
  }

  refreshCellStates() {
    if (!this.gridElement || !this.levelData) return;

    const allCells = this.gridElement.querySelectorAll(".grid-cell");
    allCells.forEach(cell => {
      cell.classList.remove("selected", "path-head", "hinted");
      const badge = cell.querySelector(".hint-badge");
      if (badge) badge.textContent = "";
    });

    this.selectedPath.forEach(([r, c], idx) => {
      const cell = this.getCellElement(r, c);
      if (cell) {
        cell.classList.add("selected");
        if (idx === this.selectedPath.length - 1) {
          cell.classList.add("path-head");
        }
      }
    });

    for (const word of this.levelData.words) {
      if (this.foundWords.includes(word)) continue;
      const count = this.revealedHints[word] || 0;
      const route = this.levelData.routes[word];
      for (let i = 0; i < count && i < route.length; i++) {
        const [r, c] = route[i];
        const cell = this.getCellElement(r, c);
        if (cell) {
          cell.classList.add("hinted");
          const badge = cell.querySelector(".hint-badge");
          if (badge) badge.textContent = `${i + 1}`;
        }
      }
    }

    for (const word of this.foundWords) {
      const route = this.levelData.routes[word];
      if (route) {
        route.forEach(([r, c]) => {
          const cell = this.getCellElement(r, c);
          if (cell) {
            cell.classList.add("found-cell");
          }
        });
      }
    }
  }

  showFloatingMessage(text, type = "info") {
    const toast = document.createElement("div");
    toast.className = `game-toast toast-${type}`;
    toast.textContent = text;
    document.body.appendChild(toast);

    setTimeout(() => toast.classList.add("show"), 20);
    setTimeout(() => {
      toast.classList.remove("show");
      setTimeout(() => toast.remove(), 300);
    }, 1800);
  }

  handleLevelWin() {
    if (this.isGameOver) return;
    if (!this.foundWords || this.foundWords.length === 0) return;

    this.isGameOver = true;
    this.playSound("win");
    this.vibrate([100, 50, 100, 50, 150]);

    const reward = this.levelData.coinsReward || 15;

    if (this.isDailyMode) {
      this.storage.completeDailyChallenge();
    } else {
      this.storage.completeLevel(this.currentLevel, 3, 500, reward);
    }

    this.updateCoinsDisplay();

    if (typeof this.onLevelCompleted === "function") {
      this.onLevelCompleted({
        level: this.currentLevel,
        isDaily: this.isDailyMode,
        words: this.levelData.words,
        bonusWordsFound: this.foundBonusWords,
        rewardCoins: reward
      });
    }
  }

  saveCurrentGameState() {
    if (this.isGameOver) return;
    this.storage.saveActiveGame({
      level: this.currentLevel,
      isDaily: this.isDailyMode,
      levelData: this.levelData,
      foundWords: this.foundWords,
      foundBonusWords: this.foundBonusWords,
      revealedHints: this.revealedHints
    });
  }

  restoreGameState(saved) {
    if (!saved || !saved.levelData) return false;
    this.currentLevel = saved.level;
    this.isDailyMode = saved.isDaily;
    this.levelData = saved.levelData;
    this.foundWords = saved.foundWords || [];
    this.foundBonusWords = saved.foundBonusWords || [];
    this.revealedHints = saved.revealedHints || {};
    this.isGameOver = false;

    this.renderHeader();
    this.renderGrid();
    this.renderWordSlots();
    this.updatePreview("");
    this.updateCoinsDisplay();
    return true;
  }
}

// Экспорт для Node.js и браузера
if (typeof module !== "undefined" && module.exports) {
  module.exports = WordRamGame;
}
