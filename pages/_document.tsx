/* eslint-disable @next/next/no-css-tags */
/* eslint-disable @next/next/no-title-in-document-head */
import { createGetInitialProps } from '@mantine/next';
import Document, { Head, Html, Main, NextScript } from 'next/document';
import Script from 'next/script';

const getInitialProps = createGetInitialProps();

export default class _Document extends Document {
    static getInitialProps = getInitialProps;

    render() {
        return (
            <Html>
                <Head>
                    <meta charSet="utf-8" />
                    <link rel="icon" href="/favicon.ico" />
                    <meta
                        name="viewport"
                        content="width=device-width, initial-scale=1"
                    />
                    <meta
                        name="description"
                        content="My resume and projects website"
                    />
                    <link rel="apple-touch-icon" href="/logo192.png" />
                    <title>Oliver White - Resume</title>
                    <link rel="stylesheet" href="/globals.css" />
                    <Script id="them-loader" strategy="beforeInteractive">
                        {`(function () {
                function setTheme(newTheme) {
                    document.documentElement.setAttribute(
                        'data-theme',
                        newTheme
                    );
                }
                var preferredTheme;
                try {
                    preferredTheme = JSON.parse(
                        localStorage.getItem('mantine-color-scheme')
                    );
                } catch (err) {}
                var darkQuery = window.matchMedia(
                    '(prefers-color-scheme: dark)'
                );
                setTheme(
                    preferredTheme || (darkQuery.matches ? 'dark' : 'light')
                );
            })();`}
                    </Script>
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}
