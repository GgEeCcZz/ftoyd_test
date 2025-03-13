'use client';
import React from 'react';
import Image from 'next/image';
import { UpdateButton } from '@/components/UpdateButton';
import { Error } from '@/components/Error';
import { MatchesList } from '@/components/MatchesList';
import { Match } from '@/types';
import { useGetMatches } from '@/hooks/useGetMatches';

type ContentProps = {
    initialMatches: Match[];
    initialError: boolean;
};

export const Content = ({ initialMatches, initialError }: ContentProps) => {
    const { matches, error, isLoading, getMatches } = useGetMatches(initialMatches, initialError);

    return (
        <div>
            <div className="flex justify-between mb-5">
                <Image src="/MatchTracker_logo.svg" alt="logo" width={257} height={32} />
                <div className="flex justify-end w-295.5 h-14 gap-3">
                    {error && <Error />}
                    <UpdateButton isLoading={isLoading} getMatches={getMatches} />
                </div>
            </div>
            <MatchesList matches={matches} />
        </div>
    );
};