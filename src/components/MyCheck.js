const MyCheck = ({ type, num }) => {
  return (
    <label className="container MyCheck">
      <input type="radio" name={`question${num}`} id={`check${type}`} />
      <span className={`check${type} check`} />
    </label>
  );
};

export default MyCheck;
