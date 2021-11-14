import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ICreatePhotoDto, IOutputDto } from './dtos/photo.dto.interface';
import { Photo } from './entities/photo.entity';

@Injectable()
export class TestService {
  constructor(
    @InjectRepository(Photo)
    private readonly repository: Repository<Photo>,
  ) {}

  async create(createTodoDto: ICreatePhotoDto) {
    return this.repository.save(createTodoDto);
  }

  get(): Promise<Photo[]> {
    return this.repository.find();
  }

  getOne(id: number): Promise<Photo> {
    return this.repository.findOne({ id });
  }

  async getName(name: string): Promise<Photo> {
    return this.repository.findOne({ name: name });
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
