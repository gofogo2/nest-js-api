import { tb_zone } from './entities/zone.entity';
import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { ICreateZoneDto, IOutputDto } from './dtos/zone.dto.interface';
import { ZoneService } from './zone.service';

@Controller('zone')
export class ZoneController {
  constructor(private readonly service: ZoneService) {}

  @Post()
  async create(@Body() createDto: ICreateZoneDto) {
    const returnValue = await this.service.create(createDto);
    return returnValue;
  }

  @Get()
  getTest(): Promise<tb_zone[]> {
    return this.service.get();
  }

  @Get('/:id')
  getTestOne(@Param('id') id: number): Promise<tb_zone> {
    return this.service.getOne(id);
  }

  @Delete('/:id')
  delete(@Param('id') id: number): Promise<IOutputDto> {
    return this.service.delete(id);
  }
}
