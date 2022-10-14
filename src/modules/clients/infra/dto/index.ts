interface ClientDTO {
    username: string;
    email: string;
    phone?: string;
    cep?: string;
    createAt?: Date;
    updateAt?: Date;
}
export default ClientDTO