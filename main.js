/**
 * WordRam - Main Application Controller (v18)
 * 5 экранов: Игра, Словарь (с Блицем), Карта глав, События (Квесты, Колесо, Заморозка),
 * Рейтинг (Еженедельные лиги, Профиль, Достижения).
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

  // Модалка Колеса Фортуны
  const wheelModal = document.getElementById("modal-lucky-wheel");
  const btnCloseWheel = document.getElementById("btn-close-wheel");
  const btnOpenWheel = document.getElementById("btn-open-lucky-wheel");
  const bannerOpenWheel = document.getElementById("banner-open-wheel");
  const btnSpinWheel = document.getElementById("btn-spin-wheel");
  const wheelCanvas = document.getElementById("lucky-wheel-canvas");
  const wheelResultBox = document.getElementById("wheel-result-box");
  const wheelAvailText = document.getElementById("wheel-availability-text");

  // Модалка Блиц-повторения
  const blitzModal = document.getElementById("modal-blitz-quiz");
  const btnCloseBlitz = document.getElementById("btn-close-blitz");
  const btnStartBlitz = document.getElementById("btn-start-blitz");
  const blitzWordEl = document.getElementById("blitz-target-word");
  const blitzPhEl = document.getElementById("blitz-target-ph");
  const blitzOptionsGrid = document.getElementById("blitz-options-grid");
  const blitzProgressFill = document.getElementById("blitz-progress-fill");
  const blitzScoreCounter = document.getElementById("blitz-score-counter");

  function hideAllModals() {
    [winModal, defModal, placementModal, wheelModal, blitzModal].forEach(m => {
      if (m) {
        m.style.setProperty("display", "none", "important");
        m.classList.remove("open");
      }
    });
  }

  function showModal(modalEl) {
    if (modalEl) {
      modalEl.style.setProperty("display", "flex", "important");
      modalEl.classList.add("open");
    }
  }

  const btnSpeakDef = document.getElementById("btn-speak-definition");
  const defCollocationsBox = document.getElementById("def-collocations-box");
  const defCollocationsList = document.getElementById("def-collocations-list");
  let currentActiveWord = "";

  if (btnSpeakDef) {
    btnSpeakDef.addEventListener("click", () => {
      if (currentActiveWord) game.speakWord(currentActiveWord);
    });
  }

  function showWordDefinitionModal(details) {
    if (!defModal || !details) return;
    currentActiveWord = details.word;
    if (defWordRibbon) defWordRibbon.textContent = details.word;

    if (defPhonetic) {
      if (details.ph && details.ph.trim()) {
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

    if (defCollocationsBox && defCollocationsList) {
      if (details.collocations && details.collocations.length > 0) {
        defCollocationsList.innerHTML = details.collocations
          .map(c => `<span class="collocation-tag">${c}</span>`)
          .join("");
        defCollocationsBox.style.display = "block";
      } else {
        defCollocationsBox.style.display = "none";
      }
    }

    showModal(defModal);
  }

  if (btnCloseDefinition) btnCloseDefinition.addEventListener("click", () => hideAllModals());
  if (btnOkDefinition) btnOkDefinition.addEventListener("click", () => hideAllModals());
  if (btnCloseModal) btnCloseModal.addEventListener("click", () => hideAllModals());

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

    showModal(winModal);
    updateProfileUI();
  }

  if (btnNextLevel) {
    btnNextLevel.addEventListener("click", () => {
      hideAllModals();
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
  // Колесо Фортуны (Canvas Lucky Wheel)
  // ----------------------------------------------------
  let currentWheelAngle = 0;
  let isWheelSpinning = false;

  function drawLuckyWheel() {
    if (!wheelCanvas) return;
    const ctx = wheelCanvas.getContext("2d");
    const sectors = WordRamData.luckyWheelSectors;
    const count = sectors.length;
    const arc = (2 * Math.PI) / count;
    const centerX = wheelCanvas.width / 2;
    const centerY = wheelCanvas.height / 2;
    const radius = centerX - 10;

    ctx.clearRect(0, 0, wheelCanvas.width, wheelCanvas.height);
    ctx.save();
    ctx.translate(centerX, centerY);
    ctx.rotate(currentWheelAngle);

    sectors.forEach((sec, idx) => {
      const angle = idx * arc;
      ctx.beginPath();
      ctx.fillStyle = sec.color;
      ctx.moveTo(0, 0);
      ctx.arc(0, 0, radius, angle, angle + arc);
      ctx.lineTo(0, 0);
      ctx.fill();
      ctx.strokeStyle = "#ffffff";
      ctx.lineWidth = 2;
      ctx.stroke();

      // Текст и иконка
      ctx.save();
      ctx.rotate(angle + arc / 2);
      ctx.textAlign = "right";
      ctx.fillStyle = "#ffffff";
      ctx.font = "bold 13px sans-serif";
      ctx.fillText(`${sec.icon} ${sec.label}`, radius - 15, 5);
      ctx.restore();
    });

    // Центральный круг
    ctx.beginPath();
    ctx.arc(0, 0, 22, 0, 2 * Math.PI);
    ctx.fillStyle = "#2b2029";
    ctx.fill();
    ctx.strokeStyle = "#fde047";
    ctx.lineWidth = 3;
    ctx.stroke();

    ctx.restore();
  }

  function spinLuckyWheel() {
    if (isWheelSpinning) return;
    if (!storage.canSpinLuckyWheel()) {
      alert("Вы уже крутили колесо сегодня! Возвращайтесь завтра.");
      return;
    }

    isWheelSpinning = true;
    if (btnSpinWheel) btnSpinWheel.disabled = true;
    if (wheelResultBox) wheelResultBox.style.display = "none";

    const sectors = WordRamData.luckyWheelSectors;
    const winningIdx = Math.floor(Math.random() * sectors.length);
    const winningSector = sectors[winningIdx];

    const arc = (2 * Math.PI) / sectors.length;
    // Целевой угол (сверху указывает стрелка, поэтому угол сдвинут на -PI/2)
    const targetSectorCenter = winningIdx * arc + arc / 2;
    const stopAngle = (1.5 * Math.PI - targetSectorCenter + 2 * Math.PI) % (2 * Math.PI);
    const totalSpins = 5;
    const finalAngle = currentWheelAngle + (totalSpins * 2 * Math.PI) + stopAngle - (currentWheelAngle % (2 * Math.PI));

    const startTime = performance.now();
    const duration = 3800;
    const startAngle = currentWheelAngle;

    function animateWheel(time) {
      const elapsed = time - startTime;
      const progress = Math.min(1, elapsed / duration);
      // Плавное кубическое замедление
      const easeOut = 1 - Math.pow(1 - progress, 3);
      currentWheelAngle = startAngle + (finalAngle - startAngle) * easeOut;
      drawLuckyWheel();

      if (progress < 1) {
        requestAnimationFrame(animateWheel);
      } else {
        isWheelSpinning = false;
        storage.applyLuckyWheelSector(winningSector);
        game.playSound("win");

        if (wheelResultBox) {
          wheelResultBox.textContent = `🎉 Вы выиграли: ${winningSector.icon} ${winningSector.label}!`;
          wheelResultBox.style.display = "block";
        }
        if (btnSpinWheel) {
          btnSpinWheel.disabled = true;
          btnSpinWheel.textContent = "Награда получена ✔";
        }
        updateProfileUI();
        renderDailyScreen();
      }
    }

    requestAnimationFrame(animateWheel);
  }

  if (btnOpenWheel) btnOpenWheel.addEventListener("click", () => {
    showModal(wheelModal);
    drawLuckyWheel();
    const canSpin = storage.canSpinLuckyWheel();
    if (btnSpinWheel) {
      btnSpinWheel.disabled = !canSpin;
      btnSpinWheel.textContent = canSpin ? "Вращать бесплатно!" : "Награда уже получена сегодня";
    }
  });

  if (btnCloseWheel) btnCloseWheel.addEventListener("click", () => hideAllModals());
  if (btnSpinWheel) btnSpinWheel.addEventListener("click", () => spinLuckyWheel());

  // ----------------------------------------------------
  // Блиц-повторение слов (Flashcards Quiz)
  // ----------------------------------------------------
  let blitzQuestions = [];
  let blitzIndex = 0;
  let blitzScore = 0;

  const btnSpeakBlitz = document.getElementById("btn-speak-blitz");
  let currentBlitzTargetWord = "";

  if (btnSpeakBlitz) {
    btnSpeakBlitz.addEventListener("click", () => {
      if (currentBlitzTargetWord) game.speakWord(currentBlitzTargetWord);
    });
  }

  function startBlitzSession() {
    const collected = storage.getCollectedWords();
    const words = Object.keys(collected);

    if (words.length < 4) {
      alert("Сначала найдите хотя бы 4 слова на игровых уровнях, чтобы открыть режим повторения!");
      return;
    }

    // Умное интервальное повторение: сначала слова с наименьшим мастерством (1 звезда)
    blitzQuestions = [...words].sort((a, b) => {
      const mA = (collected[a] && collected[a].mastery) || 1;
      const mB = (collected[b] && collected[b].mastery) || 1;
      return (mA - mB) + (Math.random() * 0.4 - 0.2);
    }).slice(0, 10);

    blitzIndex = 0;
    blitzScore = 0;

    showModal(blitzModal);
    renderBlitzQuestion();
  }

  function renderBlitzQuestion() {
    if (blitzIndex >= blitzQuestions.length) {
      // Завершение сессии
      game.playSound("win");
      storage.addXp(blitzScore * 10);
      alert(`🎯 Отличная тренировка! Вы заработали +${blitzScore * 10} XP и закрепили выученные слова!`);
      hideAllModals();
      updateProfileUI();
      renderVocabScreen();
      return;
    }

    const currentWord = blitzQuestions[blitzIndex]; currentBlitzTargetWord = currentWord; game.speakWord(currentWord);
    const details = WordRamData.getWordDetails(currentWord);

    if (blitzWordEl) blitzWordEl.textContent = currentWord;
    if (blitzPhEl) blitzPhEl.textContent = details ? details.ph : "";
    if (blitzScoreCounter) blitzScoreCounter.textContent = `Очки: ${blitzScore} / ${blitzQuestions.length}`;
    if (blitzProgressFill) {
      const pct = ((blitzIndex + 1) / blitzQuestions.length) * 100;
      blitzProgressFill.style.width = `${pct}%`;
    }

    // Генерируем 4 варианта ответа (1 верный + 3 дистрактора)
    const allDictWords = Object.keys(WordRamData.wordDefinitions);
    const distractors = allDictWords
      .filter(w => w !== currentWord)
      .sort(() => 0.5 - Math.random())
      .slice(0, 3)
      .map(w => WordRamData.getWordDetails(w).tr);

    const options = [details.tr, ...distractors].sort(() => 0.5 - Math.random());

    if (blitzOptionsGrid) {
      blitzOptionsGrid.innerHTML = "";
      options.forEach(opt => {
        const btn = document.createElement("button");
        btn.className = "blitz-opt-btn";
        btn.textContent = opt;

        btn.addEventListener("click", () => {
          const isCorrect = (opt === details.tr);
          if (isCorrect) {
            btn.classList.add("correct");
            game.playSound("found");
            blitzScore++;
            storage.recordBlitzAnswer(currentWord, true);
          } else {
            btn.classList.add("wrong");
            game.playSound("error");
            storage.recordBlitzAnswer(currentWord, false);
          }

          // Блокируем кнопки на 0.5с и переходим к следующему
          blitzOptionsGrid.querySelectorAll("button").forEach(b => b.disabled = true);
          setTimeout(() => {
            blitzIndex++;
            renderBlitzQuestion();
          }, 600);
        });

        blitzOptionsGrid.appendChild(btn);
      });
    }
  }

  if (btnStartBlitz) btnStartBlitz.addEventListener("click", () => startBlitzSession());
  if (btnCloseBlitz) btnCloseBlitz.addEventListener("click", () => hideAllModals());

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
    showModal(placementModal);
  }

  function closePlacementTest() {
    storage.setSetting("hasCompletedPlacementTest", true);
    hideAllModals();
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

    if (profileCefrBadge) profileCefrBadge.textContent = xpData.rank.badge;
    if (profileXpFill) profileXpFill.style.width = `${xpData.percent}%`;
    if (profileXpText) {
      profileXpText.textContent = xpData.isMax ? `Опыт: ${xpData.currentXp} XP (Макс.)` : `Опыт: ${xpData.currentXp} / ${xpData.nextXp} XP`;
    }
    if (profileXpPercent) profileXpPercent.textContent = `${xpData.percent}%`;
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
  // Экран: Мой словарь
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
          <p>🔍 ${collectedWordsList.length === 0 ? "Вы еще не нашли слов. Проходите уровни, и слова появятся здесь!" : "По вашему запросу слов не найдено."}</p>
        </div>
      `;
      return;
    }

    filtered.forEach(w => {
      const details = WordRamData.getWordDetails(w);
      const lvl = findCefrLevel(w);
      const mastery = (collected[w] && collected[w].mastery) || 1;
      const masteryStars = "⭐".repeat(mastery);

      const card = document.createElement("div");
      card.className = "vocab-card";
      card.innerHTML = `
        <div class="vocab-card-left">
          <div class="vocab-word-title">${w} <span class="mastery-stars">${masteryStars}</span></div>
          <div class="vocab-word-tr">${details ? details.tr : ""}</div>
          <div class="vocab-word-ph">${details && details.ph ? details.ph : ""}</div>
        </div>
        <div class="vocab-card-right">
          <span class="vocab-tag">${lvl}</span>
          <span style="font-size: 1.1rem; color: #a855f7;">➔</span>
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
  // Экран: Карта глав и уровни
  // ----------------------------------------------------
  const levelsGrid = document.getElementById("levels-grid");
  const chaptersTabs = document.getElementById("chapters-tabs");
  let activeChapterId = 1;

  function renderLevelsScreen() {
    if (!chaptersTabs || !levelsGrid) return;
    chaptersTabs.innerHTML = "";
    levelsGrid.innerHTML = "";

    const unlocked = storage.getSetting("unlockedLevel") || 1;

    // Вкладки глав (городов)
    WordRamData.worldChapters.forEach(ch => {
      const btn = document.createElement("button");
      btn.className = `chapter-chip ${ch.id === activeChapterId ? "active" : ""}`;
      btn.innerHTML = `${ch.flag} ${ch.title}`;

      btn.addEventListener("click", () => {
        activeChapterId = ch.id;
        renderLevelsScreen();
      });

      chaptersTabs.appendChild(btn);
    });

    const activeChapter = WordRamData.worldChapters.find(c => c.id === activeChapterId) || WordRamData.worldChapters[0];

    for (let lvl = activeChapter.startLevel; lvl <= activeChapter.endLevel; lvl++) {
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
          hideAllModals();
          game.startLevel(lvl, false);
          switchTab("game");
        });
      }

      levelsGrid.appendChild(card);
    }
  }

  // ----------------------------------------------------
  // Экран: События, Квесты и Стрик
  // ----------------------------------------------------
  const dailyBtnStart = document.getElementById("btn-start-daily");
  const dailyStreakEl = document.getElementById("daily-streak-count");
  const freezeCounterBadge = document.getElementById("freeze-counter-badge");
  const btnBuyFreeze = document.getElementById("btn-buy-freeze");
  const dailyRewardsCalendar = document.getElementById("daily-rewards-calendar");
  const dailyQuestsList = document.getElementById("daily-quests-list");
  const questsProgressCounter = document.getElementById("quests-progress-counter");
  const btnClaimSuperChest = document.getElementById("btn-claim-super-chest");

  function renderDailyScreen() {
    const status = storage.getDailyStatus();
    if (dailyStreakEl) dailyStreakEl.textContent = status.streak;

    if (freezeCounterBadge) {
      freezeCounterBadge.textContent = `❄️ Защита: ${status.freezes}/2`;
    }

    if (wheelAvailText) {
      const canSpin = storage.canSpinLuckyWheel();
      wheelAvailText.textContent = canSpin ? "Бесплатное вращение доступно!" : "Возвращайтесь завтра!";
    }

    // 1. Календарь наград
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
          ${item.hints > 0 ? `<span style="font-size: 0.65rem; color: #a855f7;">+${item.hints} 💡</span>` : ""}
          <span style="font-size: 0.75rem;">${isClaimed ? "✔" : (isCurrent ? "⭐" : "🔒")}</span>
        `;
        dailyRewardsCalendar.appendChild(dayBox);
      });
    }

    // 2. Ежедневные задания (3 квеста)
    const dq = storage.getDailyQuests();
    if (dailyQuestsList) {
      dailyQuestsList.innerHTML = "";
      let completedCount = 0;

      WordRamData.dailyQuestsTemplates.forEach(t => {
        const qState = dq.quests[t.id] || { current: 0, target: t.target, completed: false, claimed: false };
        if (qState.completed) completedCount++;

        const qCard = document.createElement("div");
        qCard.className = `quest-item-card ${qState.completed ? "completed" : ""}`;
        qCard.innerHTML = `
          <div class="quest-item-info">
            <strong>${t.title}</strong>
            <div class="quest-sub">${t.desc} (${qState.current}/${t.target})</div>
            <div class="quest-reward">+${t.rewardCoins} 🪙, +${t.rewardXp} XP</div>
          </div>
          <button class="small-btn ${qState.claimed ? "claimed-btn" : (qState.completed ? "claim-ready-btn" : "locked-btn")}" ${(!qState.completed || qState.claimed) ? "disabled" : ""}>
            ${qState.claimed ? "✔" : (qState.completed ? "Забрать" : `${qState.current}/${t.target}`)}
          </button>
        `;

        const claimBtn = qCard.querySelector("button");
        if (claimBtn && qState.completed && !qState.claimed) {
          claimBtn.addEventListener("click", () => {
            storage.claimQuest(t.id);
            game.playSound("found");
            renderDailyScreen();
            updateProfileUI();
          });
        }

        dailyQuestsList.appendChild(qCard);
      });

      if (questsProgressCounter) {
        questsProgressCounter.textContent = `${completedCount} / 3`;
      }

      if (btnClaimSuperChest) {
        btnClaimSuperChest.disabled = (completedCount < 3 || dq.allClaimed);
        btnClaimSuperChest.textContent = dq.allClaimed ? "Открыт ✔" : "Забрать";
      }
    }
  }

  if (btnClaimSuperChest) {
    btnClaimSuperChest.addEventListener("click", () => {
      const res = storage.claimAllQuestsChest();
      if (res.success) {
        game.playSound("win");
        alert("🎁 Поздравляем! Сундук мастера открыт: +50 🪙, +100 XP, +1 💡 подсказка!");
        renderDailyScreen();
        updateProfileUI();
      }
    });
  }

  if (btnBuyFreeze) {
    btnBuyFreeze.addEventListener("click", () => {
      const res = storage.buyStreakFreeze(60);
      if (res.success) {
        game.playSound("found");
        alert("❄️ Заморозка стрика успешно куплена! Ваш стрик защищен от пропуска дня.");
        renderDailyScreen();
      } else {
        alert(res.reason === "NOT_ENOUGH_COINS" ? "Недостаточно монет (нужно 60 🪙)!" : "У вас уже максимальное количество защит (2/2)!");
      }
    });
  }

  if (dailyBtnStart) {
    dailyBtnStart.addEventListener("click", () => {
      hideAllModals();
      const todayLvl = 10 + (new Date().getDate() % 20);
      game.startLevel(todayLvl, true);
      switchTab("game");
    });
  }

  // ----------------------------------------------------
  // Экран: Рейтинг, Лиги и Профиль
  // ----------------------------------------------------
  const leagueNameEl = document.getElementById("league-name");
  const leagueIconEl = document.getElementById("league-icon");
  const leagueLeaderboardList = document.getElementById("league-leaderboard-list");
  const leagueRewardPreview = document.getElementById("league-reward-preview");
  const achievementsListEl = document.getElementById("achievements-list");
  const toggleSound = document.getElementById("setting-sound");
  const toggleVibration = document.getElementById("setting-vibration");
  const btnResetData = document.getElementById("btn-reset-data");

  function renderSettingsScreen() {
    updateProfileUI();

    // 1. Еженедельная лига
    const leagueData = storage.getLeagueData();
    if (leagueNameEl) leagueNameEl.textContent = leagueData.league.name;
    if (leagueIconEl) leagueIconEl.textContent = leagueData.league.icon;
    if (leagueRewardPreview) leagueRewardPreview.textContent = `Приз: +${leagueData.league.rewardCoins} 🪙`;

    if (leagueLeaderboardList) {
      leagueLeaderboardList.innerHTML = "";
      leagueData.rivals.forEach((r, idx) => {
        const row = document.createElement("div");
        row.className = `leaderboard-row ${r.isUser ? "user-row" : ""}`;
        row.innerHTML = `
          <div class="row-rank">#${idx + 1}</div>
          <div class="row-avatar">${r.avatar}</div>
          <div class="row-name">${r.name}</div>
          <div class="row-xp">${r.xp} XP</div>
        `;
        leagueLeaderboardList.appendChild(row);
      });
    }

    // 2. Достижения
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

    if (toggleSound) toggleSound.checked = !!storage.getSetting("soundEnabled");
    if (toggleVibration) toggleVibration.checked = !!storage.getSetting("vibrationEnabled");
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

  if (btnResetData) {
    btnResetData.addEventListener("click", () => {
      if (confirm("Сбросить весь прогресс, словарь и монеты?")) {
        storage.resetAll();
        hideAllModals();
        renderSettingsScreen();
        game.startLevel(1, false);
        switchTab("game");
      }
    });
  }

  // ----------------------------------------------------
  // Запуск при старте
  // ----------------------------------------------------
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
          console.log("WordRam ServiceWorker v18 активен:", reg.scope);
        })
        .catch((err) => {
          console.warn("Ошибка регистрации ServiceWorker:", err);
        });
    });
  }
});
