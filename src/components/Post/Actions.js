import React, { Component } from 'react';
import { ReactComponent as Like } from '../../icons/heart.svg'
import { ReactComponent as Comment } from '../../icons/comment.svg';
import { ReactComponent as Send } from '../../icons/send.svg';
import { ReactComponent as Bookmark } from '../../icons/bookmark.svg';

export default class Actions extends Component {
   
  render() {
       const { likes, onCommentClick } = this.props;
    return (
        <div>
            <div className='flex pl-4 pr-4 mt-2 justify-between'>
                <div className='flex justify-start'>
                    <Like className='w-7 cursor-pointer mr-3' />
                    <Comment 
                    className='w-8 cursor-pointer mr-3'
                    onClick={onCommentClick} />
                    <Send className='w-7 cursor-pointer rotate-12' />
                </div>
                <div className='flex justify-end'>
                    <Bookmark className='w-6 cursor-pointer' />
                </div>
            </div>
            <p className='pl-4 mt-2  font-bold'>
                {likes === 1 ? `${likes} like` : `${likes} likes`}
            </p>
        </div>
    );
  }
}
