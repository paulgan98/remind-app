import { z } from 'zod';

export const commonSchema = z.object({
  id: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
});
