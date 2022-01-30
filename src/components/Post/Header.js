import React from 'react';

export default function Header({username, profileSrc}) {
     
    return (
        <div className="p-4">
            <a href='#' className='flex items-center mr-3'>
                <img
                    src={profileSrc}
                    alt={username}
                    className='w-8 h-8 object-cover rounded-full'
                />
                <p className='font-bold'>{username}</p>
            </a>
        </div>
    );
}
