export interface ICreateBeaconDto {
  name: string;
  code: string;
  position: string;
}

export interface IOutputDto {
  ok: boolean;
  error?: string;
}
