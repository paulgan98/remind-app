import { TRPCError } from '@trpc/server';
import { prisma } from '../db/index';
import { CreateEventType, EventType } from '../db/models/event.model';

export async function getAllEvents(userId: string): Promise<EventType[]> {
  return prisma.event
    .findMany({
      where: { userId },
    })
    .catch(() => {
      throw new TRPCError({
        code: 'BAD_REQUEST',
        message: 'Error retrieving events for user',
      });
    });
}

export async function createEvent(data: CreateEventType) {
  return await prisma.event.create({ data });
}
