import "../styles/globals.css";
import type { ColorScheme } from "@mantine/core";
import { MantineProvider, ColorSchemeProvider } from "@mantine/core";
import { useLocalStorage } from "@mantine/hooks";
import { AppProps } from "next/app";
import Head from "next/head";
import { theme } from "../styles/theme";
import styled from "@emotion/styled";

const Layout = styled("div")`
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
    key: "mantine-color-scheme",
    defaultValue: "light",
  });

  const toggleColorScheme = (value?: ColorScheme) => {
    document.body.classList.remove("theme-dark");
    document.body.classList.remove("theme-light");
    setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"));
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
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </MantineProvider>
    </ColorSchemeProvider>
  );
};

export default Root;
