 import React, { Component } from 'react';
 import Post from './Post'
 import images from '../images/kot-cobi.jpg';
 import profileImg from '../images/profile.jpg'
 
 
 export default class App extends Component {
   render() {
     const post = {
         src: images,
         caption: 'cat smuxzi',
         username: "Milli",
         profileSrc: profileImg
        
     }; 
     return (<Post post={post} />
 
    ) 
   } 
 }



 