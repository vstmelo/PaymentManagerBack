import { Request, Response } from "express";
import IClientRepository from "../../../../modules/clients/repositories/IClient-repositoy";

class ListUseCase {
    constructor(private clientRespository: IClientRepository) {
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