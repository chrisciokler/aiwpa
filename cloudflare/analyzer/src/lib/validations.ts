import { z } from 'zod';
import { zValidator } from '@hono/zod-validator';

export const siteAnalyzerValidator = zValidator(
  'json',
  z.object({
    org: z.string(),
    key: z.string(),
    url: z.string(),
    model: z.string(),
    system: z.string()
  })
);
