/* eslint-disable import/first */
import * as dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import { HTTP_PORT } from '@lib/config';
import errorMiddleware from '@middlewares/error.middleware';
import router from './routes';
import { redis } from '@lib/redis';
import prisma from '@lib/prisma';

if (!HTTP_PORT) {
  process.exit(1);
}

const httpServer = express();

httpServer.use(helmet());
httpServer.use(cors());
httpServer.use(express.json());
httpServer.use('/', router);
httpServer.use(errorMiddleware);

httpServer.listen(HTTP_PORT, () => {
  console.log(`Started server on port ${HTTP_PORT}`);
});

redis.connect(() => {
  console.log('Server connected to Redis');
});

prisma.$connect().then(() => {
  console.log('Server connected to Database');
});
