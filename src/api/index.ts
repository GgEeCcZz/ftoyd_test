import axios from 'axios';
import { Match, Response } from '@/types';

const URL = process.env.NEXT_PUBLIC_BASE_URL;

export const getMatchesData = async (endpoint: string): Promise<Match[]> => {
    try {
        const response = await axios.get<Response>(`${URL}/${endpoint}`);
        return response.data.data.matches;
    } catch (error) {
        console.error('Ошибка загрузки матчей:', error);
        throw error;
    }
};