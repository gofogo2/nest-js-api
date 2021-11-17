import { ApiProperty, ApiTags } from '@nestjs/swagger';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
@ApiTags('zone API')
export class tb_zone {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @ApiProperty({ description: 'code', default: '1' })
  code: string;

  @Column()
  @ApiProperty({ description: 'name', default: '1' })
  name: string;
}
