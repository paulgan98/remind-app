import { useState } from 'react';
import { trpc } from './utils/trpc';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { httpBatchLink } from '@trpc/client/links/httpBatchLink';
import IndexPage from './pages/IndexPage';
import './App.css';

function App() {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: Infinity,
            structuralSharing: false,
          },
        },
      })
  );
  const [trpcClient] = useState(() =>
    trpc.createClient({
      links: [
        httpBatchLink({
          url: 'http://localhost:3000/trpc',
          //   You can pass any HTTP headers you wish here
          //   async headers() {
          //     return {
          //       authorization: getAuthCookie(),
          //     };
          //   },
        }),
      ],
    })
  );

  return (
    <trpc.Provider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>
        <IndexPage />
      </QueryClientProvider>
    </trpc.Provider>
  );
}

export default App;
