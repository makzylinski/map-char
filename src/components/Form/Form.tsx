import { useEffect, useState } from "react";
import "./Form.css";

interface Props {
  onNameChange: (name: string) => void;
  onColorChange: (color: string) => void;
}

export default function Form({ onNameChange, onColorChange }: Props) {
  const [enteredName, setEnteredName] = useState("");
  const [enteredColor, setEnteredColor] = useState("");
  const [colorData, setColorData] = useState(null);

  useEffect(() => {
    if (!enteredColor) return;

    const debounceFetch = setTimeout(() => {
      const fetchColorData = async () => {
        try {
          const response = await fetch(
            `https://www.thecolorapi.com/id?hex=${enteredColor.slice(1)}`
          );
          if (!response.ok) {
            throw new Error("Response was not ok.");
          }
          const resData = await response.json();
          setColorData(resData.name.value);
        } catch (error) {
          console.error("Error fetching color data:", error);
        }
      };

      fetchColorData();
    }, 500);

    return () => clearTimeout(debounceFetch);
  }, [enteredColor]);

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
          <p className="form__row--label">{colorData}</p>
        </div>
      </div>
    </form>
  );
}
