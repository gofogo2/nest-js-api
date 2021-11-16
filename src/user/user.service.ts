import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { tb_user } from './entities/user.entity';
import { ICreateUserDto, IOutputDto } from './dtos/user.dto.interface';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(tb_user)
    private readonly repository: Repository<tb_user>,
  ) {}

  async create(createDto: ICreateUserDto) {
    return this.repository.save(createDto);
  }

  get(): Promise<tb_user[]> {
    return this.repository.find();
  }

  getOne(id: number): Promise<tb_user> {
    return this.repository.findOne({ id });
  }

  async delete(id: number): Promise<IOutputDto> {
    try {
      console.log(id);
      const result = await this.repository.findOne({ id });
      console.log(result);
      if (result) {
        this.repository.delete({ id });
        return {
          ok: true,
        };
      } else {
        return {
          ok: false,
          error: 'already deleted',
        };
      }
    } catch (e) {
      return {
        ok: false,
        error: e,
      };
    }
  }
}
