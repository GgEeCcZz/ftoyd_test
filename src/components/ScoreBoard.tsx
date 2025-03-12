import React from 'react';
import { Status } from '@/types';

type ScoreBoardProps = {
    homeScore: number,
    awayScore: number,
    status: Status
}

export const ScoreBoard = ({homeScore, awayScore, status}: ScoreBoardProps) => {
    return (
        <div className="flex items-center justify-between flex-col min-w-[92px] h-full ">
            <span className="h-[24px] font-semibold text-xl leading-[100%] tracking-[0%]">{homeScore} : {awayScore}</span>
            <div className={`flex justify-center items-center h-[27px] rounded-sm ${status === 'Ongoing' && 'w-[92px] bg-[#43AD28]'} ${status === 'Finished' && 'w-[92px] bg-[#EB0237]'} ${status === 'Scheduled' && 'w-[112px] bg-[#EB6402]'}`}>
                <span className="font-semibold text-xs leading-[100%] tracking-[0%]">{status}</span>
            </div>
        </div>
    );
};
