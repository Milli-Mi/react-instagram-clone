import React, { Component } from 'react';

const COMMENTS_MIN_COUNT = 3;

export default class Comments extends Component {
    constructor(props) {
        super(props);
        this.state = {
            commentsSlice: COMMENTS_MIN_COUNT,
        };
    }
handlerViewMoreComments () => {
    this.
}


  render() {
      const { comments } = this.props;
      const { commentsSlice } = this.state;
    return (
        <div className='pl-4'>
            {comments.slice(0, commentsSlice).map((comment) => (
                <p className='mb-1'>
                    <a href='#'>
                        <span className='mr-1 font-bold'>
                            {comment.username}
                        </span>
                    </a>
                    <span>{comment.text}</span>
                </p>
            ))}
            {comments.length > 3 && commentsSlice < comments.length && 
            <button type='button' className='cursor-pointer text-gray-400'>Vew all comments</button>
            }
        </div>
    );
  }
}
