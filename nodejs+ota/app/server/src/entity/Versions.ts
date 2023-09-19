
import { Entity, PrimaryGeneratedColumn, Column, Int32, Binary } from "typeorm";


@Entity()
export class Versions {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  responsible: number;

  @Column()
  commits: string;

  @Column()
  devices: number;

  @Column({ name: "created_at" })
  createdAt: Date;

  @Column({ type: "bytea" , nullable: false})
  firmware: Buffer;
  
}