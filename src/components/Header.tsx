import React from 'react';
import Image from 'next/image';
import { UpdateButton } from '@/components/UpdateButton';

export const Header = () => {
    return (
        <div className='flex justify-between mb-[20px]'>
            <Image src='/MatchTracker_logo.svg' alt='logo' width={200} height={200} />
            <UpdateButton />
        </div>
    );
};
