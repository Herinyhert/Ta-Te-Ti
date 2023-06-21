import "./ScoreBoard.css";

const ScoreBoard = ({ scoreX, scoreO, player1Name, player2Name, turn }) => {

const isPlayer1Turn = turn === "X";
con
return (
  <div>
    <div className="score-board">
      <div>{scoreX}</div>
      <div>{scoreO}</div>
    </div>
    <div>{player1Name}</div>
    <div>{player2Name}</div>
  </div>
);
};

export default ScoreBoard;
