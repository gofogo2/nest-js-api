import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { ICreatePointDto, IOutputDto } from './dtos/point.dto.interface';
import { tb_point } from './entities/point.entity';
import { PointService } from './point.service';

@Controller('point')
export class PointController {
  constructor(private readonly service: PointService) {}

  @Post()
  async create(@Body() createDto: ICreatePointDto) {
    const returnValue = await this.service.create(createDto);
    return returnValue;
  }

  @Get()
  getTest(): Promise<tb_point[]> {
    return this.service.get();
  }

  @Get('/:id')
  getTestOne(@Param('id') id: number): Promise<tb_point> {
    return this.service.getOne(id);
  }

  @Delete('/:id')
  delete(@Param('id') id: number): Promise<IOutputDto> {
    return this.service.delete(id);
  }
}
