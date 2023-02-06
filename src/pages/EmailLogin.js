import MyButton from "../components/MyButton";
import MyInput from "../components/MyInput";
import { useNavigate } from "react-router-dom";

const EmailLogin = () => {
  const navigate = useNavigate();

  return (
    <div className="EmailLogin">
      <div className="login_img_wrapper">
        <div className="logo">멍BTI LOGO</div>
      </div>
      <div className="input_box">
        <MyInput type="text" name="이메일" />
      </div>
      <div className="input_box">
        <MyInput type="password" name="비밀번호" />
      </div>
      <div className="login_wrapper">
        <MyButton text="로그인" onClick={() => navigate("/doginfo")} />
        <button className="forget">비밀번호를 잊어버리셨나요?</button>
      </div>
    </div>
  );
};

export default EmailLogin;
