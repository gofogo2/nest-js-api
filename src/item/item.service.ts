import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { tb_item } from './entities/item.entity';
import { ICreateItemDto, IOutputDto } from './dtos/item.dto.interface';

@Injectable()
export class ItemService {
  constructor(
    @InjectRepository(tb_item)
    private readonly repository: Repository<tb_item>,
  ) {}

  async create(createDto: ICreateItemDto) {
    console.log('code' + createDto.code);
    console.log('name' + createDto.name);
    console.log('zoneCode' + createDto.zoneCode);

    return this.repository.save(createDto);
  }

  get(): Promise<tb_item[]> {
    return this.repository.find();
  }

  getOne(id: number): Promise<tb_item> {
    return this.repository.findOne({ id });
  }

  async delete(id: number): Promise<IOutputDto> {
    try {
      console.log(id);
      const result = await this.repository.findOne({ id });
      console.log(result);
      if (result) {
        this.repository.delete({ id });
        return {
          ok: true,
        };
      } else {
        return {
          ok: false,
          error: 'already deleted',
        };
      }
    } catch (e) {
      return {
        ok: false,
        error: e,
      };
    }
  }
}
