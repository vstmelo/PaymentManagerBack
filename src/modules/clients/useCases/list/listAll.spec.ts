import ClientDTO from "@modules/clients/infra/dto";
import ClientRespositoryInMemory from "@modules/clients/repositories/in-memory/clientRepositoryInMemory";
import ListUseCase from "../list/list-useCase";

let sut: ListUseCase;
let clientRepositoryInMemory: ClientRespositoryInMemory;

let client : ClientDTO= {
    username: 'teste',
    email: 'test@gmail.com',
};

describe('List all clients', () => {
    beforeEach(() => {
        clientRepositoryInMemory = new ClientRespositoryInMemory();
        sut = new ListUseCase(clientRepositoryInMemory);
    });

    it('should be able to list all clients', async () => {
        await clientRepositoryInMemory.create(client);
        const clients = await sut.execute();
        expect(clients[0]).toHaveProperty('_id');
        expect(clients[0].username).toEqual(client.username);
        expect(clients[0].email).toEqual(client.email);
        expect(clients[0]).toHaveProperty('createAt');
        expect(clients).toHaveLength(1);
    });
});