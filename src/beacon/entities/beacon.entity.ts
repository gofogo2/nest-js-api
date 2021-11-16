import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class tb_beacon {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  code: string;

  @Column()
  position: string;
}
