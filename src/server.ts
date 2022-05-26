import 'dotenv/config';
import cors from 'cors';
import express, { Response, Request, NextFunction } from 'express'
import "./connection";
import { routes } from './routes';

const app = express();

app.use(cors());

app.use(express.json({ limit: '5000mb' }));
app.use(express.urlencoded({ limit: '5000mb' }));

app.use(routes);
app.use(
  (err: Error, request: Request, response: Response, next: NextFunction) => {
    if (err instanceof Error) {
      return response.status(400).json({
        error: err.message,
      });
    }

    return response.status(500).json({
      status: "error",
      message: "Internal Server Error",
    });
  }
);

app.listen(3000, () =>
  console.log('server running on port 3000'))
