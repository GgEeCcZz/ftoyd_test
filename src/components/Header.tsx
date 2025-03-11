import React from 'react';
import Image from 'next/image';
import { ButtonWrapper } from '@/components/ButtonWrapper';

export const Header = () => {
    return (
        <div className='flex justify-between mb-[20px]'>
            <Image src='/MatchTracker_logo.svg' alt='logo' width={257} height={32} />
            <ButtonWrapper />
        </div>
    );
};
