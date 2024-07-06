// /app/store/useQuizStore.ts
import { create } from 'zustand';

interface User {
    id: string;
    name: string;

}

interface QuizState {
    user: User | null;
    score: number;
    currentQuestionIndex: number;
    askedQuestions: number[];
    setUser: (user: User) => void;
    incrementScore: () => void;
    nextQuestion: () => void;
    addAskedQuestion: (questionId: number) => void;
    resetQuiz: () => void;
    totalQuestionLimit: number
}

const useQuizStore = create<QuizState>((set) => ({
    user: null,
    score: 0,
    currentQuestionIndex: 0,
    totalQuestionLimit: 20,
    askedQuestions: [],
    setUser: (user) => set({ user }),
    incrementScore: () => set((state) => ({ score: state.score + 1 })),
    nextQuestion: () => set((state) => ({ currentQuestionIndex: state.currentQuestionIndex + 1 })),
    addAskedQuestion: (questionId) => set((state) => ({ askedQuestions: [...state.askedQuestions, questionId] })),
    resetQuiz: () => set({ score: 0, currentQuestionIndex: 0, askedQuestions: [] }),
}));

export default useQuizStore;
