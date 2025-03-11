import React from 'react';
import Image from 'next/image';

export const Error = () => {
    return (
        <div className='w-[480px] h-full bg-[#0F1318] px-[24px] py-[14px] rounded-sm'>
            <div className='flex items-center w-auto h-[28px] gap-[10px]'>
                <Image src='/alert_triangle.svg' alt='error' width={28} height={28} />
                <span className='font-medium text-lg leading-[100%] tracking-normal'>Ошибка: не удалось загрузить информацию</span>
            </div>
        </div>
    );
};
