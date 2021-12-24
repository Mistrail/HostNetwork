import {d, input, onInput} from "./misc/util.js";
import {mongoosePromise} from './servers/mongoConnection.js'
import {redisService} from './servers/redis.js'

(async () => {
    await redisService.connect();
    await mongoosePromise
})().then(() => {
    d('Welcome!')
    input();
    process.stdin.on('data', onInput)
})

