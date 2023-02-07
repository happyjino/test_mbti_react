const MyCheck = ({ type, num, value }) => {
  const handleCheckScroll = () => {
    const nextElement = document.getElementById(`${num + 1}`);
    const element = document.getElementById(`${num}`);
    if (nextElement) {
      nextElement.scrollIntoView({ behavior: "smooth", block: "center" });
      nextElement.style.opacity = 1;
      element.style.opacity = 0.3;
    }
  };

  return (
    <label className="container MyCheck">
      <input
        type="radio"
        name={`question${num}`}
        id={`check${type}`}
        onChange={handleCheckScroll}
        value={value}
      />
      <span className={`check${type} check`} />
    </label>
  );
};

export default MyCheck;
