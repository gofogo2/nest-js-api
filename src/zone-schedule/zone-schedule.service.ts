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

  getTime(): number {
    const severTime = new Date();
    const startTime = new Date(Date.parse('Tue, 08 Dec 2021 05:00:00 GMT'));
    while (true) {
      // const sec = dt.getSeconds() + 33;
      startTime.setSeconds(startTime.getSeconds() + 32);
      if (startTime >= severTime) {
        // dt.setSeconds(-33);
        startTime.setMilliseconds(
          startTime.getMilliseconds() + severTime.getMilliseconds(),
        );
        break;
      }
    }

    const serverTime_ticks = severTime.getTime();
    const startTime_ticks = startTime.getTime();

    const current_play_time = startTime_ticks - serverTime_ticks;

    const returnValue =
      32 -
      parseFloat(
        new Date(current_play_time).getSeconds() +
          '.' +
          new Date(startTime).getMilliseconds(),
      );
    return returnValue;
  }

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
