import { ObjectTypes } from "../types/types";

export const ADD = 'ADD';
export const BATCH = 'BATCH';
export const DELETE = 'DELETE';
export const EDIT = 'EDIT';
export const REMOVE_BATCH = 'REMOVE_BATCH';

export interface AddAction<T extends ObjectTypes> {
    type: typeof ADD
    payload: T
}

export interface BatchAction<T extends ObjectTypes> {
  type: typeof BATCH
  payload: Array<T>
}

export interface RemoveBatchAction<T extends ObjectTypes> {
  type: typeof REMOVE_BATCH
  payload: Array<T>
}

export interface DeleteAction<T extends ObjectTypes> {
  type: typeof DELETE
  payload: T
}

export interface EditAction<T extends ObjectTypes> {
  type: typeof EDIT
  payload: T
}

export type ObjectAction<T extends ObjectTypes> = AddAction<T> | DeleteAction<T> | EditAction<T> | BatchAction<T> | RemoveBatchAction<T>;

export function addObject<T extends ObjectTypes>(newObject: T): ObjectAction<T> {
    return {
      type: ADD,
      payload: newObject
    }
}

export function addBatch<T extends ObjectTypes>(newObjects: Array<T>): ObjectAction<T> {
  return {
    type: BATCH,
    payload: newObjects
  }
}

export function removeBatch<T extends ObjectTypes>(newObjects: Array<T>): ObjectAction<T> {
  return {
    type: REMOVE_BATCH,
    payload: newObjects
  }
}

export function editObject<T extends ObjectTypes>(editedObject: T): ObjectAction<T> {
  return {
    type: EDIT,
    payload: editedObject
  }
}

export function deleteObject<T extends ObjectTypes>(deleteObject: T): ObjectAction<T> {
  return {
    type: DELETE,
    payload: deleteObject
  }
}