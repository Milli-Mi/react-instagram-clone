import React, { Component } from 'react'
import AddCommentForm from './AddCommentForm'
import PropTypes from 'prop-types'

const COMMENTS_MIN_COUNT = 3

export default class Comments extends Component {
  constructor(props) {
    super(props)
    this.state = {
      commentsSlice: COMMENTS_MIN_COUNT,
    }
  }
  handlerViewMoreComments = () => {
    const { commentsSlice } = this.state

    this.setState({
      commentsSlice: commentsSlice + COMMENTS_MIN_COUNT,
    })
  }

  render() {
    const { comments, commentInput, onAddComment, currentUser } = this.props
    const { commentsSlice } = this.state

   const [currentUserComment, otherComments] = comments.reduce(
      (result, currentComment) => {
        if (currentComment.username === currentUser.username) {
          result[0].push(currentComment);
        } else {
          result[1].push(currentComment)
        }
        return result
      },
      [[], []]
    );

    const sortedComments = [...currentUserComment.reverse(), ...otherComments]

    return (
      <div className='pl-4'>
        {sortedComments.slice(0, commentsSlice).map((comment) => (
          <p className='mb-1'>
            <a href='/#'>
              <span className='mr-1 font-bold'>{comment.username}</span>
            </a>
            <span>{comment.text}</span>
          </p>
        ))}
        {sortedComments.length > COMMENTS_MIN_COUNT &&
          commentsSlice < comments.length && (
            <button
              type='button'
              className='cursor-pointer text-gray-400 mb-2'
              onClick={this.handlerViewMoreComments}
            >
              Vew all comments
            </button>
          )}
        <AddCommentForm commentInput={commentInput} onSubmit={onAddComment} />
      </div>
    )
  }
}

Comments.propTypes = {
  commentInput: PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      username: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
    })
  ).isRequired,
  onAddComment: PropTypes.func.isRequired,
  currentUser: PropTypes.shape({
    username: PropTypes.string.isRequired,
  }).isRequired,
}
