export interface ICreateItemDto {
  code: string;
  name: string;
  zoneCode: string;
}

export interface IOutputDto {
  ok: boolean;
  error?: string;
}
