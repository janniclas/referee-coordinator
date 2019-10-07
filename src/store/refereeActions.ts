import {Referee} from './refereeReducer';

export const ADD_REFEREE = 'ADD_REFEREE';
export const DELETE_REFEREE = 'DELETE_REFEREE';
export const EDIT_REFEREE = 'EDIT_REFEREE';

export interface AddRefereeAction {
    type: typeof ADD_REFEREE
    payload: Referee
}

export interface DeleteRefereeAction {
  type: typeof DELETE_REFEREE
  payload: Referee
}

export interface EditRefereeAction {
  type: typeof EDIT_REFEREE
  payload: Referee
}

export function addReferee(newReferee: Referee): RefereeAction {
    return {
      type: ADD_REFEREE,
      payload: newReferee
    }
}

export function editReferee(editedReferee: Referee): RefereeAction {
  return {
    type: ADD_REFEREE,
    payload: editedReferee
  }
}

export function deleteReferee(deleteReferee: Referee): RefereeAction {
  return {
    type: DELETE_REFEREE,
    payload: deleteReferee
  }
}

export type RefereeAction = AddRefereeAction | DeleteRefereeAction | EditRefereeAction;