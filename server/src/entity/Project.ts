import { Entity, Column, ManyToOne, JoinColumn, OneToMany } from "typeorm";
import BaseEntity from "./BaseModel";
import { User } from "./User";

@Entity({ name: "projects" })
export class Projects extends BaseEntity {
  @Column({ type: "varchar", length: "60" })
  name: string;
  @ManyToOne(() => User, (user) => user)
  @JoinColumn({ name: "createdById" })
  createdBy: User;
  @Column({ type: "varchar" })
  createdById: string;
  @OneToMany(() => Member, (member) => member.project)
  @JoinColumn()
  members: Member[];
  @OneToMany(() => Bug, (bug) => bug.project)
  @JoinColumn()
  bugs: Bug[];
}
