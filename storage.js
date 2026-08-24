/**
 * WordRam - LocalStorage & Gamification State Manager (v13)
 * Хранение словаря выученных слов, XP, рангов CEFR, достижений и наград.
 */

class WordRamStorage {
  constructor() {
    this.STORAGE_KEY = "wordram_v13_save";
    this.state = this.load();
  }

  getDefaultState() {
    return {
      currentLevel: 1,
      unlockedLevel: 1,
      englishLevel: "A2",
      xp: 300,
      hasCompletedPlacementTest: false,
      collectedWords: {},           // { "BEAUTIFUL": { count: 1, firstSeen: "..." } }
      unlockedAchievements: [],    // ["first_words", ...]
      claimedDailyRewards: {},      // { "1": "2026-08-24" }
      levelStars: {},               // { "1": 3, "2": 2, ... }
      levelHighScores: {},
      coins: 50,
      hintsRemaining: 3,
      hintCost: 15,
      soundEnabled: true,
      vibrationEnabled: true,
      darkTheme: false,
      daily: {
        lastPlayedDate: null,
        streak: 0,
        completed: false
      },
      stats: {
        totalWordsFound: 0,
        levelsCompleted: 0,
        hintsUsed: 0,
        noHintLevels: 0,
        maxGridCompleted: 4
      },
      activeSavedGame: null
    };
  }

  load() {
    try {
      const data = localStorage.getItem(this.STORAGE_KEY);
      if (data) {
        const parsed = JSON.parse(data);
        return { ...this.getDefaultState(), ...parsed };
      }
    } catch (e) {
      console.warn("Ошибка чтения LocalStorage", e);
    }
    return this.getDefaultState();
  }

