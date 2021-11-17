export interface ICreateItemDto {
  name: string;
  code: string;
  zoneCode: string;
}

export interface IOutputDto {
  ok: boolean;
  error?: string;
}
