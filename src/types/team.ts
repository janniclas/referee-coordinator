import { MetaInfo } from "./types";

export interface TeamState {
  teams: {[id: string] : Team},
  teamIds: Array<string>
}

export interface Team extends MetaInfo {
    name: string
}