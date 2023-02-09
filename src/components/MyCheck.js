import { useEffect } from "react";

const MyCheck = ({ type, num, value, percentIncrease }) => {
  useEffect(() => {
    if (num === 0) {
      // firstElement Control
      document.getElementById(`q0`).style.opacity = 1;
      document
        .getElementsByName("question0")
        .forEach((it) => it.removeAttribute("disabled"));
    }
  }, []);

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
      nextElement.forEach((it) => it.removeAttribute("disabled"));
    }
    question.style.opacity = 0.3;
  };

  return (
    <label className="container MyCheck">
      <input
        type="radio"
        className={`check${type} radio_check`}
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
