import Client from "../infra/entities";

interface IClientRepository {
    create({ username, email }: Client): void;
    findByEmail(email: string): Promise<Client | null>;
    list(): Promise<Client[] | null>;
}
export default IClientRepository;