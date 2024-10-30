import { useEffect } from "react";
import "./Player.css";

interface Props {
  name: string;
  color: string;
}

export default function Player({ name, color }: Props) {
  useEffect(() => {
    window.addEventListener("keydown", onKeyDown);
    function onKeyDown(e: any) {
      console.log(e);
    }
    return () => window.removeEventListener("keydown", onKeyDown);
  });

  return (
    <div className="character">
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
