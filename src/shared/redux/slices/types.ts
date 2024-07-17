export interface NameResponse {
  name: string;
}
export interface StatusResponse {
  status: boolean;
}
export interface InfoResponse {
  info: string;
}
export interface PlayersCountResponse {
  count: number;
}
export interface PlayersMaxResponse {
  max: number;
}
export interface Player {
  id: number;
  name: string;
}
export interface PlayersListResponse {
  list: Player[];
}
