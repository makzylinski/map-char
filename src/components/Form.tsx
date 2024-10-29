import { useState } from "react";
import "./Form.css";

export default function Form() {
  const [enteredName, setEnteredName] = useState("");
  const [enteredColor, setEnteredColor] = useState("");

  function handleNameChange(event: any) {
    setEnteredName(event?.target.value);
  }

  function handleColorChange(event: any) {
    setEnteredColor(event?.target.value);
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
        <select
          name="color"
          id="color"
          onChange={handleColorChange}
          value={enteredColor}
        >
          <option value="red">Red</option>
          <option value="green">Green</option>
          <option value="blue">Blue</option>
        </select>
      </div>
    </form>
  );
}
