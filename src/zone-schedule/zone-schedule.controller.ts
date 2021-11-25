import { tb_zone_schedule } from './entities/zone-schedule.entity';
import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import {
  ICreateZoneScheduleDto,
  IOutputDto,
} from './dtos/zone-schedule.dto.interface';
import { ZoneScheduleService } from './zone-schedule.service';
import {
  ApiBody,
  ApiCreatedResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';

@Controller('zoneschedule')
@ApiTags('zone schedule API')
export class ZoneScheduleController {
  constructor(private readonly service: ZoneScheduleService) {}

  @Post()
  @ApiOperation({ summary: '등록', description: '정보를 등록한다.' })
  @ApiCreatedResponse({
    description: '등록',
    type: tb_zone_schedule,
  })
  @ApiBody({ type: tb_zone_schedule })
  async create(@Body() createDto: ICreateZoneScheduleDto) {
    const returnValue = await this.service.create(createDto);
    return returnValue;
  }

  @Get()
  @ApiOperation({
    summary: '모든 목록 조회',
    description: '모든 목록 조회',
  })
  getTest(): Promise<tb_zone_schedule[]> {
    return this.service.get();
  }

  @Get('/:zoneCode')
  @ApiOperation({
    summary: '목록 조회',
    description: '목록 조회',
  })
  getTestOne(@Param('zoneCode') zoneCode: string): Promise<tb_zone_schedule[]> {
    return this.service.getOne(zoneCode);
  }

  @Delete('/:id')
  @ApiOperation({
    summary: '목록 삭제',
    description: '목록 삭제',
  })
  delete(@Param('id') id: number): Promise<IOutputDto> {
    return this.service.delete(id);
  }
}
