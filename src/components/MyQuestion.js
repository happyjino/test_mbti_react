import MyCheck from "./MyCheck";

const MyQuestion = ({ text, num }) => {
  return (
    <div className="MyQuestion">
      <h2>{text}</h2>
      <div className="CheckList">
        <MyCheck num={num} type={"Every"} />
        <MyCheck num={num} type={"Almost"} />
        <MyCheck num={num} type={"Sometimes"} />
        <MyCheck num={num} type={"Sometimes"} />
        <MyCheck num={num} type={"Almost"} />
        <MyCheck num={num} type={"Every"} />
      </div>
      <div className="label_for_check">
        <div className="left_child">
          <h4 className="text_wrapper">
            절대 <br />
            그러지 않아요
          </h4>
        </div>
        <div className="right_child">
          <h4 className="text_wrapper">
            항상 <br />
            그래요
          </h4>
        </div>
      </div>
    </div>
  );
};

export default MyQuestion;
