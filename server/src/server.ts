import express from 'express';
import cors from 'cors';
import * as trpcExpress from '@trpc/server/adapters/express';
import { userRouter } from './routers/userRouter';
import { mergeRouters } from './trpc';
import { inferAsyncReturnType } from '@trpc/server';

const PORT = 3000;

const appRouter = mergeRouters(userRouter);

// created for each request
const createContext = ({
  req,
  res,
}: trpcExpress.CreateExpressContextOptions) => ({}); // no context
type Context = inferAsyncReturnType<typeof createContext>;

const app = express();
app.use(cors({ origin: 'http://localhost:5173' }));
app.use(
  '/trpc',
  trpcExpress.createExpressMiddleware({ router: appRouter, createContext })
);

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});

export type AppRouter = typeof appRouter;
