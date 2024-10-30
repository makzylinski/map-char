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
      <div className="name">
        {name} | {color}
      </div>
      <div className="head"></div>
      <div className="torso"></div>
      <div className="legs">
        <div className="leg"></div>
        <div className="leg"></div>
      </div>
    </div>
  );
}
