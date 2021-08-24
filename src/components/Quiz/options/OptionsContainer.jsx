import { OptionBtn } from "./OptionBtn"


export const OptionsContainer=({question})=>{
    return (
        <div>
            <ul>
                {
                    question.options.map(option=><OptionBtn  questionTitle={question.title} option={option}/>)
                }
            </ul>
            
        </div>
    )
}