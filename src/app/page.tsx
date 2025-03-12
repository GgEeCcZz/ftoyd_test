'use client'

import { Header } from '@/components/Header';
import { HomeContent } from '@/components/HomeContent';
import { useGetMatches } from '@/hooks/useGetMatches';

export default function Home() {
    const { error, isLoading, matches, getMatches } = useGetMatches();

    return (
      <div>
          <Header error={error} isLoading={isLoading} getMatches={getMatches}/>
          <HomeContent matches={matches}/>
      </div>
  )
}
