import React from 'react';
import { Status } from '@/types';

type ScoreBoardProps = {
    homeScore: number,
    awayScore: number,
    status: Status
}

export const ScoreBoard = ({homeScore, awayScore, status}: ScoreBoardProps) => {
    return (
        <div className="flex items-center justify-between flex-col min-w-23 h-full ">
            <span className="h-6 font-semibold text-xl leading-[100%] tracking-[0%]">{homeScore} : {awayScore}</span>
            <div className={`flex justify-center items-center h-6.75 rounded-sm ${status === 'Ongoing' && 'w-23 bg-custom-bright-green'} ${status === 'Finished' && 'w-23 bg-custom-bright-red'} ${status === 'Scheduled' && 'w-[112px] bg-custom-orange'}`}>
                <span className="font-semibold text-xs leading-[100%] tracking-[0%]">{status}</span>
            </div>
        </div>
    );
};
