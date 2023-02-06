const MyButton = ({ type, text, onClick }) => {
  const btn_type = ["brown ", "beige", "circle", "arrow"].includes(type)
    ? type
    : "default";

  const text1 = () => {
    if (type === "arrow") {
      return (
        <div className="arrow_btn_text">
          <div className="btn_text_left">{text}</div>
          <span className="material-symbols-outlined btn_text_right">
            arrow_forward_ios
          </span>
        </div>
      );
    } else {
      return text;
    }
  };

  return (
    <button
      className={["MyButton", `MyButton_${btn_type}`].join(" ")}
      onClick={onClick}
    >
      {text1()}
    </button>
  );
};

export default MyButton;
