import MyQuestion from "../components/MyQuestion";
import MyHeader from "../components/MyHeader";
import MyButton from "../components/MyButton";
import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Question = () => {
  const navigate = useNavigate();

  const question_list = [
    "우리 반려견은 자기가 사람인 줄 안다",
    "다른 개와 잘 어울린다",
    "자신이 싫어하는 행동을 계속 하면 무려고 한다",
    "다른 강아지를 만나면 보호자 뒤로 숨으려 한다",
    "우리 집에 다른 강아지가 방문이 가능하다",
    "나의 강아지를 누구나 만질 수 있다",
  ];

  const [score, setScore] = useState({
    score1: 0,
    score2: 0,
    score3: 0,
    score4: 0,
  });
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
  }, [step]);

  useEffect(() => {
    if (step === 5) {
      navigate("/");
    }
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
      {question_list.map((it, index) => (
        <MyQuestion
          key={index}
          num={index}
          text={it}
          percentIncrease={percentIncrease}
        />
      ))}
      <div className="btn_wrapper">
        <MyButton type="arrow_next" onClick={() => setStep(step + 1)} />
      </div>
    </div>
  );
};

export default Question;
