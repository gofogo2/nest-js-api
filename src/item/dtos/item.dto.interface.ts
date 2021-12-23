export interface ICreateItemDto {
  name: string;
  code: string;
  zoneCode: string;
  cnt: number;
  temp: string;
}

export interface IUpdateItemDto {
  zoneCodes: string[];
}

export interface IOutputDto {
  ok: boolean;
  error?: string;
}
