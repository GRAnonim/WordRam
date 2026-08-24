/**
 * WordRam - Main Application Controller
 * Управление экранами (Игра, Уровни, Сегодня, Настройки),
 * модальными окнами, вкладками нижнего меню и PWA Service Worker.
 */

document.addEventListener("DOMContentLoaded", () => {
  const storage = new WordRamStorage();
  const generator = new WordRamGenerator(WordRamData);

  // Инициализация игрового ядра
  const game = new WordRamGame({
    storage: storage,
    generator: generator,
    onLevelCompleted: (summary) => showVictoryModal(summary)
  });

  // Экраны (вкладки)
  const screens = {
    game: document.getElementById("screen-game"),
    levels: document.getElementById("screen-levels"),
    daily: document.getElementById("screen-daily"),
    settings: document.getElementById("screen-settings")
  };

  // Кнопки нижнего меню
  const navButtons = {
    game: document.getElementById("nav-btn-game"),
    levels: document.getElementById("nav-btn-levels"),
    daily: document.getElementById("nav-btn-daily"),
    settings: document.getElementById("nav-btn-settings")
  };

  let activeTab = "game";

  function switchTab(tabKey) {
    activeTab = tabKey;

    // Переключение экранов
    Object.keys(screens).forEach((key) => {
      if (screens[key]) {
        if (key === tabKey) {
          screens[key].classList.remove("hidden");
        } else {
          screens[key].classList.add("hidden");
        }
      }
    });

    // Переключение подсветки меню
    Object.keys(navButtons).forEach((key) => {
      if (navButtons[key]) {
        if (key === tabKey) {
          navButtons[key].classList.add("active");
        } else {
          navButtons[key].classList.remove("active");
        }
      }
    });

    // Действия при входе на конкретный экран
    if (tabKey === "levels") {
      renderLevelsScreen();
    } else if (tabKey === "daily") {
      renderDailyScreen();
    } else if (tabKey === "settings") {
      renderSettingsScreen();
    }
  }

  // Привязка кликов меню
  Object.keys(navButtons).forEach((key) => {
    if (navButtons[key]) {
      navButtons[key].addEventListener("click", () => switchTab(key));
    }
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
          game.startLevel(lvl, false);
          switchTab("game");
        });
      }

      levelsGrid.appendChild(card);
    }
  }

  // ----------------------------------------------------
  // Экран: Сегодня (Ежедневное испытание)
  // ----------------------------------------------------
  const dailyBtnStart = document.getElementById("btn-start-daily");
  const dailyStreakEl = document.getElementById("daily-streak-count");
  const dailyStatusBadge = document.getElementById("daily-status-badge");

  function renderDailyScreen() {
    const status = storage.getDailyStatus();
    if (dailyStreakEl) {
      dailyStreakEl.textContent = status.streak;
    }

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
      // Генерируем уникальный сид на основе сегодняшней даты
      const todayLvl = 100 + (new Date().getDate() % 20);
      game.startLevel(todayLvl, true);
      switchTab("game");
    });
  }

  // ----------------------------------------------------
  // Экран: Настройки
  // ----------------------------------------------------
  const toggleSound = document.getElementById("setting-sound");
  const toggleVibration = document.getElementById("setting-vibration");
  const toggleTheme = document.getElementById("setting-theme");
  const btnResetData = document.getElementById("btn-reset-data");
  const statWords = document.getElementById("stat-total-words");
  const statBonus = document.getElementById("stat-bonus-words");
  const statLevels = document.getElementById("stat-levels-completed");

  function renderSettingsScreen() {
    if (toggleSound) toggleSound.checked = !!storage.getSetting("soundEnabled");
    if (toggleVibration) toggleVibration.checked = !!storage.getSetting("vibrationEnabled");
    if (toggleTheme) toggleTheme.checked = !!storage.getSetting("darkTheme");

    const stats = storage.getSetting("stats");
    if (statWords && stats) statWords.textContent = stats.totalWordsFound || 0;
    if (statBonus && stats) statBonus.textContent = stats.bonusWordsFound || 0;
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
        applyTheme(false);
        renderSettingsScreen();
        game.startLevel(1, false);
        switchTab("game");
      }
    });
  }

  // ----------------------------------------------------
  // Модальное окно победы
  // ----------------------------------------------------
  const winModal = document.getElementById("modal-victory");
  const winWordsList = document.getElementById("win-words-list");
  const winRewardText = document.getElementById("win-reward-text");
  const btnNextLevel = document.getElementById("btn-next-level");

  function showVictoryModal(summary) {
    if (!winModal) return;

    if (winWordsList) {
      winWordsList.innerHTML = summary.words
        .map((w) => `<li class="win-word-item">✔ <strong>${w}</strong></li>`)
        .join("");

      if (summary.bonusWordsFound && summary.bonusWordsFound.length > 0) {
        winWordsList.innerHTML += summary.bonusWordsFound
          .map((w) => `<li class="win-word-item bonus">★ Бонус: ${w}</li>`)
          .join("");
      }
    }

    if (winRewardText) {
      winRewardText.textContent = `+${summary.rewardCoins} 🪙 монет получено!`;
    }

    winModal.classList.remove("hidden");
  }

  if (btnNextLevel) {
    btnNextLevel.addEventListener("click", () => {
      if (winModal) winModal.classList.add("hidden");
      const nextLvl = (storage.getSetting("currentLevel") || 1);
      game.startLevel(nextLvl, false);
      switchTab("game");
    });
  }

  // Кнопка перезапуска уровня в шапке
  const btnRestart = document.getElementById("btn-restart-level");
  if (btnRestart) {
    btnRestart.addEventListener("click", () => {
      if (confirm("Перезапустить текущий уровень?")) {
        game.startLevel(game.currentLevel, game.isDailyMode);
      }
    });
  }

  // ----------------------------------------------------
  // Запуск игры при загрузке страницы
  // ----------------------------------------------------
  applyTheme(!!storage.getSetting("darkTheme"));

  // Проверяем сохраненную активную игру или начинаем текущий уровень
  const saved = storage.getActiveSavedGame();
  if (saved && saved.levelData) {
    game.restoreGameState(saved);
  } else {
    const cur = storage.getSetting("currentLevel") || 1;
    game.startLevel(cur, false);
  }

  // Регистрация Service Worker для PWA и оффлайн-режима
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
