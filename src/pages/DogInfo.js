import { useState } from "react";
import { useNavigate } from "react-router-dom";
import MyButton from "../components/MyButton";
import MyHeader from "../components/MyHeader";
import MyInput from "../components/MyInput";

const DogInfo = () => {
  const [step, setStep] = useState(1);
  const navigate = useNavigate();

  const DogInfoBox = () => {
    if (step === 1) {
      return (
        <>
          <div className="input_wrapper">
            <div className="input_box">
              <MyInput type="text" name="이름" />
            </div>
            <div className="input_box">
              <MyInput type="text" name="견종" />
            </div>
          </div>
          <div className="btn_wrapper">
            <MyButton
              text="다음으로"
              onClick={() => {
                setStep(2);
              }}
            />
          </div>
        </>
      );
    } else if (step === 2) {
      return (
        <>
          <div className="input_wrapper">
            <div className="input_title">생년월일</div>
            <div className="input_box">
              <MyInput type="number" name="년" />
              <MyInput type="number" name="월" />
              <MyInput type="number" name="일" />
            </div>
            <div className="input_title">성별</div>
            <div className="input_box text_center radio_box">
              <MyInput type="radio" name="성별" value="Man" text="남아" />
              <MyInput type="radio" name="성별" value="Woman" text="여아" />
            </div>
            <div className="input_title">중성화 수술 여부</div>
            <div className="input_box text_center radio_box">
              <MyInput type="radio" name="중성화" value="True" text="유" />
              <MyInput type="radio" name="중성화" value="False" text="무" />
            </div>
            <div className="input_title">몸무게</div>
            <div className="input_box">
              <div className="weight_box text_center">
                <MyInput type="number" name="00" />
                <div className="weight_text">.</div>
                <MyInput type="number" name="00" />
                <div className="weight_text">kg</div>
              </div>
            </div>
          </div>
          <div className="btn_wrapper">
            <MyButton
              text="다음으로"
              onClick={() => {
                setStep(3);
              }}
            />
          </div>
        </>
      );
    } else if (step === 3) {
      return (
        <div className="btn_wrapper">
          <MyButton
            text="완료"
            onClick={() => {
              navigate("/question");
            }}
          />
        </div>
      );
    } else {
    }
  };

  return (
    <div className="DogInfo">
      <div className="header_wrapper">
        <MyHeader />
      </div>
      {DogInfoBox()}
    </div>
  );
};

export default DogInfo;
