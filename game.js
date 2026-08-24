/**
 * WordRam - Core Game Engine (v14)
 * Мелодичный звуковой синтез (пентатоника, колокольчики),
 * SVG линии свайпа, карточки перевода и система XP/рангов.
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
    this.cefrBadgeDisplay = options.cefrBadgeDisplay || document.getElementById("header-cefr-badge");
    this.slotsContainer = options.slotsContainer || document.getElementById("word-slots-container");
    this.svgConnector = document.getElementById("drag-connector-svg");

    // Игровое состояние
    this.currentLevel = 1;
    this.levelData = null;
    this.isDailyMode = false;
    this.foundWords = [];
    this.selectedPath = [];
    this.isDragging = false;
    this.revealedHints = {};
    this.hintsUsedInLevel = 0;
    this.isGameOver = false;

    // Палитра цветов для слов
    this.wordColors = [
      { bg: "#dcfce7", border: "#22c55e", text: "#15803d" },
      { bg: "#e0e7ff", border: "#6366f1", text: "#4338ca" },
      { bg: "#fef3c7", border: "#f59e0b", text: "#b45309" },
      { bg: "#fce7f3", border: "#ec4899", text: "#be185d" },
      { bg: "#e0f2fe", border: "#0ea5e9", text: "#0369a1" },
      { bg: "#ede9fe", border: "#8b5cf6", text: "#6d28d9" },
      { bg: "#ffedd5", border: "#f97316", text: "#c2410c" },
      { bg: "#ccfbf1", border: "#14b8a6", text: "#0f766e" },
      { bg: "#f1f5f9", border: "#64748b", text: "#334155" },
      { bg: "#fae8ff", border: "#d946ef", text: "#a21caf" }
    ];

    this.audioCtx = null;
    this.onLevelCompleted = options.onLevelCompleted || (() => {});
    this.onWordDetailsRequested = options.onWordDetailsRequested || (() => {});
    this.onXpUpdated = options.onXpUpdated || (() => {});

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

  ensureAudioUnlocked() {
    if (this.audioCtx && this.audioCtx.state === "suspended") {
      this.audioCtx.resume();
    }
  }

  playSound(type) {
    if (!this.storage.getSetting("soundEnabled") || !this.audioCtx) return;
    this.ensureAudioUnlocked();

    const now = this.audioCtx.currentTime;

    if (type === "select") {
      // Мелодичная маримба по мажорной пентатонике (C4, D4, E4, G4, A4, C5, D5, E5, G5)
      const pentatonic = [261.63, 293.66, 329.63, 392.00, 440.00, 523.25, 587.33, 659.25, 783.99];
      const pitchIdx = Math.min(this.selectedPath.length - 1, pentatonic.length - 1);
      const freq = pentatonic[Math.max(0, pitchIdx)];

      const osc = this.audioCtx.createOscillator();
      const gain = this.audioCtx.createGain();

      osc.type = "sine";
      osc.frequency.setValueAtTime(freq, now);

      // Мягкая капля / каримба
      gain.gain.setValueAtTime(0.09, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.12);

      osc.connect(gain);
      gain.connect(this.audioCtx.destination);

      osc.start(now);
      osc.stop(now + 0.12);
    } else if (type === "found") {
      // Теплый мажорный перелив колокольчиков (C5, E5, G5, B5, C6)
      const notes = [523.25, 659.25, 783.99, 987.77, 1046.5];
      notes.forEach((freq, idx) => {
        const osc = this.audioCtx.createOscillator();
        const gain = this.audioCtx.createGain();
        osc.type = "triangle";
        osc.frequency.setValueAtTime(freq, now + idx * 0.08);

        gain.gain.setValueAtTime(0.12, now + idx * 0.08);
        gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.08 + 0.35);

        osc.connect(gain);
        gain.connect(this.audioCtx.destination);

        osc.start(now + idx * 0.08);
        osc.stop(now + idx * 0.08 + 0.35);
      });
    } else if (type === "error") {
      // Мягкий деревянный щелчок (woodblock), не резкий
      const osc = this.audioCtx.createOscillator();
      const gain = this.audioCtx.createGain();
      osc.type = "sine";
      osc.frequency.setValueAtTime(160, now);
      osc.frequency.exponentialRampToValueAtTime(80, now + 0.14);

      gain.gain.setValueAtTime(0.07, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.14);

      osc.connect(gain);
      gain.connect(this.audioCtx.destination);

      osc.start(now);
      osc.stop(now + 0.14);
    } else if (type === "hint") {
      // Хрустальный перелив колокольчика (E5 -> B5)
      const notes = [659.25, 987.77];
      notes.forEach((freq, idx) => {
        const osc = this.audioCtx.createOscillator();
        const gain = this.audioCtx.createGain();
        osc.type = "sine";
        osc.frequency.setValueAtTime(freq, now + idx * 0.1);

        gain.gain.setValueAtTime(0.1, now + idx * 0.1);
        gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.1 + 0.4);

        osc.connect(gain);
        gain.connect(this.audioCtx.destination);

        osc.start(now + idx * 0.1);
        osc.stop(now + idx * 0.1 + 0.4);
      });
    } else if (type === "win") {
      // Торжественный благозвучный аккорд
      const chord = [261.63, 392.00, 523.25, 659.25, 783.99, 1046.5];
      chord.forEach((freq, idx) => {
        const osc = this.audioCtx.createOscillator();
        const gain = this.audioCtx.createGain();
        osc.type = "triangle";
        osc.frequency.setValueAtTime(freq, now + idx * 0.05);

        gain.gain.setValueAtTime(0.12, now + idx * 0.05);
        gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.05 + 0.85);

        osc.connect(gain);
        gain.connect(this.audioCtx.destination);

        osc.start(now + idx * 0.05);
        osc.stop(now + idx * 0.05 + 0.85);
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
    // Разблокируем аудио на первый клик/тап в любом месте экрана
    const unlockHandler = () => {
      this.ensureAudioUnlocked();
      window.removeEventListener("touchstart", unlockHandler);
      window.removeEventListener("mousedown", unlockHandler);
    };
    window.addEventListener("touchstart", unlockHandler, { passive: true });
    window.addEventListener("mousedown", unlockHandler, { passive: true });

    if (!this.gridElement) return;

    this.gridElement.addEventListener("mousedown", (e) => this.handlePointerStart(e));
    window.addEventListener("mousemove", (e) => this.handlePointerMove(e));
    window.addEventListener("mouseup", (e) => this.handlePointerEnd(e));

    this.gridElement.addEventListener("touchstart", (e) => this.handlePointerStart(e), { passive: false });
    window.addEventListener("touchmove", (e) => this.handlePointerMove(e), { passive: false });
    window.addEventListener("touchend", (e) => this.handlePointerEnd(e), { passive: false });
    window.addEventListener("touchcancel", (e) => this.handlePointerEnd(e), { passive: false });

    if (this.hintButton) {
      this.hintButton.addEventListener("click", () => this.applyStepHint());
    }
  }

  startLevel(levelNumber = 1, isDaily = false) {
    this.isDailyMode = isDaily;
    this.currentLevel = levelNumber;
    this.foundWords = [];
    this.selectedPath = [];
    this.revealedHints = {};
    this.hintsUsedInLevel = 0;
    this.isGameOver = false;

    const userCefr = this.storage.getEnglishLevel();
    this.levelData = this.generator.generateLevel(levelNumber, userCefr);

    for (const w of this.levelData.words) {
      this.revealedHints[w] = 0;
    }

    this.renderHeader();
    this.renderGrid();
    this.renderWordSlots();
    this.updatePreview("");
    this.updateCoinsDisplay();
    this.updateHintButtonLabel();
    this.clearSvgConnector();

    this.saveCurrentGameState();
  }

  updateHintButtonLabel() {
    if (!this.hintButton) return;
    const remainingFree = this.storage.state.hintsRemaining || 0;
    const cost = this.storage.state.hintCost || 15;

    if (remainingFree > 0) {
      this.hintButton.innerHTML = `<span class="btn-icon">💡</span> <span class="btn-text">Подсказка (${remainingFree} беспл.)</span>`;
    } else {
      this.hintButton.innerHTML = `<span class="btn-icon">💡</span> <span class="btn-text">Подсказка (-${cost} 🪙)</span>`;
    }
  }

  renderHeader() {
    const size = this.levelData ? this.levelData.gridSize : 5;
    if (this.levelTitleDisplay) {
      if (this.isDailyMode) {
        this.levelTitleDisplay.textContent = `Сегодня (${size}×${size})`;
      } else {
        this.levelTitleDisplay.textContent = `Уровень ${this.currentLevel} (${size}×${size})`;
      }
    }

    if (this.cefrBadgeDisplay) {
      this.cefrBadgeDisplay.textContent = `🇬🇧 ${this.storage.getEnglishLevel()}`;
    }

    if (this.progressElement) {
      let foundLetters = 0;
      this.foundWords.forEach(w => foundLetters += w.length);
      const totalLetters = this.levelData ? this.levelData.totalCells : 25;
      this.progressElement.textContent = `Слов: ${this.foundWords.length}/${this.levelData.words.length} (${foundLetters}/${totalLetters} букв)`;
    }
  }

  renderWordSlots() {
    if (!this.slotsContainer) return;
    this.slotsContainer.innerHTML = "";

    this.levelData.words.forEach((word, idx) => {
      const isFound = this.foundWords.includes(word);
      const slot = document.createElement("div");
      slot.className = `word-slot ${isFound ? "found" : ""}`;
      slot.dataset.word = word;

      if (isFound) {
        slot.textContent = word;
        const color = this.wordColors[idx % this.wordColors.length];
        slot.style.backgroundColor = color.bg;
        slot.style.borderColor = color.border;
        slot.style.color = color.text;

        slot.addEventListener("click", (e) => {
          e.stopPropagation();
          this.showWordDefinition(word);
        });
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
    this.gridElement.dataset.size = size;
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

  updateSvgConnector() {
    if (!this.svgConnector || !this.gridElement) return;
    if (this.selectedPath.length < 2) {
      this.clearSvgConnector();
      return;
    }

    const gridRect = this.gridElement.getBoundingClientRect();
    const points = this.selectedPath.map(([r, c]) => {
      const cell = this.getCellElement(r, c);
      if (!cell) return null;
      const cellRect = cell.getBoundingClientRect();
      const x = cellRect.left - gridRect.left + cellRect.width / 2;
      const y = cellRect.top - gridRect.top + cellRect.height / 2;
      return `${x.toFixed(1)},${y.toFixed(1)}`;
    }).filter(Boolean);

    if (points.length < 2) return;

    this.svgConnector.setAttribute("viewBox", `0 0 ${gridRect.width} ${gridRect.height}`);
    this.svgConnector.innerHTML = `
      <polyline points="${points.join(" ")}" class="drag-svg-glow" />
      <polyline points="${points.join(" ")}" class="drag-svg-core" />
    `;
  }

  clearSvgConnector() {
    if (this.svgConnector) {
      this.svgConnector.innerHTML = "";
    }
  }

  getCellElement(r, c) {
    return this.gridElement ? this.gridElement.querySelector(`[data-row='${r}'][data-col='${c}']`) : null;
  }

  updateCoinsDisplay() {
    if (this.coinsDisplay) {
      this.coinsDisplay.textContent = this.storage.getCoins();
    }
    this.updateHintButtonLabel();
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
    this.updateSvgConnector();
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
        this.updateSvgConnector();
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
      this.updateSvgConnector();
    }
  }

  handlePointerEnd(e) {
    if (!this.isDragging || this.isGameOver) return;
    this.isDragging = false;
    this.clearSvgConnector();

    if (this.selectedPath.length >= 2) {
      this.submitSelectedWord();
    } else if (this.selectedPath.length === 1) {
      const [r, c] = this.selectedPath[0];
      const foundWordAtCell = this.findWordByCell(r, c);
      if (foundWordAtCell) {
        this.showWordDefinition(foundWordAtCell);
      }
      this.selectedPath = [];
      this.refreshCellStates();
      this.updatePreview("");
    } else {
      this.selectedPath = [];
      this.refreshCellStates();
      this.updatePreview("");
    }
  }

  findWordByCell(r, c) {
    for (const word of this.foundWords) {
      const route = this.levelData.routes[word];
      if (route && route.some(([pr, pc]) => pr === r && pc === c)) {
        return word;
      }
    }
    return null;
  }

  showWordDefinition(word) {
    const details = this.generator.data.getWordDetails(word);
    if (details && typeof this.onWordDetailsRequested === "function") {
      this.playSound("select");
      this.onWordDetailsRequested(details);
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
        
        const newAchs = this.storage.recordWordToVocabulary(matchedTarget);
        this.playSound("found");
        this.vibrate(40);

        this.highlightFoundWordCells(this.selectedPath);
        this.showFloatingMessage(`Найдено: ${matchedTarget}! (+10 XP)`, "success");
        this.renderHeader();
        this.renderWordSlots();
        this.saveCurrentGameState();

        if (typeof this.onXpUpdated === "function") {
          this.onXpUpdated();
        }

        if (newAchs && newAchs.length > 0) {
          newAchs.forEach(ach => {
            this.showFloatingMessage(`🏆 Достижение: ${ach.title} (+${ach.rewardCoins} 🪙)`, "bonus");
          });
        }

        if (this.foundWords.length > 0 && this.foundWords.length === this.levelData.words.length) {
          this.handleLevelWin();
          return;
        }
      } else {
        this.showFloatingMessage("Уже найдено! Нажмите на слово для перевода.", "info");
      }
    } else {
      this.playSound("error");
      this.vibrate([30, 40, 30]);
      this.animateErrorCells(this.selectedPath);
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

    this.hintsUsedInLevel++;
    this.updateCoinsDisplay();
    this.updateHintButtonLabel();
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
      cell.classList.remove("selected", "path-head", "hinted", "found-cell");
      cell.style.backgroundColor = "";
      cell.style.borderColor = "";
      cell.style.color = "";
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

    this.levelData.words.forEach((word, wordIdx) => {
      if (this.foundWords.includes(word)) {
        const color = this.wordColors[wordIdx % this.wordColors.length];
        const route = this.levelData.routes[word];
        if (route) {
          route.forEach(([r, c]) => {
            const cell = this.getCellElement(r, c);
            if (cell) {
              cell.classList.add("found-cell");
              cell.style.backgroundColor = color.bg;
              cell.style.borderColor = color.border;
              cell.style.color = color.text;
            }
          });
        }
      }
    });
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

    const rewardCoins = this.levelData.coinsReward || 20;
    let completeRes = null;

    if (this.isDailyMode) {
      this.storage.completeDailyChallenge();
    } else {
      completeRes = this.storage.completeLevel(
        this.currentLevel,
        3,
        500,
        rewardCoins,
        this.hintsUsedInLevel,
        this.levelData.gridSize
      );
    }

    this.updateCoinsDisplay();

    if (typeof this.onLevelCompleted === "function") {
      this.onLevelCompleted({
        level: this.currentLevel,
        isDaily: this.isDailyMode,
        words: this.levelData.words,
        gridSize: this.levelData.gridSize,
        totalCells: this.levelData.totalCells,
        rewardCoins: rewardCoins,
        completeResult: completeRes
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
      revealedHints: this.revealedHints,
      hintsUsedInLevel: this.hintsUsedInLevel
    });
  }

  restoreGameState(saved) {
    if (!saved || !saved.levelData) return false;
    this.currentLevel = saved.level;
    this.isDailyMode = saved.isDaily;
    this.levelData = saved.levelData;
    this.foundWords = saved.foundWords || [];
    this.revealedHints = saved.revealedHints || {};
    this.hintsUsedInLevel = saved.hintsUsedInLevel || 0;
    this.isGameOver = false;

    this.renderHeader();
    this.renderGrid();
    this.renderWordSlots();
    this.updatePreview("");
    this.updateCoinsDisplay();
    this.updateHintButtonLabel();
    this.clearSvgConnector();
    return true;
  }
}

if (typeof module !== "undefined" && module.exports) {
  module.exports = WordRamGame;
}
