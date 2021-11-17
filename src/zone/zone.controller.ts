import { tb_zone } from './entities/zone.entity';
import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { ICreateZoneDto, IOutputDto } from './dtos/zone.dto.interface';
import { ZoneService } from './zone.service';
import {
  ApiBody,
  ApiCreatedResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';

@Controller('zone')
@ApiTags('zone API')
export class ZoneController {
  constructor(private readonly service: ZoneService) {}

  @Post()
  @ApiOperation({ summary: '등록', description: '정보를 등록한다.' })
  @ApiCreatedResponse({
    description: '등록',
    type: tb_zone,
  })
  @ApiBody({ type: tb_zone })
  async create(@Body() createDto: ICreateZoneDto) {
    const returnValue = await this.service.create(createDto);
    return returnValue;
  }

  @Get()
  @ApiOperation({
    summary: '모든 목록 조회',
    description: '모든 목록 조회',
  })
  getTest(): Promise<tb_zone[]> {
    return this.service.get();
  }

  @Get('/:id')
  @ApiOperation({
    summary: '목록 조회',
    description: '목록 조회',
  })
  getTestOne(@Param('id') id: number): Promise<tb_zone> {
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
