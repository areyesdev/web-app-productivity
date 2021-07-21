import { Container } from "@areyesdev/components";

import "minireset.css";
import "@areyesdev/components/styles/globals.css";
import "@areyesdev/components/styles/tokens.css";

function MyApp({ Component, pageProps }) {
  return (
    <Container>
      <Component {...pageProps} />
    </Container>
  );
}

export default MyApp;
