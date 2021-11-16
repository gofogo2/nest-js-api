import { tb_buddy_location } from './entities/buddy-location.entity';
import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import {
  ICreateBuddyLocationDto,
  IOutputDto,
} from './dtos/buddy-location.dto.interface';

@Injectable()
export class BuddyLocationService {
  constructor(
    @InjectRepository(tb_buddy_location)
    private readonly repository: Repository<tb_buddy_location>,
  ) {}

  async create(createDto: ICreateBuddyLocationDto) {
    return this.repository.save(createDto);
  }

  get(): Promise<tb_buddy_location[]> {
    return this.repository.find();
  }

  getOne(id: number): Promise<tb_buddy_location> {
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
