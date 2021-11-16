export interface ICreateZoneScheduleDto {
  code: string;
  name: string;
  zoneCode: string;
  action: string;
  runtime: string;
}

export interface IOutputDto {
  ok: boolean;
  error?: string;
}
