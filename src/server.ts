import express, { json } from 'express';
import 'dotenv/config';
import cors from 'cors';
import morgan from 'morgan';


const server = express();
const port = process.env.PORT ?? 5000;

server.use(cors({
    origin: process.env.CORS_ORIGIN ?? "http://localhost:3000",
    credentials: true,
}));
server.use(json());
server.use(morgan("dev"));

server.listen(port, ()=>{
    console.log(`[server] : Server running at http://localhost:${port}`);
})