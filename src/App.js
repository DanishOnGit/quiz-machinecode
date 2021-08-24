import axios from "axios";
import { useEffect } from "react";
import { Quiz } from "./components/Quiz/Quiz";
import { useQuiz } from "./contexts/quizContext";

function App() {
  const {state:{selectedQuiz},dispatch } = useQuiz();
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const { data } = await axios.get("data.json");
        dispatch({ type: "GET_QUIZ", payload: data });
      } catch (error) {
        console.log(error);
      }
    };
    fetchProducts();
  }, [dispatch]);
  return (
    <div className="App">
      <div>
       
       {selectedQuiz&& <Quiz selectedQuiz={selectedQuiz} />}
      </div>
    </div>
  );
}

export default App;
