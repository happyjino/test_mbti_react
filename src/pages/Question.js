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
      "다른 개와 잘 어울린다",
      "자신이 싫어하는 행동을 계속 하면 무려고 한다",
      "다른 강아지를 만나면 보호자 뒤로 숨으려 한다",
      "우리 집에 다른 강아지가 방문이 가능하다",
      "나의 강아지를 누구나 만질 수 있다",
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
  };

  const [score, setScore] = useState({
    score1: 0,
    score2: 0,
    score3: 0,
    score4: 0,
  });

  const [questList, setQuestList] = useState(quest_list_box.ques1);
  const [step, setStep] = useState(1);
  const [percent, setPercent] = useState(0);

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
    elements.forEach((it) => {
      setScore((score) => {
        return {
          ...score,
          score1: score.score1 + parseInt(it.getAttribute("value")),
        };
      });
    });

    if (step === 3) {
      navigate("/result");
    }

    const quest = quest_list_box[`ques${step}`];
    setQuestList(quest);

    setPercent(0);

    const allElement = document.getElementsByClassName("radio_check");
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
    <div className="Question">
      <MyHeader />
      <div className="process_bar">
        <div className="percent">{percent}%</div>
        <div className="bar">
          <div className="charge_bar" id="charging"/>
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
      <div className="btn_wrapper">
        <MyButton type="arrow_next" onClick={() => setStep(step + 1)} />
      </div>
    </div>
  );
};

export default Question;
