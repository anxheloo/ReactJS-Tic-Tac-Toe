import "./Log.css";

export default function Log({ gameTurns }) {
  return (
    <div className="log">
      {gameTurns.map((item, index) => (
        <div key={index}>
          {item.player} selected {item.square.row}, {item.square.col}
        </div>
      ))}
    </div>
  );
}
