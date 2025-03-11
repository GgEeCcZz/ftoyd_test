import { getMatchesData } from '@/api';
import { useEffect, useState } from 'react';
import { Match } from '@/types';

export const useGetMatches = () => {
    const [error, setError] = useState<boolean | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [matches, setMatches] = useState<Match[]>();

    useEffect(() => {
        const getMatches = async () => {
            try {
                setIsLoading(true);
                const allMatches = await getMatchesData()
                setMatches(allMatches)
            } catch (error) {
                setError(true)
            } finally {
                setIsLoading(false);
            }
        }
        getMatches()
    }, [])

    return { error, isLoading, matches }
};
