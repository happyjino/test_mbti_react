import React from "react";

const QuestionBox = ({ text, num, percentIncrease, step }) => {
  return (
    <div className={`question-box`} id={`box${num}`}>
      <h2>{text}</h2>
      <div className="check-list" style={{ display: "flex" }}>
        <MyCheck
          num={num}
          value={-3}
          percentIncrease={percentIncrease}
          step={step}
        />
        <MyCheck
          num={num}
          value={-2}
          percentIncrease={percentIncrease}
          step={step}
        />
        <MyCheck
          num={num}
          value={-1}
          percentIncrease={percentIncrease}
          step={step}
        />
        <MyCheck
          num={num}
          value={1}
          percentIncrease={percentIncrease}
          step={step}
        />
        <MyCheck
          num={num}
          value={2}
          percentIncrease={percentIncrease}
          step={step}
        />
        <MyCheck
          num={num}
          value={3}
          percentIncrease={percentIncrease}
          step={step}
        />
      </div>
      <div className="label-for-check">
        <div className="left-child">
          <h4 className="text-wrapper">
            절대 <br />
            그러지 않아요
          </h4>
        </div>
        <div className="right-child">
          <h4 className="text-wrapper">
            항상 <br />
            그래요
          </h4>
        </div>
      </div>
    </div>
  );
};

const MyCheck = ({ num, value, percentIncrease, step }) => {
  const clickCheck = () => {
    const nextQuestion = document.getElementById(`box${num + 1}`);
    const question = document.getElementById(`box${num}`);
    const nextElement = document.getElementsByName(`question${num + 1}`);

    if (question.style.opacity === "1") {
      question.style.opacity = 0.3;
      percentIncrease(num);
      if (nextQuestion) {
        nextQuestion.scrollIntoView({ behavior: "smooth", block: "center" });
        nextQuestion.style.opacity = 1;
        nextElement.forEach((it) => (it.disabled = false));
      }
    }
  };

  const type_value = Math.abs(value);
  var type;

  switch (type_value) {
    case 3:
      type = "big";
      break;
    case 2:
      type = "middle";
      break;
    case 1:
      type = "small";
      break;
    default:
      break;
  }
  return (
    <label className="check-container">
      <input
        type="radio"
        className="check-element"
        name={`question${num}`}
        onChange={clickCheck}
        value={value}
        disabled
      />
      <span className={`check-circle ${type}`} />
    </label>
  );
};

export default React.memo(QuestionBox);
