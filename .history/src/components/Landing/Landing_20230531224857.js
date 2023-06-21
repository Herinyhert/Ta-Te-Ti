import { useState } from "react";
import "./Landing.css";

const Landing = () => {
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
    
    </div>
  );
};

export default Landing;
