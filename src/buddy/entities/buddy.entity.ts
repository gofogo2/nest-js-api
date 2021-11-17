import { ApiProperty } from '@nestjs/swagger';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class tb_buddy {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @ApiProperty({ description: 'buddy code', default: '1' })
  code: string;

  @Column()
  @ApiProperty({ description: 'buddy name', default: '1' })
  name: string;
}
