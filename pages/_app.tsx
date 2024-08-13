import { MantineProvider } from '@mantine/core';
import { AppProps } from 'next/app';
import { theme } from '../styles/theme';
import Head from 'next/head';
import { Auth0Provider } from '@auth0/auth0-react';
import { loadEnvConfig } from '@next/env';

const Root = ({ Component, pageProps }: AppProps) => (
  <MantineProvider theme={{ ...theme }} withGlobalStyles withNormalizeCSS>
    <Auth0Provider
      domain={process.env.NEXT_PUBLIC_AUTH_DOMAIN ?? ''}
      clientId={process.env.NEXT_PUBLIC_AUTH_CLIENT_ID ?? ''}
      authorizationParams={{
        redirect_uri: process.env.NEXT_PUBLIC_REDIRECT_URL ?? '',
      }}
    >
      <Head>
        <title>Oliver White - Resume</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="layout">
        <Component {...pageProps} />
      </div>
    </Auth0Provider>
  </MantineProvider>
);

export default Root;
