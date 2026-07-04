import { MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';
import { AppProps } from 'next/app';
import { theme } from '../styles/theme';
import Head from 'next/head';

import '../styles/globals.css';

const Root = ({ Component, pageProps }: AppProps) => (
  <MantineProvider theme={theme}>
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
