import { BadRequest } from "../../../shared/errors/BadRequest";
import { NotFound } from "../../../shared/errors/NotFound";
import ClientDTO from "../infra/entities";
import clientSchema from "../../../mongoose/schemas/Client";
import IClientRepository from "./IClient-repositoy";


class ClientRepository implements IClientRepository {

    private client = new Array<ClientDTO>();

    constructor() {
        this.client = []
    };

    create = async ({ username, email }: ClientDTO) => {
        const newClient = new clientSchema();
        Object.assign(newClient, { username, email });
        this.client.push(newClient);
    };
    list(): ClientDTO | null {
        const all =  this.client.find(client => client);
        
        if (!all) {

            return null;
        }
        return all;
    };

    findByEmail(email: string): ClientDTO | null {
        const client = this.client.find(client => client.email === email);

        if (!client) {
            return null
        }

        return client;
    }
}

export default ClientRepository; 