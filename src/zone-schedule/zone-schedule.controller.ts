import { tb_zone_schedule } from './entities/zone-schedule.entity';
import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import {
  ICreateZoneScheduleDto,
  IOutputDto,
} from './dtos/zone-schedule.dto.interface';
import { ZoneScheduleService } from './zone-schedule.service';

@Controller('zoneschedule')
export class ZoneScheduleController {
  constructor(private readonly service: ZoneScheduleService) {}

  @Post()
  async create(@Body() createDto: ICreateZoneScheduleDto) {
    const returnValue = await this.service.create(createDto);
    return returnValue;
  }

  @Get()
  getTest(): Promise<tb_zone_schedule[]> {
    return this.service.get();
  }

  @Get('/:id')
  getTestOne(@Param('id') id: number): Promise<tb_zone_schedule> {
    return this.service.getOne(id);
  }

  @Delete('/:id')
  delete(@Param('id') id: number): Promise<IOutputDto> {
    return this.service.delete(id);
  }
}
