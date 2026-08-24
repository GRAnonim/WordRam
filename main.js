/**
 * WordRam - Main Application Controller (v13)
 * Управление 5 экранами (Игра, Словарь, Уровни, Сегодня, Профиль),
 * личный словарь, достижения, стрик наград, XP/ранги и PWA.
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
  const headerCefrBadge = document.getElementById("header-cefr-badge");

  // Модалка перевода слова
  const defModal = document.getElementById("modal-word-definition");
  const defWordRibbon = document.getElementById("def-word-ribbon");
  const defPhonetic = document.getElementById("def-phonetic");
  const defTranslation = document.getElementById("def-translation");
  const defMeaning = document.getElementById("def-meaning");
  const defExampleBox = document.getElementById("def-example-box");
  const defExampleText = document.getElementById("def-example-text");
  const btnCloseDefinition = document.getElementById("btn-close-definition");
  const btnOkDefinition = document.getElementById("btn-ok-definition");

  function hideWordDefinitionModal() {
    if (defModal) {
      defModal.style.setProperty("display", "none", "important");
      defModal.classList.remove("open");
    }
  }

  function showWordDefinitionModal(details) {
    if (!defModal || !details) return;
    if (defWordRibbon) defWordRibbon.textContent = details.word;

    if (defPhonetic) {
      if (details.ph) {
        defPhonetic.textContent = details.ph;
        defPhonetic.style.display = "block";
      } else {
        defPhonetic.style.display = "none";
      }
    }

    if (defTranslation) defTranslation.textContent = details.tr || details.word;
    if (defMeaning) defMeaning.textContent = details.def || "Слово английского языка.";

    if (defExampleBox && defExampleText) {
      if (details.ex && details.ex.trim().length > 0 && !details.ex.includes("English context")) {
        defExampleText.textContent = details.ex;
        defExampleBox.style.display = "block";
      } else {
        defExampleBox.style.display = "none";
      }
    }

    defModal.style.setProperty("display", "flex", "important");
    defModal.classList.add("open");
  }

  if (btnCloseDefinition) btnCloseDefinition.addEventListener("click", hideWordDefinitionModal);
  if (btnOkDefinition) btnOkDefinition.addEventListener("click", hideWordDefinitionModal);

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
        .map((w) => `<li class="win-word-item" data-word="${w}">✔ <strong>${w}</strong></li>`)
        .join("");

      winWordsList.querySelectorAll(".win-word-item").forEach(item => {
        item.style.cursor = "pointer";
        item.addEventListener("click", () => {
          const w = item.dataset.word;
          const details = WordRamData.getWordDetails(w);
          showWordDefinitionModal(details);
        });
      });
    }

    if (winRewardText) {
      winRewardText.textContent = `+${summary.rewardCoins} 🪙 монет получено!`;
    }

    winModal.style.setProperty("display", "flex", "important");
    winModal.classList.add("open");

    // Обновляем шкалу XP и интерфейс
    updateProfileUI();
  }

  hideVictoryModal();
  hideWordDefinitionModal();
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
    onLevelCompleted: (summary) => showVictoryModal(summary),
    onWordDetailsRequested: (details) => showWordDefinitionModal(details),
    onXpUpdated: () => updateProfileUI()
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
    storage.setSetting("hasCompletedPlacementTest", true);
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
        updateProfileUI();
      }
      closePlacementTest();
      game.startLevel(1, false);
      switchTab("game");
    });
  }

  function updateProfileUI() {
    const levelCode = storage.getEnglishLevel();
    if (headerCefrBadge) headerCefrBadge.textContent = `🇬🇧 ${levelCode}`;

    const profileCefrBadge = document.getElementById("profile-cefr-badge");
    const profileXpFill = document.getElementById("profile-xp-fill");
    const profileXpText = document.getElementById("profile-xp-text");
    const profileXpPercent = document.getElementById("profile-xp-percent");

    const xpData = storage.getXpProgress();

    if (profileCefrBadge) {
      profileCefrBadge.textContent = xpData.rank.badge;
    }

    if (profileXpFill) {
      profileXpFill.style.width = `${xpData.percent}%`;
    }

    if (profileXpText) {
      if (xpData.isMax) {
        profileXpText.textContent = `Опыт: ${xpData.currentXp} XP (Макс. ранг)`;
      } else {
        profileXpText.textContent = `Опыт: ${xpData.currentXp} / ${xpData.nextXp} XP`;
      }
    }

    if (profileXpPercent) {
      profileXpPercent.textContent = `${xpData.percent}%`;
    }
  }

  // ----------------------------------------------------
  // Экраны и вкладки (5 Вкладок)
  // ----------------------------------------------------
  const screens = {
    game: document.getElementById("screen-game"),
    vocab: document.getElementById("screen-vocab"),
    levels: document.getElementById("screen-levels"),
    daily: document.getElementById("screen-daily"),
    settings: document.getElementById("screen-settings")
  };

  const navButtons = {
    game: document.getElementById("nav-btn-game"),
    vocab: document.getElementById("nav-btn-vocab"),
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

    if (tabKey === "vocab") renderVocabScreen();
    if (tabKey === "levels") renderLevelsScreen();
    if (tabKey === "daily") renderDailyScreen();
    if (tabKey === "settings") renderSettingsScreen();
  }

  Object.keys(navButtons).forEach((key) => {
    if (navButtons[key]) {
      navButtons[key].addEventListener("click", () => switchTab(key));
    }
  });

  // ----------------------------------------------------
  // Экран: Мой словарь (Personal Vocabulary)
  // ----------------------------------------------------
  const vocabCardsGrid = document.getElementById("vocab-cards-grid");
  const vocabStatsSubtitle = document.getElementById("vocab-stats-subtitle");
  const vocabSearchInput = document.getElementById("vocab-search-input");
  const vocabChips = document.querySelectorAll("#vocab-cefr-filters .chip");

  let activeVocabFilter = "ALL";
  let vocabSearchQuery = "";

  function renderVocabScreen() {
    if (!vocabCardsGrid) return;
    vocabCardsGrid.innerHTML = "";

    const collected = storage.getCollectedWords();
    const collectedWordsList = Object.keys(collected);

    if (vocabStatsSubtitle) {
      vocabStatsSubtitle.textContent = `Выучено слов: ${collectedWordsList.length} из 534`;
    }

    // Определяем CEFR уровень для каждого слова
    function findCefrLevel(word) {
      for (const lvl of ["A1", "A2", "B1", "B2", "C1"]) {
        const wordsAtLvl = WordRamData.cefrDictionary[lvl];
        for (const len in wordsAtLvl) {
          if (wordsAtLvl[len].includes(word)) return lvl;
        }
      }
      return "A2";
    }

    const filtered = collectedWordsList.filter(w => {
      const lvl = findCefrLevel(w);
      if (activeVocabFilter !== "ALL" && lvl !== activeVocabFilter) return false;

      if (vocabSearchQuery) {
        const details = WordRamData.getWordDetails(w);
        const q = vocabSearchQuery.toLowerCase();
        const matchesWord = w.toLowerCase().includes(q);
        const matchesTr = details && details.tr && details.tr.toLowerCase().includes(q);
        if (!matchesWord && !matchesTr) return false;
      }
      return true;
    });

    if (filtered.length === 0) {
      vocabCardsGrid.innerHTML = `
        <div class="empty-vocab-msg">
          <p>🔍 ${collectedWordsList.length === 0 ? "Вы еще не нашли ни одного слова. Проходите уровни, и слова появятся здесь!" : "По вашему запросу слов не найдено."}</p>
        </div>
      `;
      return;
    }

    filtered.forEach(w => {
      const details = WordRamData.getWordDetails(w);
      const lvl = findCefrLevel(w);

      const card = document.createElement("div");
      card.className = "vocab-card";
      card.innerHTML = `
        <div class="vocab-card-left">
          <div class="vocab-word-title">${w}</div>
          <div class="vocab-word-tr">${details ? details.tr : ""}</div>
          <div class="vocab-word-ph">${details && details.ph ? details.ph : ""}</div>
        </div>
        <div class="vocab-card-right">
          <span class="vocab-tag">${lvl}</span>
          <span style="font-size: 1.1rem;">➔</span>
        </div>
      `;

      card.addEventListener("click", () => {
        showWordDefinitionModal(details);
      });

      vocabCardsGrid.appendChild(card);
    });
  }

  if (vocabSearchInput) {
    vocabSearchInput.addEventListener("input", (e) => {
      vocabSearchQuery = e.target.value.trim();
      renderVocabScreen();
    });
  }

  vocabChips.forEach(chip => {
    chip.addEventListener("click", () => {
      vocabChips.forEach(c => c.classList.remove("active"));
      chip.classList.add("active");
      activeVocabFilter = chip.dataset.filter;
      renderVocabScreen();
    });
  });

  // ----------------------------------------------------
  // Экран: Уровни
  // ----------------------------------------------------
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
          hideWordDefinitionModal();
          game.startLevel(lvl, false);
          switchTab("game");
        });
      }

      levelsGrid.appendChild(card);
    }
  }

  // ----------------------------------------------------
  // Экран: Сегодня и Ежедневный стрик
  // ----------------------------------------------------
  const dailyBtnStart = document.getElementById("btn-start-daily");
  const dailyStreakEl = document.getElementById("daily-streak-count");
  const dailyStatusBadge = document.getElementById("daily-status-badge");
  const dailyRewardsCalendar = document.getElementById("daily-rewards-calendar");

  function renderDailyScreen() {
    const status = storage.getDailyStatus();
    if (dailyStreakEl) dailyStreakEl.textContent = status.streak;

    if (dailyStatusBadge) {
      if (status.isTodayCompleted) {
        dailyStatusBadge.textContent = "Испытание выполнено ✔";
        dailyStatusBadge.className = "status-badge completed";
        if (dailyBtnStart) dailyBtnStart.textContent = "Сыграть снова";
      } else {
        dailyStatusBadge.textContent = "Сегодня доступно";
        dailyStatusBadge.className = "status-badge pending";
        if (dailyBtnStart) dailyBtnStart.textContent = "Сыграть уровень (+50 🪙, +150 XP)";
      }
    }

    if (dailyRewardsCalendar) {
      dailyRewardsCalendar.innerHTML = "";
      const currentDayInStreak = Math.max(1, (status.streak % 7) || (status.isTodayCompleted ? 7 : 1));

      WordRamData.dailyStreakRewards.forEach(item => {
        const isClaimed = item.day < currentDayInStreak || (item.day === currentDayInStreak && status.isTodayCompleted);
        const isCurrent = item.day === currentDayInStreak;

        const dayBox = document.createElement("div");
        dayBox.className = `reward-day-item ${isClaimed ? "claimed" : ""} ${isCurrent ? "current" : ""}`;
        dayBox.innerHTML = `
          <span class="reward-day-title">${item.label}</span>
          <span class="reward-day-prize">+${item.coins} 🪙</span>
          ${item.hints > 0 ? `<span style="font-size: 0.65rem; color: #4338ca;">+${item.hints} 💡</span>` : ""}
          <span style="font-size: 0.75rem;">${isClaimed ? "✔" : (isCurrent ? "⭐" : "🔒")}</span>
        `;
        dailyRewardsCalendar.appendChild(dayBox);
      });
    }
  }

  if (dailyBtnStart) {
    dailyBtnStart.addEventListener("click", () => {
      hideVictoryModal();
      hideWordDefinitionModal();
      const todayLvl = 10 + (new Date().getDate() % 20);
      game.startLevel(todayLvl, true);
      switchTab("game");
    });
  }

  // ----------------------------------------------------
  // Экран: Профиль, Достижения и Настройки
  // ----------------------------------------------------
  const toggleSound = document.getElementById("setting-sound");
  const toggleVibration = document.getElementById("setting-vibration");
  const toggleTheme = document.getElementById("setting-theme");
  const btnResetData = document.getElementById("btn-reset-data");
  const achievementsListEl = document.getElementById("achievements-list");

  function renderSettingsScreen() {
    updateProfileUI();

    if (toggleSound) toggleSound.checked = !!storage.getSetting("soundEnabled");
    if (toggleVibration) toggleVibration.checked = !!storage.getSetting("vibrationEnabled");
    if (toggleTheme) toggleTheme.checked = !!storage.getSetting("darkTheme");

    if (achievementsListEl) {
      achievementsListEl.innerHTML = "";
      const unlockedIds = storage.state.unlockedAchievements || [];

      WordRamData.achievements.forEach(ach => {
        const isUnlocked = unlockedIds.includes(ach.id);
        const card = document.createElement("div");
        card.className = `achievement-card ${isUnlocked ? "unlocked" : ""}`;
        card.innerHTML = `
          <div class="ach-icon">${ach.icon}</div>
          <div class="ach-info">
            <div class="ach-title">${ach.title} ${isUnlocked ? "✔" : ""}</div>
            <div class="ach-desc">${ach.desc}</div>
          </div>
          <div class="ach-reward">+${ach.rewardCoins} 🪙</div>
        `;
        achievementsListEl.appendChild(card);
      });
    }
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
      if (confirm("Вы уверены, что хотите сбросить весь прогресс, монеты и личный словарь?")) {
        storage.resetAll();
        hideVictoryModal();
        hideWordDefinitionModal();
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
  updateProfileUI();

  const saved = storage.getActiveSavedGame();
  if (saved && saved.levelData && saved.foundWords && saved.foundWords.length < saved.levelData.words.length) {
    game.restoreGameState(saved);
  } else {
    storage.clearActiveSavedGame();
    const cur = storage.getSetting("currentLevel") || 1;
    game.startLevel(cur, false);
  }

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
