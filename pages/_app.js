import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

import { Container } from "@areyesdev/components";

import "minireset.css";
import "@areyesdev/components/styles/globals.css";
import "@areyesdev/components/styles/tokens.css";

function MyApp({ Component, pageProps }) {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <Container>
        <Component {...pageProps} />
        <ReactQueryDevtools initialIsOpen={false} />
      </Container>
    </QueryClientProvider>
  );
}

export default MyApp;
