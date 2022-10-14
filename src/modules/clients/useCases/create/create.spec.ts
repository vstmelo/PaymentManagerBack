import ClientRespositoryInMemory from "@modules/clients/repositories/in-memory/clientRepositoryInMemory";
import { BadRequest } from "@shared/errors/BadRequest";
import CreateUseCase from "./create-useCase";

let sut: CreateUseCase;
let clientRepositoryInMemory: ClientRespositoryInMemory;

describe('Create client', () => {
    const clientRepositoryInMemory = new ClientRespositoryInMemory();
    const sut = new CreateUseCase(clientRepositoryInMemory);
    const client = {
        username: 'teste',
        email: 'test@gmail.com'
    }
    it('should be able to create a new client', async () => {

        expect(await sut.execute((client))).resolves
    });

    it('should not be able to create a new client', async () => {
        const client = {
            username: 'testee',
            email: 'test@gmail.com'
        };
        expect(sut.execute(client)).rejects.toThrow(new BadRequest('Client already exists!'));
    });
});