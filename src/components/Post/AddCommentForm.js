import React, { Component } from 'react';

export default class AddCommentForm extends Component {
  render() {
    return <div>
        <input type="text" name="comment" placeholder = "Add a comment..." />
        <button type = "submit">Submit</button>
    </div>;
  }
}
