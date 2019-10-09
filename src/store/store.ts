
import {combineReducers} from 'redux'
import { objectReducer, MetaInfo, ObjectState } from './objectReducer'
import { ObjectAction } from './objectActions';
import { Referee, REF } from '../types/referee';
import { Game, GAME } from '../types/game';
import { Team, TEAM } from '../types/team';

const createWrappedObjectReducer = <T extends MetaInfo>(actionPredicate: (action: ObjectAction<T>) => boolean) => {
  return (state: any, action: ObjectAction<T>) => {
    const isInitializationCall = state === undefined;
    state = {objectIds: [], objects: {}};
    const shouldRunWrappedReducer = actionPredicate(action) || isInitializationCall;
    return shouldRunWrappedReducer ? objectReducer<T>(state, action) as ObjectState<T>: state as ObjectState<T>;
  }
}
const hasPayloadWithType = (ident: string) => <T extends MetaInfo>(action: ObjectAction<T>): boolean => {
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