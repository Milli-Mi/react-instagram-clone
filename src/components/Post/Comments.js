import React, { Component } from 'react';

export default class Comments extends Component {
  render() {
      const { comments } = this.props;
    return (
        <div className='pl-4'>
            {comments.slice(0, 3).map((comment) => (
                <p className = 'mb-1'>
        
                <a href = '#'>

                        <span className = 'mr-1 font-bold'>{comment.username}</span>
                    </a>
                    <span>{comment.text}</span>
                </p>
            ))}
        </div>
    );
  }
}
