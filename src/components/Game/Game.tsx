import { useEffect, useRef, useState } from "react";
import Player from "../Player/Player";
import "./Game.css";

interface Props {
  charName: string;
  color: string;
}

export interface Dimensions {
  width: number;
  height: number;
}

export default function Game({ charName, color }: Props) {
  const gameRef = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = useState<Dimensions>({
    width: 0,
    height: 0,
  });

  const updateDimensions = () => {
    if (gameRef.current) {
      const { offsetWidth, offsetHeight } = gameRef.current;
      setDimensions({ width: offsetWidth, height: offsetHeight });

      console.log({ width: offsetWidth, height: offsetHeight });
    }
  };

  useEffect(() => {
    updateDimensions();

    window.addEventListener("resize", updateDimensions);

    return () => {
      window.removeEventListener("resize", updateDimensions);
    };
  }, []);

  return (
    <div className="game">
      <h2>Game dupa!</h2>
      <div className="game__content" ref={gameRef}>
        <Player name={charName} color={color} gameDimensions={dimensions} />
      </div>
    </div>
  );
}
