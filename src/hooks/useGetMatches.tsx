'use client';
import { useState, useCallback } from 'react';
import { Match } from '@/types';
import { getMatchesData } from '@/api';

export const useGetMatches = (initialMatches: Match[], initialError: boolean) => {
    const [matches, setMatches] = useState<Match[]>(initialMatches);
    const [error, setError] = useState<boolean>(initialError);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const getMatches = useCallback(async () => {
        setIsLoading(true);
        try {
            const newMatches = await getMatchesData('fronttemp');
            setMatches(newMatches);
            setError(false);
        } catch (err) {
            setError(true);
        } finally {
            setIsLoading(false);
        }
    }, []);

    return { matches, error, isLoading, getMatches };
};