import { MantineProvider } from '@mantine/core';
import { AppProps } from 'next/app';
import { theme } from '../styles/theme';
import Head from 'next/head';
import { UserProvider as Auth0UserProvider } from '@auth0/nextjs-auth0/client';
import { TopBar } from '../components/TopBar/TopBar';
import UserProvider from '../components/UserContext/UserProvider';
import { Toaster } from 'react-hot-toast';

import '../styles/globals.css';

const Root = ({ Component, pageProps }: AppProps) => (
  <Auth0UserProvider>
    <UserProvider>
      <MantineProvider theme={{ ...theme }} withGlobalStyles withNormalizeCSS>
        <Toaster position="bottom-center" />
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
  </Auth0UserProvider>
);

export default Root;
