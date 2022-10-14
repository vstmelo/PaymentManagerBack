import Client from "../infra/dto";

interface IClientRepository {
    create({ username, email }: Client): void;
    findByEmail(email: string): Promise<Client | null>;
    list(): Promise<Client[] | null>;
}
export default IClientRepository;