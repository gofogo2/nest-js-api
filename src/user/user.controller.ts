import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { ICreateUserDto, IOutputDto } from './dtos/user.dto.interface';
import { tb_user } from './entities/user.entity';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly service: UserService) {}

  @Post()
  async create(@Body() createDto: ICreateUserDto) {
    const returnValue = await this.service.create(createDto);
    return returnValue;
  }

  @Get()
  getTest(): Promise<tb_user[]> {
    return this.service.get();
  }

  @Get('/:id')
  getTestOne(@Param('id') id: number): Promise<tb_user> {
    return this.service.getOne(id);
  }

  @Delete('/:id')
  delete(@Param('id') id: number): Promise<IOutputDto> {
    return this.service.delete(id);
  }
}
