import { useState } from "react";
import Form from "./Form";
import Game from "./Game";

function App() {
  const [enteredName, setEnteredName] = useState("");
  const [enteredColor, setEnteredColor] = useState("");
  return (
    <>
      <Form onNameChange={setEnteredName} onColorChange={setEnteredColor} />
      <Game charName={enteredName} color={enteredColor} />
    </>
  );
}

export default App;
