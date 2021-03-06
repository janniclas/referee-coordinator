import { ObjectAction, ADD, DELETE, EDIT, BATCH, REMOVE_BATCH } from './objectActions';
import { ObjectTypes } from '../types/types';


export interface ObjectState<T extends ObjectTypes> {
    objects: {[id: string]: T},
    objectIds: Array<string>
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
            copiedObjects[action.payload.id] = Object.assign({}, action.payload);
            return {
                objectIds: [...state.objectIds, action.payload.id],
                objects: copiedObjects
            };
        case BATCH: 
            const ids = [];
            for (const obj of action.payload) {
                copiedObjects[obj.id] = Object.assign({}, obj);  
                ids.push(obj.id);
            }
            return {
                objectIds: [...state.objectIds, ...ids],
                objects: copiedObjects
            };
        case REMOVE_BATCH: 

            const toRemove: Array<string> = [];

            for (const obj of action.payload) {
                delete copiedObjects[obj.id];
                toRemove.push(obj.id);
            }
            const newIds = state.objectIds.filter((id) => !toRemove.includes(id));

            return {
                objectIds: newIds,
                objects: copiedObjects
            }
        case DELETE: 
            delete copiedObjects[action.payload.id];
            return {
                objectIds: state.objectIds.filter(tmpId => 
                    action.payload.id !== tmpId
                ),
                objects: copiedObjects
                };
        case EDIT: 
            copiedObjects[action.payload.id] = Object.assign({}, action.payload);   
            return {
                objectIds: state.objectIds,
                objects: copiedObjects
            };
        default:
            return state;
    }

  }
