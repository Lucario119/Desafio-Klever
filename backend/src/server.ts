import cors from 'cors';
import express from 'express';
import './database';
import { routes } from './routes';
import { errors } from 'celebrate';

const app = express();
app.use(cors());
app.use(express.json());
app.use(routes);
app.use(errors());
app.listen(3333);
