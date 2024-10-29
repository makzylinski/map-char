import { useState } from "react";
import "./App.css";
import Form from "./Form";
import Game from "./Game";

function App() {
  const [enteredName, setEnteredName] = useState("");
  const [enteredColor, setEnteredColor] = useState("");
  return (
    <div className="app">
      <Form onNameChange={setEnteredName} onColorChange={setEnteredColor} />
      <Game charName={enteredName} color={enteredColor} />
    </div>
  );
}

export default App;
