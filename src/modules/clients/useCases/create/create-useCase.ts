import ClientDTO from "../../infra/entities"
import IClientRepository from "../../repositories/IClient-repositoy"
import { inject, injectable } from "tsyringe";

@injectable()
class CreateUseCase {
    constructor(
        @inject('ClientRepository')
        private clientRepository: IClientRepository
    ) { }

    async execute({ username, email }: ClientDTO) : Promise<string> {
        const clientAlreadyExists = await this.clientRepository.findByEmail(email)

        if (clientAlreadyExists) {
            throw new Error("Client already exists!")
        }

        await this.clientRepository.create({ username, email })
        return 'Client created';
    }
}

export default CreateUseCase;