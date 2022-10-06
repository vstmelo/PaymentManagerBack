import { AppError } from './AppError'
export class BadRequest extends AppError {
  constructor (message? : string) {
    super(message || 'BadRequest', 400)
  }
}
