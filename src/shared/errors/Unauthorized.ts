import { AppError } from './AppError'
export class Unauthorized extends AppError {
  constructor (message? : string) {
    super(message || 'Unauthorized', 401)
  }
}
