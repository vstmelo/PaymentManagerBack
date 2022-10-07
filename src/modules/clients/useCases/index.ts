import ClientRepository from "../repositories/client-repository";
import CreateController from "./create";
import CreateUseCase from "./create/create-useCase";
import ListController from "./list";
import ListUseCase from "./list/list-useCase";

const clientRepository = new ClientRepository();

const createUseCase = new CreateUseCase(clientRepository);
const createController = new CreateController(createUseCase);

const listUseCase = new ListUseCase(clientRepository);
const listController = new ListController(listUseCase);

export { createController, listController};