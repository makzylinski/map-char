import "./Game.css";

interface Props {
  charName: string;
  color: string;
}

export default function Game({ charName, color }: Props) {
  return (
    <div className="game">
      <h2>Game On!</h2>
      <div className="game__content"></div>
    </div>
  );
}
