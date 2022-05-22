import { Column, Entity } from "typeorm";

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

  @Column("longtext", { name: "description", nullable: true })
  description: string | null;
}
