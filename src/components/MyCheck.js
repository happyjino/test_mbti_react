import { useEffect } from "react";

const MyCheck = ({ type, num, value, percentIncrease, step }) => {
  const handleCheck = () => {
    const nextQuestion = document.getElementById(`q${num + 1}`);
    const question = document.getElementById(`q${num}`);
    const nextElement = document.getElementsByName(`question${num + 1}`);

    if (question.style.opacity === "1") {
      percentIncrease(num);
    }

    if (nextQuestion && question.style.opacity === "1") {
      nextQuestion.scrollIntoView({ behavior: "smooth", block: "center" });
      nextQuestion.style.opacity = 1;
      nextElement.forEach((it) => (it.disabled = false));
    }
    question.style.opacity = 0.3;
  };

  return (
    <label className="container mycheck">
      <input
        type="radio"
        className={`check-${type} radio-check`}
        name={`question${num}`}
        onChange={handleCheck}
        value={value}
        disabled
      />
      <span className={`check ${type}`} />
    </label>
  );
};

export default MyCheck;
