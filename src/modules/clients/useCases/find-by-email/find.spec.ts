import ClientRespositoryInMemory from "@modules/clients/repositories/in-memory/clientRepositoryInMemory";
import FindUseCase from "./find-useCase";

let sut : FindUseCase;
let clientRepositoryInMemory : ClientRespositoryInMemory;

let client = {
    username: 'teste',
    email: 'test@gmail.com',
}; 

describe('Find client by email', () => {
    beforeEach(() => {
        clientRepositoryInMemory = new ClientRespositoryInMemory();
        sut = new FindUseCase(clientRepositoryInMemory);
    });
    
    it('should be able to find a client by email', async () => {
        await clientRepositoryInMemory.create(client);
        const clientFound = await sut.execute(client.email);
        expect(clientFound).toHaveProperty('_id');
        // expect(clientFound?.email).toEqual(client.email);
        // expect(clientFound).toHaveProperty('createAt');
    });
});