import { Context } from 'hono';

export interface Env {
  // If you set another name in wrangler.toml as the value for 'binding',
  // replace "DB" with the variable name you defined.
  DB: D1Database;
}

export const INSERTEMAIL = async (c: Context) => {
  const { email } = (await c.req.json()) as { email: string };
  const { results } = await c.env.DB.prepare(`insert into emails (email, reference) values (?, ?)`).bind(email, 'ai wpa').run();
  return results;
};
