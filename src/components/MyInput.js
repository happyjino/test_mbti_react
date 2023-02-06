const MyInput = ({ name, type }) => {
  if (type === "radio") {
    return <input className="MyRadio" type="radio" name={name} />;
  }

  return <input className="MyInput" type={type} placeholder={name} />;
};

export default MyInput;
