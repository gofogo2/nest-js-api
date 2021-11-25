import { ApiProperty } from '@nestjs/swagger';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class tb_point {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @ApiProperty({ description: '사용자 코드', default: '1' })
  public userCode: string;

  @Column()
  @ApiProperty({ description: '스코어 산정을 위한 포인트', default: 1 })
  public point: number;

  @Column({ nullable: true })
  @ApiProperty({ description: '사용자가 포인트를 쌓은 아이템', default: 1 })
  public itemCode: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  udpateAt: Date;
}
