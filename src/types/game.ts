import { MetaInfo } from "../store/objectReducer";

export interface GameState {
  games: {[id: string] : Game},
  gameIds: Array<string>
}

export interface Game extends MetaInfo {
    home: string,
    visitor: string,
    location: string,
    time: Date
}