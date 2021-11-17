import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import {
  ApiBody,
  ApiCreatedResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';
import { BeaconService } from './beacon.service';
import { ICreateBeaconDto, IOutputDto } from './dtos/beacon.dto.interface';
import { tb_beacon } from './entities/beacon.entity';

@Controller('beacon')
@ApiTags('비콘 API')
export class BeaconController {
  constructor(private readonly service: BeaconService) {}

  @Post()
  @ApiOperation({ summary: '등록', description: '정보를 등록한다.' })
  @ApiCreatedResponse({
    description: '등록',
    type: tb_beacon,
  })
  @ApiBody({ type: tb_beacon })
  async create(@Body() createDto: ICreateBeaconDto) {
    const returnValue = await this.service.create(createDto);
    return returnValue;
  }

  @Get()
  @ApiOperation({
    summary: '모든 목록 조회',
    description: '모든 목록 조회',
  })
  getTest(): Promise<tb_beacon[]> {
    return this.service.get();
  }

  @Get('/:id')
  @ApiOperation({
    summary: '목록 조회',
    description: '목록 조회',
  })
  getTestOne(@Param('id') id: number): Promise<tb_beacon> {
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
