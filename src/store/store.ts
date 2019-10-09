
import {combineReducers} from 'redux'
import { objectReducer, ObjectState } from './objectReducer'
import { ObjectAction } from './objectActions';
import { Referee, REF } from '../types/referee';
import { Game, GAME } from '../types/game';
import { Team, TEAM } from '../types/team';
import { ObjectTypes } from '../types/types';

const createWrappedObjectReducer = <T extends ObjectTypes>(actionPredicate: (action: ObjectAction<T>) => boolean) => {
  return (state: any, action: ObjectAction<T>) => {
    const isInitializationCall = state === undefined;
    const shouldRunWrappedReducer = actionPredicate(action) || isInitializationCall;
    return shouldRunWrappedReducer ? objectReducer(state, action) as ObjectState<T>: state as ObjectState<T>;
  }
}
const hasPayloadWithType = (ident: string) => <T extends ObjectTypes>(action: ObjectAction<T>): boolean => {
  if (action.payload !== undefined && action.payload != null && action.payload.type !== undefined && action.payload != null) {
    return action.payload.type === ident;
  }
  return false;
}

export const rootReducer = combineReducers({
    referee: createWrappedObjectReducer<Referee>(hasPayloadWithType(REF)),
    game: createWrappedObjectReducer<Game>(hasPayloadWithType(GAME)),
    team: createWrappedObjectReducer<Team>(hasPayloadWithType(TEAM))
  })
  
export type AppState = ReturnType<typeof rootReducer>