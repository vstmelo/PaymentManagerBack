import ClientDTO from "../dto";
import clientSchema from "../mongoose/schemas/Client";
import IClientRepository from "../../repositories/IClient-repositoy";


class ClientRepository implements IClientRepository {

    private client: ClientDTO[] = [];

    constructor() {
        this.client = []
    };

    create = async ({ username, email }: ClientDTO): Promise<void> => {
        const newClient = new clientSchema();
        Object.assign(newClient, { username, email });
        this.client.push(newClient);
    };
    list = async (): Promise<ClientDTO[] | null> => {
        const all = this.client;
        if (!all) {

            return null;
        }
        return all;
    };

    findByEmail = async (email: string): Promise<ClientDTO | null> => {
        const client = this.client.find(client => client.email === email);

        if (!client) {
            return null
        }

        return client;
    }
}

export default ClientRepository; 