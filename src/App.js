import React, { useMemo, useState } from 'react';
import {
  ArrowLeft,
  ArrowRight,
  Blocks,
  BookOpen,
  Camera,
  Check,
  Coffee,
  CookingPot,
  Dumbbell,
  ExternalLink,
  Gift,
  Gamepad2,
  Hammer,
  HeartPulse,
  House,
  Music2,
  Palette,
  PawPrint,
  Plane,
  Puzzle,
  RotateCcw,
  Search,
  ShieldCheck,
  Sparkles,
  Sprout,
  Telescope,
  TentTree,
  Ticket,
  WandSparkles,
  Zap,
} from 'lucide-react';
import './App.css';
import { categoryDetails, giftCatalog } from './data/gifts';
import { questions } from './data/questions';
import {
  ASSOCIATE_TAG,
  buildAmazonUrl,
  getChristmasCountdown,
  getRecommendations,
} from './utils/recommendations';

const budgetLabels = {
  under25: 'Usually under $25',
  '25to50': 'Usually $25–$50',
  '50to100': 'Usually $50–$100',
  '100to200': 'Usually $100–$200',
  over200: 'Usually over $200',
};

const categoryIcons = {
  art: Palette,
  books: BookOpen,
  cooking: CookingPot,
  diy: Hammer,
  experiences: Ticket,
  fashion: WandSparkles,
  fitness: Dumbbell,
  food: Coffee,
  gaming: Gamepad2,
  garden: Sprout,
  home: House,
  kids: Blocks,
  music: Music2,
  outdoors: TentTree,
  pets: PawPrint,
  photography: Camera,
  puzzles: Puzzle,
  science: Telescope,
  tech: Zap,
  travel: Plane,
  wellness: HeartPulse,
};

const LightStrand = () => (
  <div className="light-strand" aria-hidden="true">
    {Array.from({ length: 22 }).map((_, index) => (
      <span
        key={index}
        className={`light-bulb light-bulb-${index % 4}`}
        style={{ animationDelay: `${(index % 7) * 0.23}s` }}
      />
    ))}
  </div>
);

const SnowmanIllustration = () => (
  <svg className="holiday-character" viewBox="0 0 120 140" role="img" aria-label="Modern snowman illustration">
    <defs>
      <linearGradient id="snowBody" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stopColor="#ffffff" />
        <stop offset="1" stopColor="#dce9e5" />
      </linearGradient>
    </defs>
    <ellipse cx="60" cy="130" rx="42" ry="7" fill="#061f1a" opacity=".24" />
    <circle cx="60" cy="91" r="36" fill="url(#snowBody)" stroke="#b9cbc6" strokeWidth="2" />
    <circle cx="60" cy="48" r="25" fill="url(#snowBody)" stroke="#b9cbc6" strokeWidth="2" />
    <path d="M34 58c14 8 36 8 52 0" fill="none" stroke="#b9383b" strokeWidth="8" strokeLinecap="round" />
    <path d="M79 61l14 28" fill="none" stroke="#b9383b" strokeWidth="7" strokeLinecap="round" />
    <path d="M39 22h42l-5-15H45z" fill="#172622" />
    <rect x="34" y="20" width="52" height="9" rx="4.5" fill="#172622" />
    <circle cx="51" cy="43" r="3" fill="#172622" />
    <circle cx="69" cy="43" r="3" fill="#172622" />
    <path d="M61 49l17 5-17 4z" fill="#df8b37" />
    <circle cx="60" cy="83" r="3.5" fill="#172622" />
    <circle cx="60" cy="101" r="3.5" fill="#172622" />
    <path d="M25 83L8 71M95 83l17-12" stroke="#8c6548" strokeWidth="4" strokeLinecap="round" />
  </svg>
);

