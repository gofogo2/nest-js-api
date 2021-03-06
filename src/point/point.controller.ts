import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import {
  ApiBody,
  ApiCreatedResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';
import { ICreatePointDto, IOutputDto } from './dtos/point.dto.interface';
import { tb_point } from './entities/point.entity';
import { PointService } from './point.service';

@Controller('point')
@ApiTags('포인트 API')
export class PointController {
  constructor(private readonly service: PointService) {}

  @Post()
  @ApiOperation({
    summary: '포인트 등록',
    description: '스코어를 위한 포인트를 등록한다.',
  })
  @ApiCreatedResponse({
    description: '스코어를 위한 포인트를 등록한다.',
    type: tb_point,
  })
  @ApiBody({ type: tb_point })
  async create(@Body() createDto: tb_point) {
    const cd: ICreatePointDto = {
      point: +createDto.point,
      userCode: createDto.userCode,
      itemCode: createDto.itemCode,
    };
    createDto;

    const returnValue = await this.service.create(cd);
    return returnValue;
  }
  @Post('/list')
  @ApiOperation({
    summary: '포인트리스트 등록',
    description: '스코어를 위한 포인트리스트를 등록한다.',
  })
  @ApiCreatedResponse({
    description: '스코어를 위한 포인트리스트를 등록한다.',
    type: [tb_point],
  })
  @ApiBody({ type: [tb_point] })
  async createList(@Body() createsDto: tb_point[]) {
    console.log('aaaaa');
    console.log(createsDto);
    console.log('bbbbb');
    const returnValue = await this.service.creates(createsDto);
    return returnValue;
  }

  @Get()
  @ApiOperation({
    summary: '모든 포인트 목록 조회',
    description: '모든 포인트 정보를 조회한다.',
  })
  getTest(): Promise<tb_point[]> {
    return this.service.get();
  }

  @Get('/score/:userCode')
  @ApiOperation({
    summary: '지정된 포인트 목록 조회',
    description: '지정된 포인트 정보를 조회한다.',
  })
  getScoreOne(@Param('userCode') userCode: string): Promise<ICreatePointDto> {
    return this.service.getScoreOne(userCode);
  }

  @Get('/:id')
  @ApiOperation({
    summary: '지정된 포인트 목록 조회',
    description: '지정된 포인트 정보를 조회한다.',
  })
  getTestOne(@Param('id') id: number): Promise<tb_point> {
    return this.service.getOne(id);
  }

  @Delete('/:id')
  @ApiOperation({
    summary: '지정된 포인트 삭제',
    description: '지정된 포인트 삭제한다.',
  })
  delete(@Param('id') id: number): Promise<IOutputDto> {
    return this.service.delete(id);
  }
}
