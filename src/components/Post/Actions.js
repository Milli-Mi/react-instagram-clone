import React, { Component } from 'react';
import { ReactComponent as Like } from '../../icons/heart.svg'
import { ReactComponent as Comment } from '../../icons/comment.svg';
import { ReactComponent as Send } from '../../icons/send.svg';
import { ReactComponent as Bookmark } from '../../icons/bookmark.svg';

export default class Actions extends Component {
  render() {
    return (
        <div>
            <div className='flex p-3 justify-between'>
                <span className='flex'>
                    <Like className='w-7 cursor-pointer mr-3' />
                    <Comment className='w-8 cursor-pointer mr-3' />
                    <Send className='w-7 cursor-pointer rotate-12' />
                </span>
                <span className='flex'>
                    <Bookmark className='w-6 cursor-pointer' />
                </span>
            </div>
        </div>
    );
  }
}
