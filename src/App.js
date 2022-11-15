import React from "react";
import "./App.css";
import Main from "./Components/Main";

function App() {
  return (
    <div className="App__background">
      <Main dices={10}></Main>
    </div>
  );
}

export default App;