const SantaIllustration = () => (
  <svg className="holiday-character" viewBox="0 0 120 140" role="img" aria-label="Modern Santa illustration">
    <defs>
      <linearGradient id="santaCoat" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stopColor="#d94b4e" />
        <stop offset="1" stopColor="#a92731" />
      </linearGradient>
    </defs>
    <ellipse cx="60" cy="130" rx="42" ry="7" fill="#061f1a" opacity=".24" />
    <path d="M29 126c2-36 10-55 31-55s29 19 31 55z" fill="url(#santaCoat)" />
    <path d="M30 105h60" stroke="#f4eee4" strokeWidth="8" strokeLinecap="round" />
    <path d="M33 126h54" stroke="#172622" strokeWidth="8" strokeLinecap="round" />
    <circle cx="60" cy="53" r="27" fill="#e8b395" />
    <path d="M35 57c1 30 14 39 25 39s24-9 25-39c-7 7-15 10-25 10s-18-3-25-10z" fill="#f6f1e7" />
    <path d="M40 32c4-19 19-29 30-25 13 4 19 18 22 32-16-5-34-7-52-7z" fill="#c9363d" />
    <path d="M37 32c17-4 37-1 55 7" fill="none" stroke="#f6f1e7" strokeWidth="9" strokeLinecap="round" />
    <circle cx="91" cy="21" r="9" fill="#f6f1e7" />
    <circle cx="50" cy="49" r="3" fill="#172622" />
    <circle cx="70" cy="49" r="3" fill="#172622" />
    <path d="M53 59c4 3 10 3 14 0" fill="none" stroke="#8f4b42" strokeWidth="3" strokeLinecap="round" />
    <path d="M50 70c6 5 14 5 20 0" fill="none" stroke="#bfcac6" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const Header = () => {
  const countdown = getChristmasCountdown();

  return (
    <header className="holiday-hero relative overflow-hidden rounded-[2rem] border border-emerald-300/15 bg-[#082c24] text-white shadow-2xl shadow-emerald-950/20">
      <LightStrand />
      <div className="holiday-grid" aria-hidden="true" />
      <div className="relative grid min-h-[285px] grid-cols-[90px_1fr_90px] items-end gap-2 px-4 pb-3 pt-16 sm:grid-cols-[140px_1fr_140px] sm:px-8 lg:grid-cols-[190px_1fr_190px]">
        <div className="flex items-end justify-center">
          <SnowmanIllustration />
        </div>
        <div className="self-center px-1 pb-8 text-center sm:px-4">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.22em] text-emerald-100 backdrop-blur sm:text-xs">
            <Sparkles className="h-3.5 w-3.5 text-amber-300" /> Thoughtful gifting, made simple
          </div>
          <h1 className="text-3xl font-black tracking-[-0.035em] text-white sm:text-5xl lg:text-6xl">
            Find a gift that feels <span className="text-amber-300">personal.</span>
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-emerald-50/75 sm:text-base">
            A few thoughtful questions. A focused shortlist for the person you know best.
          </p>
          <div className="mt-5 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-extrabold text-[#10372e] shadow-lg shadow-black/10 sm:text-sm">
            <Gift className="h-4 w-4 text-red-600" />
            {countdown.days === 0
              ? `Merry Christmas ${countdown.year}`
              : `${countdown.days} days until Christmas ${countdown.year}`}
          </div>
        </div>
        <div className="flex items-end justify-center">
          <SantaIllustration />
        </div>
      </div>
    </header>
  );
};

const ChoiceButton = ({ option, selected, onClick, disabled }) => (
  <button
    type="button"
    onClick={onClick}
    disabled={disabled}
    aria-pressed={selected}
    className={`group flex min-h-16 items-center gap-3 rounded-xl border p-4 text-left transition-all duration-200 ${
      selected
        ? 'border-emerald-600 bg-emerald-50 text-emerald-950 shadow-[0_8px_24px_rgba(5,150,105,0.10)]'
        : 'border-stone-200 bg-white text-slate-800 hover:-translate-y-0.5 hover:border-emerald-400 hover:shadow-md'
    } disabled:cursor-not-allowed disabled:opacity-45`}
  >
    <span
      className={`flex h-6 w-6 flex-none items-center justify-center rounded-md border-2 transition ${
        selected ? 'border-emerald-600 bg-emerald-600 text-white' : 'border-slate-300 bg-white'
      }`}
      aria-hidden="true"
    >
      {selected && <Check className="h-4 w-4" strokeWidth={3} />}
    </span>
    <span className="font-semibold leading-snug">{option.label}</span>
  </button>
);

