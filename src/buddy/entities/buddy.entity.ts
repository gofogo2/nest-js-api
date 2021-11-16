import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class tb_buddy {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  code: string;

  @Column()
  name: string;
}
