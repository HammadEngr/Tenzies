import React from "react";
import { nanoid } from "nanoid";
import "./Main.css";
import Die from "./Die";
import Button from "./Button";
import Form from "./Form";

const Main = () => {
  const [gameOptions, setGameOptions] = React.useState({
    dices: "",
    tries: "",
  });
  const [diceVlues, setDiceValues] = React.useState(allNewDice);
  const [isWIn, setIsWIn] = React.useState(false);

  React.useEffect(() => {
    const isAllHeld = diceVlues.every(
      (die) => die.isHeld === true && die.value === diceVlues[0].value
    );
    if (isAllHeld) {
      setIsWIn(true);
    }
  }, [diceVlues]);

  const gameOptionsHandler = (options) => {
    setGameOptions(options);
    setDiceValues(allNewDice(gameOptions.dices));
    setIsWIn(false);
  };

  function allNewDice(dices = 10) {
    const numberOfDices = [];
    for (let i = 1; i <= dices; i++) {
      numberOfDices.push({
        value: Math.ceil(Math.random() * 6),
        isHeld: false,
        id: nanoid(),
      });
    }
    return numberOfDices;
  }

  const diceRollHandler = () => {
    if (isWIn) {
      setIsWIn(false);
      setDiceValues(allNewDice(gameOptions.dices));
    } else {
      setDiceValues((prev) => {
        return prev.map((die) => {
          return die.isHeld
            ? die
            : { ...die, value: Math.ceil(Math.random() * 6) };
        });
      });
    }
  };
  const holdDice = (val) => {
    setDiceValues((prev) => {
      return prev.map((die) => {
        return die.id === val ? { ...die, isHeld: !die.isHeld } : die;
      });
    });
  };

  return (
    <div className="game__main">
      <h2 className="game__title">Tenzies</h2>
      <p className="game__instruction">
        Roll until all dices have same values, click the dice to hold its value
      </p>
      <Form gameOptionsHandle={gameOptionsHandler}></Form>
      <div className="game__boxes">
        {diceVlues.map((die) => (
          <Die
            className="game__box "
            dicevalue={die.value}
            isHeld={die.isHeld}
            key={die.id}
            holdDice={() => holdDice(die.id)}
          ></Die>
        ))}
      </div>
      <Button className="game__btn" rollOnClick={diceRollHandler}>
        {isWIn ? "New Game" : "Roll"}
      </Button>
    </div>
  );
};
export default Main;
