import ClientRespositoryInMemory from "@modules/clients/repositories/in-memory/clientRepositoryInMemory";
import { BadRequest } from "@shared/errors/BadRequest";
import CreateUseCase from "./create-useCase";

let sut: CreateUseCase;
let clientRepositoryInMemory: ClientRespositoryInMemory;
describe('Create client', () => {
    beforeEach(() => {
        clientRepositoryInMemory = new ClientRespositoryInMemory();
        sut = new CreateUseCase(clientRepositoryInMemory);
    });

    it('should be able to create a new client', async () => {
        const client = {
            username: 'teste',
            email: 'test@gmail.com'
        }

        await sut.execute(client);

        const clientCreated = await clientRepositoryInMemory.findByEmail(client.email);
        expect(clientCreated).toHaveProperty("id");
    });

    it('should not be able to create a new client', async () => {
        expect(async () => {
            const client = {
                username: 'testee',
                email: 'test@gmail.com'
            };
            await sut.execute(client);
            await sut.execute(client);
        }).rejects.toThrow(new BadRequest('Client already exists!'));
    });
});