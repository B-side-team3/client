import type { ReactElement, ReactNode } from "react";
import { useState, useEffect } from "react";
import type { NextPage } from "next";
import type { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { RecoilRoot } from "recoil";
import { ThemeProvider } from "styled-components";
import Layout from "@components/Layout/Layout";
import Seo from "@components/Seo";
import GlobalStyles from "src/styles/GlobalStyles";
import defaultTheme from "src/styles/Theme";
import "react-toastify/dist/ReactToastify.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

type AppPropsWithLayout = AppProps & {
  Component: NextPage & {
    getLayout?: (page: ReactElement) => ReactNode;
  };
};

const MyApp = ({ Component, pageProps }: AppPropsWithLayout) => {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <>
      <meta
        name="viewport"
        content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover"
      />
      <SessionProvider session={pageProps.session} refetchInterval={5 * 60}>
        <Seo
          title="Rolebit"
          name="viewport"
          content="initial-scale=1.0, width=device-width"
        />
        <QueryClientProvider client={queryClient}>
          <RecoilRoot>
            <GlobalStyles />
            <ReactQueryDevtools initialIsOpen={false} />
            <ThemeProvider theme={defaultTheme}>
              <Layout>
                <Component {...pageProps} />
              </Layout>
            </ThemeProvider>
          </RecoilRoot>
        </QueryClientProvider>
      </SessionProvider>
    </>
  );
};

export default MyApp;
