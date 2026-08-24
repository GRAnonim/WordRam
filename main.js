/**
 * WordRam - Main Application Controller (v10)
 * Управление экранами, тестом уровня CEFR (без подсказок перевода),
 * модальными окнами и PWA.
 */

document.addEventListener("DOMContentLoaded", () => {
  const storage = new WordRamStorage();
  const generator = new WordRamGenerator(WordRamData);

  // Модальные окна
  const winModal = document.getElementById("modal-victory");
  const winWordsList = document.getElementById("win-words-list");
  const winRewardText = document.getElementById("win-reward-text");
  const btnNextLevel = document.getElementById("btn-next-level");
  const btnCloseModal = document.getElementById("btn-close-modal");

  const placementModal = document.getElementById("modal-placement");
  const btnOpenPlacement = document.getElementById("btn-open-placement-test");
  const btnClosePlacement = document.getElementById("btn-close-placement");
  const quizStep = document.getElementById("placement-quiz-step");
  const resultStep = document.getElementById("placement-result-step");
  const quizWordEl = document.getElementById("quiz-word-display");
  const quizCounterEl = document.getElementById("quiz-progress-counter");
  const quizFillEl = document.getElementById("quiz-progress-fill");
  const btnApplyPlacement = document.getElementById("btn-apply-placement");
  const resultBadgeEl = document.getElementById("placement-result-badge");
  const resultTitleEl = document.getElementById("placement-result-title");
  const resultDescEl = document.getElementById("placement-result-desc");
  const settingsCefrName = document.getElementById("settings-cefr-name");
  const headerCefrBadge = document.getElementById("header-cefr-badge");

  function hideVictoryModal() {
    if (winModal) {
      winModal.style.setProperty("display", "none", "important");
      winModal.classList.remove("open");
    }
  }

  function showVictoryModal(summary) {
    if (!winModal || !summary || !summary.words || summary.words.length === 0) return;

    if (winWordsList) {
      winWordsList.innerHTML = summary.words
        .map((w) => `<li class="win-word-item">✔ <strong>${w}</strong></li>`)
        .join("");
    }

    if (winRewardText) {
      winRewardText.textContent = `+${summary.rewardCoins} 🪙 монет получено!`;
    }

    winModal.style.setProperty("display", "flex", "important");
    winModal.classList.add("open");
  }

  hideVictoryModal();
  if (placementModal) {
    placementModal.style.setProperty("display", "none", "important");
    placementModal.classList.remove("open");
  }

  if (btnCloseModal) btnCloseModal.addEventListener("click", () => hideVictoryModal());

  if (btnNextLevel) {
    btnNextLevel.addEventListener("click", () => {
      hideVictoryModal();
      const nextLvl = (storage.getSetting("currentLevel") || 1);
      game.startLevel(nextLvl, false);
      switchTab("game");
    });
  }

  // Инициализация игрового ядра
  const game = new WordRamGame({
    storage: storage,
    generator: generator,
    onLevelCompleted: (summary) => showVictoryModal(summary)
  });

  // ----------------------------------------------------
  // Диагностический тест уровня английского (CEFR)
  // ----------------------------------------------------
  let quizIndex = 0;
  let quizAnswers = {};
  let evaluatedResult = null;

  function openPlacementTest() {
    quizIndex = 0;
    quizAnswers = {};
    if (quizStep) quizStep.style.display = "block";
    if (resultStep) resultStep.style.display = "none";
    renderQuizQuestion();

    if (placementModal) {
      placementModal.style.setProperty("display", "flex", "important");
      placementModal.classList.add("open");
    }
  }

  function closePlacementTest() {
    if (placementModal) {
      placementModal.style.setProperty("display", "none", "important");
      placementModal.classList.remove("open");
    }
  }

  function renderQuizQuestion() {
    const questions = WordRamData.placementTestWords;
    if (quizIndex >= questions.length) {
      showQuizResult();
      return;
    }

    const current = questions[quizIndex];
    if (quizWordEl) quizWordEl.textContent = current.word;
    if (quizCounterEl) quizCounterEl.textContent = `${quizIndex + 1} / ${questions.length}`;
    if (quizFillEl) {
      const pct = ((quizIndex + 1) / questions.length) * 100;
      quizFillEl.style.width = `${pct}%`;
    }
  }

  function handleQuizAnswer(answerType) {
    const questions = WordRamData.placementTestWords;
    const current = questions[quizIndex];
    quizAnswers[current.word] = answerType;

    quizIndex++;
    if (quizIndex < questions.length) {
      renderQuizQuestion();
    } else {
      showQuizResult();
    }
  }

  function showQuizResult() {
    evaluatedResult = WordRamData.evaluatePlacementTest(quizAnswers);
    if (quizStep) quizStep.style.display = "none";
    if (resultStep) resultStep.style.display = "block";

    if (resultBadgeEl) resultBadgeEl.textContent = evaluatedResult.badge;
    if (resultTitleEl) resultTitleEl.textContent = `Ваш уровень: ${evaluatedResult.title}`;
    if (resultDescEl) resultDescEl.textContent = evaluatedResult.desc;
  }

  const quizButtons = document.querySelectorAll(".quiz-btn");
  quizButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      const ans = btn.dataset.answer;
      handleQuizAnswer(ans);
    });
  });

  if (btnOpenPlacement) btnOpenPlacement.addEventListener("click", () => openPlacementTest());
  if (btnClosePlacement) btnClosePlacement.addEventListener("click", () => closePlacementTest());

  if (btnApplyPlacement) {
    btnApplyPlacement.addEventListener("click", () => {
      if (evaluatedResult) {
        storage.setEnglishLevel(evaluatedResult.code);
        updateCefrUI();
      }
      closePlacementTest();
      game.startLevel(1, false);
      switchTab("game");
    });
  }

  function updateCefrUI() {
    const levelCode = storage.getEnglishLevel();
    if (headerCefrBadge) headerCefrBadge.textContent = `🇬🇧 ${levelCode}`;
    if (settingsCefrName) {
      const labels = {
        A1: "A1 — Elementary",
        A2: "A2 — Pre-Intermediate",
        B1: "B1 — Intermediate",
        B2: "B2 — Upper-Intermediate",
        C1: "C1 — Advanced"
      };
      settingsCefrName.textContent = labels[levelCode] || levelCode;
    }
  }

  // ----------------------------------------------------
  // Экраны и вкладки
  // ----------------------------------------------------
  const screens = {
    game: document.getElementById("screen-game"),
    levels: document.getElementById("screen-levels"),
    daily: document.getElementById("screen-daily"),
    settings: document.getElementById("screen-settings")
  };

  const navButtons = {
    game: document.getElementById("nav-btn-game"),
    levels: document.getElementById("nav-btn-levels"),
    daily: document.getElementById("nav-btn-daily"),
    settings: document.getElementById("nav-btn-settings")
  };

  let activeTab = "game";

  function switchTab(tabKey) {
    activeTab = tabKey;

    Object.keys(screens).forEach((key) => {
      if (screens[key]) {
        screens[key].style.display = (key === tabKey) ? "flex" : "none";
      }
    });

    Object.keys(navButtons).forEach((key) => {
      if (navButtons[key]) {
        if (key === tabKey) {
          navButtons[key].classList.add("active");
        } else {
          navButtons[key].classList.remove("active");
        }
      }
    });

    if (tabKey === "levels") renderLevelsScreen();
    if (tabKey === "daily") renderDailyScreen();
    if (tabKey === "settings") renderSettingsScreen();
  }

  Object.keys(navButtons).forEach((key) => {
    if (navButtons[key]) {
      navButtons[key].addEventListener("click", () => switchTab(key));
    }
  });

  // Экран: Уровни
  const levelsGrid = document.getElementById("levels-grid");
  function renderLevelsScreen() {
    if (!levelsGrid) return;
    levelsGrid.innerHTML = "";

    const unlocked = storage.getSetting("unlockedLevel") || 1;
    const totalLevels = 60;

    for (let lvl = 1; lvl <= totalLevels; lvl++) {
      const isUnlocked = lvl <= unlocked;
      const stars = storage.getLevelStars(lvl);
      const isCurrent = lvl === storage.getSetting("currentLevel");

      const card = document.createElement("button");
      card.className = `level-card ${isUnlocked ? "unlocked" : "locked"} ${isCurrent ? "current" : ""}`;
      card.disabled = !isUnlocked;

      let starsHtml = "";
      if (isUnlocked && stars > 0) {
        starsHtml = `<div class="level-stars">${"★".repeat(stars)}${"☆".repeat(3 - stars)}</div>`;
      }

      card.innerHTML = `
        <div class="level-num">${isUnlocked ? lvl : "🔒"}</div>
        ${starsHtml}
      `;

      if (isUnlocked) {
        card.addEventListener("click", () => {
          hideVictoryModal();
          game.startLevel(lvl, false);
          switchTab("game");
        });
      }

      levelsGrid.appendChild(card);
    }
  }

  // Экран: Сегодня
  const dailyBtnStart = document.getElementById("btn-start-daily");
  const dailyStreakEl = document.getElementById("daily-streak-count");
  const dailyStatusBadge = document.getElementById("daily-status-badge");

  function renderDailyScreen() {
    const status = storage.getDailyStatus();
    if (dailyStreakEl) dailyStreakEl.textContent = status.streak;

    if (dailyStatusBadge) {
      if (status.isTodayCompleted) {
        dailyStatusBadge.textContent = "Испытание выполнено ✔";
        dailyStatusBadge.className = "status-badge completed";
        if (dailyBtnStart) dailyBtnStart.textContent = "Сыграть снова";
      } else {
        dailyStatusBadge.textContent = "Новое испытание ждет вас!";
        dailyStatusBadge.className = "status-badge pending";
        if (dailyBtnStart) dailyBtnStart.textContent = "Начать игру (+50 🪙)";
      }
    }
  }

  if (dailyBtnStart) {
    dailyBtnStart.addEventListener("click", () => {
      hideVictoryModal();
      // Ежедневный уровень генерирует поле 5x5 или 6x6 со змейками
      const todayLvl = 10 + (new Date().getDate() % 20);
      game.startLevel(todayLvl, true);
      switchTab("game");
    });
  }

  // Экран: Настройки
  const toggleSound = document.getElementById("setting-sound");
  const toggleVibration = document.getElementById("setting-vibration");
  const toggleTheme = document.getElementById("setting-theme");
  const btnResetData = document.getElementById("btn-reset-data");
  const statWords = document.getElementById("stat-total-words");
  const statLevels = document.getElementById("stat-levels-completed");

  function renderSettingsScreen() {
    updateCefrUI();
    if (toggleSound) toggleSound.checked = !!storage.getSetting("soundEnabled");
    if (toggleVibration) toggleVibration.checked = !!storage.getSetting("vibrationEnabled");
    if (toggleTheme) toggleTheme.checked = !!storage.getSetting("darkTheme");

    const stats = storage.getSetting("stats");
    if (statWords && stats) statWords.textContent = stats.totalWordsFound || 0;
    if (statLevels && stats) statLevels.textContent = stats.levelsCompleted || 0;
  }

  if (toggleSound) {
    toggleSound.addEventListener("change", (e) => {
      storage.setSetting("soundEnabled", e.target.checked);
      if (e.target.checked) game.playSound("select");
    });
  }

  if (toggleVibration) {
    toggleVibration.addEventListener("change", (e) => {
      storage.setSetting("vibrationEnabled", e.target.checked);
      if (e.target.checked) game.vibrate(20);
    });
  }

  if (toggleTheme) {
    toggleTheme.addEventListener("change", (e) => {
      storage.setSetting("darkTheme", e.target.checked);
      applyTheme(e.target.checked);
    });
  }

  function applyTheme(isDark) {
    if (isDark) {
      document.body.classList.add("dark-theme");
    } else {
      document.body.classList.remove("dark-theme");
    }
  }

  if (btnResetData) {
    btnResetData.addEventListener("click", () => {
      if (confirm("Вы уверены, что хотите сбросить весь прогресс и монеты?")) {
        storage.resetAll();
        hideVictoryModal();
        applyTheme(false);
        renderSettingsScreen();
        game.startLevel(1, false);
        switchTab("game");
      }
    });
  }

  // ----------------------------------------------------
  // Запуск при старте
  // ----------------------------------------------------
  applyTheme(!!storage.getSetting("darkTheme"));
  updateCefrUI();

  const saved = storage.getActiveSavedGame();
  if (saved && saved.levelData && saved.foundWords && saved.foundWords.length < saved.levelData.words.length) {
    game.restoreGameState(saved);
  } else {
    storage.clearActiveSavedGame();
    const cur = storage.getSetting("currentLevel") || 1;
    game.startLevel(cur, false);
  }

  // Если игрок еще ни разу не проходил тест уровня, предлагаем тест
  if (!storage.getSetting("hasCompletedPlacementTest")) {
    setTimeout(() => {
      openPlacementTest();
    }, 600);
  }

  if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
      navigator.serviceWorker
        .register("sw.js")
        .then((reg) => {
          console.log("WordRam PWA ServiceWorker зарегистрирован:", reg.scope);
        })
        .catch((err) => {
          console.warn("Ошибка регистрации ServiceWorker:", err);
        });
    });
  }
});
