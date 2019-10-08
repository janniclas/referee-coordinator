
import {combineReducers} from 'redux'
import { objectReducer, MetaInfo } from './objectReducer'
import { ObjectAction } from './objectActions';
import { Referee } from '../types/referee';

const createWrappedObjectReducer = <T extends MetaInfo>() => {
  return (state: any, action: ObjectAction<T>) => objectReducer<T>(state, action);
}

export const rootReducer = combineReducers({
    referee: createWrappedObjectReducer<Referee>()
  })
  
export type AppState = ReturnType<typeof rootReducer>