import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { ICreatePhotoDto, IOutputDto } from './dtos/photo.dto.interface';
import { Photo } from './entities/photo.entity';
import { TestService } from './test.service';

@Controller('test')
export class TestController {
  constructor(private readonly testService: TestService) {}

  @Post()
  async create(@Body() createPhotoDto: ICreatePhotoDto) {
    const returnValue = await this.testService.create(createPhotoDto);
    return returnValue;
  }

  @Get()
  getTest(): Promise<Photo[]> {
    return this.testService.get();
  }

  @Get('/:id')
  getTestOne(@Param('id') id: number): Promise<Photo> {
    return this.testService.getOne(id);
  }

  @Get('/name/:name')
  getTestOneName(@Param('name') name: string): Promise<Photo> {
    return this.testService.getName(name);
  }

  @Delete('/:id')
  delete(@Param('id') id: number): Promise<IOutputDto> {
    return this.testService.delete(id);
  }
}
