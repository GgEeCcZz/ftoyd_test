'use client'

import React, { useEffect } from 'react';
import { Card } from '@/components/Card';
import { getMatchesData } from '@/api';

export const HomeContent = () => {
    useEffect(() => {
        const response = async () => {
            const data = await getMatchesData()
            console.log(data)
        }
        response()
    }, []);
    return (
        <div className='flex flex-col items-center justify-center gap-[12px]'>
            <Card />
        </div>
    );
};
