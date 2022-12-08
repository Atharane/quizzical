export default function Question({
  question,
  handleSelection,
}) {
  return (
    <>
      <section className="question-wrapper">
        <div className="statement">{question.statement}</div>
        <div className="option-wrapper">
          {question.options.map((option) => {
            return (
              <div
                onClick={() => handleSelection(question.question_id, option)}
                className={`option ${
                  question.selected == option ? "selected" : null
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
}
