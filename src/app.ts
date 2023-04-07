import express, { Application, NextFunction, Request, Response } from 'express';

const app: Application = express();
const PORT: number = 5555;
const pgMsg: string = `Hello, welcome to your express application! \n Your Server is running!`
const logMsg: string = `Your express server is running on http://localhost:${PORT}`
// Sends message at '/' root directory in browser on speecified port number.
app.get('/', (req: Request, res: Response, next: NextFunction) => {
  res.send(pgMsg);
});

app.listen(PORT, () => console.log(logMsg));
