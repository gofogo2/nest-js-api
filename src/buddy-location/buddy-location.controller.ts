import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { BuddyLocationService } from './buddy-location.service';
import {
  ICreateBuddyLocationDto,
  IOutputDto,
} from './dtos/buddy-location.dto.interface';
import { tb_buddy_location } from './entities/buddy-location.entity';

@Controller('buddylocation')
export class BuddyLocationController {
  constructor(private readonly service: BuddyLocationService) {}

  @Post()
  async create(@Body() createDto: ICreateBuddyLocationDto) {
    const returnValue = await this.service.create(createDto);
    return returnValue;
  }

  @Get()
  getTest(): Promise<tb_buddy_location[]> {
    return this.service.get();
  }

  @Get('/:id')
  getTestOne(@Param('id') id: number): Promise<tb_buddy_location> {
    return this.service.getOne(id);
  }

  @Delete('/:id')
  delete(@Param('id') id: number): Promise<IOutputDto> {
    return this.service.delete(id);
  }
}
