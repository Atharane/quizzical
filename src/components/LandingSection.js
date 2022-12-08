const LandingSection = ({ onClickHandler: startGame}) => {
    return (
      <>
        <header>Quizzical</header>
        <p id="description">Psych! Outwit Your Friends</p>
        <button onClick={startGame} id="start-button">
          Start quiz
        </button>
      </>
    );
}
 
export default LandingSection;