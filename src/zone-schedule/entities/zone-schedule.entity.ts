import { ApiProperty, ApiTags } from '@nestjs/swagger';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
@ApiTags('zone schedule API')
export class tb_zone_schedule {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @ApiProperty({ description: 'name', default: '1' })
  name: string;

  @Column()
  @ApiProperty({ description: 'code', default: '1' })
  code: string;

  @Column()
  @ApiProperty({ description: 'zoneCode', default: '1' })
  zoneCode: string;

  @Column()
  @ApiProperty({ description: 'action', default: '1' })
  action: string;

  @Column()
  @ApiProperty({ description: 'runTime', default: '1' })
  runTime: string;
}
