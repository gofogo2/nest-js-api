import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ICreatePointDto, IOutputDto } from './dtos/point.dto.interface';
import { tb_point } from './entities/point.entity';

@Injectable()
export class PointService {
  constructor(
    @InjectRepository(tb_point)
    private readonly repository: Repository<tb_point>,
  ) {}

  async create(createTodoDto: ICreatePointDto) {
    return this.repository.save(createTodoDto);
  }

  get(): Promise<tb_point[]> {
    return this.repository.find();
  }

  getOne(id: number): Promise<tb_point> {
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
