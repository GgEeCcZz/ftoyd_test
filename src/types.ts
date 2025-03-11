export type Response = {
    ok: boolean;
    data: Data
}

export type Data = {
    matches: Match[];
}

export type Match = {
    time: string;
    title: string;
    homeTeam: Team;
    awayTeam: Team;
    homeScore: number;
    awayScore: number;
    status: Status;

}

export type Team = {
    name: string;
    players: Player[]
    points: number;
    place: number;
    total_kills: number;
}

export type Player = {
    username: string;
    kills: number;
}

export type Status = 'Scheduled' | 'Ongoing' | 'Finished'