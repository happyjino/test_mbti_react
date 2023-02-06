import MyButton from "../components/MyButton";
import MyInput from "../components/MyInput";
import MyQuestion from "../components/MyQuestion";

const Test = () => {
  return (
    <div>
      <MyQuestion />
      <div className="test_wrapper">
        <MyButton type={"arrow"} text="MBTI 분석하기" />
        <div className="input_box">
          <MyInput type="text" name="이름" />
          <MyInput type="text" name="견종" />
        </div>
      </div>
    </div>
  );
};

export default Test;
