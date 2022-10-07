import ClientDTO from "../../infra/entities"
import IClientRepository from "../../repositories/IClient-repositoy"

class CreateUseCase {
    constructor(
        private clientRepository: IClientRepository
    ) { }

    async execute({ username, email }: ClientDTO) {
        const clientAlreadyExists = await this.clientRepository.findByEmail(email)

        if (clientAlreadyExists) {
            throw new Error("Client already exists!")
        }

        await this.clientRepository.create({ username, email })
    }
}

export default CreateUseCase;