import '../styles/globals.css';
import { ColorScheme, Global } from '@mantine/core';
import { MantineProvider, ColorSchemeProvider } from '@mantine/core';
import { useLocalStorage } from '@mantine/hooks';
import { AppProps } from 'next/app';
import styled from '@emotion/styled';
import { theme } from '../styles/theme';

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
    const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
        key: 'mantine-color-scheme',
        defaultValue: 'light',
    });

    const toggleColorScheme = (value?: ColorScheme) => {
        setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));
    };
    return (
        <ColorSchemeProvider
            colorScheme={colorScheme}
            toggleColorScheme={toggleColorScheme}
        >
            <MantineProvider
                theme={{ ...{ colorScheme }, ...theme }}
                withNormalizeCSS
            >
                <Global
                    styles={(theme) => ({
                        '*, *::before, *::after': {
                            boxSizing: 'border-box',
                            margin: 0,
                            padding: 0,
                        },

                        body: {
                            ...theme.fn.fontStyles(),
                            backgroundColor:
                                theme.colorScheme === 'dark'
                                    ? theme.colors.dark[7]
                                    : theme.white,
                            color:
                                theme.colorScheme === 'dark'
                                    ? theme.colors.dark[0]
                                    : theme.black,
                            lineHeight: theme.lineHeight,
                        },
                        header: {
                            backgroundColor:
                                theme.colorScheme === 'dark'
                                    ? theme.colors.dark[7]
                                    : theme.white,
                        },
                    })}
                />
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </MantineProvider>
        </ColorSchemeProvider>
    );
};

export default Root;
