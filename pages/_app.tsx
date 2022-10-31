import type { ReactElement, ReactNode } from "react";
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

type AppPropsWithLayout = AppProps & {
  Component: NextPage & {
    getLayout?: (page: ReactElement) => ReactNode;
  };
};

const MyApp = ({ Component, pageProps }: AppPropsWithLayout) => {
  const queryClient = new QueryClient();

  return (
    <>
      {/* <SessionProvider session={pageProps.session} refetchInterval={5 * 60}> */}
      <Seo
        title="Yesbee"
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
      {/* </SessionProvider> */}
    </>
  );
};

export default MyApp;
