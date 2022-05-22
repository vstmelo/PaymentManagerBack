import express, { Response, Request, NextFunction } from 'express'

const app = express();

// midlewares
app.use(express.json({limit: '5000mb'}));
app.use(express.urlencoded({limit: '5000mb'}));

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

const PORT = process.env.PORT || 3335;
app.listen(PORT);
console.log('Server on port', PORT);