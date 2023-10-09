import { MantineProvider } from '@mantine/core';
import { AppProps } from 'next/app';
import { theme } from '../styles/theme';
import Head from 'next/head';

const Root = ({ Component, pageProps }: AppProps) => (
  <MantineProvider theme={{ ...theme }} withGlobalStyles withNormalizeCSS>
    <Head>
      <title>Oliver White - Resume</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
    <div className="layout">
      <Component {...pageProps} />
    </div>
  </MantineProvider>
);

export default Root;
