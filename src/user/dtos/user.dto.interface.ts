export interface ICreateUserDto {
  code: string;
  name: string;
  nickName: string;
}

export interface IOutputDto {
  ok: boolean;
  error?: string;
}
