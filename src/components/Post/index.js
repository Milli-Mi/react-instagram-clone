import React, { Component } from 'react';
import Image from './Image';
import Header from './Header';
import Actions from './Actions';
import Caption from './Caption';
import Comments from './Comments';
import PropTypes from 'prop-types';

export default class Post extends Component {
    constructor(props) {
        super(props);
        this.commentInputRef = React.createRef();
    }

    handleCommentClick = () => {
        this.commentInputRef.current.focus();
    };

    render() {
        const { post, onAddComment } = this.props;
        return (
            <div className='border rounded border-gray-200 col-start-4 col-end-10'>
                <Header username={post.username} profileSrc={post.profileSrc} />
                <Image src={post.src} caption={post.caption} />
                <Actions
                    likes={post.likes}
                    onCommentClick={this.handleCommentClick}
                />
                <Caption caption={post.caption} username={post.username} />
                <Comments
                    comments={post.comments}
                    username={post.username}
                    commentInput={this.commentInputRef}
                    onAddComment={onAddComment}
                />
            </div>
        );
    }
}

Post.propTypes = {
    post: PropTypes.shape({
        username: PropTypes.string.isRequired,
        profileSrc: PropTypes.string.isRequired,
        src: PropTypes.string.isRequired,
        caption: PropTypes.string,
        likes: PropTypes.number.isRequired,
        comments: PropTypes.arrayOf(
            PropTypes.shape({
                username: PropTypes.string.isRequired,
                text: PropTypes.string.isRequired,
            })
        ).isRequired,
    }).isRequired,
    onAddComment: PropTypes.func.isRequired
}; 
