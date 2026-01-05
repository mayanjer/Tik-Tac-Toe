import { useState } from "react";

export default function Player({ name, symbol, isActive, onChangeName }) {
  const [playerName, setPlayerName] = useState(name);
  const [isEditing, setIsEditing] = useState(false);
  function clickHandler() {
    setIsEditing((editing) => !editing);
  }
  function inputHandler(event) {
    setPlayerName(event.target.value);

    if (isEditing) {
      onChangeName(symbol, playerName);
    }
  }
  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {!isEditing ? (
          <span className="player-name"> {playerName} </span>
        ) : (
          <input
            type="text"
            required
            value={playerName}
            onChange={inputHandler}
          />
        )}
        <span className="player-symbol"> {symbol}</span>
      </span>
      <button onClick={clickHandler}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}
