import 'dotenv/config';
import { ConnectOptions, connect } from 'mongoose';
import { RedisClientType } from 'redis';

const {DB_HOST, DB_PORT, DB_NAME} = process.env;

export async function connectMongo():Promise<void> {
    await connect(`mongodb://${DB_HOST}:${DB_PORT}/${DB_NAME}`,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
    } as ConnectOptions)
    .then(()=> console.log(`[server] : MongoDB Connected Successfully!`))
    .catch(err => console.error(`[server] : ERR MongoDB Connection Failed \n ${err}`));
}

export async function connectRedis(client: RedisClientType):Promise<void> {
    await client.connect().then(()=>console.log(`[server] : Redis Connections Attempt ...`));
}
