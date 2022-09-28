import { ClientRepository } from "../../../../repositories"
import ICreateClient from '../requests/ClientDTO'


export class ClientService {
    async createClient({ username, email, phone, cep }: ICreateClient): Promise<string> {
       
        const existClient = await ClientRepository.findBy({ email })

        if (existClient) {
            throw new Error('Client already exist')
        }
        const client = ClientRepository.create({
            username, 
            email, 
            phone, 
            cep
        });
        await ClientRepository.save(client);
        
        return 'Client created successfully'
    };

    async getClient (username:string): Promise<Object>{

        const client = await ClientRepository.findBy({username});
        
        if(!client){

            throw new Error('Client was not find');
        }
        
        return client;
    };

    async editClient ({id, email, username, phone, cep}:ICreateClient): Promise<string>{

        const client = await ClientRepository.findOneBy({email});
       
        if(!client){
            throw new Error('Client not found.')
        } 
        
        await ClientRepository.save(client);

        return 'Edit saved';
    };
    
}