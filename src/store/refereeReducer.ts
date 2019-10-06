import { RefereeAction, ADD_REFEREE } from './refereeActions';


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

export interface RefereeState {
    referees: Array<Referee>
}

const initialState: RefereeState = {
    referees: []
};

export function refereeReducer(state = initialState, action: RefereeAction): RefereeState {

    switch(action.type) {
        case ADD_REFEREE: 
            return {
                referees: [...state.referees, action.payload]
            };
        default:
            return state;
    }
  }
