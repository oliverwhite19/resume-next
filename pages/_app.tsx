import { ColorScheme, Global } from '@mantine/core';
import { MantineProvider, ColorSchemeProvider } from '@mantine/core';
import { useLocalStorage } from '@mantine/hooks';
import { AppProps } from 'next/app';
import styled from '@emotion/styled';
import { theme } from '../styles/theme';
import { useEffect } from 'react';

const Layout = styled('div')`
    position: relative;
    max-width: 960px;
    width: 100%;
    min-height: 100vh;
    margin: 0 auto;
    padding: 2rem 1.3125rem 100px 1.3125rem;
    @media (max-width: 1000px) : {
        padding: 52px 1.3125rem 100px 1.3125rem;
    }
`;

const Root = ({ Component, pageProps }: AppProps) => {
    let darkTheme = false;

    useEffect(function onFirstMount() {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        darkTheme = window.matchMedia('(prefers-color-scheme: dark)').matches;
    }, []);

    const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
        key: 'mantine-color-scheme',
        defaultValue: darkTheme ? 'dark' : 'light',
    });

    const toggleColorScheme = (value?: ColorScheme) => {
        const newTheme = value || (colorScheme === 'dark' ? 'light' : 'dark');
        document.documentElement.setAttribute('data-theme', newTheme);
        setColorScheme(newTheme);
    };

    return (
        <ColorSchemeProvider
            colorScheme={colorScheme}
            toggleColorScheme={toggleColorScheme}
        >
            <MantineProvider
                theme={{ ...{ colorScheme }, ...theme }}
                withGlobalStyles
                withNormalizeCSS
            >
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </MantineProvider>
        </ColorSchemeProvider>
    );
};

export default Root;
