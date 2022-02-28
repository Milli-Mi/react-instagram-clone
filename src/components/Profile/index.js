import React, { Component } from 'react'
import Header from './Header'

export default class Profile extends Component {
  render() {
    const {user} = this.props;
    return <Header user = {user}/>
  }
}
