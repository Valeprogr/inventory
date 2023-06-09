import React from 'react';

const Card = ({props}) => {
    return (
        <div className=' hover:shadow cursor-pointer col-span-1 bg-gray-200 border border-gray-300 rounded-lg shadow-md'>
            <img src="./images/2.jpeg" alt='profile' className='w-full  h-32 sm:h-48 object-cover'></img>
            <div className='font-bold text-center'>
                <span>{props}</span>
            </div>
        </div>
    );
}

export default Card;
