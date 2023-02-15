import MyButton from "../components/MyButton";
import MyInput from "../components/MyInput";
import { useNavigate } from "react-router-dom";

const EmailLogin = () => {
  const navigate = useNavigate();

  return (
    <div className="email-login">
      <div className="login-img-wrapper">
        <div className="logo">멍BTI LOGO</div>
      </div>
      <form method="get" action="/login_result">
        <div className="input-box">
          <MyInput type="text" name="email" text="이메일" />
        </div>
        <div className="input-box">
          <MyInput type="password" name="password" text="비밀번호" />
        </div>
        <div className="login-wrapper">
          <MyButton
            text="로그인"
            type="submit"
            onClick={() => navigate("/doginfo")}
          />
          <button className="forget">비밀번호를 잊어버리셨나요?</button>
        </div>
      </form>
    </div>
  );
};

export default EmailLogin;
