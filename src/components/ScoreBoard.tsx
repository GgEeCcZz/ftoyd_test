import React from 'react';

export const ScoreBoard = () => {
    return (
        <div className='flex flex-col min-w-[92px] h-full '>
            <span className='font-semibold text-xl leading-[100%] tracking-[0%]'>3 : 2</span>
            <div className='h-[27px] '>
                <span className='font-semibold text-xs leading-[100%] tracking-[0%]'>Live</span>
            </div>
        </div>
    );
};
