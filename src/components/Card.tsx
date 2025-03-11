import React from 'react';
import Image from 'next/image';

export const Card = () => {
    return (
        <div className='w-full h-[87px] rounded-sm px-[36px] py-[16px] bg-gradient-to-r from-[#0F1318] to-[#0A0E12]'>
            <div className='flex justify-between items-center w-full h-[55px]'>
                <div className='flex items-center w-[173px] h-[48px] gap-[14px]'>
                    {/*ДИВ КОММАНДЫ*/}
                    <Image src='/team_logo.svg' alt='teamLogo' width={48} height={48}/>
                    <span
                        className='w-[111px] h-[19px] font-semibold text-base leading-[100%] tracking-[0%]'>Command №1</span>
                </div>
                <div className='flex items-center w-[173px] h-[48px] gap-[14px]'>
                    {/*ДИВ КОММАНДЫ*/}
                    <span
                        className='w-[111px] h-[19px] font-semibold text-base leading-[100%] tracking-[0%]'>Command №2</span>
                    <Image src='/team_logo.svg' alt='teamLogo' width={48} height={48}/>
                </div>
            </div>
        </div>
    );
};
