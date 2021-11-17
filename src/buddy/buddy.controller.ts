import { tb_buddy } from './entities/buddy.entity';
import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { ICreateBuddyDto, IOutputDto } from './dtos/buddy.dto.interface';
import { BuddyService } from './buddy.service';
import {
  ApiBody,
  ApiCreatedResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';

@Controller('buddy')
@ApiTags('buddy API')
export class BuddyController {
  constructor(private readonly service: BuddyService) {}

  @Post()
  @ApiOperation({ summary: '등록', description: '정보를 등록한다.' })
  @ApiCreatedResponse({
    description: '등록',
    type: tb_buddy,
  })
  @ApiBody({ type: tb_buddy })
  async create(@Body() createDto: ICreateBuddyDto) {
    const returnValue = await this.service.create(createDto);
    return returnValue;
  }

  @Get()
  @ApiOperation({
    summary: '모든 목록 조회',
    description: '모든 목록 조회',
  })
  getTest(): Promise<tb_buddy[]> {
    return this.service.get();
  }

  @Get('/:id')
  @ApiOperation({
    summary: '목록 조회',
    description: '목록 조회',
  })
  getTestOne(@Param('id') id: number): Promise<tb_buddy> {
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
