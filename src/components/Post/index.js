import React, { Component } from 'react';
import Image from './Image';
import Header from './Header';
import Actions from './Actions';
import Caption from './Caption';
import Comments from './Comments';



export default class Post extends Component {
    constructor(props) {
        super(props);
        this.commentInputRef = React.createRef();
    }
    
    handleCommentClick = () => {
        this.commentInputRef.current.focus();
    };

    render() {
        const { post } = this.props;
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
                />
            </div>
        );
    }
}
