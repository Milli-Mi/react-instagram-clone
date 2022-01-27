import React, { Component } from 'react';
import Image from './Image';

 
export default class Post extends Component {
  render() {
      const {post} = this.props
    return <Image src={post.src} caption={post.caption} />;
  }
}
