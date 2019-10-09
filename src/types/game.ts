import { MetaInfo } from "../store/objectReducer";
import { Team } from "./team";

export const GAME = "GAME_IDENT";

export interface GameState {
  games: {[id: string] : Game},
  gameIds: Array<string>
}

export interface Game extends MetaInfo {
    home: Team,
    visitor: Team,
    location: string,
    time: number
}