import { ApiProperty } from '@nestjs/swagger';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class tb_user {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @ApiProperty({ description: 'code', default: '1' })
  code: string;

  @Column()
  @ApiProperty({ description: 'name', default: '1' })
  name: string;

  @Column()
  @ApiProperty({ description: 'nickName', default: '1' })
  nickName: string;
}
