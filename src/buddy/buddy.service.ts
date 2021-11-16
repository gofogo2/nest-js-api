import { tb_buddy } from './entities/buddy.entity';
import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { ICreateBuddyDto, IOutputDto } from './dtos/buddy.dto.interface';

@Injectable()
export class BuddyService {
  constructor(
    @InjectRepository(tb_buddy)
    private readonly repository: Repository<tb_buddy>,
  ) {}

  async create(createDto: ICreateBuddyDto) {
    return this.repository.save(createDto);
  }

  get(): Promise<tb_buddy[]> {
    return this.repository.find();
  }

  getOne(id: number): Promise<tb_buddy> {
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
