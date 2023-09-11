import { MantineProvider } from '@mantine/core';
import { AppProps } from 'next/app';
import styled from '@emotion/styled';
import { theme } from '../styles/theme';

const Layout = styled('div')`
    position: relative;
    max-width: 960px;
    width: 100%;
    min-height: 100vh;
    margin: 0 auto;
    padding: 2rem 1.3125rem 1rem 1.3125rem;
    @media (max-width: 1000px) : {
        padding: 52px 1.3125rem 1rem 1.3125rem;
    }
`;

const Root = ({ Component, pageProps }: AppProps) => (
    <MantineProvider theme={{ ...theme }} withGlobalStyles withNormalizeCSS>
        <Layout>
            <Component {...pageProps} />
        </Layout>
    </MantineProvider>
);

export default Root;
