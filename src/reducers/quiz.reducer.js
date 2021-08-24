export const quizReducer = (state, { type, payload }) => {
  switch (type) {
    case "GET_QUIZ": {
      return {
        ...state,
        selectedQuiz: payload,
      };
    }
    case "IS_OPTION_CORRECT": {
      let result;
      state.selectedQuiz.forEach((question) => {
        if (question.title === payload.questionTitle) {
          if (question.correct_answer === payload.selectedOption) {
            result = {
              ...state,
              selectedOptionIsCorrect: payload.selectedOption,
            };
          } else {
            result = {
              ...state,
              selectedOptionIsCorrect: false,
            };
          }
        }
      });
      return result;
    }
    case "SELECT_OPTION": {
         state.selectedQuiz.forEach(question=>{
            if(question.title===payload.questionTitle){

            }
        })
     return {
         ...state,
         isSelected:true
     }
    }
    case "INCREMENT_QUESTION_NUMBER": {
      return {
        ...state,
        currentQuestionNumber: state.currentQuestionNumber + 1,
      };
    }

    default: {
      throw new Error("Unhandled action type!");
    }
  }
};
