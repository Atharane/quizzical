import Solved from "./Solved";

const SolutionSection = ({ questionBank }) => {
  return (
    <>
      {questionBank.map((question) => (
        <Solved question={question} />
      ))}
    </>
  );
};

export default SolutionSection;
