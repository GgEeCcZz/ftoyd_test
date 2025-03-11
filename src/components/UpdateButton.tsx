import React from 'react';
import Image from 'next/image';

export const UpdateButton = () => {
    return (
        <div>
            {/*тут вывести ошибку*/}
            <button className='flex w-[204px] h-[56px] transition-colors duration-300 ease-in-out bg-[#EB0237] hover:bg-[#A01131] active:bg-[#701328] rounded-sm gap-[10px] px-[40px] py-[17px]'>
                <span className='w-[88px] h-[22px] font-semibold text-lg'>Обновить</span>
                <Image src='/Refresh.svg' alt='loader' width={26} height={26} />
            </button>
        </div>
    );
};
