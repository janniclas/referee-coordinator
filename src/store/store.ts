
import {combineReducers} from 'redux'
import { objectReducer, ObjectState } from './objectReducer'
import { ObjectAction, BATCH } from './objectActions';
import { Referee } from '../types/referee';
import { Game } from '../types/game';
import { Team } from '../types/team';
import { ObjectTypes, ObjectType } from '../types/types';

const createWrappedObjectReducer = <T extends ObjectTypes>(actionPredicate: (action: ObjectAction<T>) => boolean) => {
  return (state: any, action: ObjectAction<T>) => {
    const isInitializationCall = state === undefined;
    const shouldRunWrappedReducer = actionPredicate(action) || isInitializationCall;
    return shouldRunWrappedReducer ? objectReducer(state, action) as ObjectState<T>: state as ObjectState<T>;
  }
}
const hasPayloadWithType = (ident: string) => <T extends ObjectTypes>(action: ObjectAction<T>): boolean => {

  if (action.payload !== undefined && action.payload != null) {
      if( action.type !== BATCH) {
        return action.payload.type === ident;
      } else {
        if( action.payload.length > 0) {
          return action.payload[0].type === ident;
        }
      }
  }
  return false;
}

export const rootReducer = combineReducers({
    referee: createWrappedObjectReducer<Referee>(hasPayloadWithType(ObjectType.REF)),
    game: createWrappedObjectReducer<Game>(hasPayloadWithType(ObjectType.GAME)),
    team: createWrappedObjectReducer<Team>(hasPayloadWithType(ObjectType.TEAM))
  })
  
export type AppState = ReturnType<typeof rootReducer>