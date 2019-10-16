import { Referee } from "./referee";
import { Team } from "./team";
import { Game } from "./game";

export interface MetaInfo {
    id: string,
    type: string
}

export type ObjectTypes = Referee | Team | Game