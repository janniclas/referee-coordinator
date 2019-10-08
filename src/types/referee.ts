import { MetaInfo } from "../store/objectReducer";

export enum Level {
    R1 = 'R1',
    R2 = 'R2',
    R3 = 'R3',
    R4 = 'R4'
  }

export interface RefereeState {
  referees: {[id: string] : Referee},
  refereeIds: Array<string>
}

export interface Referee extends MetaInfo {
    name: string,
    level: Level
}