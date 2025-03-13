import React from 'react';
import { Card } from '@/components/Card';
import { ScoreBoard } from '@/components/ScoreBoard';
import { Match } from '@/types';

type MatchesListProps = { matches: Match[] }

export const MatchesList = ({matches}: MatchesListProps) => {

    return (
        <div className="flex flex-col items-center justify-center gap-3">
            {matches.map((match) => (
                <Card
                    key={match.title}
                    homeTeam={match.homeTeam.name}
                    awayTeam={match.awayTeam.name}
                >
                    <ScoreBoard
                        homeScore={match.homeScore}
                        awayScore={match.awayScore}
                        status={match.status}
                    />
                </Card>
            ))}
        </div>
    );
};
