import { Referee } from "./referee";
import { Team } from "./team";
import { Game } from "./game";

export enum ObjectType {
    REF = "REF_IDENT",
    TEAM = "TEAM_IDENT",
    GAME = "GAME_IDENT"
}
 
export interface MetaInfo {
    id: string,
    type: ObjectType
}

export type ObjectTypes = Referee | Team | Game