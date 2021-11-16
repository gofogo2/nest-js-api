import { tb_zone_schedule } from './entities/zone-schedule.entity';
import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { ICreateZoneDto, IOutputDto } from 'src/zone/dtos/zone.dto.interface';

@Injectable()
export class ZoneScheduleService {
  constructor(
    @InjectRepository(tb_zone_schedule)
    private readonly repository: Repository<tb_zone_schedule>,
  ) {}

  async create(createDto: ICreateZoneDto) {
    return this.repository.save(createDto);
  }

  get(): Promise<tb_zone_schedule[]> {
    return this.repository.find();
  }

  getOne(id: number): Promise<tb_zone_schedule> {
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
