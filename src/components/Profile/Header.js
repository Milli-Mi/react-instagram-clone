import React, { Component } from 'react'
import defaultAvatar from '../../images/defaultAvatar.jpg'
 
 

export default class Header extends Component {
  render() { 
    const {
     user: {username, profileSrc, postCount, followerCount, followingCount, fullName}
    }  = this.props;
    return (
      <div className='flex items-center justify-center col-span-12'>
        <img
          className='rounded-full h-40 w-40'
          alt={`${username} profile`}
          src={profileSrc}
          onError={e=>e.target.src = defaultAvatar} 
        />
        <div>
          <p>{username}</p>
          <button>follow</button>
          <div>
            <p><span>{postCount}</span>posts</p>
            <p><span>{followerCount}</span>followers</p>
            <p><span>{followingCount}</span>following</p>
          </div>
        </div>

        <p>{fullName}</p>
      </div>
    )
  }
}
