import { MantineProvider } from '@mantine/core';
import { AppProps } from 'next/app';
import { theme } from '../styles/theme';
import Head from 'next/head';
import { UserProvider } from '@auth0/nextjs-auth0/client';
import { TopBar } from '../components/TopBar/TopBar';

const Root = ({ Component, pageProps }: AppProps) => (
  <UserProvider>
    <MantineProvider theme={{ ...theme }} withGlobalStyles withNormalizeCSS>
      <Head>
        <title>Oliver White - Resume</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <TopBar />
      <div className="layout">
        <Component {...pageProps} />
      </div>
    </MantineProvider>
  </UserProvider>
);

export default Root;
