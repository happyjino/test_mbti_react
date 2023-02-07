import MyCheck from "./MyCheck";

const MyQuestion = ({ text, num, focus }) => {
  return (
    <div className="MyQuestion" id={`${num}`}>
      <h2>{text}</h2>
      <div className="CheckList">
        <MyCheck num={num} type={"Every"} value={-3} />
        <MyCheck num={num} type={"Almost"} value={-2} />
        <MyCheck num={num} type={"Sometimes"} value={-1} />
        <MyCheck num={num} type={"Sometimes"} value={1} />
        <MyCheck num={num} type={"Almost"} value={2} />
        <MyCheck num={num} type={"Every"} value={3} />
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
