export interface ICreateBeaconDto {
  name: string;
  code: string;
  range: string;
  rssi: string;
  minor: string;
  position: string;
}

export interface IOutputDto {
  ok: boolean;
  error?: string;
}
