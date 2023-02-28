import { REDIS_HOST, REDIS_PASSWORD, REDIS_PORT } from '@lib/config';
import Redis from 'ioredis';

export const redis = new Redis({
    host: REDIS_HOST,
    port: REDIS_PORT,
    password: REDIS_PASSWORD,
});

redis.on('error', error => {
    console.error('Redis error:', error);
});
