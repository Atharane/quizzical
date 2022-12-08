import React from "react";

export default function Question({ statement, options }) {
  const [selected, setSelected] = React.useState(null);

  function handleClick(e) {
    let text = e.target.textContent;
    if (text === selected) setSelected(null);
    else setSelected(text);
  }

  return (
    <>
      <section className="question-wrapper">
        <div className="statement">{statement}</div>
        <div className="option-wrapper">
          {options.map((option) => {
            return (
              <div
                onClick={handleClick}
                className={`option ${selected === option ? "selected" : null}`}
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
