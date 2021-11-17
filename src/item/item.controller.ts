import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import {
  ApiBody,
  ApiCreatedResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';
import { ICreateItemDto, IOutputDto } from './dtos/item.dto.interface';
import { tb_item } from './entities/item.entity';
import { ItemService } from './item.service';

@Controller('item')
@ApiTags('item API')
export class ItemController {
  constructor(private readonly service: ItemService) {}

  @Post()
  @ApiOperation({ summary: '등록', description: '정보를 등록한다.' })
  @ApiCreatedResponse({
    description: '등록',
    type: tb_item,
  })
  @ApiBody({ type: tb_item })
  async create(@Body() createDto: ICreateItemDto) {
    const returnValue = await this.service.create(createDto);
    return returnValue;
  }

  @Get()
  @ApiOperation({
    summary: '모든 목록 조회',
    description: '모든 목록 조회',
  })
  getTest(): Promise<tb_item[]> {
    return this.service.get();
  }

  @Get('/:id')
  @ApiOperation({
    summary: '목록 조회',
    description: '목록 조회',
  })
  getTestOne(@Param('id') id: number): Promise<tb_item> {
    return this.service.getOne(id);
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
