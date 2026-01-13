
import React from 'react';
import { CEO } from '../types';

interface ResultViewProps {
  ceo: CEO;
  onReset: () => void;
}

const ResultView: React.FC<ResultViewProps> = ({ ceo, onReset }) => {
  const avatarUrl = `https://unavatar.io/twitter/${ceo.xUsername}`;

  return (
    <div className="w-full max-w-4xl mx-auto px-4 pb-12 animate-in fade-in slide-in-from-bottom-8 duration-1000">
      <div className="text-center mb-12">
        <h2 className="text-sm md:text-lg font-bold mb-4 text-gray-400 uppercase tracking-[0.3em]">Diagnosis Result</h2>
        <div className="inline-block p-[2px] gold-gradient rounded-2xl mb-6 shadow-2xl">
          <div className="bg-white px-10 py-4 rounded-[14px]">
            <h1 className="text-3xl md:text-5xl font-black text-gray-900 tracking-tight">
              {ceo.name} <span className="gold-text">タイプ</span>
            </h1>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mb-16">
        <div className="md:col-span-4 flex flex-col items-center">
          <div className="sticky top-8">
            <div className="relative group mb-8">
              <div className="absolute -inset-2 gold-gradient rounded-full blur opacity-25 group-hover:opacity-60 transition duration-1000"></div>
              <img
                src={avatarUrl}
                alt={ceo.name}
                className="relative w-48 h-48 md:w-56 md:h-56 rounded-full border-[8px] border-white object-cover shadow-2xl"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = `https://picsum.photos/seed/${ceo.id}/400/400`;
                }}
              />
            </div>
            <a
              href={ceo.xLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center bg-gray-900 text-white px-6 py-4 rounded-2xl font-black hover:bg-black transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
            >
              <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
              Xをチェックする
            </a>
          </div>
        </div>

        <div className="md:col-span-8 space-y-6">
          <div className="p-8 md:p-10 rounded-[2.5rem] bg-gray-900 text-white relative overflow-hidden group shadow-2xl">
            <div className="absolute top-0 right-0 p-8 opacity-10">
              <svg className="w-32 h-32 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" />
              </svg>
            </div>
            <h3 className="gold-text font-black text-2xl mb-6 flex items-center">
              <span className="w-8 h-8 rounded-full gold-gradient flex items-center justify-center mr-3">
                <svg className="w-5 h-5 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </span>
              徹底性格分析
            </h3>
            <p className="text-xl md:text-2xl leading-relaxed text-gray-100 font-bold whitespace-pre-wrap">
              {ceo.personality}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-[2rem] card-bg relative overflow-hidden flex flex-col justify-between">
              <div>
                <h3 className="text-gray-900 font-black text-lg mb-3 flex items-center">
                  <svg className="w-5 h-5 mr-3 text-[#d4af37]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  事業内容
                </h3>
                <p className="text-gray-600 leading-relaxed font-bold">{ceo.business}</p>
              </div>
            </div>

            <div className="p-6 rounded-[2rem] card-bg relative overflow-hidden flex flex-col justify-between">
              <div>
                <h3 className="text-gray-900 font-black text-lg mb-3 flex items-center">
                  <svg className="w-5 h-5 mr-3 text-[#d4af37]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                  経営哲学
                </h3>
                <p className="text-gray-600 leading-relaxed font-bold">{ceo.philosophy}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center space-y-12 mt-12">
        <div className="max-w-2xl mx-auto px-8 py-10 border-y border-gray-100 relative bg-gray-50/50 rounded-xl">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-4 text-gray-300 text-3xl italic">"</div>
          <p className="text-gray-600 italic text-lg md:text-xl leading-relaxed font-medium">{ceo.motivation}</p>
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 bg-white px-4 text-gray-300 text-3xl italic">"</div>
        </div>
        
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 pt-4">
          <button
            onClick={onReset}
            className="w-full md:w-auto px-12 py-5 rounded-2xl border-2 border-gray-100 text-gray-400 font-black hover:border-[#d4af37] hover:text-[#d4af37] transition-all duration-500 uppercase tracking-widest text-sm"
          >
            診断をやり直す
          </button>
          <button
            onClick={() => {
              const text = encodeURIComponent(`令和の虎診断の結果、私は「${ceo.name}タイプ」でした！\n\n${ceo.personality.substring(0, 50)}...\n\n#令和の虎診断 #令和の虎`);
              window.open(`https://twitter.com/intent/tweet?text=${text}&url=${window.location.href}`, '_blank');
            }}
            className="w-full md:w-auto px-16 py-6 rounded-2xl gold-gradient text-black font-black text-xl hover:shadow-[0_20px_50px_rgba(212,175,55,0.4)] transition-all duration-300 transform hover:-translate-y-1 active:scale-95 shadow-xl"
          >
            結果をシェアする
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResultView;
