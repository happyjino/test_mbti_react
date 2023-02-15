import MyCheck from "./MyCheck";
import React from "react";

const MyQuestion = ({ text, num, percentIncrease, step }) => {
  return (
    <div className={`myquestion`} id={`q${num}`}>
      <h2>{text}</h2>
      <div className="check-list">
        <MyCheck
          num={num}
          type={"Every"}
          value={-3}
          percentIncrease={percentIncrease}
          step={step}
        />
        <MyCheck
          num={num}
          type={"Almost"}
          value={-2}
          percentIncrease={percentIncrease}
          step={step}
        />
        <MyCheck
          num={num}
          type={"Sometimes"}
          value={-1}
          percentIncrease={percentIncrease}
          step={step}
        />
        <MyCheck
          num={num}
          type={"Sometimes"}
          value={1}
          percentIncrease={percentIncrease}
          step={step}
        />
        <MyCheck
          num={num}
          type={"Almost"}
          value={2}
          percentIncrease={percentIncrease}
          step={step}
        />
        <MyCheck
          num={num}
          type={"Every"}
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

export default React.memo(MyQuestion);
