import { useEffect, useState } from "react";
import "./Player.css";

interface Props {
  name: string;
  color: string;
}

export default function Player({ name, color }: Props) {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    window.addEventListener("keydown", onKeyDown);
    function onKeyDown(e: any) {
      console.log(e.key);
      if (e.key === "ArrowUp") {
        setPosition((prev) => ({ ...prev, y: prev.y - 10 }));
      }
    }
    return () => window.removeEventListener("keydown", onKeyDown);
  });

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
