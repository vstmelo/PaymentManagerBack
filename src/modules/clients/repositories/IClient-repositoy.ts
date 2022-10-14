import IClient from "../infra/dto";

interface IClientRepository {
    create({ username, email }: IClient): void;
    findByEmail(email: string): Promise<IClient | null>;
    list(): Promise<IClient[]>;
}
export default IClientRepository;