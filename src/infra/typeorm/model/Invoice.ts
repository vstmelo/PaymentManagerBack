import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("invoice", { schema: "mydb" })
export class Invoice {
  @Column("float", { name: "duedate", precision: 12 })
  duedate: number;

  @Column("float", { name: "paidout", nullable: true, precision: 12 })
  paidout: number | null;

  @Column("float", { name: "total", precision: 12 })
  total: number;

  @Column("timestamp", {
    name: "create_time",
    nullable: true,
    default: () => "CURRENT_TIMESTAMP",
  })
  createTime: Date | null;

  @Column("int", { name: "user_id" })
  userId: number;

  @Column("varchar", { name: "description", nullable: true, length: 45 })
  description: string | null;

  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;
}
