import { Hono } from 'hono';
import { cors } from 'hono/cors';
import { poweredBy } from 'hono/powered-by';
import { hello, siteAnalyzer, subscribe, version } from './lib/fns';
import { siteAnalyzerValidator, subscriptionValidator } from 'lib/validations';
import { ratelimit } from './security';

export const app = new Hono();

app.use('*', poweredBy());
app.use(
  '*',
  cors({
    origin: ['https://www.aiwebpageanalyzer.com', 'https://aiwebpageanalyzer.com', 'https://aiwpa.vercel.app', 'http://localhost:3000']
  })
);
app.use('*', ratelimit);

app.get('/', hello);
app.get('/api/v1', version);
app.post('/api/v1/subscribe', subscriptionValidator, subscribe);
app.post('/api/v1/siteanalyzer', siteAnalyzerValidator, siteAnalyzer);

export default app;
