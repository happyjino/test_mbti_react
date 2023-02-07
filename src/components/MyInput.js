const MyInput = ({ name, type, value, text }) => {
  if (type === "radio") {
    return (
      <label className="container MyRadio">
        <input
          type="radio"
          className="check"
          id={`check${value}`}
          name={name}
          value={value}
        />
        <span className={`check check${value}`}>{text}</span>
      </label>
    );
  }

  return <input className="MyInput" type={type} placeholder={name} />;
};

export default MyInput;
