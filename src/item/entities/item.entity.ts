import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class tb_item {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  code: string;

  @Column()
  name: string;

  @Column()
  zoneCode: string;
}
