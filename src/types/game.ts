import { MetaInfo } from "../store/objectReducer";

export const GAME = "GAME_IDENT";

export interface GameState {
  games: {[id: string] : Game},
  gameIds: Array<string>
}

export interface Game extends MetaInfo {
    home: string,
    visitor: string,
    location: string,
    time: number
}