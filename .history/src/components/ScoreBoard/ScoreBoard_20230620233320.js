import "./ScoreBoard.css";

const ScoreBoard = ({ scoreX, scoreO, player1Name, player2Name, turn }) => {
  const isPlayer1Turn = turn === "X";
  const isPlayer2Turn = turn === "O";

  return (
    <div>
      <div className="score-board">
        <div>{scoreX}</div>
        <div>{scoreO}</div>
      </div>
      <div className={isPlayer1Turn ? "active-player" : ""}>{isPlayer1Turn && "Es tu turno"} {player1Name} </div>
      <div className={isPlayer2Turn ? "active-player" : ""}>{isPlayer2Turn && "Es tu turno"} </div>
    </div>
  );
};

export default ScoreBoard;
