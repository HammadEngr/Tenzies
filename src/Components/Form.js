import React from "react";
import "./Form.css";
const Form = (props) => {
  const [gameOptionInputs, setGameOptionInputs] = React.useState({
    dices: "",
    tries: "",
  });
  const changeHandler = (e) => {
    setGameOptionInputs((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();
    props.gameOptionsHandle(gameOptionInputs);
    console.log(gameOptionInputs);
  };

  return (
    <React.Fragment>
      <legend>Options</legend>
      <form className="form" onSubmit={formSubmitHandler}>
        <input
          placeholder="enter number of dices"
          type="number"
          name="dices"
          value={gameOptionInputs.dices}
          onChange={changeHandler}
        />
        <input
          placeholder="enter number of tries"
          type="number"
          name="tries"
          value={gameOptionInputs.tries}
          onChange={changeHandler}
        />
        <button className="form__btn" onClick={formSubmitHandler}>
          set
        </button>
      </form>
    </React.Fragment>
  );
};
export default Form;
