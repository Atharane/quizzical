import { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import LandingSection from "./components/LandingSection";
import Question from "./components/Question";

function App() {
  console.log("Page loaded");

  const [started, setStarted] = useState(false);
  const [questionBank, setQuestionBank] = useState(null);

  const handleSelection = (question_id, option) => {
    const newQuestionBank = [...questionBank];

    // if the question is already answered, then deselect it
    newQuestionBank[question_id].selected == option
      ? (newQuestionBank[question_id].selected = null)
      : (newQuestionBank[question_id].selected = option);

    setQuestionBank(newQuestionBank);
  };

  const sanitizeData = (data) => {
    return data.map((questionItem, index) => {
      let options = [
        ...questionItem.incorrect_answers,
        questionItem.correct_answer,
      ];

      return {
        question_id: index,
        statement: questionItem.question,
        options: options.sort(() => Math.random() - 0.5),
        answer: questionItem.correct_answer,
        selected: null,
      };
    });
  };

  useEffect(() => {
    fetch(
      "https://opentdb.com/api.php?amount=5&category=18&difficulty=medium&type=multiple"
    )
      .then((res) => res.json())
      .then((data) => {
        setQuestionBank(sanitizeData(data.results));
      })
      .catch((err) => console.log(err));
  }, []);

  console.log(questionBank);

  return (
    <div className="container">
      <div className="row">
        <div id="widget" className="eight columns">
          <img id="top-blob" src="images/top-blob.png" alt="blob" />
          {started ? (
            // Quiz Page
            <>
              {questionBank &&
                questionBank.map((question) => {
                  return (
                    <Question
                      key={nanoid()}
                      question={question}
                      handleSelection={handleSelection}
                    />
                  );
                })}
              


              <section id="results">
                {/* <p id="score-message">You scored 3/5 correct answers</p> */}
                <button className="lavendar-button">Check answers</button>
              </section>
            </>
          ) : (
            <LandingSection onClickHandler={() => setStarted(true)} />
          )}
          <img id="bottom-blob" src="images/bottom-blob.png" alt="blob" />
        </div>
      </div>
    </div>
  );
}

export default App;

/* <img id="blob" src="images/blob.png" alt="blob" />; */
