'use client';
import React from 'react';
import Image from 'next/image';

type UpdateButtonProps = {
    isLoading: boolean;
    getMatches: () => Promise<void>;
};

export const UpdateButton = ({ isLoading, getMatches }: UpdateButtonProps) => {
    return (
        <button
            disabled={isLoading}
            onClick={getMatches}
            className="flex w-51 h-full transition-colors duration-300 ease-in-out bg-custom-bright-red hover:bg-custom-dark-red active:bg-custom-darker-red rounded-sm gap-2.5 px-10 py-3.75 cursor-pointer"
        >
            <span className="w-22 h-5.5 font-semibold text-lg tracking-normal">Обновить</span>
            <Image
                src="/Refresh.svg"
                alt="loader"
                width={26}
                height={26}
                className={isLoading ? 'animate-spin' : ''}
            />
        </button>
    );
};