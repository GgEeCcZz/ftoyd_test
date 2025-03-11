import React from 'react';
import { Error } from '@/components/Error';
import { UpdateButton } from '@/components/UpdateButton';

export const ButtonWrapper = () => {
    return (
        <div className='flex justify-end w-[1182px] h-[56px] gap-[12px]'>
            <Error />
            <UpdateButton />
        </div>
    );
};
