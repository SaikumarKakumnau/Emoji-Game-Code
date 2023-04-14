// Write your code here.
import './index.css'

const EmojiCard = props => {
  const {emojiDetails, onClickEmoji} = props
  const {id, emojiName, emojiUrl} = emojiDetails

  const clickEmoji = () => {
    onClickEmoji(id)
  }

  return (
    <li className="emoji-list-item">
      <button className="emoji-button" type="button" onClick={clickEmoji}>
        <img src={emojiUrl} alt={emojiName} className="emoji-image" />
      </button>
    </li>
  )
}

export default EmojiCard
