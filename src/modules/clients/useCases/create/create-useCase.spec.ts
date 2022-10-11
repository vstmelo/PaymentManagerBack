import ClientRespositoryInMemory from "../../repositories/in-memory/clientRepositoryInMemory";
import CreateUseCase from "./create-useCase";

let createClientUseCase: CreateUseCase;
let clientRepositoryInMemory: ClientRespositoryInMemory;

describe('Create client', () => {
    beforeEach(() => {
        const clientRepositoryInMemory = new ClientRespositoryInMemory();
        const createClientUseCase = new CreateUseCase(clientRepositoryInMemory);
    });

    it('should be able to create a new client', async () => {
        const client = {
            username: 'teste de criação',
            email: 'teste@gmail.com'
        }
        await createClientUseCase.execute({
            username: client.username,
            email: client.email
        });

        const clientCreated = await clientRepositoryInMemory.findByEmail(client.email);

        expect(clientCreated).toHaveProperty('id');

    });
});