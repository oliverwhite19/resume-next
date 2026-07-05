import { ColorSchemeScript } from '@mantine/core';
import Document, { Head, Html, Main, NextScript } from 'next/document';

export default class _Document extends Document {
  render() {
    return (
      <Html>
        <Head>
          <meta charSet="utf-8" />
          <link rel="icon" href="/favicon.ico" />
          <link rel="apple-touch-icon" href="/logo192.png" />
          <ColorSchemeScript defaultColorScheme="auto" />
          <script
            dangerouslySetInnerHTML={{
              __html: `
                try {
                  var scheme = document.documentElement.getAttribute('data-mantine-color-scheme');
                  if (!scheme) {
                    scheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
                  }
                  document.documentElement.style.backgroundColor = scheme === 'dark' ? '#242424' : '#ffffff';
                } catch (e) {}
              `,
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
