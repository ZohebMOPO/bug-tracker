import { Entity, Column } from "typeorm";
import BaseEntity from "./BaseModel";

@Entity({ name: "users" })
export class User extends BaseEntity {
  @Column({ type: "varchar", length: "20" })
  username: string;
  @Column()
  passwordHash: string;
}
