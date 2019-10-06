import {Referee} from './refereeReducer';

export const ADD_REFEREE = 'ADD_REFEREE'

export interface AddRefereeAction {
    type: typeof ADD_REFEREE
    payload: Referee
}

export function addReferee(newReferee: Referee): RefereeAction {
    return {
      type: ADD_REFEREE,
      payload: newReferee
    }
  }

export type RefereeAction = AddRefereeAction;