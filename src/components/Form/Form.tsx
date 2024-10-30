import { useEffect, useState } from "react";
import "./Form.css";

interface Props {
  onNameChange: (name: string) => void;
  onColorChange: (color: string) => void;
}

export default function Form({ onNameChange, onColorChange }: Props) {
  const [enteredName, setEnteredName] = useState("");
  const [enteredColor, setEnteredColor] = useState("");

  useEffect(() => {
    fetch("https://www.thecolorapi.com/")
      .then((response) => {
        return response.json;
      })
      .then((resData) => {
        console.log(resData);
      });
  }, []);

  function handleNameChange(event: any) {
    setEnteredName(event?.target.value);
    onNameChange(event?.target.value);
  }

  function handleColorChange(event: any) {
    setEnteredColor(event?.target.value);
    onColorChange(event?.target.value);
  }

  return (
    <form className="form">
      <h2>Player Form</h2>

      <div className="form__row">
        <label htmlFor="name">Name</label>
        <input
          id="name"
          type="text"
          onChange={handleNameChange}
          value={enteredName}
        />
      </div>

      <div className="form__row">
        <label htmlFor="color">Color</label>
        <div className="form__row--picker">
          <input
            type="color"
            id="color"
            onChange={handleColorChange}
            value={enteredColor}
          />
          <p className="form__row--label">Color123</p>
        </div>
      </div>
    </form>
  );
}
function useEfect() {
  throw new Error("Function not implemented.");
}
