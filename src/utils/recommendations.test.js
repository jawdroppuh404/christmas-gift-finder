import { categoryDetails, giftCatalog, validateCatalog } from '../data/gifts';
import { questions } from '../data/questions';
import {
  ASSOCIATE_TAG,
  buildAmazonUrl,
  getChristmasCountdown,
  getRecommendations,
} from './recommendations';

const gamingAnswers = {
  budget: '25to50',
  age: 'young-adult',
  relationship: 'sibling',
  occasion: 'christmas',
  personality: ['playful'],
  giftStyle: ['fun', 'upgrade'],
  hobbies: ['gaming'],
  interests: ['technology'],
  techComfort: 'tech-lover',
  activity: 'homebody',
};

test('catalog has no structural errors or duplicate ids', () => {
  expect(validateCatalog()).toEqual([]);
  expect(giftCatalog).toHaveLength(174);
});

test('catalog categories and questionnaire preferences have meaningful coverage', () => {
  const questionnaireValues = new Set(
    questions.flatMap((question) => question.options?.map((option) => option.value) || []),
  );

  Object.keys(categoryDetails).forEach((category) => {
    expect(giftCatalog.filter((item) => item.category === category).length).toBeGreaterThanOrEqual(3);
  });

  expect(
    giftCatalog.every((item) => item.matches.some((value) => questionnaireValues.has(value))),
  ).toBe(true);
});

test('recommendations respect budget and rank strong interests', () => {
  const results = getRecommendations(giftCatalog, gamingAnswers);

  expect(results).toHaveLength(12);
  expect(results.every((item) => item.budgets.includes('25to50'))).toBe(true);
  expect(results.slice(0, 5).some((item) => item.category === 'gaming')).toBe(true);
});

test('restrictions remove conflicting ideas', () => {
  const results = getRecommendations(giftCatalog, {
    ...gamingAnswers,
    avoid: ['avoid-tech'],
  });

  expect(results.every((item) => !item.avoid.includes('avoid-tech'))).toBe(true);
});

test('the optional clue can surface a more specific idea', () => {
  const results = getRecommendations(giftCatalog, {
    ...gamingAnswers,
    budget: 'under25',
    hobbies: ['music'],
    clue: 'learning guitar',
    avoid: ['avoid-noise'],
  });

  expect(results.slice(0, 5).some((item) => item.id === 'instrument-accessory')).toBe(true);
});

test('Amazon search links include the new tracking id', () => {
  const url = buildAmazonUrl(giftCatalog[0]);

  expect(url).toContain(`tag=${ASSOCIATE_TAG}`);
  expect(url).toContain('amazon.com/s?k=');
  expect(ASSOCIATE_TAG).toBe('jawdroppuh-20');
});

test('Christmas countdown automatically rolls into the next year', () => {
  expect(getChristmasCountdown(new Date(2026, 11, 25))).toEqual({ days: 0, year: 2026 });
  expect(getChristmasCountdown(new Date(2026, 11, 26))).toEqual({ days: 364, year: 2027 });
});
