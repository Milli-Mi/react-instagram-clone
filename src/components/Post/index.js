import React, { Component } from 'react';
import Image from './Image'
import Header from './Header'                                   
export default class Post extends Component {
    render() {
        const { post } = this.props;
        return (
            <div className="border rounded border-black col-start-3 col-end-9">
                <Header username={post.username} profileSrc={post.profileSrc} />
                <Image src={post.src} caption={post.caption} />
            </div>
        );
    }
}
