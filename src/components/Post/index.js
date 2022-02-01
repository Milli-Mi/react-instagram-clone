import React, { Component } from 'react'
import Image from './Image'
import Header from './Header' 
import Actions from './Actions'  
import Caption from './Caption'  
import Comments from './Comments'




export default class Post extends Component {
    render() {
        const { post } = this.props;
        return (
            <div className="border rounded border-gray-200 col-start-4 col-end-10">
                <Header username={post.username} profileSrc={post.profileSrc} />
                <Image src={post.src} caption={post.caption} />
                <Actions likes = {post.likes}/>
                <Caption caption={post.caption} username={post.username}/>
                <Comments comments={post.comments} username={post.username}/>
            </div>
        );
    }
}
