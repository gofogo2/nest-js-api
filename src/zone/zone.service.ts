import { tb_zone } from './entities/zone.entity';
import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { ICreateZoneDto, IOutputDto } from './dtos/zone.dto.interface';

@Injectable()
export class ZoneService {
  constructor(
    @InjectRepository(tb_zone)
    private readonly repository: Repository<tb_zone>,
  ) {}

  async create(createDto: ICreateZoneDto) {
    return this.repository.save(createDto);
  }

  get(): Promise<tb_zone[]> {
    return this.repository.find();
  }

  getOne(id: number): Promise<tb_zone> {
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
