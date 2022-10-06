import { AppError } from './AppError'
export class NotFound extends AppError {
  constructor (message? : string) {
    super(message || 'Not Found', 404)
  }
}
