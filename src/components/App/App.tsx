import { useState } from "react";
import Form from "../Form/Form";
import Game from "../Game/Game";
import "./App.css";

function App() {
  const [enteredName, setEnteredName] = useState<string>("");
  const [enteredColor, setEnteredColor] = useState<string>("");
  return (
    <div className="app">
      <Form onNameChange={setEnteredName} onColorChange={setEnteredColor} />
      <Game charName={enteredName} color={enteredColor} />
    </div>
  );
}

export default App;
