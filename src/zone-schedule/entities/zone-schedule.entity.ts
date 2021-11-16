import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class tb_zone_schedule {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  code: string;

  @Column()
  zoneCode: string;

  @Column()
  action: string;

  @Column()
  runTime: string;
}
