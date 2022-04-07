import express, { Express, Request, Response } from 'express';
import cors from 'cors';


const app: Express = express();
const port = 8080;

import path from 'path';

app.use(cors({origin: "*"}));

app.use(express.static(path.join('imgs')))

app.get('/getItems', (req: Request, res: Response) => {
  console.log("access");
  res.sendFile(path.join(__dirname, '../items.json'));
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});