import { tb_zone_time } from './entities/zone-time';
import { ZoneController } from './../zone/zone.controller';
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
    @InjectRepository(tb_zone_time)
    private readonly time_repository: Repository<tb_zone_time>,
  ) {}

  async create(createDto: ICreateZoneDto) {
    return this.repository.save(createDto);
  }

  get(): Promise<tb_zone_schedule[]> {
    return this.repository.find();
  }

  updateTime(): Date {
    const dt = new Date();
    this.time_repository.update(1, { startTime: dt });
    return dt;
  }

  updatePointTime(mils: number): number {
    const dt = new Date(mils);
    this.time_repository.update(1, { startTime: dt });
    return 1;
  }

  getRealTime = async (): Promise<Date> => {
    return (await this.time_repository.findOne()).startTime;
  };

  getTime = async (): Promise<number> => {
    const severTime = new Date();
    const time = await (await this.time_repository.findOne()).startTime;
    const startTime = new Date(time);
    const serverTime_ticks = severTime.getTime();
    const startTime_ticks = startTime.getTime();
    let current_play_time = serverTime_ticks - startTime_ticks;
    current_play_time = current_play_time / 1000;
    current_play_time = current_play_time % 510;
    console.log(`current_play_time:${current_play_time}`);
    return current_play_time;
  };

  getOne(zoneCode: string): Promise<tb_zone_schedule[]> {
    return this.repository.find({ zoneCode });
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
