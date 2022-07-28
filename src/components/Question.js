import React from "react";

export default function Question(props) {
  const [selected, setSelected] = React.useState(null);


  function handleClick(e) {
    // get texContent of the clicked button
    let text = e.target.textContent;
    if (text === selected) setSelected(null);
    else setSelected(text);
  }

  // generate options jsx
  let optionsJSX = props.options.map(
    (value) => {
      return (
        <div
          onClick={handleClick}
          className={`option ${selected === value ? "selected" : null}`}
        >
          {value}
        </div>
      );
    }
  );

  return (
    <section className="question-wrapper">
      <div className="statement">{props.statement}</div>
      <div className="option-wrapper">{optionsJSX}</div>
    </section>
  );
}
