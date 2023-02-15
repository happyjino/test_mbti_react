const MyButton = ({ type, text, onClick }) => {
  const btn_type = type;

  const text1 = () => {
    if (type === "arrow") {
      return (
        <div className="arrow-btn">
          <div className="btn-text-left">{text}</div>
          <span className="material-symbols-outlined btn-text-right">
            arrow_forward_ios
          </span>
        </div>
      );
    } else if (type === "arrow_next") {
      return (
        <div className="arrow-btn">
          <div className="btn-text-center">다음</div>
          <span className="material-symbols-outlined icon-center">east</span>
        </div>
      );
    } else {
      return text;
    }
  };

  return (
    <button
      className={["button", `button-${btn_type}`].join(" ")}
      onClick={onClick}
    >
      {text1()}
    </button>
  );
};

export default MyButton;
