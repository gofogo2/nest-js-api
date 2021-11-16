import { tb_beacon } from './entities/beacon.entity';
import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { ICreateBeaconDto, IOutputDto } from './dtos/beacon.dto.interface';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class BeaconService {
  constructor(
    @InjectRepository(tb_beacon)
    private readonly repository: Repository<tb_beacon>,
  ) {}

  async create(createDto: ICreateBeaconDto) {
    return this.repository.save(createDto);
  }

  get(): Promise<tb_beacon[]> {
    return this.repository.find();
  }

  getOne(id: number): Promise<tb_beacon> {
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
