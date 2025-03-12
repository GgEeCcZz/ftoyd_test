import React from 'react';
import Image from 'next/image';
import { ButtonWrapper } from '@/components/ButtonWrapper';

type HeaderProps = {
    error: boolean,
    isLoading: boolean,
    getMatches: () => Promise<void>
}

export const Header = ({error, isLoading, getMatches}: HeaderProps) => {
    return (
        <div className="flex justify-between mb-[20px]">
            <Image src="/MatchTracker_logo.svg" alt="logo" width={257} height={32}/>
            <ButtonWrapper error={error} isLoading={isLoading} getMatches={getMatches}/>
        </div>
    );
};
