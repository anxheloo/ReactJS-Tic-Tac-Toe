import { useState } from "react";
import "./App.css";
import GameBoard from "./components/GameBoard/GameBoard";
import Header from "./components/header/Header";
import Player from "./components/player/Player";
import Log from "./components/Log/Log";
import WinnerTable from "./components/WinnerTable/WinnerTable";

const initialGameBord = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

function App() {
  const [activePlayer, setActivePlayer] = useState("X");
  const [gameTurns, setGameTurns] = useState([]);

  const [players, setPlayers] = useState({
    X: "Player 1",
    O: "Player 2",
  });

  const handlePlayerNameChange = (symbol, newName) => {
    setPlayers((prevPlayers) => {
      return { ...prevPlayers, [symbol]: newName };
    });
  };

  let gameBoard = [...initialGameBord.map((array) => [...array])];
  let winner;

  const handleRestart = () => {
    console.log("Inside handleRestart 1 ", gameTurns);
    setActivePlayer("X");
    setGameTurns([]);
    console.log("Inside handleRestart 2 ", gameTurns);
  };

  const checkWinnerFunction = () => {
    if (
      gameBoard.length > 0 &&
      ((gameBoard[0][0] === "X" &&
        gameBoard[0][1] === "X" &&
        gameBoard[0][2] === "X") ||
        (gameBoard[1][0] === "X" &&
          gameBoard[1][1] === "X" &&
          gameBoard[1][2] === "X") ||
        (gameBoard[2][0] === "X" &&
          gameBoard[2][1] === "X" &&
          gameBoard[2][2] === "X") ||
        (gameBoard[0][0] === "X" &&
          gameBoard[1][0] === "X" &&
          gameBoard[2][0] === "X") ||
        (gameBoard[0][1] === "X" &&
          gameBoard[1][1] === "X" &&
          gameBoard[2][1] === "X") ||
        (gameBoard[0][2] === "X" &&
          gameBoard[1][2] === "X" &&
          gameBoard[2][2] === "X") ||
        (gameBoard[0][0] === "X" &&
          gameBoard[1][1] === "X" &&
          gameBoard[2][2] === "X") ||
        (gameBoard[0][2] === "X" &&
          gameBoard[1][1] === "X" &&
          gameBoard[2][0] === "X"))
    ) {
      winner = players["X"];
    } else if (
      gameBoard.length > 0 &&
      ((gameBoard[0][0] === "O" &&
        gameBoard[0][1] === "O" &&
        gameBoard[0][2] === "O") ||
        (gameBoard[1][0] === "O" &&
          gameBoard[1][1] === "O" &&
          gameBoard[1][2] === "O") ||
        (gameBoard[2][0] === "O" &&
          gameBoard[2][1] === "O" &&
          gameBoard[2][2] === "O") ||
        (gameBoard[0][0] === "O" &&
          gameBoard[1][0] === "O" &&
          gameBoard[2][0] === "O") ||
        (gameBoard[0][1] === "O" &&
          gameBoard[1][1] === "O" &&
          gameBoard[2][1] === "O") ||
        (gameBoard[0][2] === "O" &&
          gameBoard[1][2] === "O" &&
          gameBoard[2][2] === "O") ||
        (gameBoard[0][0] === "O" &&
          gameBoard[1][1] === "O" &&
          gameBoard[2][2] === "O") ||
        (gameBoard[0][2] === "O" &&
          gameBoard[1][1] === "O" &&
          gameBoard[2][0] === "O"))
    ) {
      winner = players["O"];
    } else if (gameTurns.length === 9 && !winner) {
      winner = "No One";
    } else console.log("Keep playing");
  };

  for (const turn of gameTurns) {
    const { square, player } = turn;
    const { row, col } = square;

    gameBoard[row][col] = player;
    checkWinnerFunction();
  }

  const handleSelectSquare = (rowIndex, colIndex) => {
    setActivePlayer((curentlyActivePlayer) =>
      curentlyActivePlayer === "X" ? "O" : "X"
    );
    setGameTurns((prevTurns) => {
      // let currentPlayer = "X";
      // if (prevTurns.length > 0 && prevTurns[0].player === "X") {
      //   currentPlayer = "O";
      // }
      const updatedTurns = [
        { square: { row: rowIndex, col: colIndex }, player: activePlayer },
        ...prevTurns,
      ];

      return updatedTurns;
    });

    console.log("Inside handleSelectSquare", gameTurns);
  };

  return (
    <>
      <Header></Header>
      <div className="game-container">
        <ol className="players highlight-player">
          <Player
            name={"Player 1"}
            symbol={"X"}
            isActive={activePlayer === "X"}
            handlePlayerNameChange={handlePlayerNameChange}
          ></Player>
          <Player
            name={"Player 2"}
            symbol={"O"}
            isActive={activePlayer === "O"}
            handlePlayerNameChange={handlePlayerNameChange}
          ></Player>
        </ol>
        Game Board
        <GameBoard
          handleSelectSquare={handleSelectSquare}
          gameBoard={gameBoard}
        ></GameBoard>
      </div>

      <Log gameTurns={gameTurns}></Log>

      {winner && (
        <WinnerTable
          winner={winner}
          handleRestart={handleRestart}
        ></WinnerTable>
      )}
    </>
  );
}

export default App;
