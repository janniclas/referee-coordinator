import {observable} from 'mobx';


export enum Level {
    R1 = 'R1',
    R2 = 'R2',
    R3 = 'R3',
    R4 = 'R4'
  }

export interface Referee {
    name: string,
    level: Level
}

export interface State {
    referees: Array<Referee>
}
export const appState = observable<State>({
    referees: []
});