import { useState } from 'react';
import './Landing.css'

const Landing = ()=>{
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
        <h1>Ta-Te-Ti</h1>
        <label>
          Game Mode:
          <select value={gameMode} onChange={handleGameModeChange}>
            <option value="">Selec Mode</option>
            <option value="1-player">1 Player</option>
            <option value="2-player">2 Players</option>
          </select>
        </label>
  
        {gameMode === "1-player" && (
          <label>
            Nombre del jugador:
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
              Nombre del jugador 1:
              <input
                type="text"
                value={player1Name}
                onChange={handlePlayer1NameChange}
              />
            </label>
            <label>
              Nombre del jugador 2:
              <input
                type="text"
                value={player2Name}
                onChange={handlePlayer2NameChange}
              />
            </label>
          </>
        )}
  
        {/* Renderizado del tablero y otros elementos del juego */}
      </div>
    );
}

export default Landing;
  