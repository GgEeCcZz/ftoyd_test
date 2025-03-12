'use client';

import React from 'react';
import { Error } from '@/components/Error';
import { UpdateButton } from '@/components/UpdateButton';

type ButtonWrapperProps = {
    error: boolean,
    isLoading: boolean,
    getMatches: () => Promise<void>
}

export const ButtonWrapper = ({error, isLoading, getMatches}: ButtonWrapperProps) => {
    return (
        <div className="flex justify-end w-[1182px] h-[56px] gap-[12px]">
            {error ? (<Error/>) : null}
            <UpdateButton isLoading={isLoading} getMatches={getMatches}/>
        </div>
    );
};
