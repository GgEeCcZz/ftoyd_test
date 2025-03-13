import React from 'react';
import Image from 'next/image';

export const Error = () => {
    return (
        <div className='w-120 h-full bg-custom-error-bg px-6 py-3.5 rounded-sm'>
            <div className='flex items-center w-auto h-7 gap-2.5'>
                <Image src='/alert_triangle.svg' alt='error' width={28} height={28} />
                <span className='font-medium text-lg leading-[100%] tracking-normal'>Ошибка: не удалось загрузить информацию</span>
            </div>
        </div>
    );
};
