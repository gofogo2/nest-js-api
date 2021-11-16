import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class tb_buddy_location {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  phoneCode: string;

  @Column()
  zoneCode: string;
}
