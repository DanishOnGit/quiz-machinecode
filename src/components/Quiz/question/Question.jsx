

import { useQuiz } from "../../../contexts/quizContext"
import { OptionsContainer } from "../options/OptionsContainer"

export const Question=({question})=>{
    
    const {state:{selectedQuiz,currentQuestionNumber,selectedOptionIsCorrect},dispatch}=useQuiz();
    return (
        <div>
            <h1>Question {currentQuestionNumber} of {`${selectedQuiz.length}`}</h1>
            <h2>{question.title}</h2>
            <OptionsContainer question={question}/>
            {
                selectedOptionIsCorrect&&<p>Correct Answer!</p>
            }
            {
                selectedOptionIsCorrect&&<button onClick={()=>dispatch({type:"INCREMENT_QUESTION_NUMBER"})}>Next question</button>
            }
        </div>
    )
}