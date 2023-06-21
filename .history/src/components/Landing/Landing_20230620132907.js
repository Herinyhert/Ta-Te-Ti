import { useState } from "react";
import { useHistory } from "react-router-dom";
import "./Landing.css";

const Landing = () => {
  const his
  const [player1Name, setPlayer1Name] = useState("");
  const [player2Name, setPlayer2Name] = useState("");
  const [gameMode, setGameMode] = useState(""); // Puede ser "1-player" o "2-player"

  const handleGameModeChange = (event) => {
    setGameMode(event.target.value);
  };

  const handlePlayer1NameChange = (event) => {
    setPlayer1Name(event.target.value);
  };

  const handlePlayer2NameChange = (event) => {
    setPlayer2Name(event.target.value);
  };

  return (
    <div>
      <section class="wrapper">
        <div class="top">Ta-Te-Ti</div>
        <div class="bottom" aria-hidden="true">
          Ta-Te-Ti
        </div>
      </section>
      <div className="gameMode">
        <label className="gameModeSelect">
          Game Mode:
          <select value={gameMode} onChange={handleGameModeChange}>
              <option value="">Select Mode</option>
              <option value="1-player">1 Player</option>
              <option value="2-player">2 Players</option>
          </select>
        </label>

        {gameMode === "1-player" && (
          <label>
            Name Player:
            <input
              type="text"
              value={player1Name}
              onChange={handlePlayer1NameChange}
            />
          </label>
        )}

        {gameMode === "2-player" && (
          <>
            <label>
              Name player 1:
              <input
                type="text"
                value={player1Name}
                onChange={handlePlayer1NameChange}
              />
            </label>
            <label>
              Name player 2:
              <input
                type="text"
                value={player2Name}
                onChange={handlePlayer2NameChange}
              />
            </label>
          </>
        )}
      </div>
    </div>
  );
};

export default Landing;
