import { MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { siteUrl } from '../lib/site';
import { theme } from '../styles/theme';

import '../styles/globals.css';

const defaultTitle = 'Oliver White - Resume';
const defaultDescription =
  'Resume and portfolio of Oliver White, a Technical Lead and full-stack software engineer with experience in React, TypeScript, Node.js, and cloud platforms.';
const siteName = 'Oliver White';
const ogImage = `${siteUrl}/images/author_.jpg`;

const Root = ({ Component, pageProps }: AppProps) => {
  const router = useRouter();
  const canonicalPath = router.asPath === '/' ? '' : router.asPath;
  const canonicalUrl = `${siteUrl}${canonicalPath}`;

  return (
    <MantineProvider theme={theme}>
      <Head>
        <title key="title">{defaultTitle}</title>
        <meta key="description" name="description" content={defaultDescription} />
        <link rel="canonical" href={canonicalUrl} />
        <meta key="og:title" property="og:title" content={defaultTitle} />
        <meta key="og:description" property="og:description" content={defaultDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:site_name" content={siteName} />
        <meta property="og:image" content={ogImage} />
        <meta name="twitter:card" content="summary" />
        <meta key="twitter:title" name="twitter:title" content={defaultTitle} />
        <meta key="twitter:description" name="twitter:description" content={defaultDescription} />
        <meta name="twitter:image" content={ogImage} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="layout">
        <Component {...pageProps} />
      </div>
    </MantineProvider>
  );
};

export default Root;
