export default function Logs({ turns }) {
  let logs = [];
  for (const turn of turns) {
    const { square, player } = turn;
    const { row, col } = square;
    logs.push(`${player} opted into square ${row}${col}`);
  }
  return (
    <ol id='log'>
      {turns.map((item) => (
        <li key={`${item.square.row}${item.square.col}`}>
          {item.player} selected {item.square.row},{item.square.col}
        </li>
      ))}
    </ol>
  );
}
