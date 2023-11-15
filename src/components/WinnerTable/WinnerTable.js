import "./WinnerTable.css";

const WinnerTable = ({ winner, handleRestart }) => {
  return (
    <div className="main-container">
      <h2>Game Over!</h2>
      {winner === "No One" ? <p> It's a Draw</p> : <p>{winner} won!</p>}
      <p>
        <button onClick={handleRestart}>Reload</button>
      </p>
    </div>
  );
};

export default WinnerTable;
