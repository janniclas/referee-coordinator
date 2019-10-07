import { RefereeAction, ADD_REFEREE, DELETE_REFEREE, EDIT_REFEREE } from './refereeActions';


export enum Level {
    R1 = 'R1',
    R2 = 'R2',
    R3 = 'R3',
    R4 = 'R4'
  }

export interface Referee {
    id: string,
    name: string,
    level: Level
}

export interface RefereeState {
    referees: {[id: string]: Referee},
    refereeIds: Array<string>
}

const initialState: RefereeState = {
    referees: {},
    refereeIds: []
};

export function refereeReducer(state = initialState, action: RefereeAction): RefereeState {

    const copiedRefs = Object.assign({}, state.referees);

    switch(action.type) {

        case ADD_REFEREE: 
            copiedRefs[action.payload.id] = action.payload;
            return {
                refereeIds: [...state.refereeIds, action.payload.id],
                referees: copiedRefs
            };
        case DELETE_REFEREE: 
            delete copiedRefs[action.payload.id];
            return {
                refereeIds: state.refereeIds.filter(tmpId => 
                    action.payload.id !== tmpId
                ),
                referees: copiedRefs
                };
        case EDIT_REFEREE: 
            copiedRefs[action.payload.id] = action.payload;   
            return {
                refereeIds: state.refereeIds,
                referees: copiedRefs
            };
        default:
            return state;
    }

  }

