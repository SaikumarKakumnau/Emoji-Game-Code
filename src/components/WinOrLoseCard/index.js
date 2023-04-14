// Write your code here.
import './index.css'

const WinOrLoseCard = props => {
  const {isWin, onClickPlayAgain, score} = props
  const imageUrl = isWin
    ? 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'

  const gameStatus = isWin ? 'You Won' : 'You Lose'
  const scoreStatus = isWin ? 'Best Score' : 'Score'

  return (
    <div className="win-or-lose-container">
      <div className="game-details-container">
        <h1 className="game-status">{gameStatus}</h1>
        <p className="game-score">{scoreStatus}</p>
        <p className="total-score">{score}/12</p>
        <button
          type="button"
          className="play-button"
          onClick={onClickPlayAgain}
        >
          Play Again
        </button>
      </div>
      <div className="image-container">
        <img src={imageUrl} alt="win or lose" className="win-lose-image" />
      </div>
    </div>
  )
}

export default WinOrLoseCard
