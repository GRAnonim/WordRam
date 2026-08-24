/**
 * WordRam - LocalStorage & State Manager (v8)
 * Сохранение прогресса, монет, настроек, уровня английского (CEFR A1-C1).
 */

class WordRamStorage {
  constructor() {
    this.STORAGE_KEY = "wordram_v8_save";
    this.state = this.load();
  }

  getDefaultState() {
    return {
      currentLevel: 1,
      unlockedLevel: 1,
      englishLevel: "A2",           // Уровень владения (A1, A2, B1, B2, C1)
      hasCompletedPlacementTest: false,
      levelStars: {},               // { "1": 3, "2": 2, ... }
      levelHighScores: {},          // { "1": 450, ... }
      coins: 50,                    // Стартовые монеты
      hintsRemaining: 3,            // Бесплатные подсказки
      hintCost: 15,                 // Стоимость подсказки
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
        hintsUsed: 0
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
    this.save();
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

  completeLevel(lvl, stars = 3, score = 100, rewardCoins = 15) {
    this.state.levelStars[lvl] = Math.max(this.state.levelStars[lvl] || 0, stars);
    this.state.levelHighScores[lvl] = Math.max(this.state.levelHighScores[lvl] || 0, score);

    if (lvl >= this.state.unlockedLevel) {
      this.state.unlockedLevel = lvl + 1;
    }
    this.state.currentLevel = lvl + 1;
    this.state.stats.levelsCompleted++;
    this.addCoins(rewardCoins);
    this.clearActiveSavedGame();
    this.save();
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
    this.save();
  }

  recordWordFound() {
    this.state.stats.totalWordsFound++;
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
