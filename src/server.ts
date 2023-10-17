import cors from 'cors';
import 'dotenv/config';
import express, { json } from 'express';
import morgan from 'morgan';
import { createClient, RedisClientType } from 'redis';
import { connectMongo, connectRedis } from './DB/db';
// import router from './Routes/problemRoutes'; 
import router from './Router/problemRoutes'
const server = express();
const port = process.env.PORT ?? 5000;
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

server.listen(port, () => {
	console.log(`[server] : Server running at http://localhost:${port}`);
});
