import { useState } from "react";
import { useQuiz } from "../../../contexts/quizContext";

export const OptionBtn = ({ questionTitle, option }) => {
  const {
    state: { selectedOptionIsCorrect,isSelected },
    dispatch,
  } = useQuiz();
  const [optionSelected, setOptionSelected] = useState("");

  return (
    <label
      className={optionSelected === selectedOptionIsCorrect ? "green" : "grey"}
      htmlFor={option}
    >
      <input
        type="radio"
        name="option"
        id={option}
        value={option}
        checked={isSelected}
        onChange={(e) => {
          setOptionSelected(e.target.value);
          dispatch({type:"SELECT_OPTION", payload: { questionTitle, selectedOption: e.target.value }});
          dispatch({
            type: "IS_OPTION_CORRECT",
            payload: { questionTitle, selectedOption: e.target.value },
          });
        }}
      />

      {option}
    </label>
  );
};
