
import React, { useState, useCallback, useMemo } from 'react';
import { AppState, CEO } from './types.ts';
import { QUESTIONS, CEOS } from './constants.ts';
import QuestionCard from './components/QuestionCard.tsx';
import ResultView from './components/ResultView.tsx';

interface TraitHistory {
  logic: number[];
  strict: number[];
  social: number[];
  risk: number[];
}

const App: React.FC = () => {
  const [appState, setAppState] = useState<AppState>('START');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  
  const [traitHistory, setTraitHistory] = useState<TraitHistory>({
    logic: [],
    strict: [],
    social: [],
    risk: [],
  });

  const startQuiz = () => {
    setAppState('QUIZ');
    setCurrentQuestionIndex(0);
    setTraitHistory({
      logic: [],
      strict: [],
      social: [],
      risk: [],
    });
  };

  const handleAnswer = useCallback((scores: Partial<CEO['traits']>) => {
    setTraitHistory((prev) => {
      const next = { ...prev };
      (Object.keys(scores) as Array<keyof CEO['traits']>).forEach((key) => {
        if (scores[key] !== undefined) {
          next[key] = [...next[key], scores[key]!];
        }
      });
      return next;
    });

    if (currentQuestionIndex < QUESTIONS.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
    } else {
      setAppState('RESULT');
    }
  }, [currentQuestionIndex]);

  const userTraits = useMemo(() => {
    const result: CEO['traits'] = { logic: 3, strict: 3, social: 3, risk: 3 };
    (Object.keys(traitHistory) as Array<keyof CEO['traits']>).forEach((key) => {
      if (traitHistory[key].length > 0) {
        const sum = traitHistory[key].reduce((a, b) => a + b, 0);
        result[key] = sum / traitHistory[key].length;
      }
    });
    return result;
  }, [traitHistory]);

  const resultCEO = useMemo(() => {
    if (appState !== 'RESULT') return CEOS[0];
    let minDistance = Infinity;
    let closestCEO = CEOS[0];
    CEOS.forEach((ceo) => {
      const distance = Math.sqrt(
        Math.pow(ceo.traits.logic - userTraits.logic, 2) +
        Math.pow(ceo.traits.strict - userTraits.strict, 2) +
        Math.pow(ceo.traits.social - userTraits.social, 2) +
        Math.pow(ceo.traits.risk - userTraits.risk, 2)
      );
      if (distance < minDistance) {
        minDistance = distance;
        closestCEO = ceo;
      }
    });
    return closestCEO;
  }, [appState, userTraits]);

  return (
    <div className="min-h-screen bg-white text-gray-900 flex flex-col items-center justify-center py-8">
      <header className="mb-12 text-center">
        <h1 className="text-4xl md:text-6xl font-black italic tracking-tighter text-gray-900">
          令和の虎 <span className="gold-text">診断</span>
        </h1>
        <p className="text-gray-400 mt-2 font-medium tracking-widest uppercase text-xs md:text-sm">Tiger Funding Diagnosis</p>
      </header>

      <main className="w-full flex-1 flex flex-col items-center justify-center">
        {appState === 'START' && (
          <div className="text-center px-4 max-w-xl animate-in zoom-in duration-700">
            <div className="mb-16">
              <p className="text-2xl md:text-3xl font-black text-gray-900 mb-6 leading-tight">
                あなたのビジネス・リーダーシップの本質を暴く
              </p>
              <p className="text-gray-600 text-lg font-bold leading-relaxed">
                10個の質問から、あなたのビジネススタイルに<br/>最も近い社長を診断します。
              </p>
            </div>
            <button
              onClick={startQuiz}
              className="px-16 py-6 rounded-2xl gold-gradient text-black font-black text-xl shadow-[0_10px_30px_rgba(212,175,55,0.3)] hover:shadow-[0_15px_40px_rgba(212,175,55,0.5)] transform hover:-translate-y-1 transition-all duration-300 active:scale-95"
            >
              診断を開始する
            </button>
          </div>
        )}

        {appState === 'QUIZ' && (
          <div className="w-full">
            <div className="max-w-2xl mx-auto px-4 mb-12">
              <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                <div 
                  className="h-full gold-gradient transition-all duration-500" 
                  style={{ width: `${((currentQuestionIndex + 1) / QUESTIONS.length) * 100}%` }}
                ></div>
              </div>
            </div>
            <QuestionCard
              question={QUESTIONS[currentQuestionIndex]}
              currentIndex={currentQuestionIndex}
              totalQuestions={QUESTIONS.length}
              onAnswer={handleAnswer}
            />
          </div>
        )}

        {appState === 'RESULT' && (
          <ResultView ceo={resultCEO} onReset={startQuiz} />
        )}
      </main>

      <footer className="mt-12 text-gray-400 text-xs tracking-widest uppercase">
        &copy; 2024 Tiger Funding Diagnosis
      </footer>
    </div>
  );
};

export default App;
