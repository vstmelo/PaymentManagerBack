import Client from "../infra/entities";

 interface IClientRepository {
    create({username, email}:Client): void;
    findByEmail(email: string): Client | null;
    list(): Client[] | null;
}
export default IClientRepository;