import React from "react";
import LandingSection from "./components/LandingSection";
import Question from "./components/Question";

function App() {
  const [started, setStarted] = React.useState(false);

  function startGame() {
    setStarted(true);
  }

  let question_bank = [
    {
      question: "Which German sportswear company's logo is the 'Formstripe'?",
      options: ["Puma", "Nike", "Adiddas", "Reebok"],
    },
    {
      question: "Which team was the 2015-2016 NBA Champions?",
      options: [
        "Cleveland Cavaliers",
        "Golden State Warriors",
        "Toronto Raptors",
        "Oklahoma City Thunders",
      ],
    },
    {
      question: "Which soccer team won the Copa América 2015 Championship ?",
      options: ["Chile", "Argentina", "Brazil", "Paraguay"],
    },
    {
      question:
        "In 2016, who won the Formula 1 World Constructor's Championship for the third time in a row?",
      options: ["Julyes", "Aryton", "Ronald", "Gilles"],
    },
  ];


  return (
    <div className="container">
      <div className="row">
        <div id="widget" className="eight columns">
          <img id="top-blob" src="images/top-blob.png" alt="blob" />
          {started ? (
            // quiz page
            <>
              {question_bank.map((item) => {
                return (
                  <>
                    <Question
                      statement={item.question}
                      options={item.options}
                    />
                  </>
                );
              })}


              <section id="results">
                <p id="score-message">You scored 3/5 correct answers</p>
                <button class="lavendar-button">Check answers</button>
              </section>
            </>
          ) : (
            <LandingSection onClickHandler={startGame} />
          )}
          <img id="bottom-blob" src="images/bottom-blob.png" alt="blob" />
        </div>
      </div>
    </div>
  );
}

export default App;

/* <img id="blob" src="images/blob.png" alt="blob" />; */
