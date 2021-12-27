import 'macro-css';
import '../styles/globals.scss';
import type { AppProps } from 'next/app';
import { theme } from '../theme';
import { MuiThemeProvider } from '@material-ui/core';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MuiThemeProvider theme={theme}>
      <Component {...pageProps} />
    </MuiThemeProvider>
  );
}

export default MyApp;
