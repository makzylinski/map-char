import { useEffect } from "react";

export default function Player() {
  useEffect(() => {
    window.addEventListener("keydown", onKeyDown);
    function onKeyDown(e: any) {
      console.log(e);
    }
    return () => window.removeEventListener("keydown", onKeyDown);
  });

  return (
    <div className="character">
      <div className="head"></div>
      <div className="torso"></div>
      <div className="legs"></div>
    </div>
  );
}
