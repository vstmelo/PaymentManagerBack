import ClientRespositoryInMemory from "@modules/clients/repositories/in-memory/clientRepositoryInMemory";
import { BadRequest } from "@shared/errors/BadRequest";
import CreateUseCase from "./create-useCase";

let createClientUseCase: CreateUseCase;
let clientRepositoryInMemory: ClientRespositoryInMemory;

describe('Create client', () => {
    const clientRepositoryInMemory = new ClientRespositoryInMemory();
    const createClientUseCase = new CreateUseCase(clientRepositoryInMemory);
    const client = {
        username: 'teste',
        email: 'test@gmail.com'
    }
    it('should be able to create a new client', async () => {

        expect(await createClientUseCase.execute((client))).resolves
    });

    it('should not be able to create a new client', async () => {
        const client = {
            username: 'testee',
            email: 'test@gmail.com'
        };
        expect( createClientUseCase.execute(client)).rejects.toThrow(new BadRequest('Client already exists!'));
    });
});