import cors from 'cors';
import 'dotenv/config';
import express, { json } from 'express';
import morgan from 'morgan';
import { createClient, RedisClientType } from 'redis';
import { connectMongo, connectRedis } from './DB/db';
import router from './Router/problemRoutes';
import swaggerUi from "swagger-ui-express";
import swaggerOutput from "./swagger_output.json";
const server = express();
const port = process.env.PORT ?? 5001;
const redisClient: RedisClientType = createClient();

server.use(
	cors({
		origin: process.env.CORS_ORIGIN ?? 'http://localhost:3000',
		credentials: true,
	}),
);
server.use(json());
server.use(morgan('dev'));

connectMongo();
connectRedis(redisClient);

server.use('/api', router)
server.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerOutput));

server.listen(port, () => {
	console.log(`[server] : Server running at http://localhost:${port}`);
});

export default server;