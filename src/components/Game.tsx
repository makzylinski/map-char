interface Props {
  charName: string;
  color: string;
}

export default function Game({ charName, color }: Props) {
  return (
    <>
      <p>Game component works!</p>
      <p>
        {charName} | {color}
      </p>
    </>
  );
}
