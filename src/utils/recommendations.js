import { getOptionLabel } from '../data/questions';

export const ASSOCIATE_TAG = 'jawdroppuh-20';

const WEIGHTS = {
  age: 5,
  relationship: 4,
  occasion: 3,
  personality: 5,
  giftStyle: 7,
  hobbies: 8,
  interests: 7,
  lifeStage: 5,
  techComfort: 4,
  activity: 5,
  homeSituation: 4,
  preferences: 5,
};

const asArray = (value) => {
  if (Array.isArray(value)) return value;
  if (value === undefined || value === null || value === '') return [];
  return [value];
};

const clueWords = (clue = '') => (
  clue
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, ' ')
    .split(/\s+/)
    .filter((word) => word.length >= 3)
);

const scoreGift = (item, answers) => {
  if (answers.budget && !item.budgets.includes(answers.budget)) return null;

  const blockedBy = asArray(answers.avoid).filter((value) => item.avoid?.includes(value));
  if (blockedBy.length) return null;

  let score = item.budgets.includes(answers.budget) ? 20 : 5;
  const reasons = [];

  Object.entries(WEIGHTS).forEach(([questionId, weight]) => {
    asArray(answers[questionId]).forEach((value) => {
      if (item.matches.includes(value)) {
        score += weight;
        reasons.push(getOptionLabel(questionId, value));
      }
    });
  });

  const searchable = [
    item.name,
    item.description,
    item.searchTerm,
    item.category,
    ...item.matches,
  ].join(' ').toLowerCase();

  const clueMatches = [...new Set(clueWords(answers.clue))]
    .filter((word) => searchable.includes(word))
    .slice(0, 4);

  if (clueMatches.length) {
    score += clueMatches.length * 4;
    reasons.push(`Matches your clue: ${clueMatches.join(', ')}`);
  }

  return {
    ...item,
    score,
    reasons: [...new Set(reasons)].slice(0, 3),
    matchTier: score >= 58 ? 'Excellent match' : score >= 42 ? 'Strong match' : 'Good match',
  };
};

export const getRecommendations = (catalog, answers, limit = 12) => {
  const ranked = catalog
    .map((item) => scoreGift(item, answers))
    .filter(Boolean)
    .sort((a, b) => b.score - a.score || a.name.localeCompare(b.name));

  const results = [];
  const categoryCounts = new Map();

  ranked.forEach((item) => {
    if (results.length >= limit) return;
    const count = categoryCounts.get(item.category) || 0;
    if (count < 3) {
      results.push(item);
      categoryCounts.set(item.category, count + 1);
    }
  });

  if (results.length < limit) {
    ranked.forEach((item) => {
      if (results.length < limit && !results.some((result) => result.id === item.id)) {
        results.push(item);
      }
    });
  }

  return results;
};

export const buildAmazonUrl = (item) => {
  if (item.affiliateUrl) return item.affiliateUrl;
  return `https://www.amazon.com/s?k=${encodeURIComponent(item.searchTerm)}&tag=${ASSOCIATE_TAG}`;
};

export const getChristmasCountdown = (now = new Date()) => {
  const year = now.getFullYear();
  let christmas = new Date(year, 11, 25);
  const startOfToday = new Date(year, now.getMonth(), now.getDate());

  if (startOfToday > christmas) christmas = new Date(year + 1, 11, 25);

  return {
    days: Math.ceil((christmas - startOfToday) / (1000 * 60 * 60 * 24)),
    year: christmas.getFullYear(),
  };
};
