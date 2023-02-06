const MyHeader = () => {
  return (
    <header className="MyHeader">
      <span className="material-symbols-outlined head_icon_left">
        <a className="home_icon" href="/">
          home
        </a>
      </span>
      <div className="head_text">DBTI 분석하기</div>
      <span className="material-symbols-outlined head_icon_right">list</span>
    </header>
  );
};

export default MyHeader;
