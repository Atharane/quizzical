const Solved = ({ question }) => {
  return (
    <>
      <section className="question-wrapper">
        {question.statement}
        <div className="option-wrapper">
          {question.options.map((option) => {
            const isSelected = question.selected === option;
            const isCorrect = question.answer === option;
            const isWrongAndSelected = !isCorrect && isSelected;
            return (
              <div
                className={`option locked ${isCorrect ? "correct" : null} ${
                  isWrongAndSelected ? "wrong" : null
                }`}
              >
                {option}
              </div>
            );
          })}
        </div>
      </section>
      <div className="seperator"></div>
    </>
  );
};

export default Solved;
