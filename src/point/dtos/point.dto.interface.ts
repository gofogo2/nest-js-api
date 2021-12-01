export interface ICreatePointDto {
  userCode: string;
  point: number;
  itemCode: string;
}

export interface IReadPointDto {
  point: number;
}

export interface IOutputDto {
  ok: boolean;
  error?: string;
}
