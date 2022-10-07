import { Request, Response } from "express";
import { BadRequest } from "../../../../shared/errors/BadRequest";
import listUseCase from "./list-useCase";

class ListController {
    constructor(private listUseCase: listUseCase) { }
    async handle(req: Request, res: Response): Promise<Response> {
        const list = await this.listUseCase.execute(req, res);
        if (!list || list === null) {
            throw new BadRequest('Error to list clients');
        }
        return res.status(200).json(list);

    }
}
export default ListController;