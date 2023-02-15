import MyQuestion from "../components/MyQuestion";
import MyHeader from "../components/MyHeader";
import MyButton from "../components/MyButton";
import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Question = () => {
  const navigate = useNavigate();

  const quest_list_box = {
    ques1: [
      "우리 반려견은 자기가 사람인 줄 안다",
      "우리 반려견은 자기가 사람인 줄 안다",
      "우리 반려견은 자기가 사람인 줄 안다",
      "우리 반려견은 자기가 사람인 줄 안다",
      "우리 반려견은 자기가 사람인 줄 안다",
      "우리 반려견은 자기가 사람인 줄 안다",
      "우리 반려견은 자기가 사람인 줄 안다",
      "우리 반려견은 자기가 사람인 줄 안다",
      "우리 반려견은 자기가 사람인 줄 안다",
      "우리 반려견은 자기가 사람인 줄 안다",
      "우리 반려견은 자기가 사람인 줄 안다",
      "우리 반려견은 자기가 사람인 줄 안다",
      "우리 반려견은 자기가 사람인 줄 안다",
      "우리 반려견은 자기가 사람인 줄 안다",
      "우리 반려견은 자기가 사람인 줄 안다",
    ],
    ques2: [
      "다른 개와 잘 어울린다",
      "다른 개와 잘 어울린다",
      "다른 개와 잘 어울린다",
      "다른 개와 잘 어울린다",
      "다른 개와 잘 어울린다",
      "다른 개와 잘 어울린다",
      "다른 개와 잘 어울린다",
      "다른 개와 잘 어울린다",
      "다른 개와 잘 어울린다",
      "다른 개와 잘 어울린다",
      "다른 개와 잘 어울린다",
      "다른 개와 잘 어울린다",
      "다른 개와 잘 어울린다",
      "다른 개와 잘 어울린다",
      "다른 개와 잘 어울린다",
    ],
    ques3: ["다른 개와 잘 어울린다", "다른 개와 잘 어울린다"],
    ques4: ["다른 개와 잘 어울린다", "다른 개와 잘 어울린다"],
  };

  const [questList, setQuestList] = useState(quest_list_box.ques1);
  const [step, setStep] = useState(1);
  const [percent, setPercent] = useState(0);
  const [score1, setScore1] = useState(0);
  const [score2, setScore2] = useState(0);
  const [score3, setScore3] = useState(0);
  const [score4, setScore4] = useState(0);

  const percentIncrease = (num) => {
    if (num % 3 === 0) {
      setPercent((percent) => percent + 6);
    } else {
      setPercent((percent) => percent + 7);
    }
  };

  useEffect(() => {
    const charge_bar = document.getElementById("charging");
    charge_bar.style.width = `${percent}%`;
  }, [percent]);

  useEffect(() => {
    const elements = document.querySelectorAll("input:checked");
    var stepScore = 0;
    elements.forEach((it) => {
      stepScore = stepScore + parseInt(it.getAttribute("value"));
    });

    if (step === 5) {
      navigate("/result");
    }

    setQuestList(quest_list_box[`ques${step}`]);

    setPercent(0);

    const allElement = document.getElementsByClassName("radio-check");
    for (var i = 0; i < allElement.length; i++) {
      allElement[i].checked = false;
      allElement[i].disabled = true;
    }

    const firstElement = document.getElementById(`q0`);
    firstElement.style.opacity = 1;
    firstElement.scrollIntoView({ behavior: "smooth", block: "center" });
    document
      .getElementsByName(`question0`)
      .forEach((it) => it.removeAttribute("disabled"));
  }, [step]);

  // prettier-ignore
  return (
    <div className="question">
      <MyHeader />
      <div className="process-bar">
        <div className="percent">{percent}%</div>
        <div className="bar">
          <div className="charge-bar" id="charging"/>
        </div>
      </div>
      {questList.map((it, index) => (
        <MyQuestion
          key={index}
          num={index}
          text={it}
          percentIncrease={percentIncrease}
          step={step}
        />
      ))}
      <div className="btn-wrapper">
        <MyButton type="arrow_next" onClick={() => setStep(step + 1)} />
      </div>
    </div>
  );
};

export default Question;
