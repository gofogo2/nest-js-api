import { ApiProperty } from '@nestjs/swagger';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class tb_item {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @ApiProperty({ description: 'code', default: '1' })
  code: string;

  @Column()
  @ApiProperty({ description: 'name', default: '1' })
  name: string;

  @Column()
  @ApiProperty({ description: 'zoneCode', default: '1' })
  zoneCode: string;

  @Column()
  @ApiProperty({ description: 'cnt', default: 0, nullable: true })
  cnt: number;

  @Column()
  @ApiProperty({ description: 'temp', default: '0', nullable: true })
  temp: string;
}
