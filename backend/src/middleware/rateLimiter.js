import ratelimit from "../config/upstash.js";

const rateLimiter = async (req, res, next) => {
  try {
    const { success } = await ratelimit.limit("my-rate-limit");

    if (!success) {
      return res
        .status(429)
        .json({ message: "Quá nhiều requests, làm ơn thử lại sau" });
    }

    next();
  } catch (error) {
    console.log("Rate limit lỗi", error);
    next(error);
  }
};

export default rateLimiter;
