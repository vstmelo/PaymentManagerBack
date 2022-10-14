import { Request, Response } from "express";
import IClientRepository from "@modules/clients/repositories/IClient-repositoy";
import { inject, injectable } from "tsyringe";
import IClientDTO from "@modules/clients/infra/dto";

@injectable()
class ListUseCase {
    constructor(
        @inject('ClientRepository')
        private clientRespository: IClientRepository
    ) {
    }

    async execute(): Promise<IClientDTO[]> {
        const list = await this.clientRespository.list();
        

        return list;
    }

}
export default ListUseCase; 