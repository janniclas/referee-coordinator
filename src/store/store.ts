import { refereeReducer } from './refereeReducer'
import {combineReducers} from 'redux'

const rootReducer = combineReducers({
    referee: refereeReducer
  })
  
export type AppState = ReturnType<typeof rootReducer>