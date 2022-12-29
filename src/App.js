import { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import LandingSection from "./components/LandingSection";
import Question from "./components/Question";
import SolutionSection from "./components/SolutionSection.js";

function App() {
  const [start, setStart] = useState(false);
  const [questionBank, setQuestionBank] = useState(null);
  const [score, setScore] = useState(null);

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

  const handleSelection = (question_id, option) => {
    const newQuestionBank = [...questionBank];

    // if the question is already answered, then deselect it
    newQuestionBank[question_id].selected === option
      ? (newQuestionBank[question_id].selected = null)
      : (newQuestionBank[question_id].selected = option);

    setQuestionBank(newQuestionBank);
  };

  const checkAnswers = () => {
    let score = 0;
    questionBank.forEach((questionItem) => {
      if (questionItem.selected === questionItem.answer) {
        score++;
      }
    });
    setScore(score);
  };

  // console.log(questionBank);

  return (
    <div className="container">
      <div className="row">
        <div id="widget" className="eight columns">
          <img id="top-blob" src="images/top-blob.png" alt="blob" />
          {start ? (
            // Quiz Page
            <>
              {score === null && questionBank ? (
                <>
                  {questionBank.map((question) => (
                    <Question
                      key={nanoid()}
                      question={question}
                      handleSelection={handleSelection}
                    />
                  ))}

                  <section id="results">
                    <button className="lavendar-button" onClick={checkAnswers}>
                      Check answers
                    </button>
                  </section>
                </>
              ) : (
                // Solution Page (after score is calculated)
                <>
                  <SolutionSection questionBank={questionBank} />
                  <section id="results">
                    <p id="score-message">
                      You scored {score}/5 correct answers
                    </p>
                    <button
                      className="lavendar-button"
                      onClick={() => {
                        window.location.reload();
                      }}
                    >
                      Play Again
                    </button>
                  </section>
                </>
              )}
            </>
          ) : (
            <LandingSection onClickHandler={() => setStart(true)} />
          )}

          <img id="bottom-blob" src="images/bottom-blob.png" alt="blob" />
        </div>
      </div>
    </div>
  );
}

export default App;

