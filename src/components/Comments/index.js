import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import {formatDistanceToNow} from 'date-fns'
import CommentItem from '../CommentItem'
import './index.css'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

// Write your code here

const userDetails = []

class Comments extends Component {
  state = {
    userList: userDetails,
    name: '',
    comment: '',
  }

  onLiked = id => {
    this.setState(prevState => ({
      userList: prevState.userList.map(eachItem => {
        if (id === eachItem.id) {
          return {...eachItem, isLiked: !eachItem.isLiked}
        }
        return eachItem
      }),
    }))
  }

  onDelete = commentId => {
    const {userList} = this.state
    this.setState({
      userList: userList.filter(eachItem => eachItem.id !== commentId),
    })
  }

  submitComment = event => {
    const initialBackgroundColorClassName = `initial-container ${
      initialContainerBackgroundClassNames[
        Math.ceil(
          Math.random() * initialContainerBackgroundClassNames.length - 1,
        )
      ]
    }`
    event.preventDefault()
    const todate = new Date()
    const dateString = formatDistanceToNow(todate)
    console.log(dateString)
    const {name, comment} = this.state
    const newComment = {
      id: uuidv4(),
      name,
      comment,
      isLiked: false,
      date: dateString,
      initialClassName: initialBackgroundColorClassName,
    }
    this.setState(prevState => ({
      name: '',
      comment: '',
      userList: [...prevState.userList, newComment],
    }))
  }

  onChangeComment = event => {
    this.setState({comment: event.target.value})
  }

  onChangeName = event => {
    this.setState({name: event.target.value})
  }

  render() {
    const {userList, name, comment} = this.state
    console.log(name)
    const count = userList.length
    return (
      <div className="main-cont">
        <div className="card-cont">
          <form className="desc-cont" onSubmit="submitComment()">
            <h1 className="main-heading">Comments</h1>
            <p className="para">Say something about 4.0 Technologies </p>
            <input
              type="name"
              placeholder="Your Name"
              className="comment-input"
              onChange={this.onChangeName}
              value={name}
            />
            <textarea
              type="text"
              placeholder="Your Comment"
              className="comment-input name-input"
              onChange={this.onChangeComment}
              value={comment}
            />
            <button
              type="submit"
              className="comment-button"
              onClick={this.submitComment}
            >
              Add Comment
            </button>
          </form>
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
            alt="Comments"
            className="comments-image"
          />
        </div>
        <hr className="break-line" />
        <div className="count-cont">
          <div className="comments-count-cont">{count}</div>
          <p className="comments-heading">Comments</p>
        </div>
        <ul className="list-cont">
          {' '}
          {userList.map(eachItem => (
            <CommentItem
              onDelete={this.onDelete}
              onLiked={this.onLiked}
              commentDetails={eachItem}
              key={eachItem.id}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default Comments
