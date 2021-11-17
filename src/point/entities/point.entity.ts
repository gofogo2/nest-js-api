import { ApiProperty } from '@nestjs/swagger';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class tb_point {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @ApiProperty({ description: '사용자 코드', default: '1' })
  userCode: string;

  @Column()
  @ApiProperty({ description: '스코어 산정을 위한 포인트', default: 1 })
  point: number;
}