const Questionnaire = ({ onComplete }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const currentQuestion = questions[currentIndex];
  const currentValue = answers[currentQuestion.id];
  const progress = Math.round(((currentIndex + 1) / questions.length) * 100);

  const selectedValues = Array.isArray(currentValue) ? currentValue : [];
  const canProceed = currentQuestion.required
    ? currentQuestion.type === 'multi'
      ? selectedValues.length > 0
      : Boolean(typeof currentValue === 'string' ? currentValue.trim() : currentValue)
    : true;

  const selectOption = (value) => {
    if (currentQuestion.type === 'multi') {
      setAnswers((previous) => {
        const selected = previous[currentQuestion.id] || [];
        const alreadySelected = selected.includes(value);
        const next = alreadySelected
          ? selected.filter((item) => item !== value)
          : [...selected, value];

        if (!alreadySelected && currentQuestion.maxSelections && next.length > currentQuestion.maxSelections) {
          return previous;
        }

        return { ...previous, [currentQuestion.id]: next };
      });
      return;
    }

    setAnswers((previous) => ({ ...previous, [currentQuestion.id]: value }));
  };

  const goForward = () => {
    if (!canProceed) return;
    if (currentIndex === questions.length - 1) {
      onComplete(answers);
      return;
    }
    setCurrentIndex((index) => index + 1);
  };

  const goBack = () => setCurrentIndex((index) => Math.max(0, index - 1));

  return (
    <main className="mt-7 rounded-[2rem] border border-stone-200/80 bg-white p-5 shadow-[0_24px_80px_rgba(30,50,42,0.09)] sm:p-9">
      <div className="mb-8">
        <div className="mb-2 flex items-center justify-between text-sm font-semibold text-slate-600">
          <span>Question {currentIndex + 1} of {questions.length}</span>
          <span>{progress}% complete</span>
        </div>
        <div className="h-2 overflow-hidden rounded-full bg-stone-100">
          <div
            className="h-full rounded-full bg-gradient-to-r from-emerald-400 via-emerald-600 to-[#0b3b31] transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      <section aria-labelledby="question-heading">
        <div className="mb-6">
          <p className="mb-2 text-xs font-bold uppercase tracking-[0.22em] text-emerald-700">
            Help us narrow it down
          </p>
          <h2 id="question-heading" className="text-2xl font-black text-slate-900 sm:text-3xl">
            {currentQuestion.question}
          </h2>
          {currentQuestion.helper && <p className="mt-2 text-slate-600">{currentQuestion.helper}</p>}
        </div>

        {currentQuestion.type === 'text' ? (
          <div>
            <label htmlFor="gift-clue" className="sr-only">Additional gift clue</label>
            <textarea
              id="gift-clue"
              rows="5"
              maxLength="240"
              value={currentValue || ''}
              onChange={(event) => setAnswers((previous) => ({
                ...previous,
                [currentQuestion.id]: event.target.value,
              }))}
              placeholder={currentQuestion.placeholder}
              className="w-full rounded-xl border border-stone-200 p-4 text-base text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100"
            />
            <p className="mt-2 text-right text-xs text-slate-500">{(currentValue || '').length}/240</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {currentQuestion.options.map((option) => {
              const selected = currentQuestion.type === 'multi'
                ? selectedValues.includes(option.value)
                : currentValue === option.value;
              const atLimit = currentQuestion.type === 'multi'
                && currentQuestion.maxSelections
                && selectedValues.length >= currentQuestion.maxSelections;

              return (
                <ChoiceButton
                  key={option.value}
                  option={option}
                  selected={selected}
                  onClick={() => selectOption(option.value)}
                  disabled={!selected && atLimit}
                />
              );
            })}
          </div>
        )}

        <div className="mt-8 flex items-center justify-between gap-4 border-t border-stone-100 pt-6">
          <button
            type="button"
            onClick={goBack}
            disabled={currentIndex === 0}
            className="inline-flex items-center gap-2 rounded-xl px-4 py-3 font-bold text-slate-600 transition hover:bg-stone-100 disabled:cursor-not-allowed disabled:opacity-35"
          >
            <ArrowLeft className="h-5 w-5" /> Back
          </button>

          <div className="flex items-center gap-3">
            {!currentQuestion.required && !currentValue?.length && (
              <span className="hidden text-sm text-slate-500 sm:inline">This question is optional</span>
            )}
            <button
              type="button"
              onClick={goForward}
              disabled={!canProceed}
              className="inline-flex items-center gap-2 rounded-xl bg-[#0b3b31] px-5 py-3 font-bold text-white shadow-lg shadow-emerald-950/15 transition hover:-translate-y-0.5 hover:bg-[#145647] disabled:cursor-not-allowed disabled:opacity-40"
            >
              {currentIndex === questions.length - 1 ? (
                <><Sparkles className="h-5 w-5" /> Find gifts</>
              ) : (
                <>{currentQuestion.required ? 'Next' : currentValue?.length ? 'Next' : 'Skip'} <ArrowRight className="h-5 w-5" /></>
              )}
            </button>
          </div>
        </div>
      </section>
    </main>
  );
};

