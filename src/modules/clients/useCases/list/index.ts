import { Request, Response } from "express";
import { container } from "tsyringe";
import { BadRequest } from "@errors/BadRequest";
import ListUseCase from "./list-useCase";

class ListController {
    async handle(req: Request, res: Response): Promise<Response> {
        const listUseCase = container.resolve(ListUseCase)
        const list = await listUseCase.execute();

        if (!list || list === null) {
            throw new BadRequest('Error to list clients');
        }
        console.log(list)
        return res.status(200).json(list);

    }
}
export default ListController;