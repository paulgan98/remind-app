import { publicProcedure, router } from '../trpc';

export const userRouter = router({
  hello: publicProcedure.query(() => {
    return {
      message: 'hello world',
    };
  }),
});
