import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { BeaconService } from './beacon.service';
import { ICreateBeaconDto, IOutputDto } from './dtos/beacon.dto.interface';
import { tb_beacon } from './entities/beacon.entity';

@Controller('beacon')
export class BeaconController {
  constructor(private readonly service: BeaconService) {}

  @Post()
  async create(@Body() createDto: ICreateBeaconDto) {
    const returnValue = await this.service.create(createDto);
    return returnValue;
  }

  @Get()
  getTest(): Promise<tb_beacon[]> {
    return this.service.get();
  }

  @Get('/:id')
  getTestOne(@Param('id') id: number): Promise<tb_beacon> {
    return this.service.getOne(id);
  }

  @Delete('/:id')
  delete(@Param('id') id: number): Promise<IOutputDto> {
    return this.service.delete(id);
  }
}
