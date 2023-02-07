import MyQuestion from "../components/MyQuestion";
import MyHeader from "../components/MyHeader";
import MyButton from "../components/MyButton";

const Question = () => {
  const question_list = [
    "우리 반려견은 자기가 사람인 줄 안다",
    "다른 개와 잘 어울린다",
    "자신이 싫어하는 행동을 계속 하면 무려고 한다",
    "다른 강아지를 만나면 보호자 뒤로 숨으려 한다",
    "우리 집에 다른 강아지가 방문이 가능하다",
    "나의 강아지를 누구나 만질 수 있다",
  ];

  // prettier-ignore
  return (
    <div className="Question">
      <MyHeader />
      <div className="process_bar">
        <div className="percent">10%</div>
        <div className="bar">
          <div className="charge_bar" />
        </div>
      </div>
      {question_list.map((it, index) => (
        <MyQuestion key={index} num={index} text={it} />
      ))}
      <div className="btn_wrapper">
        <MyButton type="arrow_next" />
      </div>
    </div>
  );
};

export default Question;
