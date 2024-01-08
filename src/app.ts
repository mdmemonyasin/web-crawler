import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import { core } from './core';

dotenv.config();

const app: Express = express();

app.use(express.json());

app.get('/', (req: Request, res: Response) => {
  res.send('Web Crawler!');
});

app.get('/api', async (req: Request, res: Response) => {
  await core();
  return res.send('Done');
});

app.listen(process.env.PORT, () =>
  console.log(`Server running on port ${process.env.PORT}`)
);