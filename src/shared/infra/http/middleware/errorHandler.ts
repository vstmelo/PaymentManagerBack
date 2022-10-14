import { NextFunction, Request, Response } from 'express'
import { AppError } from '../../../errors/AppError'

export async function ErrorHandler(err: Error, _: Request, res: Response, next: NextFunction) {
    try {
        res.status((err as AppError).statusCode || 500).send({
            message: !(err as AppError).statusCode ? 'Unknown error' : err.message,
            error: {
                name: err.name,
                stack: err.stack,
                message: err.message
            }
        })
    } catch {
        res.status(500).send({
            message: 'Unknown error',
            error: {
                name: err.name,
                stack: err.stack,
                message: err.message
            }
        })
    } finally {
        next()
    }
}
