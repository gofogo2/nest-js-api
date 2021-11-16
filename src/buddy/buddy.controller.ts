import { tb_buddy } from './entities/buddy.entity';
import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { ICreateBuddyDto, IOutputDto } from './dtos/buddy.dto.interface';
import { BuddyService } from './buddy.service';

@Controller('buddy')
export class BuddyController {
  constructor(private readonly service: BuddyService) {}

  @Post()
  async create(@Body() createDto: ICreateBuddyDto) {
    const returnValue = await this.service.create(createDto);
    return returnValue;
  }

  @Get()
  getTest(): Promise<tb_buddy[]> {
    return this.service.get();
  }

  @Get('/:id')
  getTestOne(@Param('id') id: number): Promise<tb_buddy> {
    return this.service.getOne(id);
  }

  @Delete('/:id')
  delete(@Param('id') id: number): Promise<IOutputDto> {
    return this.service.delete(id);
  }
}
