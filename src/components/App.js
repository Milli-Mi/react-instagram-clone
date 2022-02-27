import React, { Component } from 'react'
import Post from './Post'
import images from '../images/kot-cobi.jpg'
import profileImg from '../images/profile.jpg'
import './app.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Profile from './Profile'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentUser: { username: 'Milli' },
      post: {
        src: images,
        caption: 'cat smuxzi',
        username: 'Milli',
        profileSrc: profileImg,
        likes: 387,
        comments: [
          {
            text: 'cute cats with blue eyes',
            username: 'happy - dog',
          },
          {
            text: 'his eyes are perfectly contoured, almost like he’s wearing eyeliner',
            username: 'Dark_you',
          },
          {
            text: 'He’s definitely one handsome fella.',
            username: 'Jecky',
          },
          {
            text: 'cute cats with blue eyes',
            username: 'happy - dog',
          },
          {
            text: 'his eyes are perfectly contoured, almost like he’s wearing eyeliner',
            username: 'Dark_you',
          },
          {
            text: 'He’s definitely one handsome fella.',
            username: 'Jecky',
          },
          {
            text: 'cute cats with blue eyes',
            username: 'happy - dog',
          },
          {
            text: 'his eyes are perfectly contoured, almost like he’s wearing eyeliner',
            username: 'Dark_you',
          },
          {
            text: 'He’s definitely one handsome fella.',
            username: 'Jecky',
          },
        ],
      },
    }
  }

  handleAddComment = (text) => {
    const { post } = this.state
    this.setState({
      post: {
        ...post,
        comments: [...post.comments, { text, username: 'Milli' }],
      },
    })
  }

  render() {
    const { post, currentUser } = this.state
    return (
      <Router>
        <div className='grid grid-cols-12'>
          <Routes>
            <Route path="/p/:username" element={<Profile />} />
            <Route
              path="/p/:username/:postId"
              element={
                <Post
                  post={post}
                  onAddComment={this.handleAddComment}
                  currentUser={currentUser}
                />
              }
            />
          </Routes>
        </div>
      </Router>
    );
  }
}
