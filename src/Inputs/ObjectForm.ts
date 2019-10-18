import { ObjectTypes } from "../types/types"
import { ObjectAction, addObject } from "../store/objectActions"
import { Dispatch } from "redux"

export interface ObjFormProps<T extends ObjectTypes> {
  saveObj: (obj: T) => ObjectAction<T>
}

export const mapObjDispatchToProps = <T extends ObjectTypes>(dispatch: Dispatch) => {
  return {
    saveObj: (obj: T) => dispatch(addObject<T>(obj))
  }
}