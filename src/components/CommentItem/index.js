// Write your code here
import './index.css'

const CommentItem = props => {
  const {commentDetails, onLiked, onDelete} = props
  const {name, comment, isLiked, id, date, initialClassName} = commentDetails
  const letter = name[0]
  const imgUrl = isLiked
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'

  const likecolorname = isLiked ? 'liked-image' : null

  const onClikLikeButton = () => {
    onLiked(id)
  }

  const onClikDeleteButton = () => {
    onDelete(id)
  }

  return (
    <li className="list-cont">
      <div className="comment-cont">
        <div className={`circle ${initialClassName}`}>
          <div className="letter">{letter}</div>
        </div>
        <h1 className="user-name">{name}</h1>
        <p>{date}</p>
      </div>
      <p className="comment">{comment}</p>
      <div className="buttons-cont">
        <button
          className={`like-button ${likecolorname}`}
          onClick={onClikLikeButton}
          type="submit"
        >
          <img src={imgUrl} alt="like" className="like-image" />
          Like
        </button>
        <button
          className="like-button"
          onClick={onClikDeleteButton}
          data-testid="delete"
          type="submit"
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
            alt="delete"
            className="like-image"
          />
        </button>
      </div>
      <hr />
    </li>
  )
}

export default CommentItem
