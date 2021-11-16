import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { ICreateItemDto, IOutputDto } from './dtos/item.dto.interface';
import { tb_item } from './entities/item.entity';
import { ItemService } from './item.service';

@Controller('item')
export class ItemController {
  constructor(private readonly service: ItemService) {}

  @Post()
  async create(@Body() createDto: ICreateItemDto) {
    const returnValue = await this.service.create(createDto);
    return returnValue;
  }

  @Get()
  getTest(): Promise<tb_item[]> {
    return this.service.get();
  }

  @Get('/:id')
  getTestOne(@Param('id') id: number): Promise<tb_item> {
    return this.service.getOne(id);
  }

  @Delete('/:id')
  delete(@Param('id') id: number): Promise<IOutputDto> {
    return this.service.delete(id);
  }
}
