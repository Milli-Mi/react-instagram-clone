import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class AddCommentForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            comment: '',
        };
    }

    handleSubmit = (e) => {
        e.preventDefault();
          const { comment } = this.state;
          if (!comment.trim()) {
              return;
          }
          alert(comment);
    };

handleCommentChange = (e) => {
  this.setState({
    comment: e.target.value
  })
}

    render() {
        const { commentInput } = this.props;
        const { comment} = this.state;

        const isDisabled = !comment.trim();

        return (
            <form className='flex border-t' onSubmit={this.handleSubmit}>
                <input
                    type='text'
                    name='comment'
                    placeholder='Add a comment...'
                    className='w-full mr-4 py-2 px-4 text-gray-400 text-sm'
                    ref={commentInput}
                    onChange={this.handleCommentChange}
                    value={comment}
                />

                <button
                    className={`pr-4 text-sm text-blue-400 font-bold ${
                        isDisabled ? 'opacity-25' : ''
                    }`}
                    type='submit'
                    disabled={isDisabled}
                >
                    Submit
                </button>
            </form>
        );
    }
}

AddCommentForm.propTypes = {
    commentInput: PropTypes.shape({ current: PropTypes.instanceOf(Element) })
}
