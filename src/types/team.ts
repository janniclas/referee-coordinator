import { MetaInfo } from "./types";

export const TEAM = "TEAM_IDENT";

export interface TeamState {
  teams: {[id: string] : Team},
  teamIds: Array<string>
}

export interface Team extends MetaInfo {
    name: string
}