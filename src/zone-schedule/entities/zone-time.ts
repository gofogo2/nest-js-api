import { ApiTags } from '@nestjs/swagger/dist';
import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
@ApiTags('zone schedule API')
export class tb_zone_time {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  startTime: Date;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
