import React from 'react';
import Image from 'next/image';

type UpdateButtonProps = {
    isLoading: boolean,
    getMatches: () => Promise<void>
}

export const UpdateButton = ({isLoading, getMatches}: UpdateButtonProps) => {

    return (
        <button
            disabled={isLoading}
            onClick={() => getMatches()}
            className="flex w-[204px] h-full transition-colors duration-300 ease-in-out bg-[#EB0237] hover:bg-[#A01131] active:bg-[#701328] rounded-sm gap-[10px] px-[40px] py-[15px] cursor-pointer"
        >
            <span className="w-[88px] h-[22px] font-semibold text-lg tracking-normal">Обновить</span>
            <Image src="/Refresh.svg" alt="loader" width={26} height={26} className={`${isLoading && `animate-spin`}`}/>
        </button>
    );
};
