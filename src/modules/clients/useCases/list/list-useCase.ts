import { Request, Response } from "express";
import IClientRepository from "../../../../modules/clients/repositories/IClient-repositoy";
import { inject, injectable } from "tsyringe";

@injectable()
class ListUseCase {
    constructor(
        @inject('ClientRepository')
        private clientRespository: IClientRepository
    ) {
    }

    async execute(req: Request, res: Response): Promise<any | null> {
        const list = await this.clientRespository.list();
        if (!list) {
            return null
        };
        return list;
    }

}
export default ListUseCase; 