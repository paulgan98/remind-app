import { publicProcedure, router } from '../trpc';
import { z } from 'zod';
import { createEvent, getAllEvents } from '../controllers/event.controller';
import { createEventSchema, EventType } from '../db/models/event.model';

// const events: Event[] = [
//   {
//     name: "Garfield's Birthday",
//     type: 'birthday',
//     date: new Date(Date.now()),
//   },
//   {
//     name: "Blanco's Birthday",
//     type: 'birthday',
//     date: new Date(Date.now()),
//   },
// ];

export const eventRouter = router({
  createEvent: publicProcedure
    .input(createEventSchema)
    .mutation(async ({ input }): Promise<EventType> => {
      return createEvent({
        ...input,
        notes: input.notes || null,
      });
    }),
  getEventsByUserId: publicProcedure
    .input(z.object({ userId: z.string() }))
    .query(async ({ input }): Promise<EventType[]> => {
      if (!input) return Promise.resolve([]);

      return getAllEvents(input.userId);
    }),
});
