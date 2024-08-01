import { createTRPCReact } from '@trpc/react-query';
import type { AppRouter } from '../../../server/src/server';

export const trpc = createTRPCReact<AppRouter>() ;

// import { createTRPCClient } from '@trpc/client';
// import type { AppRouter } from '../../../server/src/server'; // Adjust the path if necessary

// const trpc = createTRPCClient<AppRouter>({
//   url: 'http://localhost:3000/trpc', // Ensure this URL is correct
// });

// export { trpc };