import {container} from 'tsyringe';
import ClientRepository from '@modules/clients/infra/repositories/client-repository';
import IClientRepository from '@modules/clients/repositories/IClient-repositoy';


container.registerSingleton<IClientRepository>('ClientRepository', ClientRepository);