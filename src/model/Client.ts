import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("client", { schema: "mydb" })
export class Client {
  @Column("varchar", { name: "username", length: 16 })
  username: string;

  @Column("varchar", { name: "email", nullable: true, length: 255 })
  email: string | null;

  @Column("timestamp", {
    name: "create_time",
    nullable: true,
    default: () => "CURRENT_TIMESTAMP",
  })
  createTime: Date | null;

  @Column("varchar", { name: "phone", nullable: true, length: 45 })
  phone: string | null;

  @Column("varchar", { name: "cep", nullable: true, length: 45 })
  cep: string | null;

  @PrimaryGeneratedColumn({ type: "int", name: "int" })
  int: number;
}
