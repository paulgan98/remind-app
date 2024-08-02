import {
  createTRPCReact,
  // type inferReactQueryProcedureOptions,
} from '@trpc/react-query';
// import type { inferRouterInputs, inferRouterOutputs } from '@trpc/server';
import type { AppRouter } from '../../../server/src/server';

// // infer the types for your router
// export type ReactQueryOptions = inferReactQueryProcedureOptions<AppRouter>;
// export type RouterInputs = inferRouterInputs<AppRouter>;
// export type RouterOutputs = inferRouterOutputs<AppRouter>;

export const trpc = createTRPCReact<AppRouter>();

// import { createTRPCClient } from '@trpc/client';
// import type { AppRouter } from '../../../server/src/server'; // Adjust the path if necessary

// const trpc = createTRPCClient<AppRouter>({
//   url: 'http://localhost:3000/trpc', // Ensure this URL is correct
// });

// export { trpc };
