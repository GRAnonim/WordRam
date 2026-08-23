import { CONFIG } from './data.js';

const KEY = 'wordra-state-v2';

const DEFAULT = {
  version: CONFIG.saveVersion,
  coins: 100,
  level: 1,
  totalBonus: 0,
  streak: 0,
  lastDaily: null,
  dailyCompleted: false,
  eventScore: 0,
  eventName: null,
  completedLevels: [],
  achievements: [],
  hintsUsed: 0,
  targetWordsFound: 0,
  bonusWordsFound: 0,
  settings: { sound: true, vibration: true },
};

export function loadState() {
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return structuredClone(DEFAULT);
    const parsed = JSON.parse(raw);
    return {
      ...structuredClone(DEFAULT),
      ...parsed,
      settings: { ...DEFAULT.settings, ...(parsed.settings || {}) },
      completedLevels: Array.isArray(parsed.completedLevels) ? parsed.completedLevels : [],
      achievements: Array.isArray(parsed.achievements) ? parsed.achievements : [],
    };
  } catch {
    return structuredClone(DEFAULT);
  }
}

export function saveState(state) {
  localStorage.setItem(KEY, JSON.stringify(state));
}

export function exportState(state) {
  return JSON.stringify({ app: 'Wordra', version: CONFIG.saveVersion, savedAt: new Date().toISOString(), state }, null, 2);
}

export function importState(json) {
  const parsed = JSON.parse(json);
  if (!parsed || !parsed.state) throw new Error('Invalid Wordra save');
  const next = { ...structuredClone(DEFAULT), ...parsed.state };
  saveState(next);
  return next;
}

export function markLevelComplete(state, level) {
  if (!state.completedLevels.includes(level)) state.completedLevels.push(level);
  state.level = Math.max(state.level, level + 1);
}
