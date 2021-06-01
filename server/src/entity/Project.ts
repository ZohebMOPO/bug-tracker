import { Entity, Column } from "typeorm";
import BaseEntity from "./BaseModel";

@Entity({ name: "projects" })
export class Projects extends BaseEntity {
  @Column({ type: "varchar", length: "60" })
  name: string;
  @Column({ type: "varchar" })
  createdBy: string;
}
