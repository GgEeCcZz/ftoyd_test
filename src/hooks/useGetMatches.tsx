import { getMatchesData } from '@/api';
import { useEffect, useState } from 'react';
import { Match } from '@/types';

export const useGetMatches = () => {
    const [error, setError] = useState<boolean>(false);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [matches, setMatches] = useState<Match[]>([]);

    const getMatches = async () => {
        try {
            setIsLoading(true);
            setError(false);
            const allMatches = await getMatchesData();
            setMatches(allMatches);
        } catch (error) {
            setError(true);
            setMatches([]);
        } finally {
            setIsLoading(false);
        }
    }

    useEffect(() => {
        getMatches();
    }, [])

    return { error, isLoading, matches, getMatches }
};
