import React from 'react';
import Image from 'next/image';

type CardProps = {
    homeTeam: string,
    awayTeam: string,
    children: React.ReactNode,
}

export const Card = ({homeTeam, awayTeam, children}: CardProps) => {
    return (
        <div className="w-full h-21.75 rounded-sm px-9 py-4 bg-gradient-to-r from-custom-light-gradient to-custom-dark-gradient">
            <div className="flex justify-between items-center w-full h-13.75">
                <div className="flex items-center w-43.25 h-12 gap-3.5">
                    <Image src="/team_logo.svg" alt="teamLogo" width={48} height={48} className="w-12 h-12"/>
                    <span
                        className="w-27.75 h-4.75 font-semibold text-base leading-[100%] tracking-[0%]">{homeTeam}</span>
                </div>
                {children}
                <div className="flex items-center w-43.25 h-12 gap-3.5">
                    <span
                        className="w-27.75 h-4.75 font-semibold text-base leading-[100%] tracking-[0%]">{awayTeam}</span>
                    <Image src="/team_logo.svg" alt="teamLogo" width={48} height={48} className="w-12 h-12"/>
                </div>
            </div>
        </div>
    );
};
