import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("user", { schema: "mydb" })
export class User {
  @Column("varchar", { name: "username", length: 16 })
  username: string;

  @Column("varchar", { name: "email", nullable: true, length: 255 })
  email: string | null;

  @Column("varchar", { name: "password", length: 32 })
  password: string;

  @Column("timestamp", {
    name: "create_time",
    nullable: true,
    default: () => "CURRENT_TIMESTAMP",
  })
  createTime: Date | null;

  @Column("varchar", { name: "cpf", nullable: true, length: 45 })
  cpf: string | null;

  @Column("varchar", { name: "phone", nullable: true, length: 45 })
  phone: string | null;

  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;
}
