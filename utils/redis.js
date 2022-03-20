const redis = require('redis')
const redisClient = redis.createClient(process.env.REDIS_POST, process.env.REDIS_HOST)

redisClient.on('connect', () => console.log('Redis client connected'))

module.exports = redisClient