import { Request, Response } from "express";
import IClientRepository from "../../../../modules/clients/repositories/IClient-repositoy";

class ListUseCase {
    constructor(private clientRespository: IClientRepository) {
    }

    async execute(req: Request, res: Response) {
        const list = await this.clientRespository.list();
        if (!list) {
            return null
        };
        return res.status(200).json(list);
    }

}
export default ListUseCase; 