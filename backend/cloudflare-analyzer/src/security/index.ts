import { Context, Next } from 'hono';
import { Redis } from '@upstash/redis/cloudflare';
import { MultiRegionRatelimit } from '@upstash/ratelimit';

const cache = new Map();
export const ratelimit = async (c: Context, next: Next) => {
  console.log('Start rate limiting');
  const url = c.env.REDIS_URL as string;
  const token = c.env.REDIS_TOKEN as string;

  try {
    const ratelimit = new MultiRegionRatelimit({
      redis: [
        new Redis({
          url,
          token
        })
      ],
      limiter: MultiRegionRatelimit.fixedWindow(5, '5 s'),
      ephemeralCache: cache
    });

    const userIP: string = c.req.headers.get('CF-Connecting-IP') || 'none';

    const data = await ratelimit.limit(userIP);

    if (data.success) await next();

    c.status(429);
    return c.json({ error: 'You are rate limited, try again later.', data: null });
  } catch (error) {
    return c.json({ error, data: null });
  }
};
