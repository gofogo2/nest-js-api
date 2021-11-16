import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class tb_user {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  code: string;

  @Column()
  name: string;

  @Column()
  nickName: string;
}
