import React, { Component } from 'react';
import AddCommentForm from './AddCommentForm';

const COMMENTS_MIN_COUNT = 3;

export default class Comments extends Component {
    constructor(props) {
        super(props);
        this.state = {
            commentsSlice: COMMENTS_MIN_COUNT,
        };
    }
    handlerViewMoreComments = () => {
        const { commentsSlice } = this.state;

        this.setState({
            commentsSlice: commentsSlice + COMMENTS_MIN_COUNT,
        });
    };
   

    render() {
        const { comments, commentInput } = this.props;
        const { commentsSlice } = this.state;
        return (
            <div className='pl-4'>
                {comments.slice(0, commentsSlice).map((comment) => (
                    <p className='mb-1'>
                        <a href='/#'>
                            <span className='mr-1 font-bold'>
                                {comment.username}
                            </span>
                        </a>
                        <span>{comment.text}</span>
                    </p>
                ))}
                {comments.length > COMMENTS_MIN_COUNT &&
                    commentsSlice < comments.length && (
                        <button
                            type='button'
                            className='cursor-pointer text-gray-400 mb-2'
                            onClick={this.handlerViewMoreComments}
                        >
                            Vew all comments
                        </button>
                    )}
                    <AddCommentForm commentInput = {commentInput}/>
            </div>
        );
    }
}
