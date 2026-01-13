
export interface CEO {
  id: number;
  name: string;
  xLink: string;
  xUsername: string;
  personality: string;
  business: string;
  philosophy: string;
  motivation: string;
  traits: {
    logic: number; // 1-5 (High = Logic, Low = Emotion)
    strict: number; // 1-5 (High = Strict, Low = Kind)
    social: number; // 1-5 (High = Social/Broad, Low = Niche/Specialized)
    risk: number; // 1-5 (High = Aggressive, Low = Realistic)
  };
}

export interface Question {
  id: number;
  text: string;
  options: {
    text: string;
    scores: Partial<CEO['traits']>;
  }[];
}

export type AppState = 'START' | 'QUIZ' | 'RESULT';
