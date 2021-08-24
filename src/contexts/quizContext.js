import { createContext, useContext, useReducer } from "react";
import { quizReducer } from "../reducers/quiz.reducer";

export const QuizContext = createContext();
const initialState = {
  selectedQuiz: null,
  currentQuestionNumber: 1,
  isSelected:false,
  selectedOptionIsCorrect: null,
};

export const QuizProvider = ({ children }) => {
  const [state, dispatch] = useReducer(quizReducer, initialState);
  return (
    <QuizContext.Provider value={{ state, dispatch }}>
      {children}
    </QuizContext.Provider>
  );
};

export const useQuiz = () => {
  return useContext(QuizContext);
};
