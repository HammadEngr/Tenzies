import React from "react";
import Dot from "./Dot";
import "./Die.css";
const Die = (props) => {
  const classes = `${props.isHeld ? "game__box--active" : ""} ${
    props.className
  }`;
  const clickHandler = () => {
    props.holdDice();
  };

  const dots = Array.from({ length: props.dicevalue }, (_, i) => i + 1);

  return (
    <div className={classes} id={props.id} onClick={clickHandler}>
      <div className={`dots__${props.dicevalue}`}>
        {dots.map((_, i) => (
          <Dot className={`dot dot--${i + 1}`} key={i}></Dot>
        ))}
      </div>
    </div>
  );
};
export default Die;
