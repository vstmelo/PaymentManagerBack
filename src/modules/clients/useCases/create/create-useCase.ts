import ClientDTO from "../../infra/dto"
import IClientRepository from "../../repositories/IClient-repositoy"
import { inject, injectable } from "tsyringe";
import { AppError } from "@errors/AppError";

@injectable()
class ClientUseCase {
    constructor(
        @inject('ClientRepository')
        private clientRepository: IClientRepository
    ) { }

    async execute({ username, email }: ClientDTO): Promise<string> {
        const clientAlreadyExists = await this.clientRepository.findByEmail(email)

        if (clientAlreadyExists) {
            throw new AppError("Client already exists!", 400)
        }

        await this.clientRepository.create({ username, email })
        return 'Client created';
    }
}

export default ClientUseCase;