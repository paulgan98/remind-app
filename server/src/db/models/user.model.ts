import { z } from 'zod';
import { commonSchema } from './common.model';

// user creation data
export const createUserSchema = z.object({
  firstName: z.string().min(1, 'First name is required'),
  lastName: z.string().min(1, 'Last name is required'),
  email: z.string().email('Invalid email address'),
  phoneNumber: z.number().nullish(),
});
export type CreateUserType = z.infer<typeof createUserSchema>;

// user data
export const userSchema = createUserSchema.merge(commonSchema);
export type UserType = z.infer<typeof userSchema>;
