import { useState } from "react";
import { useNavigate } from "react-router-dom";
import MyButton from "../components/MyButton";
import MyHeader from "../components/MyHeader";
import MyInput from "../components/MyInput";

const DogInfo = () => {
  const [step, setStep] = useState(1);
  const navigate = useNavigate();
  const [dogType, setDogType] = useState("견종");

  const DogInfoBox = () => {
    if (step === 1) {
      return (
        <>
          <div className="input-wrapper">
            <div className="input-box">
              <MyInput type="text" name="d_name" text="이름" />
            </div>
            <div className="input-box">
              <div className="d-type-box">
                <div className="text">{dogType}</div>
                <span className="material-symbols-outlined arrow">
                  arrow_forward_ios
                </span>
              </div>
            </div>
          </div>
          <div className="btn-wrapper">
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
          <div className="input-wrapper">
            <div className="input-title">생년월일</div>
            <div className="input-box text-left">
              <MyInput type="number" name="d_birth_year" text="년" />
              <MyInput type="number" name="d_birth_month" text="월" />
              <MyInput type="number" name="d_birth_day" text="일" />
            </div>
            <div className="input-title">성별</div>
            <div className="input-box text-center radio-box">
              <MyInput type="radio" name="d_sex" value="Man" text="남아" />
              <MyInput type="radio" name="d_sex" value="Woman" text="여아" />
            </div>
            <div className="input-title">중성화 수술 여부</div>
            <div className="input-box text-center radio-box">
              <MyInput type="radio" name="d_ntlz" value="True" text="유" />
              <MyInput type="radio" name="d_ntlz" value="False" text="무" />
            </div>
            <div className="input-title">몸무게</div>
            <div className="input-box">
              <div className="weight-box text-center">
                <MyInput type="number" name="d_weight_int" text={"00"} />
                <div className="weight-text point">.</div>
                <MyInput type="number" name="d_weight_deci" text={"00"} />
                <div className="weight-text">kg</div>
              </div>
            </div>
          </div>
          <div className="btn-wrapper">
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
        <div className="btn-wrapper">
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
    <div className="dog-info">
      <div className="header-wrapper">
        <MyHeader />
      </div>
      {DogInfoBox()}
    </div>
  );
};

export default DogInfo;
