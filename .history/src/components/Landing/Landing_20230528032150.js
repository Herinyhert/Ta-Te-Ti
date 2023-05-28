import { useState } from 'react';
import './Landing.css'

const Landing = ()=>{
    // return(
    //     <div>
    //         
    //         <button>Player 1</button>
    //         <button>Player 2</button>
    //     </div>
    // )
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
  
    // Resto de la lógica del juego...
  
    return (
      <div>
        <label>
          Modo de juego:
          <select value={gameMode} onChange={handleGameModeChange}>
            <option value="">Seleccionar modo</option>
            <option value="1-player">1 Jugador</option>
            <option value="2-player">2 Jugadores</option>
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
  