import { tb_buddy } from './../buddy/entities/buddy.entity';
import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import {
  ApiBody,
  ApiCreatedResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';
import { BuddyLocationService } from './buddy-location.service';
import {
  ICreateBuddyLocationDto,
  IOutputDto,
} from './dtos/buddy-location.dto.interface';
import { tb_buddy_location } from './entities/buddy-location.entity';

@Controller('buddylocation')
@ApiTags('buddy location API')
export class BuddyLocationController {
  constructor(private readonly service: BuddyLocationService) {}

  @Post()
  @ApiOperation({ summary: '등록', description: '정보를 등록한다.' })
  @ApiCreatedResponse({
    description: '등록',
    type: tb_buddy,
  })
  @ApiBody({ type: tb_buddy_location })
  async create(@Body() createDto: ICreateBuddyLocationDto) {
    const returnValue = await this.service.create(createDto);
    return returnValue;
  }

  @Get()
  @ApiOperation({
    summary: '모든 목록 조회',
    description: '모든 목록 조회',
  })
  getTest(): Promise<tb_buddy_location[]> {
    return this.service.get();
  }

  @Get('/:id')
  @ApiOperation({
    summary: '목록 조회',
    description: '목록 조회',
  })
  getTestOne(@Param('id') id: number): Promise<tb_buddy_location> {
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
