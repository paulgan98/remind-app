import { useState } from 'react';
import { trpc } from './utils/trpc';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { httpBatchLink } from '@trpc/client/links/httpBatchLink';
import IndexPage from './pages/IndexPage';
import Navbar from './components/Navbar';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from './theme';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

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
        <ThemeProvider theme={theme}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <Navbar />
            <IndexPage />
          </LocalizationProvider>
        </ThemeProvider>
      </QueryClientProvider>
    </trpc.Provider>
  );
}

export default App;
