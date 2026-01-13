
import React from 'react';
import { Question } from '../types';

interface QuestionCardProps {
  question: Question;
  currentIndex: number;
  totalQuestions: number;
  onAnswer: (scores: Partial<Question['options'][0]['scores']>) => void;
}

const QuestionCard: React.FC<QuestionCardProps> = ({
  question,
  currentIndex,
  totalQuestions,
  onAnswer,
}) => {
  return (
    <div className="w-full max-w-2xl mx-auto px-4">
      <div className="text-center mb-12">
        <span className="text-sm font-bold gold-text uppercase tracking-widest">
          Question {currentIndex + 1} / {totalQuestions}
        </span>
        <h2 className="text-2xl md:text-3xl font-black mt-4 leading-tight text-gray-900">
          {question.text}
        </h2>
      </div>

      <div className="space-y-4">
        {question.options.map((option, index) => (
          <button
            key={index}
            onClick={() => onAnswer(option.scores)}
            className="w-full text-left p-6 rounded-2xl card-bg hover:bg-gray-100 transition-all duration-300 transform hover:scale-[1.01] active:scale-[0.98] group flex items-center"
          >
            <div className="w-10 h-10 rounded-full border-2 border-[#d4af37] flex items-center justify-center mr-6 font-bold text-[#d4af37] group-hover:bg-[#d4af37] group-hover:text-white transition-colors">
              {index === 0 ? 'A' : 'B'}
            </div>
            <span className="text-lg font-bold text-gray-800">{option.text}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default QuestionCard;
