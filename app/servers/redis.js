import {createClient} from 'redis';
import {e, d} from "../misc/util.js";

let isThrownError = false;
export const redisService = createClient();

redisService.on('error', (error) => {
    if(!isThrownError){
        isThrownError = true;
        e(error.message);
    }
})
redisService.on('ready', (x) => {
    isThrownError = false;
    d("Redis connection established")
});
