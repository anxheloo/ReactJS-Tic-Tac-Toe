import "./GameBoard.css";

const GameBoard = ({ handleSelectSquare, gameBoard }) => {
  return (
    <div className="game-board">
      {gameBoard.map((row, rowIndex) => (
        <div key={rowIndex} className="div-row">
          {row.map((playerSymbol, colIndex) => (
            <div key={colIndex} className="div-col">
              <button
                disabled={gameBoard[rowIndex][colIndex] === null ? false : true}
                onClick={() => handleSelectSquare(rowIndex, colIndex)}
              >
                {playerSymbol}
              </button>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default GameBoard;
