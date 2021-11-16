import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class tb_point {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  userId: number;

  @Column()
  point: number;
}