const GiftCard = ({ item, budget }) => {
  const category = categoryDetails[item.category];
  const CategoryIcon = categoryIcons[item.category] || Gift;
  const url = buildAmazonUrl(item);

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-stone-200/90 bg-white shadow-[0_12px_45px_rgba(30,50,42,0.07)] transition-all duration-300 hover:-translate-y-1 hover:border-emerald-700/25 hover:shadow-[0_20px_55px_rgba(30,70,55,0.13)]">
      <div className={`relative flex h-40 items-center justify-center overflow-hidden bg-gradient-to-br ${category.gradient}`}>
        <div className="absolute -right-8 -top-12 h-32 w-32 rounded-full border border-white/70" aria-hidden="true" />
        <div className="absolute -bottom-16 -left-10 h-40 w-40 rounded-full bg-white/25" aria-hidden="true" />
        <div className="relative flex h-20 w-20 items-center justify-center rounded-3xl border border-white/80 bg-white/65 text-[#0b3b31] shadow-xl shadow-emerald-950/5 backdrop-blur-sm transition-transform duration-300 group-hover:scale-105 group-hover:-rotate-2">
          <CategoryIcon className="h-10 w-10" strokeWidth={1.6} aria-label={category.label} />
        </div>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <div className="mb-3 flex items-center justify-between gap-3">
          <span className="rounded-full bg-stone-100 px-3 py-1 text-xs font-bold text-slate-700">
            {category.label}
          </span>
          <span className="text-xs font-black uppercase tracking-wide text-emerald-700">{item.matchTier}</span>
        </div>
        <h3 className="text-xl font-black text-slate-900">{item.name}</h3>
        <p className="mt-2 text-sm leading-6 text-slate-600">{item.description}</p>
        <p className="mt-3 text-sm font-bold text-slate-800">{budgetLabels[budget]}</p>

        {item.reasons.length > 0 && (
          <div className="mt-4">
            <p className="mb-2 text-xs font-black uppercase tracking-wide text-slate-500">Why it fits</p>
            <div className="flex flex-wrap gap-2">
              {item.reasons.map((reason) => (
                <span key={reason} className="rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-semibold text-emerald-800">
                  {reason}
                </span>
              ))}
            </div>
          </div>
        )}

        <a
          href={url}
          target="_blank"
          rel="sponsored noopener noreferrer"
          className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#f0b63f] px-4 py-3 font-black text-[#172622] transition hover:-translate-y-0.5 hover:bg-amber-300 focus:outline-none focus:ring-4 focus:ring-amber-200"
        >
          <Search className="h-4 w-4" /> Browse on Amazon <ExternalLink className="h-4 w-4" />
        </a>
      </div>
    </article>
  );
};

