import { z } from 'zod';
import { commonSchema } from './common.model';

// event creation
export const createEventSchema = z.object({
  name: z.string().min(1, 'Event name is required'),
  type: z.string().min(1, 'Event type is required'),
  date: z.date(),
  duration: z.number().optional(),
  userId: z.string(),
});
export type CreateEventType = z.infer<typeof createEventSchema>;

// event
export const eventSchema = createEventSchema.merge(commonSchema);
export type EventType = z.infer<typeof eventSchema>;
