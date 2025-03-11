import axios from 'axios';
import { Match, Response } from '@/types';


export const getMatchesData = async (): Promise<Match[]> => {
    const response = await axios.get<Response>('https://app.ftoyd.com/fronttemp-service/fronttemp');
    return response.data.data.matches;
}