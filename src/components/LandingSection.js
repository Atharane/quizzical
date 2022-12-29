const LandingSection = ({ onClickHandler: startGame }) => {
  return (
    <>
      <header>Quizzical</header>
      <p id="description">Psych! Outwit Your Friends</p>
      <div className="option-wrapper centre">
        <button className="option">Technology</button>
        <button className="option">Sports</button>
        <button className="option">History</button>
      </div>
      <button onClick={startGame} id="start-button">
        Start quiz
      </button>
    </>
  );
};

export default LandingSection;
