export const CONFIG = {
  campaignLevels: 1000,
  hintCost: 25,
  levelBaseReward: 50,
  targetWordReward: 2,
  bonusReward: 5,
  maxBonusPerLevel: 12,
  minBonusLength: 3,
  maxBonusLength: 7,
  saveVersion: 2,
};

export const CHAPTERS = [
  { min: 1, max: 50, name: 'Beginnings', subtitle: 'Learn the feel of the board.' },
  { min: 51, max: 150, name: 'Momentum', subtitle: 'Words start to twist.' },
  { min: 151, max: 300, name: 'Focus', subtitle: 'Longer paths, denser boards.' },
  { min: 301, max: 500, name: 'Flow', subtitle: 'Crossings become more important.' },
  { min: 501, max: 750, name: 'Mastery', subtitle: 'Tighter layouts and richer vocabulary.' },
  { min: 751, max: 1000, name: 'Wordra', subtitle: 'The board is yours to master.' },
];

export function getChapter(levelNumber) {
  return CHAPTERS.find(c => levelNumber >= c.min && levelNumber <= c.max) || CHAPTERS.at(-1);
}

export function difficultyForLevel(levelNumber) {
  const n = Math.max(1, levelNumber);
  const t = Math.min(1, (n - 1) / 999);
  const rows = n < 50 ? 5 : n < 250 ? 6 : n < 600 ? 7 : 8;
  const cols = rows;
  const targetCount = Math.min(10, 4 + Math.floor(t * 6));
  const minLen = n < 25 ? 3 : n < 100 ? 4 : n < 350 ? 4 : 5;
  const maxLen = n < 30 ? 5 : n < 200 ? 6 : n < 600 ? 7 : 8;
  return { rows, cols, targetCount, minLen, maxLen, overlapBias: 0.35 + t * 0.45, decoyBias: 0.1 + t * 0.12 };
}
