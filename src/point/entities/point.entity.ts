import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class tb_point {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  UserId: number;

  @Column()
  Point: number;
}
