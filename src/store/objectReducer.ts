import { ObjectAction, ADD, DELETE, EDIT } from './objectActions';
import { ObjectTypes } from '../types/types';


export interface ObjectState<T extends ObjectTypes> {
    objects: {[id: string]: T},
    objectIds: Array<string>
}


export interface MetaInfo {
    id: string,
    type: string
}


const createInitialState = <T extends ObjectTypes>(): ObjectState<T>  => {
    return {
        objects: {},
        objectIds: []
    }
}

export function objectReducer<T extends ObjectTypes> (state = createInitialState<T>(), action: ObjectAction<T>): ObjectState<T> {
    const copiedObjects = Object.assign({}, state.objects);

    switch(action.type) {

        case ADD: 

            copiedObjects[action.payload.id] = action.payload;
            return {
                objectIds: [...state.objectIds, action.payload.id],
                objects: copiedObjects
            };
        case DELETE: 
            delete copiedObjects[action.payload.id];
            return {
                objectIds: state.objectIds.filter(tmpId => 
                    action.payload.id !== tmpId
                ),
                objects: copiedObjects
                };
        case EDIT: 
            copiedObjects[action.payload.id] = action.payload;   
            return {
                objectIds: state.objectIds,
                objects: copiedObjects
            };
        default:
            return state;
    }

  }

