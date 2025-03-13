import { Content } from '@/components/Content';
import { getMatchesData } from '@/api';
import { Match } from '@/types';

export default async function Home() {
    let matches: Match[] = [];
    let error = false;

    try {
        matches = await getMatchesData('fronttemp');
    } catch (err) {
        error = true;
    }

    return (
        <div>
            <Content initialMatches={matches} initialError={error} />
        </div>
    );
}