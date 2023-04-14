/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

// Write your code here.

import {Component} from 'react'
import EmojiCard from '../EmojiCard'
import NavBar from '../NavBar'
import WinOrLoseCard from '../WinOrLoseCard'

import './index.css'

class EmojiGame extends Component {
  state = {clickedEmojis: [], isGameInProgress: true, topScore: 0}

  finishGameAndSetTopScore = currentScore => {
    const {topScore} = this.state
    let newScore = topScore

    if (currentScore > topScore) {
      newScore = currentScore
    }
    this.setState({topScore: newScore, isGameInProgress: false})
  }

  onClickEmoji = id => {
    const {emojisList} = this.props
    const {clickedEmojis} = this.state
    const isPresent = clickedEmojis.includes(id)
    const emojiListLength = clickedEmojis.length

    if (isPresent) {
      this.finishGameAndSetTopScore(emojiListLength)
    } else {
      if (emojisList.length - 1 === emojiListLength) {
        this.finishGameAndSetTopScore(emojisList.length)
      }
      this.setState(prevState => ({
        clickedEmojis: [...prevState.clickedEmojis, id],
      }))
    }
  }

  getShuffledEmojis = () => {
    const {emojisList} = this.props
    return emojisList.sort(() => Math.random() - 0.5)
  }

  renderEmojis = () => {
    const shuffledEmojis = this.getShuffledEmojis()

    return (
      <ul className="emojis-container">
        {shuffledEmojis.map(eachEmoji => (
          <EmojiCard
            key={eachEmoji.id}
            emojiDetails={eachEmoji}
            onClickEmoji={this.onClickEmoji}
          />
        ))}
      </ul>
    )
  }

  playAgain = () => {
    this.setState({clickedEmojis: [], isGameInProgress: true})
  }

  renderScore = () => {
    const {emojisList} = this.props
    const {clickedEmojis} = this.state
    const isWin = clickedEmojis.length === emojisList.length

    return (
      <WinOrLoseCard
        isWin={isWin}
        onClickPlayAgain={this.playAgain}
        score={clickedEmojis.length}
      />
    )
  }

  render() {
    const {clickedEmojis, isGameInProgress, topScore} = this.state

    return (
      <div className="app-container">
        <NavBar
          currentScore={clickedEmojis.length}
          isGameInProgress={isGameInProgress}
          topScore={topScore}
        />
        <div className="emoji-body-container">
          {isGameInProgress ? this.renderEmojis() : this.renderScore()}
        </div>
      </div>
    )
  }
}

export default EmojiGame
