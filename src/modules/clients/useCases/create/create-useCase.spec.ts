import { AppError } from "@errors/AppError";
import ClientRespositoryInMemory from "@modules/clients/repositories/in-memory/clientRepositoryInMemory";
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
            username: 'teste',
            email: 'test@gmail.com'
        }
        await createClientUseCase.execute({
            username: client.username,
            email: client.email
        });

        const clientCreated = await clientRepositoryInMemory.findByEmail(client.email);

        expect(clientCreated).toHaveProperty('id');

    });

    it('should not be able to create a new client', async () => {
        expect(async () => {
            const client = {
                username: 'teste',
                email: 'test@gmail.com'
            }
            await createClientUseCase.execute({
                username: client.username,
                email: client.email
            });
            await createClientUseCase.execute({
                username: client.username,
                email: client.email
            });
        }).rejects.toBeInstanceOf(AppError);
    });
});