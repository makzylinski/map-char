import React, { useEffect, useState } from "react";
import "./Form.css";

interface Props {
  onNameChange: (name: string) => void;
  onColorChange: (color: string) => void;
}

export default function Form({ onNameChange, onColorChange }: Props) {
  const [enteredName, setEnteredName] = useState<string>("");
  const [enteredColor, setEnteredColor] = useState<string>("");
  const [colorData, setColorData] = useState<string>("");

  useEffect(() => {
    if (!enteredColor) return;

    const fetchColorData = async () => {
      try {
        const response = await fetch(
          `https://www.thecolorapi.com/id?hex=${enteredColor.slice(1)}`
        );
        if (!response.ok) throw new Error("Response was not ok.");

        const resData = await response.json();
        setColorData(resData.name.value);
      } catch (error) {
        console.error("Error fetching color data:", error);
      }
    };

    const debounceFetch = setTimeout(fetchColorData, 500);
    return () => clearTimeout(debounceFetch);
  }, [enteredColor]);

  function handleNameChange(event: React.ChangeEvent<HTMLInputElement>) {
    setEnteredName(event?.target.value);
    onNameChange(event?.target.value);
  }

  function handleColorChange(event: React.ChangeEvent<HTMLInputElement>) {
    setEnteredColor(event?.target.value);
    onColorChange(event?.target.value);
  }

  function submitHandler(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
  }

  return (
    <form className="form" onSubmit={submitHandler}>
      <h2>Player Form</h2>

      <div className="form__row">
        <label htmlFor="name">Name</label>
        <input
          id="name"
          type="text"
          onChange={handleNameChange}
          value={enteredName}
          maxLength={15}
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
          <p className="form__row--label">{colorData}</p>
        </div>
      </div>
    </form>
  );
}
