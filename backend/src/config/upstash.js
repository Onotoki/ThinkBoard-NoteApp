import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";

import dotenv from "dotenv";

dotenv.config();

//Tạo 1 ratelimiter cho chép 10reqs/20s
const ratelimit = new Ratelimit({
  redis: Redis.fromEnv(),
  limiter: Ratelimit.slidingWindow(10, "20 s"),
});

export default ratelimit;
