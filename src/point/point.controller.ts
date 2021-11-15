import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { ICreatePointDto, IOutputDto } from './dtos/point.dto.interface';
import { tb_point } from './entities/point.entity';
import { PointService } from './point.service';

@Controller('point')
export class PointController {
  constructor(private readonly testService: PointService) {}

  @Post()
  async create(@Body() createPhotoDto: ICreatePointDto) {
    const returnValue = await this.testService.create(createPhotoDto);
    return returnValue;
  }

  @Get()
  getTest(): Promise<tb_point[]> {
    return this.testService.get();
  }

  @Get('/:id')
  getTestOne(@Param('id') id: number): Promise<tb_point> {
    return this.testService.getOne(id);
  }

  @Delete('/:id')
  delete(@Param('id') id: number): Promise<IOutputDto> {
    return this.testService.delete(id);
  }
}
