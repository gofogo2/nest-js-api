import { ApiProperty } from '@nestjs/swagger';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class tb_beacon {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @ApiProperty({ description: 'beacon name', default: '1' })
  name: string;

  @Column()
  @ApiProperty({ description: 'beacon code', default: '1' })
  code: string;

  @Column()
  @ApiProperty({ description: 'beacon rssi', default: '1' })
  rssi: string;

  @Column()
  @ApiProperty({ description: 'beacon range', default: '1' })
  range: string;

  @Column()
  @ApiProperty({ description: 'beacon position', default: '1' })
  position: string;
}
