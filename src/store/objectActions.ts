import { MetaInfo } from "./objectReducer";

export const ADD = 'ADD';
export const DELETE = 'DELETE';
export const EDIT = 'EDIT';


export interface AddAction<T> {
    type: typeof ADD
    payload: T
}

export interface DeleteAction<T> {
  type: typeof DELETE
  payload: T
}

export interface EditAction<T> {
  type: typeof EDIT
  payload: T
}

export type ObjectAction<T extends MetaInfo> = AddAction<T> | DeleteAction<T> | EditAction<T>;

export function addObject<T extends MetaInfo>(newObject: T): ObjectAction<T> {
    return {
      type: ADD,
      payload: newObject
    }
}

export function editObject<T extends MetaInfo>(editedObject: T): ObjectAction<T> {
  return {
    type: ADD,
    payload: editedObject
  }
}

export function deleteObject<T extends MetaInfo>(deleteObject: T): ObjectAction<T> {
  return {
    type: DELETE,
    payload: deleteObject
  }
}