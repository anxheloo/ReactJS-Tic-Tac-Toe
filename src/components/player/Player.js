import { useState } from "react";
import "./Player.css";

const Player = ({ name, symbol, isActive, handlePlayerNameChange }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [playerName, setPlayerName] = useState(name);

  const handleClickFunction = () => {
    setIsEditing((previousValue) => !previousValue);
    isEditing && handlePlayerNameChange(symbol, playerName);
  };

  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {isEditing ? (
          <input
            type="text"
            required
            value={playerName}
            onChange={(event) => setPlayerName(event.target.value)}
          ></input>
        ) : (
          <span className="player-name">{playerName}</span>
        )}
        <span className="player-symbol">{symbol}</span>
      </span>

      <button onClick={handleClickFunction}>
        {isEditing ? "Save" : "Edit"}
      </button>
    </li>
  );
};

export default Player;
