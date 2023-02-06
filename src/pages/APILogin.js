import MyButton from "../components/MyButton";
import { useNavigate } from "react-router-dom";

const APILogin = () => {
  const navigate = useNavigate();

  const goEmailLogin = () => {
    navigate(`/login`);
  };

  return (
    <div className="APILogin">
      <div className="login_img_wrapper">
        <div className="logo">멍BTI LOGO</div>
        <img alt="개" src={process.env.PUBLIC_URL + `assets/dog.jpg`} />
      </div>
      <div className="api_btn_wrapper">
        <button className="APIButton">구글 계정으로 로그인</button>
        <button className="APIButton">카카오 로그인</button>
      </div>
      <div className="btn_wrapper">
        <MyButton text="회원가입"></MyButton>
        <MyButton text="로그인" onClick={goEmailLogin}></MyButton>
      </div>
    </div>
  );
};

export default APILogin;
