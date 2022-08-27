import '../styles/globals.css';
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
                <script
                    dangerouslySetInnerHTML={{
                        __html: `
              (function() {
                window.__onThemeChange = function() {};
                function setTheme(newTheme) {
                  window.__theme = newTheme;
                  preferredTheme = newTheme;
                  document.body.className = newTheme;
                  window.__onThemeChange(newTheme);
                }
                var preferredTheme;
                try {
                  preferredTheme = localStorage.getItem('theme');
                } catch (err) { }
                window.__setPreferredTheme = function(newTheme) {
                  setTheme(newTheme);
                  try {
                    localStorage.setItem('theme', newTheme);
                  } catch (err) {}
                }
                var darkQuery = window.matchMedia('(prefers-color-scheme: dark)');
                darkQuery.addListener(function(e) {
                  window.__setPreferredTheme(e.matches ? 'dark' : 'light')
                });
                setTheme(preferredTheme || (darkQuery.matches ? 'dark' : 'light'));
              })();
            `,
                    }}
                />
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </MantineProvider>
        </ColorSchemeProvider>
    );
};

export default Root;
