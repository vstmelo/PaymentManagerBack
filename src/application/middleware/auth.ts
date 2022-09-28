import { Request, Response, NextFunction } from 'express';
import * as jwt from 'jsonwebtoken';
import secret from '../../secret/';

// forma abstrata de falar para o compilador que o objeto tera propriedades especificas

interface TokenPayLoad {
    id: string,
    iat: number,
    exp: number
}
export default function auth(req: Request, res: Response, next: NextFunction) {
    const { authorization } = req.headers;

    if (!authorization) {
        throw new Error("Unauthorized");
    }

    const token = authorization.replace('Bearer', '').trim();

    const data = jwt.verify(token, secret);

    const { id } = data as TokenPayLoad;
    
    return next()
}