  save() {
    try {
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(this.state));
    } catch (e) {
      console.error("Ошибка сохранения в LocalStorage", e);
    }
  }

  getEnglishLevel() {
    return this.state.englishLevel || "A2";
  }

  setEnglishLevel(levelCode) {
    this.state.englishLevel = levelCode;
    this.state.hasCompletedPlacementTest = true;
    const rank = WordRamData.xpRanks.find(r => r.code === levelCode);
    if (rank && this.state.xp < rank.minXp) {
      this.state.xp = rank.minXp;
    }
    this.save();
  }

  getXp() {
    return this.state.xp || 0;
  }

  getXpProgress() {
    const currentCode = this.getEnglishLevel();
    const currentRankIdx = WordRamData.xpRanks.findIndex(r => r.code === currentCode);
    const rank = WordRamData.xpRanks[currentRankIdx] || WordRamData.xpRanks[0];
    const isMax = currentRankIdx === WordRamData.xpRanks.length - 1;

    const currentXp = this.state.xp || 0;
    const minXp = rank.minXp;
    const nextXp = rank.nextXp;

    const progress = isMax ? 1.0 : Math.min(1.0, Math.max(0, (currentXp - minXp) / (nextXp - minXp)));

    return {
      currentXp: currentXp,
      minXp: minXp,
      nextXp: nextXp,
      progressRatio: progress,
      percent: Math.round(progress * 100),
      rank: rank,
      isMax: isMax
    };
  }

  addXp(amount) {
    const oldLevel = this.getEnglishLevel();
    this.state.xp = (this.state.xp || 0) + amount;

    // Проверяем повышение ранга CEFR
    let newLevel = oldLevel;
    for (let i = WordRamData.xpRanks.length - 1; i >= 0; i--) {
      const r = WordRamData.xpRanks[i];
      if (this.state.xp >= r.minXp) {
        newLevel = r.code;
        break;
      }
    }

    let leveledUp = false;
    if (newLevel !== oldLevel) {
      this.state.englishLevel = newLevel;
      leveledUp = true;
    }

    this.save();
    return {
      leveledUp: leveledUp,
      oldLevel: oldLevel,
      newLevel: newLevel,
      xpAdded: amount,
      totalXp: this.state.xp
    };
  }

  // Коллекция словаря (Personal Vocabulary)
  recordWordToVocabulary(word) {
    const upper = word.toUpperCase();
    if (!this.state.collectedWords[upper]) {
      this.state.collectedWords[upper] = {
        count: 1,
        firstSeen: new Date().toISOString().slice(0, 10)
      };
      this.state.stats.totalWordsFound++;
      this.addXp(10); // +10 XP за новое выученное слово!
    } else {
      this.state.collectedWords[upper].count++;
      this.state.stats.totalWordsFound++;
      this.addXp(3);
    }
    this.save();
    return this.checkAchievements();
  }

  getCollectedWords() {
    return this.state.collectedWords || {};
  }

  getCollectedWordsCount() {
    return Object.keys(this.state.collectedWords || {}).length;
  }

  // Проверка и выдача достижений
  checkAchievements() {
    const unlockedNow = [];
    const stats = this.state.stats;
    const wordsCount = this.getCollectedWordsCount();
    const streak = this.state.daily.streak || 0;
    const stars = Object.values(this.state.levelStars || {}).reduce((a, b) => a + b, 0);

    WordRamData.achievements.forEach(ach => {
      if (this.state.unlockedAchievements.includes(ach.id)) return;

      let achieved = false;
      if (ach.type === "words" && wordsCount >= ach.target) achieved = true;
      if (ach.type === "streak" && streak >= ach.target) achieved = true;
      if (ach.type === "no_hints" && stats.noHintLevels >= ach.target) achieved = true;
      if (ach.type === "big_grid" && stats.maxGridCompleted >= 6) achieved = true;
      if (ach.type === "huge_grid" && stats.maxGridCompleted >= 8) achieved = true;
      if (ach.type === "stars" && stars >= ach.target) achieved = true;

      if (achieved) {
        this.state.unlockedAchievements.push(ach.id);
        this.addCoins(ach.rewardCoins);
        this.addXp(50);
        unlockedNow.push(ach);
      }
    });

    if (unlockedNow.length > 0) this.save();
    return unlockedNow;
  }

  getSetting(key) {
    return this.state[key];
  }

  setSetting(key, value) {
    this.state[key] = value;
    this.save();
  }

  getCoins() {
    return this.state.coins;
  }

  addCoins(amount) {
    this.state.coins = Math.max(0, (this.state.coins || 0) + amount);
    this.save();
    return this.state.coins;
  }

  useHint() {
    if (this.state.hintsRemaining > 0) {
      this.state.hintsRemaining--;
      this.state.stats.hintsUsed++;
      this.save();
      return { success: true, free: true, remainingHints: this.state.hintsRemaining, coins: this.state.coins };
    }

    if (this.state.coins >= this.state.hintCost) {
      this.state.coins -= this.state.hintCost;
      this.state.stats.hintsUsed++;
      this.save();
      return { success: true, free: false, remainingHints: 0, coins: this.state.coins };
    }

    return { success: false, reason: "NOT_ENOUGH_COINS", needed: this.state.hintCost, current: this.state.coins };
  }

  getLevelStars(lvl) {
    return this.state.levelStars[lvl] || 0;
  }

  completeLevel(lvl, stars = 3, score = 100, rewardCoins = 15, usedHints = 0, gridSize = 5) {
    this.state.levelStars[lvl] = Math.max(this.state.levelStars[lvl] || 0, stars);
    this.state.levelHighScores[lvl] = Math.max(this.state.levelHighScores[lvl] || 0, score);

    if (lvl >= this.state.unlockedLevel) {
      this.state.unlockedLevel = lvl + 1;
    }
    this.state.currentLevel = lvl + 1;
    this.state.stats.levelsCompleted++;

    if (usedHints === 0) {
      this.state.stats.noHintLevels++;
    }

    this.state.stats.maxGridCompleted = Math.max(this.state.stats.maxGridCompleted || 4, gridSize);

    this.addCoins(rewardCoins);
    const xpRes = this.addXp(30 + lvl * 2);
    this.clearActiveSavedGame();
    const newAchs = this.checkAchievements();
    this.save();

    return {
      xpResult: xpRes,
      achievements: newAchs
    };
  }

  saveActiveGame(gameSnapshot) {
    this.state.activeSavedGame = gameSnapshot;
    this.save();
  }

  getActiveSavedGame() {
    return this.state.activeSavedGame;
  }

  clearActiveSavedGame() {
    this.state.activeSavedGame = null;
    this.save();
  }

  getDailyStatus() {
    const todayStr = new Date().toISOString().slice(0, 10);
    if (this.state.daily.lastPlayedDate !== todayStr) {
      return {
        isTodayCompleted: false,
        streak: this.state.daily.streak,
        date: todayStr
      };
    }
    return {
      isTodayCompleted: this.state.daily.completed,
      streak: this.state.daily.streak,
      date: todayStr
    };
  }

  completeDailyChallenge() {
    const todayStr = new Date().toISOString().slice(0, 10);
    const yesterday = new Date(Date.now() - 86400000).toISOString().slice(0, 10);

    if (this.state.daily.lastPlayedDate === yesterday) {
      this.state.daily.streak += 1;
    } else if (this.state.daily.lastPlayedDate !== todayStr) {
      this.state.daily.streak = 1;
    }

    this.state.daily.lastPlayedDate = todayStr;
    this.state.daily.completed = true;
    this.addCoins(50);
    this.addXp(150); // Большой бонус опыта за ежедневный квест!
    this.checkAchievements();
    this.save();
  }

  resetAll() {
    this.state = this.getDefaultState();
    this.save();
  }
}

if (typeof module !== "undefined" && module.exports) {
  module.exports = WordRamStorage;
}
