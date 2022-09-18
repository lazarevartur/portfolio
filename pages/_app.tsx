import type { AppProps } from "next/app";
import { useRef } from "react";
import { ThemeProvider } from "next-themes";
import { config } from "@fortawesome/fontawesome-svg-core";
import { Hydrate, QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

import "@fortawesome/fontawesome-svg-core/styles.css";

import "../src/styles/globals.css";

import { APP_LINKS } from "../src/routes";
import MainLayout from "../src/components/Layouts/MainLayout";
import FullWidthLayout from "../src/components/Layouts/FullWidthLayout";

config.autoAddCss = false;

function MyApp({ Component, pageProps, router }: AppProps) {
  const queryClient = useRef(new QueryClient());

  const isPlayground = router.pathname.includes(APP_LINKS.playground);

  return (
    <QueryClientProvider client={queryClient.current}>
      <Hydrate state={pageProps.dehydratedState}>
        <ThemeProvider attribute="class">
          {isPlayground ? (
            <FullWidthLayout
              Component={Component}
              {...pageProps}
              router={router.route}
            />
          ) : (
            <MainLayout
              Component={Component}
              {...pageProps}
              router={router.route}
            />
          )}
        </ThemeProvider>
      </Hydrate>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

export default MyApp;
