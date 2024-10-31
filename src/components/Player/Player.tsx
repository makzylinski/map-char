import { useEffect, useState } from "react";
import { Dimensions } from "../../dimensions";
import "./Player.css";

interface Props {
  name: string;
  color: string;
  gameDimensions: Dimensions;
}

interface Position {
  x: number;
  y: number;
}

export default function Player({ name, color, gameDimensions }: Props) {
  const [position, setPosition] = useState<Position>({ x: 0, y: 0 });

  useEffect(() => {
    window.addEventListener("keydown", onKeyDown);
    function onKeyDown(e: KeyboardEvent) {
      setPosition((prev) => {
        const newPosition = { ...prev };
        switch (e.key) {
          case "ArrowUp":
            newPosition.y = Math.max(0, prev.y - 10);
            break;
          case "ArrowDown":
            newPosition.y = Math.min(gameDimensions.height - 70, prev.y + 10);
            break;
          case "ArrowLeft":
            newPosition.x = Math.max(0, prev.x - 10);
            break;
          case "ArrowRight":
            newPosition.x = Math.min(gameDimensions.width - 50, prev.x + 10);
            break;
          default:
            break;
        }
        return newPosition;
      });
    }
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [gameDimensions]);

  return (
    <div
      className="character"
      style={{ transform: `translate(${position.x}px, ${position.y}px)` }}
    >
      <div className="name" style={{ color: color }}>
        {name}
      </div>
      <div className="head" style={{ backgroundColor: color }}></div>
      <div className="torso" style={{ backgroundColor: color }}></div>
      <div className="legs">
        <div className="leg" style={{ backgroundColor: color }}></div>
        <div className="leg" style={{ backgroundColor: color }}></div>
      </div>
    </div>
  );
}
