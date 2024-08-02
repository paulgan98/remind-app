import { TRPCError } from '@trpc/server';
import { prisma } from '../db/index';
import { CreateUserType, UserType } from '../db/models/user.model';

export async function getUserByEmail(email: string): Promise<UserType | null> {
  return prisma.user.findUnique({ where: { email } }).catch(() => {
    throw new TRPCError({
      code: 'BAD_REQUEST',
      message: 'Error retrieving user data',
    });
  });
}

export async function addUser(userData: CreateUserType): Promise<UserType> {
  return await prisma.user.create({ data: userData }).catch(() => {
    throw new TRPCError({
      code: 'BAD_REQUEST',
      message: 'Error creating user',
    });
  });
}
