import ClientSchame from "../../../../mongoose/schemas/Client";
import ClientDTO from "@modules/clients/infra/entities";
import IClientRepository from "../IClient-repositoy";

class ClientRespositoryInMemory implements IClientRepository {
    clients: ClientDTO[] = [];

    async findByEmail(email: string): Promise<ClientDTO | null> {
        const client = this.clients.find(client => client.email === email);

        if (!client) {
            return null;
        }

        return client;
    };

    async create({ username, email }: ClientDTO): Promise<void> {
        const client = new ClientSchame();
        Object.assign(client, { username, email });
        this.clients.push(client);
    };

    async list(): Promise<ClientDTO[] | null> {
        const all = this.clients;
        return all;
    }
}
export default ClientRespositoryInMemory;