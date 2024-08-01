import { addUser, getUserByEmail } from '../controllers/user.controller';
import { publicProcedure, router } from '../trpc';
import { z } from 'zod';
import {
  createUserSchema,
  CreateUserType,
  UserType,
} from '../db/models/user.model';
import { TRPCError } from '@trpc/server';

export const userRouter = router({
  createUser: publicProcedure
    .input(createUserSchema)
    .mutation(async ({ input }: { input: CreateUserType }) => {
      return addUser(input)
        .then((data) => data)
        .catch(() => {
          throw new TRPCError({
            code: 'BAD_REQUEST',
            message: 'Error creating user',
          });
        });
    }),
  getUserByEmail: publicProcedure
    .input(z.object({ email: z.string().email() }))
    .query(
      async ({ input }): Promise<UserType | null> => {
        return getUserByEmail(input.email);
      }
    ),
});
