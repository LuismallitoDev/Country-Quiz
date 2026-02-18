import { createContext, useContext } from 'react';

export interface Country {
    name: { common: string };
    capital: string[];
    flags: { png: string };
    region: string;
}
export interface Questions {
    answer: Country;
    options: Country[];
    selected: boolean;
}
export interface QuizContextType {
    countries: Country[];
    currentIndex: number;
    score: number;
    userAnswer: string;
    gameOver: boolean;
    questions: Questions[],
    icons: boolean[] | null[];
    setUserAnswer: (answer: string) => void;
    handleCheck: (selectedCountry: string) => void;
    resetQuiz: () => void;
}

export const QuizContext = createContext<QuizContextType | null>(null);

export const useQuiz = () => {
    const context = useContext(QuizContext);
    if (!context) throw new Error("useQuiz debe estar dentro de QuizProvider");
    return context;
};