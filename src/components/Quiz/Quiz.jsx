import { useQuiz } from "../../contexts/quizContext";
import { Question } from "./question/Question";

export const Quiz = ({ selectedQuiz }) => {
  const {
    state: { currentQuestionNumber },
  } = useQuiz();
  return (
    <div>
      <Question question={selectedQuiz[currentQuestionNumber - 1]} />
    </div>
  );
};