const Results = ({ answers, onRestart }) => {
  const recommendations = useMemo(
    () => getRecommendations(giftCatalog, answers),
    [answers],
  );

  return (
    <main className="mt-6">
      <section className="rounded-[2rem] border border-stone-200/80 bg-white p-6 text-center shadow-[0_24px_80px_rgba(30,50,42,0.09)] sm:p-10">
        <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#0b3b31] text-amber-300 shadow-lg shadow-emerald-950/15">
          <Gift className="h-7 w-7" />
        </div>
        <p className="text-xs font-black uppercase tracking-[0.22em] text-emerald-700">Your personalized shortlist</p>
        <h2 className="mt-2 text-3xl font-black text-slate-900 sm:text-4xl">Gift ideas that fit the person</h2>
        <p className="mx-auto mt-3 max-w-2xl text-slate-600">
          These are durable gift ideas rather than stale product listings. Each button opens a current Amazon search with your affiliate tracking included.
        </p>
        <div className="mx-auto mt-5 flex max-w-2xl items-start gap-3 rounded-2xl border border-stone-100 bg-[#f8f7f2] p-4 text-left text-sm text-slate-600">
          <ShieldCheck className="mt-0.5 h-5 w-5 flex-none text-emerald-700" />
          <p>
            Prices and availability can change. Check the Amazon listing before purchasing. As an Amazon Associate I earn from qualifying purchases.
          </p>
        </div>
      </section>

      {recommendations.length > 0 ? (
        <section className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3" aria-label="Gift recommendations">
          {recommendations.map((item) => (
            <GiftCard key={item.id} item={item} budget={answers.budget} />
          ))}
        </section>
      ) : (
        <section className="mt-6 rounded-2xl bg-white p-8 text-center shadow-lg">
          <h3 className="text-xl font-black text-slate-900">We need a slightly wider search</h3>
          <p className="mt-2 text-slate-600">Try again with fewer restrictions to see more ideas.</p>
        </section>
      )}

      <div className="mt-8 text-center">
        <button
          type="button"
          onClick={onRestart}
          className="inline-flex items-center gap-2 rounded-xl bg-[#9f2f38] px-6 py-3 font-black text-white transition hover:-translate-y-0.5 hover:bg-[#84242c]"
        >
          <RotateCcw className="h-5 w-5" /> Start over
        </button>
        <p className="mt-3 text-xs text-slate-500">Amazon tracking ID: {ASSOCIATE_TAG}</p>
      </div>
    </main>
  );
};

const App = () => {
  const [completedAnswers, setCompletedAnswers] = useState(null);

  return (
    <div className="min-h-screen bg-[#f3f1ea] bg-[radial-gradient(circle_at_top_left,_rgba(159,47,56,0.08),_transparent_30%),radial-gradient(circle_at_top_right,_rgba(11,59,49,0.11),_transparent_33%)] px-4 py-6 sm:px-6 sm:py-10">
      <div className="mx-auto max-w-6xl">
        <Header />
        {completedAnswers ? (
          <Results answers={completedAnswers} onRestart={() => setCompletedAnswers(null)} />
        ) : (
          <Questionnaire onComplete={setCompletedAnswers} />
        )}
        <footer className="pb-4 pt-10 text-center text-xs leading-5 text-slate-500">
          Gift ideas are suggestions, not live inventory. Amazon and the Amazon logo are trademarks of Amazon.com, Inc. or its affiliates.
        </footer>
      </div>
    </div>
  );
};

export default App;
