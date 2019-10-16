import { MetaInfo } from "./types";
import { Team } from "./team";
import { Referee } from "./referee";

export interface GameState {
  games: {[id: string] : Game},
  gameIds: Array<string>
}

export interface Game extends MetaInfo {
    home?: Team,
    visitor?: Team,
    location?: string,
    time?: number,
    refs?: Array<Referee>
}