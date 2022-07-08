import { ThemeProvider } from "styled-components";
import GlobalCSS from "../styles/globals.css";
import Layout from "../layouts/layout";
import theme from "@blog/theme/theme";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalCSS />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;
