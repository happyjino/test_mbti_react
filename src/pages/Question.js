import MyQuestion from "../components/MyQuestion";
import MyHeader from "../components/MyHeader";

const Question = () => {
  // prettier-ignore
  return (
    <div className="Question">
      <MyHeader />
      <div classNmae="process_bar"></div>
      <MyQuestion num={1} text="다른 개와 잘 어울린다" />
      <MyQuestion num={2} text="우리 반려견은 자기가 사람인 줄 안다" />
    </div>
  );
};

export default Question;
