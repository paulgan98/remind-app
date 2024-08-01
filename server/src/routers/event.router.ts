import { publicProcedure, router } from '../trpc';
import { z } from 'zod';
import { getAllEvents } from '../controllers/event.controller';
import { EventType } from '../db/models/event.model';

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
  getEventsByUserId: publicProcedure
    .input(z.object({ userId: z.string() }))
    .query(
      async ({ input }): Promise<EventType[]> => {
        if (!input) return Promise.resolve([]);

        return getAllEvents(input.userId);
      }
    ),
});
