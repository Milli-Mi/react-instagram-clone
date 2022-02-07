import React, { Component } from 'react';

export default class AddCommentForm extends Component {
    render() {
        const { commentInput } = this.props;

        return (
            <div className='flex border-t'>
                <input
                    type='text'
                    name='comment'
                    placeholder='Add a comment...'
                    className='w-full mr-4 py-2 px-4 text-gray-400 text-sm'
                    ref = { commentInput }
                />

                <button
                    className='pr-4 text-sm text-blue-400 font-bold'
                    type='submit'
                >
                    Submit
                </button>
            </div>
        );
    }
}
