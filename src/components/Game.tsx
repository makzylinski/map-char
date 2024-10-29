import "./Game.css";
import Player from "./Player";

interface Props {
  charName: string;
  color: string;
}

export default function Game({ charName, color }: Props) {
  return (
    <div className="game">
      <h2>Game On!</h2>
      <div className="game__content">
        <Player name={charName} color={color} />
      </div>
    </div>
  );
}
