import { Entity, Column } from "typeorm";
import { BaseEntity } from "./BaseModel";

@Entity({ name: 'bug' })
export class Bug extends BaseEntity{
    @Column
}