import { ApiProperty } from '@nestjs/swagger';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class tb_buddy_location {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @ApiProperty({ description: 'buddyCode', default: '1' })
  buddyCode: string;

  @Column()
  @ApiProperty({ description: 'zoneCode', default: '1' })
  zoneCode: string;
}
